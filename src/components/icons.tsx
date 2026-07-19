// Minimal hand-rolled SVG icon set — keeps the project dependency-free.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function AutomationIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}

export function WebsiteIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10.5 6.5h.01" />
    </svg>
  );
}

export function ContentIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="4" y="3" width="13" height="18" rx="2" />
      <path d="M8 8h5M8 12h5M8 16h3" />
      <path d="M17 8l3 2-3 2" />
    </svg>
  );
}

export function BrandIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a6 6 0 000 18 3 3 0 000-6 2 2 0 010-4 3 3 0 000-6z" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

export function OperationsIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 00-.2-1.6l2-1.4-2-3.4-2.3.8a7 7 0 00-2.7-1.6L13.4 2h-3.8l-.4 2.8a7 7 0 00-2.7 1.6l-2.3-.8-2 3.4 2 1.4A7 7 0 004 12c0 .5.06 1 .2 1.6l-2 1.4 2 3.4 2.3-.8a7 7 0 002.7 1.6l.4 2.8h3.8l.4-2.8a7 7 0 002.7-1.6l2.3.8 2-3.4-2-1.4c.14-.5.2-1 .2-1.6z" />
    </svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 18l-1.4 3.4L8 20a8 8 0 104-1zM8.3 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5s.7 1.7.7 1.8.1.3 0 .5c-.2.4-.4.5-.7.9-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.3 1.1 2.1 1.4 2.5 1.2.2-.1.5-.5.7-.8.2-.3.4-.3.7-.2s1.7.8 2 1c.3.1.5.2.5.4 0 .2 0 1-.5 1.6-.4.6-1.8 1.1-2.5 1.1-.7 0-1.7-.2-3.7-1.3-2.5-1.4-4-4-4.2-4.3-.1-.2-1-1.3-1-2.5s.6-1.9.9-2.1z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7.5 10v6.5M7.5 7.6v.01M12 16.5V13c0-1.4.9-2.3 2-2.3s1.8.9 1.8 2.3v3.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.7a2 2 0 012-2.2z" />
    </svg>
  );
}

export function ImagePlaceholderIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeDasharray="4 3" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M4 17l5-4.5 3.5 3L16 12l4 4" />
    </svg>
  );
}
