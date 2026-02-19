"use client";

import { motion } from "framer-motion";
import CallButton from "@/components/call-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const roomImages = [
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80"
];

export default function RoomsPage() {
  const { messages } = useLanguage();

  return (
    <div className="pb-16">
      <section className="shell pt-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{messages.rooms.hero.eyebrow}</p>
          <h1 className="font-display mt-4 text-5xl md:text-6xl">{messages.rooms.hero.title}</h1>
          <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{messages.rooms.hero.description}</p>
        </Reveal>
      </section>

      <section className="shell pt-10">
        <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {messages.rooms.items.map((room, index) => (
            <StaggerItem key={room.name}>
              <motion.article whileHover={{ scale: 1.02, y: -4 }} className="lux-card overflow-hidden rounded-3xl">
                <div className="relative h-56">
                  <SmartImage
                    src={roomImages[index]}
                    fallbackSrc="/images/fallback/room.svg"
                    alt={room.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="lux-chip absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
                    {room.type}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-display text-2xl">{room.name}</h2>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {messages.labels.startingAt} {room.price} {messages.labels.nightly}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{room.description}</p>

                  <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-[var(--color-muted)]">
                    {room.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alt)]" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  <CallButton label={messages.nav.callToBook} className="mt-6" compact />
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
