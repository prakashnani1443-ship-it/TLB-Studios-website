# /public/images

Central image structure for the TLB Studios site. Every path referenced by
`src/lib/site-config.ts` lives here, via the `projectImage(folder, id, label)`
helper. Drop a same-named `.png` in the right folder to replace any image —
the placeholder box disappears automatically once a matching file exists.

**Status: all 5 projects now use real images** (previously placeholders).

```
images/
  projects/
    tlb-os/              cover.png, main.png, mobile.png, workflow.png, landing.png
    hostel-operations/   cover.png, main.png, mobile.png, workflow.png
    content-automation/  cover.png, main.png, mobile.png, workflow.png
    alex-salon/          cover.png, main.png, mobile.png, workflow.png, content.png, before-after.png
    dental-clinic/       cover.png, main.png, mobile.png, workflow.png
  generated-concepts/    AI-generated concept visuals only — see that folder's README
  brand/                 favicon set, Open Graph image (see that folder's README)
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
