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
themeButtons.forEach((button) => button.addEventListener('click', () => {
  const theme = button.dataset.themeChoice;
  setTheme(theme);
  try { localStorage.setItem('sheetdelver-theme', theme); } catch { /* Storage may be disabled. */ }
}));

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

async function loadStats() {
  const [orgResult, ...releaseResults] = await Promise.allSettled([
    getJson(apiBase),
    ...releaseRepos.map(({ name }) => getJson(`https://api.github.com/repos/${organization}/${name}/releases/latest`)),
  ]);

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
