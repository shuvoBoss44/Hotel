import "./globals.css";
import Providers from "@/components/providers";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";

export const metadata = {
  title: "Astra Cove Resort",
  description: "Enterprise-style static resort and travel showcase website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <Providers>
          <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
            <SiteNavbar />
            <main className="relative z-10">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
