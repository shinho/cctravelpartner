# Project architecture

## Images

- Store images served directly by the site in `public/assets/images/`.
- Group images by purpose in subdirectories. Opportunity images belong in `public/assets/images/oportunities/`.
- Reference files in Vue with root-relative public URLs, for example: `/assets/images/oportunities/zen-kyoto.png`.
- Keep generated or project-owned images in the repository instead of relying on externally hosted URLs, which may become unavailable or restrict access.
- Use descriptive, lowercase, hyphen-separated filenames and provide meaningful `alt` text for content images.

Vite serves files in `public/` from the site root. A file at `public/assets/images/oportunities/zen-kyoto.png` is therefore available at `/assets/images/oportunities/zen-kyoto.png`.
