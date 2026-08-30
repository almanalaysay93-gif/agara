# Agara Drive Media Integration

## Research-Informed Product Education

- [x] Identify authoritative sources for matcha ingredients, caffeine, L-theanine, catechins, and evidence limits.
- [x] Identify authoritative sources for coffee ingredients, caffeine, polyphenols, and evidence limits.
- [x] Separate Agara-specific label claims from general ingredient research; do not invent a proprietary formula. (See `research/agara_deep_research.md` & `research/ingredient_evidence_cards.md`)
- [x] Add a cited ingredients-and-benefits section to the landing page with cautious wording and a clear disclaimer. (`#ingredients`, 12 ingredients, star evidence ratings, FDA disclaimer, `client/src/data/ingredients.ts`)
- [x] Verify the updated content, responsive layout, accessibility, and production build. (tsc clean, vite build green, 148 KB gz JS)
- [x] Save one updated checkpoint before delivery.


## Media pipeline (this round)

- [x] Drop the /manus-storage proxy dependency; serve media from `client/public/media/`.
- [x] Convert 5.7 MB of PNGs to WebP (528 KB total) and generate real video poster frames.
- [x] Ship the research dashboard at `client/public/research.html`, linked from the footer and the ingredients section.


## Cropping Fix

- [x] Reproduce the crop at the reported narrow viewport and identify every affected image/video wrapper.
- [x] Switch supplied editorial creatives to full-frame containment or an intentional media-specific aspect ratio.
- [x] Preserve the hero’s product emphasis while keeping the complete horizontal artwork visible where requested.
- [x] Re-test desktop and mobile layouts, including video poster frames and controls.
- [x] Run type/build checks and save one updated checkpoint.


- [x] Open the supplied Google Drive folder and confirm access.
- [x] Inventory all images and videos, including dimensions, formats, and likely use cases.
- [x] Preserve only the strongest assets and map them to hero, ritual, product, and closing moments.
- [x] Copy approved media into `/home/ubuntu/webdev-static-assets/` and upload for webdev use.
- [x] Update the landing page with image/video modules and accessible fallbacks.
- [x] Verify desktop and mobile crops, loading behavior, motion, and reduced-motion behavior.
- [x] Run type/build checks and save one updated checkpoint before delivery.
