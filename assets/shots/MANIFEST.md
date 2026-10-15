# Product Shots

Captures of a running SheetDelver, taken from a local test instance with
staged, disposable worlds. Nothing here is generated or retouched beyond
cropping, resizing and format conversion.

Common to all sets: Foundry VTT 14.367, Chromium headless at device scale
factor 2 unless noted, dark app theme. Character portraits and item icons
are Foundry's core defaults; no game-system artwork appears. Each still
ships as AVIF, WebP and a progressive JPEG fallback.

## Shadowdark — 2026-10-15 (Core 0.18.1)

- SheetDelver Core 0.18.1, Shadowdark module 0.9.4 on the Foundry system
  shadowdark 4.0.6
- World "Beneath the Ashen Keep" with four level 1 characters made with the
  SheetDelver character generator. World background set to a public-domain
  Doré engraving (Inferno, Plate 2) so no system artwork appears
- A tokenless Combat Manager encounter ("Gatehouse Ambush", 7 participants)
  run by an Assistant GM; it was set inactive for the non-combat shots so
  the combat bar stays out of them
- Admin capture used the default module host allowlist
- S11 was captured under Core 0.18.0 and Shadowdark 0.9.3; it is
  pixel-identical under 0.18.1
- Desktop 1440×900, phone 390×844 unless noted

| File | Slot | Source view |
|---|---|---|
| `s01-dashboard-desktop` | S01 | Player dashboard, 1440×1060, cropped below the connection header |
| `s02-sheet-phone` | S02 | Shadowdark simplified sheet, phone |
| `s03-shadowdark-desktop` | S03 | Shadowdark simplified sheet, desktop |
| `s04-shadowdark-manage-phone` | S04 | Shadowdark management view, Spells tab, phone |
| `s09-shared-image` | S09 | GM-shared image with its caption over a sheet, desktop, 4:3 crop around the panel; public-domain Doré engraving (see `assets/CREDITS.md`) |
| `s10-combat` | S10 | Player combat bar with the turn order open over a sheet during the Combat Manager encounter (Prim's turn, round 1), 1200×900 viewport |
| `s11-gm-combat` | S11 | Combat Manager: encounter controls, player participation and initiative order (HP/AC stat display), desktop, 16:10 crop |
| `s12-gm-modules` | S12 | Admin → Modules → Available with the Shadowdark release review open, dark admin theme, desktop 16:10 |

## Shadowdark — 2026-10-13 (Core 0.17.0)

Same world and characters, Shadowdark module 0.9.2. Kept because the views
did not change in 0.18.x.

| File | Slot | Source view |
|---|---|---|
| `s07-dice` (`.webm`, `.mp4`, `-poster.webp`) | S07 | 3D dice from the Dice Tray (d20, d8, 2d6), 4 s loop, 800×600 crop at 1× |
| `s08-chat` | S08 | Game chat over a sheet, desktop, 4:3 crop |

## Mörk Borg — 2026-10-15 (Core 0.18.1)

- SheetDelver Core 0.18.1, Mörk Borg module 0.8.3 on the Foundry system
  morkborg 6.0.1
- One scvm made with the SheetDelver SCVM Factory. The system's class
  portrait and weapon icon (art used by the system with permission) were
  replaced with Foundry's core default icons before capturing.

| File | Slot | Source view |
|---|---|---|
| `s05-morkborg-phone` | S05 | Mörk Borg sheet, phone, first screen with the section bar |
| `s06-morkborg-desktop` | S06 | Mörk Borg sheet, desktop, character card and initiative, 16:10 crop |

## D&D 5e (experimental) — 2026-10-15 (Core 0.18.0)

- SheetDelver Core 0.18.0, D&D 5e module 0.4.1 on the Foundry system
  dnd5e 6.0.2; pixel-identical under Core 0.18.1
- One level 1 fighter built from SRD 5.1 compendium content (CC BY 4.0)
  with Foundry's default portrait; the world's premium-module background
  and the system's licensed hero tokens were not used
- Desktop 1440×960

| File | Slot | Source view |
|---|---|---|
| `s14-dnd5e` | S14 | D&D 5e sheet, desktop, 4:3 crop |

## Social card — 2026-10-15

`assets/og-card.jpg` (1200×630, the `og:image`) composites `s01-dashboard-desktop`
and `s02-sheet-phone` with the site's wordmark, headline and colour tokens.
It was laid out in HTML/CSS and rendered with headless Chromium at 2×, then
downscaled; nothing in it is generated artwork.
