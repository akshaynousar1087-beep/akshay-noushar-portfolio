# Akshay Noushar — Portfolio Production Master

This folder is the clean production baseline reconstructed from the GLASS_GALLERY_FINAL build.

## Locked assets
- `assets/previews/video-preview.jpg` — approved video preview artwork
- `assets/previews/gallery-preview.jpg` — approved gallery/image preview artwork

## Preserved
- Existing portfolio sections, selected-work destinations, contact information, typography, layout and archive treatment.
- The enquiry form remains front-end only until the Supabase integration stage.

## Recovery changes
- Rebuilt the Selected Work HTML as valid, balanced card markup.
- Removed malformed duplicate closing tags around Gallery and Archive cards.
- Replaced the experimental video/gallery preview internals with the approved preview artwork.
- Kept Archive as its own treatment.

## Next production stages
1. Browser QA: desktop + mobile.
2. Establish GitHub repository as canonical source.
3. Add Supabase schema, RLS and enquiry submission.
4. Deploy production from GitHub.
