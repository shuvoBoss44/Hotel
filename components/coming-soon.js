"use client";

import CallButton from "@/components/call-button";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";

export default function ComingSoon({ pageKey }) {
  const { messages } = useLanguage();

  return (
    <section className="mx-auto grid min-h-[70vh] w-[min(1220px,calc(100%-1.25rem))] place-items-center pb-10 pt-40">
      <Reveal className="glass-panel max-w-2xl rounded-3xl p-10 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{messages.nav[pageKey]}</p>
        <h1 className="font-display mt-4 text-4xl">{messages.comingSoon.title}</h1>
        <p className="mt-4 text-[var(--color-muted)]">{messages.comingSoon.description}</p>
        <CallButton label={messages.comingSoon.button} className="mt-8" />
      </Reveal>
    </section>
  );
}
