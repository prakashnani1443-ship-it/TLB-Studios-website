import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { contact, site } from "@/lib/site-config";
import { WhatsAppIcon, MailIcon, PhoneIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start a Project"
          title="Tell us what you're trying to build"
          description="Share a few details and we'll get back to you about the right fit for your business."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Message on WhatsApp
                </span>
                <span className="block text-sm text-muted">
                  {contact.whatsappDisplay}
                </span>
              </span>
            </a>

            <a
              href={contact.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Call us
                </span>
                <span className="block text-sm text-muted">
                  {contact.phone}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <MailIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Email us
                </span>
                <span className="block text-sm text-muted">
                  {contact.email}
                </span>
              </span>
            </a>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-foreground">
                {site.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {contact.responseTime}
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
