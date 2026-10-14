"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { Logo } from "./Logo";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="flex h-full flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo className="h-9 w-auto" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-cream/10 py-4 font-heading text-3xl font-semibold text-cream"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-3 px-6 pb-10">
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 border border-cream/30 py-3 font-heading text-sm font-medium text-cream"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <Link
                href="/quote"
                onClick={onClose}
                className="flex items-center justify-center bg-accent py-3 font-heading text-sm font-semibold text-ink"
              >
                Request a Quote
              </Link>
              <p className="pt-2 text-center font-heading text-xs tracking-widest text-cream/40 uppercase">
                {siteConfig.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
