"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const trendingImages = [
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80"
];

const exploreImages = [
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
];

export default function TravelPage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-16">
      <section className="relative min-h-[72vh] overflow-hidden">
        <SmartImage
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80"
          fallbackSrc="/images/fallback/travel.svg"
          alt="Travel destinations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d140fb3] via-[#2d2a20b0] to-[var(--color-bg)]" />

        <div className="shell relative flex min-h-[72vh] items-end pb-20 pt-32">
          <div className="max-w-3xl">
            <Reveal className="inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] lux-chip">
              {messages.travel.hero.eyebrow}
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl leading-[1.03] text-[#fff6ec] md:text-6xl">
                {messages.travel.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base text-[#eadcc8] md:text-lg">
                {messages.travel.hero.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.trendingRouteboard}
          </p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">{messages.travel.trending.title}</h2>
          <p className="mt-4 text-[var(--color-muted)]">{messages.travel.trending.description}</p>
        </Reveal>

        <div className="no-scrollbar mt-8 overflow-x-auto pb-4">
          <div className="flex w-max gap-5 pr-3">
            {messages.travel.trending.items.map((place, index) => (
              <motion.article
                key={place.name}
                whileHover={{ scale: 1.03, y: -4 }}
                className="lux-card w-[320px] shrink-0 overflow-hidden rounded-3xl"
              >
                <div className="relative h-52">
                  <SmartImage
                    src={trendingImages[index]}
                    fallbackSrc="/images/fallback/travel.svg"
                    alt={place.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="lux-chip absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
                    {place.distance}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl">{place.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{place.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.localDiscovery}
          </p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">{messages.travel.explore.title}</h2>
          <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{messages.travel.explore.description}</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {messages.travel.explore.items.map((place, index) => (
            <StaggerItem key={place.name}>
              <motion.article whileHover={{ scale: 1.02 }} className="lux-card overflow-hidden rounded-3xl">
                <div className="relative h-56">
                  <SmartImage
                    src={exploreImages[index]}
                    fallbackSrc="/images/fallback/travel.svg"
                    alt={place.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <span className="lux-chip absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
                    {place.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl">{place.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{place.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08} className="mt-12">
          <div className="glass-panel rounded-3xl p-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-3xl">{messages.common.privateGuidedDesk}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{messages.common.privateGuidedDeskDesc}</p>
            </div>
            <CallButton label={messages.nav.callToBook} className="mt-5 md:mt-0" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
