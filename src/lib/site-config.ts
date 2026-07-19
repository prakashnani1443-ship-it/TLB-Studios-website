// Central content config for the TLB Studios marketing site.
// Update copy, links, and placeholders here rather than inside components.

export const site = {
  name: "TLB Studios",
  tagline: "Think. Learn. Build.",
  eyebrow: "Creative Technology, Media & Business Operations",
  description:
    "TLB Studios is a Hyderabad-based creative technology, media, automation, and business operations studio helping businesses improve their digital presence, content, communication, and daily operations through practical systems.",
  url: "https://tlb-studios-website.vercel.app",
  location: "Hyderabad, Telangana",
  tlbOsUrl: "https://tlb-os.vercel.app",
};

export const contact = {
  email: "tlbstudios59@gmail.com",
  phone: "+91 93901 96517",
  phoneHref: "tel:+919390196517",
  whatsapp: "https://wa.me/919390196517",
  whatsappDisplay: "+91 93901 96517",
  responseTime: "We typically respond within 1–2 business days.",
};

export const socials = {
  instagram:
    "https://www.instagram.com/nanipvt05?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  linkedin: "https://www.linkedin.com/in/prakash-nani-840646220",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Practical AI-assisted systems that remove repetitive work and support faster decisions.",
    items: [
      "AI-assisted workflows",
      "Repetitive task automation",
      "Internal tools",
      "Business process automation",
    ],
  },
  {
    id: "websites-digital-systems",
    title: "Websites & Digital Systems",
    description:
      "Modern web platforms built for clarity, trust, and everyday business use.",
    items: [
      "Business websites",
      "Landing pages",
      "Dashboards",
      "Client portals",
      "Internal operational tools",
    ],
  },
  {
    id: "social-media-content",
    title: "Social Media & Content",
    description:
      "Structured content systems that keep publishing consistent and organized.",
    items: [
      "Content strategy",
      "Reels and campaign creatives",
      "Caption and hashtag workflows",
      "Publishing preparation",
      "Content calendars",
    ],
  },
  {
    id: "branding-visual-design",
    title: "Branding & Visual Design",
    description:
      "Visual identity work that gives a business a clear, consistent presence.",
    items: [
      "Brand identity",
      "Posters",
      "Social creatives",
      "Campaign assets",
      "Visual direction",
    ],
  },
  {
    id: "photography-media",
    title: "Photography & Media",
    description:
      "On-ground media production for events, business, and everyday brand needs.",
    items: [
      "Wedding photography",
      "Events",
      "Business shoots",
      "Product visuals",
      "Media production",
    ],
  },
  {
    id: "business-operations-automation",
    title: "Business Operations & Automation",
    description:
      "Operational systems that keep daily business processes organized and trackable.",
    items: [
      "Forms",
      "Schedules",
      "Vendor tracking",
      "Communication workflows",
      "Dashboards",
      "Reports",
      "Daily operational systems",
    ],
  },
];

export type Solution = {
  id: string;
  title: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    id: "tlb-os",
    title: "TLB-OS",
    description:
      "Internal CRM and operating system for clients, projects, tasks, authentication, and daily business management.",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Fast, modern, responsive websites focused on trust, clarity, and conversion.",
  },
  {
    id: "content-creation-automation",
    title: "Content Creation Automation",
    description:
      "Title-to-caption workflows, hashtag generation, approval preparation, content calendar management, and social publishing support.",
  },
  {
    id: "hostel-operations-systems",
    title: "Hostel Operations Systems",
    description:
      "Resident food voting, menu planning, parent communication, vendor management, purchase schedules, complaints, and daily operations dashboards.",
  },
  {
    id: "vendor-schedule-management",
    title: "Vendor & Schedule Management",
    description:
      "Vendor records, contact organization, supply schedules, order tracking, delivery planning, and recurring operational tasks.",
  },
  {
    id: "marketing-communication-systems",
    title: "Marketing & Communication Systems",
    description:
      "Lead capture, WhatsApp communication, content planning, campaign workflows, and customer follow-up systems.",
  },
];

export type GalleryImage = {
  id: string;
  label: string;
  // Central image config — leave src empty for a styled placeholder.
  // Drop a real file at /public/images/projects/<imageFolder>/<id>.jpg and set
  // src (e.g. "/images/projects/tlb-os/cover.jpg") to replace the placeholder.
  src?: string;
};

// Every project supports the same four named slots plus an open-ended
// gallery, mapped 1:1 to files under /public/images/projects/<imageFolder>/.
export type ProjectImages = {
  cover: GalleryImage;
  mainScreen: GalleryImage;
  mobile: GalleryImage;
  workflow: GalleryImage;
  gallery: GalleryImage[];
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  /** Public project type shown as a badge, e.g. "Client Project". */
  type: string;
  /** Short status badge, e.g. "Live", "In Development", "Planned". */
  status: string;
  description: string;
  problem: string;
  built: string;
  features: string[];
  /** Folder name under /public/images/projects/ — see that folder's README. */
  imageFolder: string;
  images: ProjectImages;
  tools: string[];
};

export const work: WorkItem[] = [
  {
    id: "tlb-os",
    title: "TLB-OS",
    category: "CRM & Business Operations",
    type: "Internal Product",
    status: "Live",
    description:
      "A secure internal operating system for managing clients, projects, tasks, authentication, password recovery, and daily workflows.",
    problem:
      "Growing service and creative businesses often manage clients, projects, and daily tasks across scattered spreadsheets, chats, and notes, making it hard to track what's active, overdue, or owned by whom.",
    built:
      "TLB Studios designed and built TLB-OS as a secure internal operating system — covering authentication, client records, project tracking, task management, and password recovery in one connected workspace.",
    features: [
      "Client management",
      "Project tracking",
      "Task management",
      "Search, filters, and sorting",
      "Authentication",
      "Password recovery",
      "Responsive dashboard",
    ],
    imageFolder: "tlb-os",
    images: {
      cover: { id: "cover", label: "TLB-OS cover image" },
      mainScreen: { id: "main", label: "Dashboard overview" },
      mobile: { id: "mobile", label: "Mobile dashboard view" },
      workflow: { id: "workflow", label: "Client → project → task workflow" },
      gallery: [{ id: "landing", label: "Login / landing screen" }],
    },
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    id: "hostel-operations-system",
    title: "Hostel Operations System",
    category: "Hospitality Operations",
    type: "Operations Platform",
    status: "In Development",
    description:
      "A planned platform for food voting, daily menus, parent communication, resident requests, vendor tracking, purchase schedules, and operational reporting.",
    problem:
      "Hostels and PGs often coordinate food preferences, daily menus, parent updates, and vendor supplies manually through calls and paper notes, making planning and tracking difficult.",
    built:
      "TLB Studios is building a dedicated operations platform covering resident food voting, menu planning, parent communication, vendor tracking, and purchase scheduling.",
    features: [
      "Resident food voting",
      "Daily and weekly menu planning",
      "Parent communication updates",
      "Resident request and complaint tracking",
      "Vendor and purchase schedule management",
      "Operational reporting dashboard",
    ],
    imageFolder: "hostel-operations",
    images: {
      cover: { id: "cover", label: "Hostel Operations System cover image" },
      mainScreen: { id: "main", label: "Menu planning dashboard" },
      mobile: { id: "mobile", label: "Resident food voting (mobile)" },
      workflow: { id: "workflow", label: "Vendor & purchase schedule workflow" },
      gallery: [],
    },
    tools: ["Web application framework", "Structured database", "Dashboard interface"],
  },
  {
    id: "content-creation-automation",
    title: "Content Creation Automation",
    category: "Content Operations",
    type: "Automation System",
    status: "In Development",
    description:
      "A workflow system for generating captions and hashtags, preparing posts, managing approvals, organizing content calendars, and supporting social publishing.",
    problem:
      "Consistent social publishing requires captions, hashtags, approvals, and a content calendar to stay organized — work that becomes hard to track manually as volume grows.",
    built:
      "TLB Studios is building a workflow system that turns a content title into a ready-to-review post, with approval preparation and calendar organization built in.",
    features: [
      "Title-to-caption generation workflow",
      "Hashtag suggestion",
      "Approval preparation step",
      "Content calendar organization",
      "Publishing preparation support",
    ],
    imageFolder: "content-automation",
    images: {
      cover: { id: "cover", label: "Content Creation Automation cover image" },
      mainScreen: { id: "main", label: "Content calendar view" },
      mobile: { id: "mobile", label: "Mobile approval preview" },
      workflow: { id: "workflow", label: "Title-to-caption automation flow" },
      gallery: [],
    },
    tools: ["Automation workflow tools", "AI-assisted content generation", "Calendar interface"],
  },
  {
    id: "alex-celebrity-hair-stylist",
    title: "Alex Celebrity Hair Stylist",
    category: "Website, Content & Digital Presence",
    type: "Client Project",
    status: "Active",
    description:
      "A digital presence project covering website planning, social media content, campaigns, and local business marketing.",
    problem:
      "A personal styling brand needed a consistent digital presence — a website and social content that reflected the quality of the work and made it easy for local clients to reach out.",
    built:
      "TLB Studios planned and produced a website along with social media content and campaigns to support local visibility and bookings.",
    features: [
      "Business website design and build",
      "Social content planning and creation",
      "Local business marketing support",
      "Campaign content production",
    ],
    imageFolder: "alex-salon",
    images: {
      cover: { id: "cover", label: "Alex Celebrity Hair Stylist cover image" },
      mainScreen: { id: "main", label: "Website preview" },
      mobile: { id: "mobile", label: "Mobile website preview" },
      workflow: { id: "workflow", label: "Social content planning workflow" },
      gallery: [
        { id: "content", label: "Social content samples" },
        { id: "before-after", label: "Styling transformation visuals" },
      ],
    },
    tools: ["Website platform", "Content production tools", "Social scheduling"],
  },
  {
    id: "dental-clinic-digital-system",
    title: "Dental Clinic Digital System",
    category: "Website & Patient Marketing",
    type: "Client System",
    status: "Planned",
    description:
      "A planned system for clinic website presentation, patient communication, lead tracking, and digital marketing workflows.",
    problem:
      "Local clinics often lack a clear web presence and a simple way to track patient inquiries, making it harder for new patients to find and reach them.",
    built:
      "TLB Studios is planning a clinic website along with patient communication and lead tracking workflows to support digital marketing efforts.",
    features: [
      "Clinic website presentation",
      "Patient inquiry and lead tracking",
      "Communication workflow planning",
      "Digital marketing support",
    ],
    imageFolder: "dental-clinic",
    images: {
      cover: { id: "cover", label: "Dental Clinic Digital System cover image" },
      mainScreen: { id: "main", label: "Clinic website preview" },
      mobile: { id: "mobile", label: "Mobile clinic website preview" },
      workflow: { id: "workflow", label: "Patient inquiry & lead tracking workflow" },
      gallery: [],
    },
    tools: ["Website platform", "Lead tracking system", "Communication tools"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the business, audience, and real operational needs before any design or build work begins.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Map the structure, priorities, and system requirements into a clear, actionable plan.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Design and develop the website, content system, or tool with attention to detail and function.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Refine based on real usage, feedback, and evolving business needs.",
  },
];

export const aboutValues = [
  "Strategy before execution",
  "Creative work backed by systems",
  "Built for real business use",
];

export type ServiceOption = { value: string; label: string };

export const serviceOptions: ServiceOption[] = [
  { value: "ai-automation", label: "AI Automation" },
  { value: "websites-digital-systems", label: "Websites & Digital Systems" },
  { value: "social-media-content", label: "Social Media & Content" },
  { value: "branding-visual-design", label: "Branding & Visual Design" },
  { value: "photography-media", label: "Photography & Media" },
  { value: "business-operations", label: "Business Operations & Automation" },
  { value: "other", label: "Something else" },
];

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: "/#services" })),
  solutions: solutions.map((s) => ({ label: s.title, href: "/#solutions" })),
};

export function getWorkItem(id: string) {
  return work.find((item) => item.id === id);
}
