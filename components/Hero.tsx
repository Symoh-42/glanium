"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { Icon } from "./Icon";

const floatingDetails = [
  { icon: "SquareStack", label: "ALUMINIUM", value: "Windows & Doors" },
  { icon: "Layers", label: "STEEL", value: "Doors & Structures" },
  { icon: "ShieldCheck", label: "SECURITY", value: "Automated & Manual Gates" },
  { icon: "Sparkles", label: "FINISH", value: "Custom Powder Coating" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Photo topic="heroEntrance" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block font-heading text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Architectural Metalwork &amp; Fabrication
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Built With Precision.
          <br />
          Designed To Stand Out.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base text-cream/75 sm:text-lg"
        >
          Glanium Engineering designs, fabricates and installs premium
          aluminium and steel solutions for modern residential and
          commercial spaces across Kenya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/quote"
            className="group flex items-center gap-2 bg-accent px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-cream"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="border border-cream/40 px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Explore Our Work
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 font-heading text-xs font-medium tracking-[0.2em] text-cream/50 uppercase"
        >
          Nairobi &bull; Kenya &bull; Countrywide Installation
        </motion.p>
      </div>

      <div className="relative z-10 hidden w-full border-t border-cream/10 bg-ink/60 backdrop-blur-sm lg:grid lg:grid-cols-4">
        {floatingDetails.map((detail, i) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
            className={`flex items-center gap-3 px-8 py-5 ${
              i !== 0 ? "border-l border-cream/10" : ""
            }`}
          >
            <Icon name={detail.icon} className="h-5 w-5 text-accent" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[11px] font-bold tracking-[0.2em] text-cream">
                {detail.label}
              </span>
              <span className="text-xs text-cream/60">{detail.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
