"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import SmartImage from "@/components/smart-image";
import { useLanguage } from "@/context/language-context";

const galleryItems = [
  {
    src: "https://picsum.photos/seed/rangamati-infinity-pool/1300/900",
    alt: "Resort infinity pool"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=80",
    alt: "Ocean shoreline"
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1300&q=80",
    alt: "Suite interior"
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1300&q=80",
    alt: "Chef plated dish"
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1300&q=80",
    alt: "Travel boat"
  },
  {
    src: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1300&q=80",
    alt: "Luxury breakfast"
  },
  {
    src: "https://picsum.photos/seed/rangamati-beach-sunset/1300/900",
    alt: "Beach sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1300&q=80",
    alt: "Mountain travel point"
  },
  {
    src: "https://picsum.photos/seed/rangamati-resort-walkway/1300/900",
    alt: "Resort walkway"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1300&q=80",
    alt: "Fine dining"
  },
  {
    src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1300&q=80",
    alt: "Kayaking"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1300&q=80",
    alt: "Room decor"
  }
];

export default function GalleryPage() {
  const { messages } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <div className="pb-16">
      <section className="shell pt-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{messages.gallery.hero.eyebrow}</p>
          <h1 className="font-display mt-4 text-5xl md:text-6xl">{messages.gallery.hero.title}</h1>
          <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{messages.gallery.hero.description}</p>
          <p className="mt-4 text-sm text-[var(--color-accent)]">{messages.gallery.hint}</p>
        </Reveal>
      </section>

      <section className="shell pt-10">
        <div className="masonry">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="masonry-item lux-card w-full overflow-hidden rounded-2xl text-left"
              onClick={() => setSelectedIndex(index)}
            >
              <SmartImage
                src={item.src}
                fallbackSrc="/images/fallback/gallery.svg"
                alt={item.alt}
                className="h-auto w-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {currentItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20"
              onClick={(event) => event.stopPropagation()}
            >
              <SmartImage
                src={currentItem.src}
                fallbackSrc="/images/fallback/gallery.svg"
                alt={currentItem.alt}
                className="max-h-[92vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-sm text-white"
              >
                {messages.common.close}
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-sm text-white"
              >
                {messages.common.prev}
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % galleryItems.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-sm text-white"
              >
                {messages.common.next}
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
