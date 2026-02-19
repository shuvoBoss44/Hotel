"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import CallButton from "@/components/call-button";
import { useLanguage } from "@/context/language-context";

const navItems = [
  { href: "/", key: "home" },
  { href: "/rooms", key: "rooms" },
  { href: "/packages", key: "packages" },
  { href: "/food", key: "food" },
  { href: "/travel", key: "travel" },
  { href: "/activities", key: "activities" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
];

const subscribe = () => () => { };

function useIsHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

function normalizePath(pathname) {
  if (!pathname) return "/";

  const cleanPath = pathname.split("?")[0].split("#")[0];

  if (cleanPath === "/") return "/";

  return cleanPath.replace(/\/+$/, "") || "/";
}

function isNavActive(pathname, href) {
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);

  if (targetPath === "/") {
    return currentPath === "/";
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

function LogoWithFallback({ className = "h-10 w-10", textSize = "text-sm" }) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl ${className} bg-[var(--color-surface)] shadow-sm shrink-0`}>
      {!error ? (
        <Image
          src="/astra_cove_logo.png"
          alt="Logo"
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-[var(--color-accent)] text-white`}>
          <span className={`font-display font-bold ${textSize}`}>AC</span>
        </div>
      )}
    </div>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useIsHydrated();
  const isDark = hydrated && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${isDark
        ? "border-amber-200/35 bg-slate-900/85 text-amber-200 shadow-[0_0_0_1px_rgba(251,191,36,0.12)] hover:bg-slate-800/90 hover:text-amber-100"
        : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
        }`}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        {!hydrated ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 opacity-50">
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.657-1.596a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 1 0 1.06 1.061l1.06-1.06Zm-9.193 9.192a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 1 0 1.061 1.06l1.06-1.061Zm9.193 0a.75.75 0 1 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Zm-9.193-9.192a.75.75 0 1 0 1.06-1.06l-1.061-1.06a.75.75 0 1 0-1.06 1.061l1.06 1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10Z" />
            </svg>
          </div>
        ) : (
          <>
            <motion.div
              initial={false}
              animate={{
                y: isDark ? -20 : 0,
                opacity: isDark ? 0 : 1,
                rotate: isDark ? 45 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.55)]">
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.657-1.596a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 1 0 1.06 1.061l1.06-1.06Zm-9.193 9.192a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 1 0 1.061 1.06l1.06-1.061Zm9.193 0a.75.75 0 1 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Zm-9.193-9.192a.75.75 0 1 0 1.06-1.06l-1.061-1.06a.75.75 0 1 0-1.06 1.061l1.06 1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10Z" />
              </svg>
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                y: isDark ? 0 : 20,
                opacity: isDark ? 1 : 0,
                rotate: isDark ? 0 : -45
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-cyan-200 drop-shadow-[0_0_8px_rgba(125,211,252,0.55)]">
                <path fillRule="evenodd" d="M7.455 2.67A6 6 0 1 0 17.33 12.545a4.5 4.5 0 0 1-9.875-9.875Z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </>
        )}
      </div>
    </button>
  );
}

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="h-10 min-w-[78px] appearance-none rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] pl-4 pr-9 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/25"
        aria-label="Language"
      >
        <option value="en">EN</option>
        <option value="bn">BN</option>
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </span>
    </div>
  );
}

function FloatingDesktopNav({ pathname, messages }) {
  return (
    <nav className="glass-panel mx-auto hidden h-20 w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-[var(--color-border)]/50 bg-[var(--color-bg)]/80 px-4 pr-3 shadow-2xl backdrop-blur-2xl lg:flex">
      {/* Brand */}
      <Link href="/" className="ml-2 flex items-center gap-3 rounded-full py-1 pr-3 transition-opacity hover:opacity-80">
        <LogoWithFallback className="h-12 w-12" textSize="text-base" />
      </Link>

      {/* Navigation Pills */}
      <div className="flex h-12 items-center rounded-full bg-[var(--color-surface)]/60 p-1.5 shadow-inner">
        {navItems.map((item) => {
          const isActive = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${isActive ? "text-[var(--color-text)]" : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="desktop-nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--color-bg)] shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{messages.nav[item.key]}</span>
            </Link>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pl-2">
        <LanguageSwitch />
        <ThemeToggle />
        <CallButton label={messages.nav.callToReserve} compact className="ml-2 h-12 rounded-full px-6 text-sm font-semibold shadow-lg shadow-[var(--color-accent)]/20" />
      </div>
    </nav>
  );
}

function SidebarMobileMenu({ isOpen, setOpen, pathname, messages }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-80 flex-col bg-[var(--color-bg)]/95 shadow-2xl backdrop-blur-xl border-l border-[var(--color-border)] lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-6">
              {/* Sidebar Logo */}
              <div className="flex items-center gap-3">
                <LogoWithFallback className="h-10 w-10" />
                <div>
                  <h2 className="font-display text-lg font-bold leading-none text-[var(--color-text)]">Astra Cove</h2>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-[var(--color-muted)]">Premium Stay</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-action)] hover:text-[var(--color-text)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Links */}
            <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = isNavActive(pathname, item.href);

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${isActive
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                          }`}
                      >
                        {messages.nav[item.key]}
                        {isActive && (
                          <motion.div layoutId="active-dot" className="h-1.5 w-1.5 rounded-full bg-current" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-[var(--color-border)] p-6 bg-[var(--color-surface)]/30">
              <CallButton label={messages.nav.callToReserve} className="w-full justify-center py-4 text-base shadow-lg" />
              <div className="mt-6 flex justify-center gap-6 text-[var(--color-muted)] opacity-70">
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><span className="sr-only">Facebook</span>FB</a>
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><span className="sr-only">Instagram</span>IG</a>
                <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><span className="sr-only">Twitter</span>TW</a>
              </div>
              <p className="mt-6 text-center text-[10px] text-[var(--color-muted)]/50">
                &copy; {new Date().getFullYear()} Astra Cove.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const { messages } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 px-4">
        {/* Desktop Navbar */}
        <FloatingDesktopNav pathname={pathname} messages={messages} />

        {/* Mobile Top Bar */}
        <div className="glass-panel flex h-16 items-center justify-between rounded-full border border-[var(--color-border)]/50 bg-[var(--color-bg)]/80 px-3 pl-3 shadow-lg backdrop-blur-md lg:hidden">
          <Link href="/" className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3">
            <LogoWithFallback className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-[var(--color-text)] leading-none">Astra Cove</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 pr-1">
            <LanguageSwitch />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-md active:scale-95 transition-transform ml-1"
              aria-label="Open Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar (Drawer) */}
      <SidebarMobileMenu isOpen={mobileOpen} setOpen={setMobileOpen} pathname={pathname} messages={messages} />
    </>
  );
}
