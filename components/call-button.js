"use client";

import { motion } from "framer-motion";

const DIAL_NUMBER = "+8801712000000";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4.6 5.8c0-1 .8-1.8 1.8-1.8h2.2c.8 0 1.5.5 1.7 1.3l.8 2.7c.2.6 0 1.3-.4 1.7l-1.2 1.2a14 14 0 0 0 4.6 4.6l1.2-1.2c.5-.5 1.1-.6 1.7-.4l2.7.8c.8.2 1.3.9 1.3 1.7v2.2c0 1-.8 1.8-1.8 1.8H19c-8.3 0-15-6.7-15-15v-.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function CallButton({ label, className = "", compact = false }) {
  return (
    <motion.a
      href={`tel:${DIAL_NUMBER}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,var(--color-accent),color-mix(in_srgb,var(--color-accent)_85%,#000))] text-[var(--color-accent-contrast)] shadow-[0_12px_32px_-12px_rgba(17,94,89,0.45)] transition-all hover:brightness-110 ${compact ? "px-5 py-2 text-sm font-medium" : "px-8 py-4 text-sm font-semibold tracking-wide md:text-base"} ${className}`}
    >
      <PhoneIcon />
      <span className="translate-y-[0.5px]">{label}</span>
    </motion.a>
  );
}
