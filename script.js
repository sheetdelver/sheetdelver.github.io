const organization = 'sheetdelver';
const apiBase = `https://api.github.com/orgs/${organization}`;
const source = document.querySelector('#stats-source');
const numberFormat = new Intl.NumberFormat('en-US');

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
  try {
    const org = await getJson(apiBase);
    const repoCount = Number(org.public_repos);
    if (!Number.isFinite(repoCount)) throw new Error('Missing repository count');

    // Public repository lists are paginated at 100. Fetch every page so the
    // star total and latest push never silently omit repositories.
    const repos = [];
    for (let page = 1; page <= Math.ceil(repoCount / 100); page += 1) {
      const batch = await getJson(`${apiBase}/repos?type=public&per_page=100&page=${page}`);
      if (!Array.isArray(batch)) throw new Error('Invalid repository list');
      repos.push(...batch);
    }
    if (repos.length < repoCount) throw new Error('Incomplete repository list');

    const stars = repos.reduce((total, repo) => total + (Number(repo.stargazers_count) || 0), 0);
    const latestPush = repos.map((repo) => repo.pushed_at).filter(Boolean).sort().at(-1);
    document.querySelector('#stat-repos').textContent = numberFormat.format(repoCount);
    document.querySelector('#stat-stars').textContent = numberFormat.format(stars);
    document.querySelector('#stat-updated').textContent = latestPush
      ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(latestPush))
      : '—';
    source.textContent = 'Public GitHub data · refreshed when you open this page';
  } catch {
    source.innerHTML = 'GitHub data is temporarily unavailable. <a href="https://github.com/sheetdelver">View the organization ↗</a>';
  }
}

loadStats();
