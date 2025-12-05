# Campus Tales Episode Workflow

Episodes use the naming convention **epNNN_slug** (for example: `ep001_first_day`, `ep002_library_mishap`). Keep the three-digit number padded so the archive sorts cleanly.

## Folder purposes
- `episodes/`: working files, scripts, thumbnails, and layered artwork for in-progress episodes.
- `exports/web/`: final PNG strips that the website references.
- `exports/social/`: platform-specific crops or resized versions (`instagram/`, `shorts/`).
- `exports/archive/`: any additional exports you want to preserve.
- `assets/`: reusable production assets such as character sheets, backgrounds, props, panels, or lettering elements.

## Quick start
1. Create a new episode workspace: `./scripts/new_episode.sh 001 first_day` → creates `episodes/ep001_first_day/` with starter files.
2. Draw and iterate inside the episode folder (scripts, thumbnails, layered files).
3. Export the final web strip to `exports/web/ep001_first_day_strip.png`.
4. Add or update the comic metadata in `index.html` (or `data/comics.json` for a future JSON-driven workflow).
