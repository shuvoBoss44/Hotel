"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const specialImages = [
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80"
];

export default function FoodPage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-16">
      <section className="relative min-h-[60vh] overflow-hidden">
        <SmartImage
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=80"
          fallbackSrc="/images/fallback/food.svg"
          alt="Fine dining restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d140faa] via-[#2f261daa] to-[var(--color-bg)]" />

        <div className="shell relative flex min-h-[60vh] items-end pb-16 pt-32">
          <div className="max-w-3xl">
            <Reveal className="inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] lux-chip">
              {messages.food.hero.eyebrow}
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl leading-[1.05] text-[#fff7ee] md:text-6xl">
                {messages.food.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base text-[#efe1cd] md:text-lg">
                {messages.food.hero.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.culinarySignature}
          </p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">{messages.food.specials.title}</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">{messages.food.specials.description}</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {messages.food.specials.items.map((special, index) => (
            <StaggerItem key={special.name}>
              <motion.article whileHover={{ scale: 1.03 }} className="lux-card overflow-hidden rounded-3xl">
                <div className="h-52">
                  <SmartImage
                    src={specialImages[index]}
                    fallbackSrc="/images/fallback/food.svg"
                    alt={special.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl">{special.name}</h3>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{special.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{special.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {messages.common.menuPreview}
          </p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">{messages.food.menu.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {messages.food.menu.sections.map((section) => (
            <motion.article key={section.name} whileHover={{ scale: 1.02, y: -3 }} className="lux-card rounded-3xl p-6">
              <h3 className="font-display text-3xl">{section.name}</h3>
              <div className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{item.name}</p>
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <CallButton label={messages.nav.callToReserve} />
        </Reveal>
      </section>
    </div>
  );
}
