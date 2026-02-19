"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/language-context";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
