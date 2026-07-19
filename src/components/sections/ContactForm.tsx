"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/site-config";

const inputClass =
  "w-full rounded-lg border border-border bg-ink px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent";

// UI-only contact form. Intentionally isolated from the rest of the page so a
// real submit handler / API route can be wired in later without touching layout.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent/40 bg-surface p-8 text-center"
      >
        <p className="font-heading text-lg font-semibold text-foreground">
          Thanks — your details are ready to send.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This form is currently a UI preview and is not yet connected to a
          backend or inbox. Reach out on WhatsApp or email until that
          integration is live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Business or company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Business name (optional)"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@business.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+91 90000 00000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Service needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Project message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your business and what you need"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Send Message
      </button>
      <p className="text-xs text-muted">
        This form is UI-only for now — no data is sent or stored.
      </p>
    </form>
  );
}
