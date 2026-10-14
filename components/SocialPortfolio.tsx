import { Photo } from "./Photo";
import { FadeUp } from "./FadeUp";
import { InstagramIcon, TikTokIcon, XIcon } from "./Icon";
import { socialPosts } from "@/lib/socials";
import { siteConfig } from "@/lib/site-config";

const platformIcon = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
} as const;

const platformLink = {
  instagram: siteConfig.socials.instagram,
  tiktok: siteConfig.socials.tiktok,
  x: siteConfig.socials.x,
} as const;

export function SocialPortfolio({ limit }: { limit?: number }) {
  const posts = limit ? socialPosts.slice(0, limit) : socialPosts;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {posts.map((post, i) => {
        const PlatformIcon = platformIcon[post.platform];
        return (
          <FadeUp key={`${post.platform}-${i}`} delay={i * 0.04}>
            <a
              href={platformLink[post.platform]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden"
            >
              <Photo topic={post.topic} alt={post.caption} />
              <div className="absolute inset-0 flex flex-col justify-between bg-ink/0 p-3 transition-colors group-hover:bg-ink/40">
                <PlatformIcon className="h-4 w-4 text-cream" />
                <span className="translate-y-2 text-[11px] text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {post.caption}
                </span>
              </div>
            </a>
          </FadeUp>
        );
      })}
    </div>
  );
}
