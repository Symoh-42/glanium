"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-sm shadow-sm shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" aria-label="Glanium Engineering home">
            <Logo className="h-9 w-auto sm:h-11" priority />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  pathname === item.href ? "text-accent" : "text-cream/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={telLink()}
              className="flex items-center gap-2 font-heading text-sm font-medium text-cream/85 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
            <Link
              href="/quote"
              className="rounded-none border border-accent bg-accent px-5 py-2.5 font-heading text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-transparent hover:text-accent"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span className="block h-0.5 w-6 bg-cream" />
            <span className="block h-0.5 w-6 bg-cream" />
            <span className="block h-0.5 w-4 self-end bg-cream" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
