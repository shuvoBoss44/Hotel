"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const activityImages = [
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504280390368-397dc4a6ad68?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
];

function statusStyle(status, labels) {
  if (status === labels.limited) {
    return "bg-amber-500/20 text-amber-200 border-amber-300/40";
  }

  if (status === labels.weekendOnly) {
    return "bg-violet-500/20 text-violet-200 border-violet-300/40";
  }

  return "bg-emerald-500/20 text-emerald-200 border-emerald-300/40";
}

export default function ActivitiesPage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-16">
      <section className="shell pt-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {messages.activities.hero.eyebrow}
          </p>
          <h1 className="font-display mt-4 text-5xl md:text-6xl">{messages.activities.hero.title}</h1>
          <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{messages.activities.hero.description}</p>
        </Reveal>
      </section>

      <section className="shell pt-10">
        <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {messages.activities.items.map((activity, index) => (
            <StaggerItem key={activity.name}>
              <motion.article whileHover={{ scale: 1.03, y: -4 }} className="lux-card overflow-hidden rounded-3xl">
                <div className="relative h-56">
                  <SmartImage
                    src={activityImages[index]}
                    fallbackSrc="/images/fallback/activity.svg"
                    alt={activity.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${statusStyle(
                      activity.status,
                      messages.labels
                    )}`}
                  >
                    {activity.status}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="font-display text-2xl">{activity.name}</h2>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">{activity.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {messages.common.price}
                    </p>
                    <p className="text-lg font-semibold text-[var(--color-accent)]">{activity.price}</p>
                  </div>

                  <CallButton label={messages.nav.callToBook} className="mt-5 w-full" compact />
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
