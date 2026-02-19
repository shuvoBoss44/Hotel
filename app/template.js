"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";

export default function Template({ children }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <motion.div
      key={`${pathname}-${language}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

