# Product Shots

Captures of a running SheetDelver, taken from a local test instance with
staged, disposable worlds. Nothing here is generated or retouched beyond
cropping, resizing and format conversion.

Common to all sets: Foundry VTT 14.367, Chromium headless at device scale
factor 2 unless noted, dark app theme. Character portraits, monster icons
and item icons are Foundry's core defaults and no game-system artwork
appears, except the community monster portraits in S21 and S22 (see
`assets/CREDITS.md`).
Each still ships as AVIF, WebP and a progressive JPEG fallback.

## Shadowdark — 2026-11-08 (Core 0.22.3)

- SheetDelver Core 0.22.3, Shadowdark module 1.0.0 on the Foundry system
  shadowdark 4.0.6
- World "Beneath the Ashen Keep" with four level 1 characters made with the
  SheetDelver character generator, and a dwarf priest made with the 1.0
  Character Creator, levelled to 2 and rested on camera. World background
  set to a public-domain Doré engraving (Inferno, Plate 2) so no system
  artwork appears
- The staged monsters' token art (system and community tokens) was replaced
  with Foundry core icons before capturing
- One character per player: the test player owns only Prim, and the other
  characters belong to disposable players (dashboard and combat shots)
- A tokenless Combat Manager encounter ("Gatehouse Ambush", 7 participants)
  run by an Assistant GM; it was set inactive for the non-combat shots so
  the combat bar stays out of them
- S21/S22 show monster portraits from the Shadowdark Community Tokens module
  (mostly AI-generated, used with its creators' consent). The browser was
  filtered to chaotic monsters of levels 1–4 so neither the Aboleth (artist
  permission required) nor the system's cowled token appears
- The Treasure & Items tool needs a Gamemaster: the test GM was promoted for
  that capture only, and the item was previewed but not saved
- Admin capture used the default module host allowlist and the dark admin
  theme
- Desktop 1440×900, phone 390×844 unless noted

| File | Slot | Source view |
|---|---|---|
| `s01-dashboard-desktop` | S01 | Player dashboard (one character), 1440×1060, cropped below the connection header |
| `s02-sheet-phone` | S02 | Shadowdark single-page sheet, phone |
| `s03-shadowdark-desktop` | S03 | Shadowdark single-page sheet, desktop |
| `s04-shadowdark-manage-phone` | S04 | Shadowdark tabbed view, Spells tab, phone (the priest) |
| `s08-chat` | S08 | Game chat over a sheet, desktop, 4:3 crop; rolls attributed to the character |
| `s09-shared-image` | S09 | GM-shared image with its caption over a sheet, desktop, 4:3 crop around the panel; public-domain Doré engraving (see `assets/CREDITS.md`) |
| `s10-combat` | S10 | Player combat bar with the turn order open over a sheet during the Combat Manager encounter (Prim's turn, round 1; only the player's own character shows stats), 1200×900 viewport |
| `s11-gm-combat` | S11 | Combat Manager: encounter controls, participant picker and initiative order (HP/AC stat display), desktop, full 16:10 frame |
| `s12-gm-modules` | S12 | Admin → Modules → Available with the Shadowdark 1.0.0 release review open, desktop 16:10 |
| `s15-sd-creator` | S15 | Character Creator step 4 (languages, spell choices by level and tier) with the step bar, 1440×1400, natural ratio 1200×907 |
| `s16-sd-levelup-phone` | S16 | Level-up dialog, level 1 → 2 (HP roll, spell to learn), phone |
| `s17-sd-rest-phone` | S17 | Rest dialog (ration, HP and a lost spell recovering), phone |
| `s18-sd-treasure` | S18 | GM Treasure & Items, Weapons tab (longsword base, +1), 1440×1300 frame, 16:10 crop ending above the weapon feature |
| `s19-sd-card-weapon-phone` | S19 | Prim's longsword card (stats, Unequip, Stash, Share to chat, Attack), phone |
| `s20-sd-card-spell-phone` | S20 | Tamsin's Cure Wounds spell card (Share to chat, Cast, Mark lost), phone, opened by the Assistant GM |
| `s21-sd-monsters` | S21 | GM Monster Stats browser, Monsters source, levels 1–4, chaotic, desktop 16:10 |
| `s22-sd-monster-card` | S22 | Bugbear stat card over the browser, desktop 16:10 |
| `s23-sd-tabbed-desktop` | S23 | Shadowdark tabbed view, Inventory tab (Prim), desktop full 16:10 frame |

## Shadowdark — 2026-10-13 (Core 0.17.0)

Same world and characters, Shadowdark module 0.9.2. Kept because the dice
presentation did not change.

| File | Slot | Source view |
|---|---|---|
| `s07-dice` (`.webm`, `.mp4`, `-poster.webp`) | S07 | 3D dice from the Dice Tray (d20, d8, 2d6), 4 s loop, 800×600 crop at 1× |

## Mörk Borg — 2026-11-08 (Core 0.22.3)

- SheetDelver Core 0.22.3, Mörk Borg module 1.0.1 on the Foundry system
  morkborg 6.0.1
- One scvm made with the SheetDelver SCVM Factory. The system's class
  portrait and weapon icon (art used by the system with permission) were
  replaced with Foundry's core default icons before capturing.

| File | Slot | Source view |
|---|---|---|
| `s05-morkborg-phone` | S05 | Mörk Borg sheet, phone (414×896, same aspect as 390×844), first screen with the section bar |
| `s06-morkborg-desktop` | S06 | Mörk Borg sheet, desktop, character card and initiative, 16:10 crop |

## D&D 5e (experimental) — 2026-10-15 (Core 0.18.0)

- SheetDelver Core 0.18.0, D&D 5e module 0.4.1 on the Foundry system
  dnd5e 6.0.2; pixel-identical under Core 0.18.1, not recaptured since
- One level 1 fighter built from SRD 5.1 compendium content (CC BY 4.0)
  with Foundry's default portrait; the world's premium-module background
  and the system's licensed hero tokens were not used
- Desktop 1440×960

| File | Slot | Source view |
|---|---|---|
| `s14-dnd5e` | S14 | D&D 5e sheet, desktop, 4:3 crop |

## Social card — 2026-11-08

`assets/og-card.jpg` (1200×630, the `og:image`) composites `s01-dashboard-desktop`
and `s02-sheet-phone` with the site's wordmark, headline and colour tokens.
It was laid out in HTML/CSS and rendered with headless Chromium at 2×, then
downscaled; nothing in it is generated artwork.
