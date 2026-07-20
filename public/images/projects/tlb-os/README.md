# tlb-os project images

Referenced from the `tlb-os` entry in `src/lib/site-config.ts` via `projectImage("tlb-os", <id>, <label>)`.

| Slot | File | Config field |
|---|---|---|
| Cover (homepage card) | `cover.png` | `images.cover` |
| Dashboard Preview | `main.png` | `images.mainScreen` |
| Mobile Preview | `mobile.png` | `images.mobile` |
| System Workflow | `workflow.png` | `images.workflow` |
| Gallery — Login / landing screen | `landing.png` | `images.gallery[0]` |

Status: **live** — all 5 files in place.

To replace any file, drop a same-named `.png` in this folder (or update the
`id`/extension passed to `projectImage()` in `site-config.ts` if you use a
different filename).
