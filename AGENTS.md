# SheetDelver Website Working Agreement

This repository is the static site for sheetdelver.com
(`sheetdelver/sheetdelver.github.io`), served by GitHub Pages from `main`.
`CLAUDE.md` points here. Application guidance for SheetDelver itself lives in
the application repository's own `AGENTS.md`; follow it whenever work touches
a running SheetDelver, its modules or Foundry.

## Start and Handoff

- Read `.resources/handoff.md` first when present, then any active plan it
  names (for example `planning/site-refresh-plan.md`). Both directories are
  git-ignored local context. The handoff is a snapshot, not a substitute for
  current user instructions or for re-verifying branch, worktree and process
  state.
- Keep exactly one current handoff at that path. Update it at the end of a
  work session and at context/model switches. Record verified facts, user
  reports, pending decisions and unknowns separately. Replace stale content
  rather than appending a transcript.
- `.resources/` is git-ignored local context. Tracked files must not depend on
  it, and must not contain credentials, hostnames of private instances or
  local session details.

## Publishing Awareness

- Everything tracked on `main` is publicly served (`.nojekyll` disables
  Jekyll filtering). That includes this file and `docs/`. Keep tracked
  content public-safe. Planning material stays in the ignored `planning/`.
- Record user-visible site changes in `docs/CHANGELOG.md`: terse feature
  bullets, usually 3–5 words, grouped under a dated heading, not commit
  transcripts.
- `CNAME`, `robots.txt`, `sitemap.xml` and canonical/OG URLs are production
  settings. Change them only when the task calls for it.

## Git and Remote Operations

- Default to read-only Git. Ask for scoped approval before creating,
  switching, deleting or renaming branches; staging; committing; stashing;
  merging; fetching/pulling; or tagging. Approval for one step does not carry
  over to the next.
- The user pushes, opens PRs and squash-merges. Never push, change repository
  or Pages settings, or make other remote writes without explicit approval
  for that operation.
- Feature and redesign work belongs on an approved branch, not `main`.
  Preserve unrelated changes; no resets, history rewriting or deletions
  without explicit approval.
- Phase work is split into checkpoints: one commit each, independently
  verifiable and revertible with `git revert`.

## Site Conventions

- No build step: hand-written `index.html`, CSS and `script.js`. Keep it that
  way unless the user approves otherwise. Do not add dependencies to
  `package.json` for testing or tooling.
- Preview locally with `npm run dev` (`dev.mjs`, `127.0.0.1:4173`, live
  reload). Its SSE reload stream keeps the network busy, so browser
  automation should wait for `load`, not `networkidle`. Stop any server you
  start, and record retained ones in the handoff.
- Keep the brand system: the SheetDelver spelling, color tokens on `:root`
  with dark and light themes, Space Grotesk / Inter / DM Mono, and the lime
  accent. Theme changes must work in both themes and at phone width
  (390px) without horizontal scroll.
- Accessibility floor for new or changed work: text contrast ≥ 4.5:1, link
  and button targets ≥ 24px, keyboard reachable, `prefers-reduced-motion`
  respected, meaningful alt text.
- Images: optimized web formats with fallbacks, intrinsic `width`/`height`,
  and no crops through headings or stats. Record each capture set's
  provenance (SheetDelver/module versions, date) beside the assets.
- Motion: stills by default. Short clips only where the user approved them
  (currently the dice loop): muted, looping WebM/MP4 with a poster still,
  lazy loaded, and the poster alone under `prefers-reduced-motion`. No GIFs.

## Image Sourcing

- **Do not generate image assets.** No AI-generated, synthesized or
  fabricated artwork or screenshots. Product imagery comes only from real
  SheetDelver captures (see below). Cropping, resizing, format conversion
  and compositing real captures are allowed; CSS-drawn frames and layout
  chrome are code, not assets.
- Additional imagery and placeholders use **Creative Commons** images:
  prefer CC0/public domain, then CC BY, then CC BY-SA. Do not use NC/ND
  licenses or unclear sources. Record title, author, source URL, license
  and any modifications in `assets/CREDITS.md`, and show attribution on the
  page whenever the license requires it.
- Placeholders for pending captures must be visibly marked as pending (for
  example `data-shot="S07"` with a caption) so they are never mistaken for
  product screenshots and can be swapped mechanically.

## Verification

- Use Playwright or headless Chromium only from an isolated location outside
  this repository's dependencies. Capture/check scripts live in the ignored
  `.resources/tools/`; raw and baseline screenshots stay in ignored
  `.resources/` paths, never in tracked files.
- Before reporting a visual change as done, check desktop (1440), tablet
  (820) and phone (390) in both themes, with no console errors and no
  horizontal overflow. Report anything unchecked as unchecked.

## Screenshots from a Running SheetDelver

- Never capture from production or the root production-connected settings.
  Use only a local SheetDelver on an isolated data directory and a Foundry
  instance the user has explicitly approved. Use disposable worlds and a
  temporary user that the user creates and removes.
- Do not start or stop SheetDelver/Foundry services, switch worlds or
  modules, or mutate actors, users or permissions unless the user has
  approved that specific action for the capture session.
- Captures must not show hostnames, user names, tokens or credentials.
  Stage the environment so nothing needs redacting, rather than painting
  over images. Never write credentials into files or reports.
- Append SheetDelver defects or rough edges seen while staging or capturing
  to the git-ignored `observed-issues.md` at the repository root, so the user
  can address them later. Do not fix the application from this repository.

## Shell

- The user's interactive shell is often Fish. Prefer short single-line
  commands; label shell-specific syntax and avoid Bash loops/heredocs in
  instructions meant for the user.
