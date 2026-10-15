const organization = 'sheetdelver';
const apiBase = `https://api.github.com/orgs/${organization}`;
const source = document.querySelector('#stats-source');
const numberFormat = new Intl.NumberFormat('en-US');
const releaseRepos = [
  { id: 'core', name: 'sheetdelver' },
  { id: 'shadowdark', name: 'sd-shadowdark' },
  { id: 'morkborg', name: 'sd-morkborg' },
  { id: 'dnd5e', name: 'sd-dnd5e' },
];

const themeButtons = document.querySelectorAll('[data-theme-choice]');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
  });
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f5f8f8' : '#090d12';
}
setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
// Follow the system color scheme until the visitor picks a theme.
const systemLight = matchMedia('(prefers-color-scheme: light)');
systemLight.addEventListener('change', (event) => {
  let stored = null;
  try { stored = localStorage.getItem('sheetdelver-theme'); } catch { /* Storage may be disabled. */ }
  if (stored !== 'light' && stored !== 'dark') setTheme(event.matches ? 'light' : 'dark');
});
themeButtons.forEach((button) => button.addEventListener('click', () => {
  const theme = button.dataset.themeChoice;
  setTheme(theme);
  try { localStorage.setItem('sheetdelver-theme', theme); } catch { /* Storage may be disabled. */ }
}));

// Close the compact menu after navigating or on Escape.
const navMenu = document.querySelector('.nav-menu');
if (navMenu) {
  navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { navMenu.open = false; }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.open) {
      navMenu.open = false;
      navMenu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (navMenu.open && !navMenu.contains(event.target)) navMenu.open = false;
  });
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2026-03-10',
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);
  return response.json();
}

// Cache GitHub responses for the browser session to stay well under the
// unauthenticated rate limit (60 requests per hour per IP).
const cacheKey = 'sheetdelver-github-v1';
const cacheTtl = 15 * 60 * 1000;

function readCache() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey));
    if (cached && Date.now() - cached.time < cacheTtl && Array.isArray(cached.results)) return cached.results;
  } catch { /* Storage may be disabled or hold stale data. */ }
  return null;
}

function writeCache(results) {
  try {
    sessionStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), results }));
  } catch { /* Storage may be disabled. */ }
}

async function fetchStats() {
  const cached = readCache();
  if (cached) return cached;
  const settled = await Promise.allSettled([
    getJson(apiBase),
    ...releaseRepos.map(({ name }) => getJson(`https://api.github.com/repos/${organization}/${name}/releases/latest`)),
  ]);
  const results = settled.map((result) => (result.status === 'fulfilled' ? { status: 'fulfilled', value: result.value } : { status: 'rejected' }));
  // Only cache complete data so partial failures retry on the next view.
  if (results.every((result) => result.status === 'fulfilled')) writeCache(results);
  return results;
}

async function loadStats() {
  const [orgResult, ...releaseResults] = await fetchStats();

  let loadedReleases = 0;
  releaseResults.forEach((result, index) => {
    if (result.status !== 'fulfilled' || typeof result.value.tag_name !== 'string') return;
    const { id, name } = releaseRepos[index];
    const release = result.value;
    const link = document.querySelector(`#release-${id}`);
    link.querySelector('[data-release-version]').textContent = release.tag_name;
    link.href = `https://github.com/${organization}/${name}/releases/tag/${encodeURIComponent(release.tag_name)}`;
    const published = release.published_at && new Date(release.published_at);
    if (published && !Number.isNaN(published.valueOf())) {
      const date = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(published);
      link.querySelector('[data-release-date]').textContent = `Released ${date} ↗`;
    }
    loadedReleases += 1;
  });

  const repoCount = orgResult.status === 'fulfilled' ? Number(orgResult.value.public_repos) : NaN;
  if (Number.isFinite(repoCount)) {
    document.querySelector('#stat-repos').textContent = numberFormat.format(repoCount);
  }
  if (loadedReleases === 0 && !Number.isFinite(repoCount)) {
    source.innerHTML = 'GitHub data is temporarily unavailable. <a href="https://github.com/sheetdelver">View the organization ↗</a>';
    return;
  }
  const partial = loadedReleases < releaseRepos.length ? ' · Some releases unavailable' : '';
  source.textContent = `Published releases from GitHub${partial}`;
}

loadStats();

// Short product clips: play muted loops only while visible, and keep the
// poster still for people who prefer reduced motion.
const clips = document.querySelectorAll('video.shot-video');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (clips.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting && !reduceMotion.matches) target.play().catch(() => {});
      else target.pause();
    }
  }, { threshold: 0.4 });
  clips.forEach((clip) => observer.observe(clip));
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) clips.forEach((clip) => clip.pause());
  });
}
