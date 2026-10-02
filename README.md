# SheetDelver website

Standalone static website for the SheetDelver project, maintained in
`sheetdelver/web`. No SheetDelver application server or Foundry connection is
involved. `index.html` is the main layout; `concept-cards.html` preserves the
earlier card layout for comparison.

## Preview

From this directory, run `python3 -m http.server 8765 --bind 127.0.0.1` and open
<http://127.0.0.1:8765/>. Any static file server works. The page has no build
step or npm dependencies.

The main page frames SheetDelver around in-person play and includes a short FAQ
about player devices, Foundry setup, and the tools beside each sheet. It also
has a manual Getting Started section based on the root README:
clone/install, run the setup wizard, supply Foundry connection values, and run
the development server. It links to the full setup and configuration guides.

## GitHub numbers

The browser requests public data from GitHub's organization and organization
repository REST endpoints. The main layout shows the public repository count
and latest repository push date in UTC, below the setup section. The comparison
layout also shows the sum of stars on public organization repositories. If
GitHub is unavailable or the unauthenticated API limit is reached, the values
remain blank and the page links to the organization.

For a public launch, generating a cached `stats.json` during deployment would
make the numbers more reliable and avoid spending each visitor's unauthenticated
API allowance. The page needs no GitHub token in the browser.

## Content and assets

The copy follows the current root README and architecture docs. The dashboard,
Shadowdark sheet, and Mörk Borg sheet are copies of existing project assets.
D&D 5e is labeled experimental; the page does not imply that planned systems
are available. Both layouts default to dark and share a persistent light/dark
switch in the header.

The only images in the prototype are actual SheetDelver screenshots. Decorative
illustrations were removed. If the site later needs third-party imagery, use
Creative Commons licensed material with the required attribution.

The site uses relative paths and can be served from a project path or custom
domain. To publish with GitHub Pages, select the repository's `main` branch and
root folder in **Settings → Pages**. The default project URL would be
`https://sheetdelver.github.io/web/`. Before publishing, confirm the preferred
copy, screenshot recency, and whether to use a scheduled stats snapshot.
