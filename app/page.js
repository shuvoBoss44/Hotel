"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const suiteImages = [
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
];

const activityImages = [
  "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
];

export default function HomePage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-8">
      <section className="relative min-h-screen overflow-hidden">
        <SmartImage
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80"
          fallbackSrc="/images/fallback/resort.svg"
          alt="Luxury resort skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-[var(--color-bg)]" />

        <div className="shell relative flex min-h-screen items-end pb-16 pt-32 md:pb-24">
          <div className="max-w-4xl">
            <Reveal className="inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] lux-chip">
              {messages.home.hero.eyebrow}
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
                {messages.home.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-200 md:text-lg">
                {messages.home.hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-4">
              <CallButton label={messages.home.hero.primaryCta} />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/travel"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/10 md:text-base"
                >
                  {messages.home.hero.secondaryCta}
                </Link>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {messages.home.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <motion.article whileHover={{ scale: 1.02, y: -3 }} className="lux-card rounded-2xl p-6">
                <p className="font-display text-4xl text-[var(--color-accent)]">{metric.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {metric.label}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell pt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.astraSignature}
          </p>
          <h2 className="font-display mt-4 text-4xl font-medium tracking-tight md:text-5xl">{messages.home.featuredSuites.title}</h2>
          <p className="mt-4 max-w-2xl font-medium text-[var(--color-muted)]">{messages.home.featuredSuites.description}</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {messages.home.featuredSuites.items.map((suite, index) => (
            <StaggerItem key={suite.name}>
              <motion.article whileHover={{ scale: 1.02, y: -4 }} className="lux-card rounded-3xl p-4 md:p-6">
                <div className="relative h-60 overflow-hidden rounded-2xl">
                  <SmartImage
                    src={suiteImages[index]}
                    fallbackSrc="/images/fallback/room.svg"
                    alt={suite.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl">{suite.name}</h3>
                  <span className="lux-chip rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em]">
                    {messages.labels.startingAt} {suite.price} {messages.labels.nightly}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{suite.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                  {suite.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>

                <CallButton label={messages.nav.callToBook} className="mt-6" compact />
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.curatedMoments}
          </p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">{messages.home.topActivities.title}</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">{messages.home.topActivities.description}</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {messages.home.topActivities.items.map((activity, index) => (
            <StaggerItem key={activity.name}>
              <motion.article whileHover={{ scale: 1.03 }} className="lux-card overflow-hidden rounded-3xl">
                <div className="relative h-56">
                  <SmartImage
                    src={activityImages[index]}
                    fallbackSrc="/images/fallback/activity.svg"
                    alt={activity.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="lux-chip absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
                    {messages.labels.availableToday}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-2xl">{activity.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{activity.description}</p>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-5 inline-block">
                    <Link
                      href="/activities"
                      className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em]"
                    >
                      {messages.nav.activities}
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
