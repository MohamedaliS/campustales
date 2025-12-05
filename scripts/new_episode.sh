#!/usr/bin/env bash
set -euo pipefail

show_usage() {
    echo "Usage: $0 <episode_number> <slug>"
    echo "Example: $0 001 first_day"
}

if [[ $# -ne 2 ]]; then
    show_usage
    exit 1
fi

number="$1"
slug="$2"

if [[ ! "$number" =~ ^[0-9]+$ ]]; then
    echo "Error: episode_number must be numeric (e.g., 001)." >&2
    exit 1
fi

if [[ -z "$slug" ]]; then
    echo "Error: slug is required (e.g., first_day)." >&2
    exit 1
fi

episode_id="ep${number}_${slug}"
episode_dir="episodes/${episode_id}"

if [[ -d "$episode_dir" ]]; then
    echo "Error: episode directory '$episode_dir' already exists. Aborting to avoid overwriting." >&2
    exit 1
fi

mkdir -p "$episode_dir"

script_file="${episode_dir}/${episode_id}_script.md"
thumbnails_file="${episode_dir}/${episode_id}_thumbnails.png"
layout_file="${episode_dir}/${episode_id}_layout.txt"

cat <<'LAYOUT' > "$layout_file"
- beats
- roughs
- inking
- lettering
- export to exports/web
LAYOUT

cat <<'SCRIPT' > "$script_file"
# Episode script

- Title: 
- Date: 
- Notes:
  - 
  - 
  - 
SCRIPT

touch "$thumbnails_file"

echo "New episode workspace created at: $episode_dir"
echo "Files created:"
echo "- $(basename "$script_file")"
echo "- $(basename "$thumbnails_file")"
echo "- $(basename "$layout_file")"
