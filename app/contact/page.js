"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const heroImage =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2200&q=80";

export default function ContactPage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-20">
      <section className="relative min-h-[70vh] overflow-hidden">
        <SmartImage
          src={heroImage}
          fallbackSrc="/images/fallback/resort-walkway.svg"
          alt={messages.contact.hero.title}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172ac2] via-[#111827cf] to-[var(--color-bg)]" />
        <div className="hero-grid absolute inset-0 opacity-20" />

        <div className="shell relative grid min-h-[70vh] items-end gap-8 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                {messages.contact.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl leading-[1.05] text-white md:text-6xl">
                {messages.contact.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
                {messages.contact.hero.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <article className="glass-panel rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-2xl md:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">{messages.contact.phoneLabel}</p>
              <a href="tel:+8801712000000" className="font-display mt-4 block text-4xl leading-none md:text-5xl">
                {messages.site.phone}
              </a>
              <p className="mt-5 text-sm text-white/80">{messages.site.location}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">{messages.labels.availableNow}</p>
                  <p className="mt-1 text-sm text-white">{messages.contact.mapTitle}</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">{messages.nav.travel}</p>
                  <p className="mt-1 text-sm text-white">{messages.common.privateGuidedDesk}</p>
                </div>
              </div>
              <CallButton label={messages.nav.callToReserve} className="mt-7" />
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pt-12">
        <Reveal>
          <div className="relative w-full overflow-hidden border-y border-[var(--color-border)]">
            <div className="h-[500px] w-full">
              <iframe
                title="Rangamati Resort Map"
                src="https://www.google.com/maps?q=22.7324,92.2985&z=13&output=embed"
                className="h-full w-full [filter:saturate(1.05)_hue-rotate(-10deg)_contrast(1.08)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/85 via-transparent to-transparent" />

            <div className="shell pointer-events-none absolute inset-0 flex items-end pb-6 md:pb-8">
              <div className="glass-panel pointer-events-auto w-full max-w-2xl rounded-2xl p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">{messages.contact.mapTitle}</p>
                <h2 className="font-display mt-2 text-3xl md:text-4xl">{messages.contact.mapTitle}</h2>
                <p className="mt-3 text-sm text-[var(--color-muted)]">{messages.contact.mapDescription}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell pt-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <article className="lux-card rounded-3xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">{messages.contact.phoneLabel}</p>
              <a href="tel:+8801712000000" className="font-display mt-5 block text-4xl leading-none md:text-6xl lg:text-7xl">
                {messages.site.phone}
              </a>
              <p className="mt-5 max-w-xl text-sm text-[var(--color-muted)]">{messages.site.location}</p>

              <div className="soft-divider mt-7 pt-6">
                <h3 className="font-display text-3xl">{messages.common.privateGuidedDesk}</h3>
                <p className="mt-3 text-sm text-[var(--color-muted)]">{messages.common.privateGuidedDeskDesc}</p>
              </div>

              <CallButton label={messages.nav.callToReserve} className="mt-8" />
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form whileHover={{ scale: 1.005 }} className="glass-panel rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-3xl">{messages.contact.form.title}</h3>

              <div className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder={messages.contact.form.name}
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
                <input
                  type="email"
                  placeholder={messages.contact.form.email}
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
                <input
                  type="tel"
                  placeholder={messages.contact.form.phone}
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
                <textarea
                  rows={5}
                  placeholder={messages.contact.form.message}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex rounded-full border border-transparent bg-[linear-gradient(120deg,var(--color-accent),var(--color-accent-alt))] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)]"
                >
                  {messages.contact.form.button}
                </button>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{messages.labels.availableToday}</p>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
