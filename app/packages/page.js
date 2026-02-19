"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const heroImage =
  "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=2200&q=80";

const packageImages = [
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1502301197179-65228ab57f78?auto=format&fit=crop&w=1400&q=80",
];

function availabilityClass(availability, labels) {
  if (availability === labels.limited) {
    return "border-amber-500/35 bg-amber-500/10 text-amber-700 dark:text-amber-200";
  }

  if (availability === labels.weekendOnly) {
    return "border-indigo-500/35 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200";
  }

  return "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200";
}

export default function PackagesPage() {
  const { messages } = useLanguage();
  const featuredPackage = messages.packages.items[0];
  const lowestPrice = messages.packages.items.reduce((lowest, item) => {
    const numeric = Number(item.price.replace(/[^0-9]/g, ""));
    return numeric < lowest ? numeric : lowest;
  }, Number.POSITIVE_INFINITY);

  return (
    <div className="pb-20">
      <section className="relative min-h-[68vh] overflow-hidden">
        <SmartImage
          src={heroImage}
          fallbackSrc="/images/fallback/resort.svg"
          alt={messages.packages.hero.title}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#132338aa] via-[#0d1726cc] to-[var(--color-bg)]" />
        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="shell relative pt-36 pb-24">
          <Reveal>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
              {messages.packages.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.04] text-white md:text-6xl">
              {messages.packages.hero.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
              {messages.packages.hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">{messages.nav.packages}</p>
              <p className="font-display mt-2 text-4xl text-white">{messages.packages.items.length}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">{messages.labels.startingAt}</p>
              <p className="font-display mt-2 text-4xl text-white">Tk {lowestPrice}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">{messages.labels.availableNow}</p>
              <p className="font-display mt-2 text-2xl text-white">{featuredPackage.availability}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell relative -mt-12 md:-mt-14">
        <Reveal>
          <article className="glass-panel overflow-hidden rounded-3xl border border-[var(--color-border)]/70">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{messages.labels.popular}</p>
                <h2 className="font-display mt-3 text-4xl leading-tight">{featuredPackage.name}</h2>
                <p className="mt-4 text-[var(--color-muted)]">{featuredPackage.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${availabilityClass(
                      featuredPackage.availability,
                      messages.labels
                    )}`}
                  >
                    {featuredPackage.availability}
                  </span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                    {messages.common.totalBundledPrice}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                  {featuredPackage.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <p className="font-display text-4xl text-[var(--color-accent)]">{featuredPackage.price}</p>
                  <CallButton label={messages.nav.callToBookPackage} compact />
                </div>
              </div>

              <div className="relative min-h-[280px] lg:min-h-full">
                <SmartImage
                  src={packageImages[0]}
                  fallbackSrc="/images/fallback/resort-walkway.svg"
                  alt={featuredPackage.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="shell pt-14">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {messages.packages.items.map((pkg, index) => (
            <StaggerItem key={pkg.name}>
              <motion.article whileHover={{ scale: 1.015, y: -4 }} className="lux-card rounded-3xl p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {messages.nav.packages} 0{index + 1}
                    </p>
                    <h3 className="font-display mt-2 text-3xl leading-tight">{pkg.name}</h3>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${availabilityClass(
                      pkg.availability,
                      messages.labels
                    )}`}
                  >
                    {pkg.availability}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{pkg.description}</p>

                <div className="mt-5 overflow-hidden rounded-2xl">
                  <SmartImage
                    src={packageImages[index % packageImages.length]}
                    fallbackSrc="/images/fallback/resort.svg"
                    alt={pkg.name}
                    className="h-44 w-full object-cover"
                  />
                </div>

                <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alt)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)]/70 pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {messages.common.totalBundledPrice}
                    </p>
                    <p className="font-display mt-1 text-3xl text-[var(--color-accent)]">{pkg.price}</p>
                  </div>
                  <CallButton label={messages.nav.callToBookPackage} compact className="shrink-0" />
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell pt-12">
        <Reveal>
          <div className="glass-panel rounded-3xl p-7 md:flex md:items-center md:justify-between md:p-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{messages.common.localDiscovery}</p>
              <h3 className="font-display mt-3 text-3xl">{messages.common.privateGuidedDesk}</h3>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{messages.common.privateGuidedDeskDesc}</p>
            </div>
            <CallButton label={messages.nav.callToBookPackage} className="mt-6 md:mt-0" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
