import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { InstagramIcon, TikTokIcon, XIcon } from "./Icon";
import { siteConfig, telLink } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink pb-24 pt-16 text-cream md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-cream/60">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] text-cream/50 uppercase">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] text-cream/50 uppercase">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> {siteConfig.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={telLink()} className="hover:text-accent">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] text-cream/50 uppercase">
              Follow
            </h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Glanium Engineering on Instagram"
                className="text-cream/75 transition-colors hover:text-accent"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Glanium Engineering on TikTok"
                className="text-cream/75 transition-colors hover:text-accent"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Glanium Engineering on X"
                className="text-cream/75 transition-colors hover:text-accent"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
            <Link
              href="/quote"
              className="mt-6 inline-block border border-accent px-5 py-2.5 font-heading text-xs font-semibold tracking-wide text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-cream/40">
          &copy; {year} Glanium Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
