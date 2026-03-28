# English Translation Workspace

This folder is the working area for the English edition of **Alice Courtyard**.

## Current outputs

- `story_workbook.json`
  Ordered export of every translatable story field.
- `story_workbook.tsv`
  Spreadsheet-friendly version of the same workbook.

## Runtime overlay

- `../translations/en.js`
  Browser-side localization overlay loaded by `index.html?lang=en`.

## Current English sample coverage

- `prologue`
- `touchless-street`
- `a017-arrival`
- `a017-relive`
- `white-flowers-and-undefined`

## Recommended workflow

1. Keep the original Chinese chapter files unchanged.
2. Add new English overrides to `../translations/en.js`.
3. Use `node ./scripts/export_translation_workbook.mjs` whenever chapter text changes.
4. Extend translation chapter by chapter in story order.
5. Keep terminology aligned with `../EN_TRANSLATION_PREP.md`.

## Notes

- The overlay system supports story-level, chapter-level, and line-level overrides.
- `story-data.js` now assigns stable `lineId` values in the format `chapter-id:001`.
- Secret author-layer material from `WORLD4.txt` should not be written directly into reader-facing text.
