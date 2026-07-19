// One-off brand asset generator — run with `node scripts/generate-brand-assets.mjs`.
// Renders the favicon/app-icon set and the Open Graph image from plain
// object trees (no JSX transpiler needed) using Next's bundled `next/og`
// (satori + resvg), then packs the small sizes into a real favicon.ico with
// `to-ico`. No external logo files or stock images are used — everything is
// drawn from the site's own color tokens (see src/app/globals.css).
import { ImageResponse } from "next/og.js";
import toIco from "to-ico";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const color = {
  ink: "#05070c",
  surface: "#0b1220",
  border: "#1c2740",
  foreground: "#e7edf7",
  muted: "#93a1b8",
  accent: "#2dd4bf",
  violet: "#8b5cf6",
};

// satori's CSS parser doesn't reliably support 8-digit hex alpha, so build
// rgba() strings explicitly instead.
function alpha(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function h(type, style, children) {
  return { type, props: { style: { display: "flex", ...style }, children } };
}

async function toPngBuffer(tree, width, height) {
  const res = new ImageResponse(tree, { width, height });
  return Buffer.from(await res.arrayBuffer());
}

/**
 * Square "TLB" lettermark. `simple` drops the gradient/glow for the tiny
 * favicon.ico frames, where fine detail just reads as noise.
 */
function iconTree(size, simple) {
  const fontSize = Math.round(size * 0.38);
  const barHeight = Math.max(2, Math.round(size * 0.045));
  return h(
    "div",
    {
      width: size,
      height: size,
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: simple
        ? color.ink
        : `linear-gradient(135deg, ${color.ink} 0%, ${color.surface} 100%)`,
      fontFamily: "sans-serif",
    },
    [
      !simple &&
        h("div", {
          position: "absolute",
          top: -size * 0.3,
          right: -size * 0.3,
          width: size * 0.9,
          height: size * 0.9,
          borderRadius: 9999,
          background: `radial-gradient(circle, ${alpha(color.violet, 0.35)} 0%, ${alpha(color.violet, 0)} 70%)`,
        }),
      h(
        "div",
        {
          color: color.accent,
          fontSize,
          fontWeight: 800,
          letterSpacing: -fontSize * 0.03,
        },
        "TLB",
      ),
      h("div", {
        marginTop: Math.round(size * 0.06),
        width: Math.round(size * 0.5),
        height: barHeight,
        borderRadius: barHeight,
        background: `linear-gradient(90deg, ${color.accent}, ${color.violet})`,
      }),
    ].filter(Boolean),
  );
}

function orbitNode(top, left, tone) {
  return h("div", {
    position: "absolute",
    top,
    left,
    width: 16,
    height: 16,
    borderRadius: 9999,
    background: tone,
  });
}

function ogTree() {
  const W = 1200;
  const H = 630;
  return h(
    "div",
    {
      width: W,
      height: H,
      position: "relative",
      background: color.ink,
      fontFamily: "sans-serif",
    },
    [
      // subtle grid texture
      h("div", {
        position: "absolute",
        top: 0,
        left: 0,
        width: W,
        height: H,
        backgroundImage: `linear-gradient(to right, ${alpha(color.foreground, 0.05)} 1px, transparent 1px), linear-gradient(to bottom, ${alpha(color.foreground, 0.05)} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }),
      // corner glows
      h("div", {
        position: "absolute",
        top: -180,
        left: 40,
        width: 520,
        height: 520,
        borderRadius: 9999,
        background: `radial-gradient(circle, ${alpha(color.accent, 0.28)} 0%, ${alpha(color.accent, 0)} 70%)`,
      }),
      h("div", {
        position: "absolute",
        bottom: -160,
        right: 80,
        width: 420,
        height: 420,
        borderRadius: 9999,
        background: `radial-gradient(circle, ${alpha(color.violet, 0.28)} 0%, ${alpha(color.violet, 0)} 70%)`,
      }),
      // short diagonal teal -> violet light trail, contained in the gap
      // between the text column and the orbit visual (never crosses text)
      h("div", {
        position: "absolute",
        top: 210,
        left: 770,
        width: 230,
        height: 4,
        borderRadius: 9999,
        transform: "rotate(-24deg)",
        background: `linear-gradient(90deg, ${alpha(color.accent, 0)} 0%, ${alpha(color.accent, 0.85)} 50%, ${alpha(color.violet, 0.7)} 100%)`,
      }),
      // main content row
      h(
        "div",
        {
          position: "relative",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
        },
        [
          h(
            "div",
            { flexDirection: "column", maxWidth: 680 },
            [
              h(
                "div",
                {
                  color: color.accent,
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                },
                "TLB Studios",
              ),
              h(
                "div",
                {
                  color: color.foreground,
                  fontSize: 76,
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: -2,
                  marginTop: 20,
                },
                "Think. Learn. Build.",
              ),
              h(
                "div",
                {
                  color: color.muted,
                  fontSize: 27,
                  lineHeight: 1.4,
                  marginTop: 28,
                  maxWidth: 620,
                },
                "Creative Technology, Media & Business Operations",
              ),
            ],
          ),
          // abstract Think / Learn / Build orbit
          h(
            "div",
            { width: 300, height: 300, position: "relative" },
            [
              h("div", {
                position: "absolute",
                top: 0,
                left: 0,
                width: 300,
                height: 300,
                borderRadius: 9999,
                border: `2px solid ${alpha(color.accent, 0.3)}`,
              }),
              orbitNode(8, 142, color.accent),
              orbitNode(142, 276, color.violet),
              orbitNode(276, 142, color.accent),
            ],
          ),
        ],
      ),
      // location
      h(
        "div",
        { position: "absolute", bottom: 44, left: 84, color: color.muted, fontSize: 21 },
        "Hyderabad, Telangana",
      ),
    ],
  );
}

async function main() {
  await mkdir(path.join(PUBLIC, "images", "brand"), { recursive: true });

  const icon512 = await toPngBuffer(iconTree(512, false), 512, 512);
  await writeFile(path.join(PUBLIC, "icon-512.png"), icon512);

  const icon192 = await toPngBuffer(iconTree(192, false), 192, 192);
  await writeFile(path.join(PUBLIC, "icon-192.png"), icon192);

  const appleTouch = await toPngBuffer(iconTree(180, false), 180, 180);
  await writeFile(path.join(PUBLIC, "apple-touch-icon.png"), appleTouch);

  const favicon48 = await toPngBuffer(iconTree(48, true), 48, 48);
  const favicon32 = await toPngBuffer(iconTree(32, true), 32, 32);
  const favicon16 = await toPngBuffer(iconTree(16, true), 16, 16);
  const icoBuffer = await toIco([favicon48, favicon32, favicon16]);
  await writeFile(path.join(PUBLIC, "favicon.ico"), icoBuffer);

  const og = await toPngBuffer(ogTree(), 1200, 630);
  await writeFile(path.join(PUBLIC, "images", "brand", "og-image.png"), og);

  console.log("Brand assets generated:");
  console.log("  public/favicon.ico");
  console.log("  public/icon-192.png");
  console.log("  public/icon-512.png");
  console.log("  public/apple-touch-icon.png");
  console.log("  public/images/brand/og-image.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
