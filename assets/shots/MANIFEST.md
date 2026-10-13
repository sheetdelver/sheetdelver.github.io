# Product Shots

Captures of a running SheetDelver, taken from a local test instance with
staged, disposable worlds. Nothing here is generated or retouched beyond
cropping, resizing and format conversion.

## Capture set 1 — 2026-10-13

- SheetDelver Core 0.17.0
- Shadowdark module 0.9.2 on the Foundry system shadowdark 4.0.6
- Foundry VTT 14.367
- World "Beneath the Ashen Keep" with four level 1 characters made with the
  SheetDelver character generator; default portraits. World background set
  to a public-domain Doré engraving (Inferno, Plate 2) so no system artwork
  appears; S01 recaptured with it on 2026-10-13
- Admin captures used a temporary install whose catalog host allowlist
  included sheetdelver.com (the official catalog redirects there)
- Chromium headless at device scale factor 2; desktop 1440×900, phone
  390×844; dark app theme

| File | Slot | Source view |
|---|---|---|
| `s01-dashboard-desktop` | S01 | Player dashboard, cropped below the connection header |
| `s02-sheet-phone` | S02 | Shadowdark simplified sheet, phone |
| `s03-shadowdark-desktop` | S03 | Shadowdark simplified sheet, desktop |
| `s04-shadowdark-manage-phone` | S04 | Shadowdark management view, Spells tab, phone |
| `s07-dice` (`.webm`, `.mp4`, `-poster.webp`) | S07 | 3D dice from the Dice Tray (d20, d8, 2d6), 4 s loop, 800×600 crop at 1× |
| `s08-chat` | S08 | Game chat over a sheet, desktop, 4:3 crop |
| `s09-shared-image` | S09 | GM-shared image over a sheet, desktop, 4:3 crop; public-domain Doré engraving (see `assets/CREDITS.md`) |
| `s11-gm-combat` | S11 | Combat Manager with a tokenless encounter (7 participants, HP/AC stat display), desktop 16:10 |
| `s12-gm-modules` | S12 | Admin → Modules → Available with the Shadowdark release review open, dark admin theme, desktop 16:10 |
| `s10-combat` | S10 | Player combat tracker over a sheet during a Foundry combat (Prim's turn, round 1), desktop, 4:3 crop |

Each still ships as AVIF, WebP and a progressive JPEG fallback.

## Capture set 2 — 2026-10-13 (Mörk Borg)

- SheetDelver Core 0.17.0
- Mörk Borg module 0.8 on the Foundry system morkborg 6.0.1
- Foundry VTT 14.367
- One scvm made with the SheetDelver SCVM Factory. The system's class
  portrait and weapon icon (art used by the system with permission) were
  replaced with Foundry's core default icons before capturing.
- Chromium headless at device scale factor 2; desktop 1440×900, phone
  390×844

| File | Slot | Source view |
|---|---|---|
| `s05-morkborg-phone` | S05 | Mörk Borg sheet, phone, first screen |
| `s06-morkborg-desktop` | S06 | Mörk Borg sheet, desktop, character card and initiative, 16:10 crop |

## Capture set 3 — 2026-10-13 (D&D 5e, experimental)

- SheetDelver Core 0.17.0, D&D 5e module (experimental) from `main`
- Foundry system dnd5e 6.0.2, Foundry VTT 14.367
- One level 1 fighter built from SRD 5.1 compendium content (CC BY 4.0)
  with Foundry's default portrait; the world's premium-module background
  and the system's licensed hero tokens were not used
- Chromium headless at device scale factor 2; desktop 1440×960

| File | Slot | Source view |
|---|---|---|
| `s14-dnd5e` | S14 | D&D 5e sheet, desktop, 4:3 crop |

## Social card — 2026-10-13

`assets/og-card.jpg` (1200×630, the `og:image`) composites `s01-dashboard-desktop`
and `s02-sheet-phone` with the site's wordmark, headline and colour tokens.
It was laid out in HTML/CSS and rendered with headless Chromium at 2×, then
downscaled; nothing in it is generated artwork.
