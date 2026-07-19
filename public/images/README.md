# /public/images

Central image structure for the TLB Studios site. Every path referenced by
`src/lib/site-config.ts` lives here. Drop a real file in the right folder,
then set the matching `src` field in `site-config.ts` — the placeholder box
disappears automatically once `src` is set.

```
images/
  projects/
    tlb-os/              cover.jpg, main.jpg, mobile.jpg, workflow.jpg, landing.jpg
    hostel-operations/   cover.jpg, main.jpg, mobile.jpg, workflow.jpg
    content-automation/  cover.jpg, main.jpg, mobile.jpg, workflow.jpg
    alex-salon/          cover.jpg, main.jpg, mobile.jpg, workflow.jpg, content.jpg, before-after.jpg
    dental-clinic/       cover.jpg, main.jpg, mobile.jpg, workflow.jpg
  generated-concepts/    AI-generated concept visuals only — see that folder's README
  brand/                 logo, favicon source, Open Graph image
```

Every project folder supports the same four core slots plus an open-ended
gallery:

- **cover** — used as the project card thumbnail on the homepage Work section
- **main** — the "Dashboard Preview" / main screen shown on the project page
- **mobile** — the "Mobile Preview" shown on the project page
- **workflow** — the "System Workflow" diagram or screen
- **gallery** — any additional supporting images (varies per project, see
  each project's entry in `site-config.ts`)

Each project's own README lists its exact expected filenames.
