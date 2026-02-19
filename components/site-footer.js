"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";

const footerLinks = [
  { href: "/rooms", key: "rooms" },
  { href: "/food", key: "food" },
  { href: "/travel", key: "travel" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" }
];

export default function SiteFooter() {
  const { messages } = useLanguage();

  return (
    <footer className="relative mt-24 soft-divider">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(179,116,76,0.2),transparent_45%)]" />

      <div className="shell relative grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{messages.site.tagline}</p>
          <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">{messages.footer.title}</h2>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">{messages.footer.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton label={messages.footer.button} />
            <motion.a
              href="tel:+8801712000000"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold"
            >
              {messages.contact.phoneLabel}: {messages.site.phone}
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-transparent px-3 py-2 text-[var(--color-muted)] transition-colors hover:border-[var(--color-border)] hover:text-[var(--color-text)]"
              >
                {messages.nav[item.key]}
              </Link>
            ))}
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Astra Cove Resort © {new Date().getFullYear()}
          </p>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{messages.site.location}</p>
        </Reveal>
      </div>
    </footer>
  );
}
