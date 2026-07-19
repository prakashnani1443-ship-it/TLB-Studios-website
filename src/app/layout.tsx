import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GridBackdrop from "@/components/decor/GridBackdrop";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TLB Studios | Think. Learn. Build.",
    template: "%s | TLB Studios",
  },
  description:
    "TLB Studios is a Hyderabad, Telangana creative technology, media, automation, and business operations studio — websites, AI automation, content, branding, photography, and operational systems for local businesses and startups.",
  keywords: [
    "TLB Studios",
    "Hyderabad creative agency",
    "Telangana web design",
    "AI automation Hyderabad",
    "business automation studio",
    "content creation agency Hyderabad",
  ],
  authors: [{ name: "TLB Studios" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "TLB Studios | Think. Learn. Build.",
    description:
      "Creative technology, media, automation, and business operations for local businesses, startups, and personal brands in Hyderabad, Telangana.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TLB Studios | Think. Learn. Build.",
    description:
      "Creative technology, media, automation, and business operations for local businesses, startups, and personal brands in Hyderabad, Telangana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-foreground font-sans">
        <GridBackdrop />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
