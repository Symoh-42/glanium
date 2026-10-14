import Image from "next/image";
import { images, unsplashUrl, type ImageKey } from "@/lib/images";

export function Photo({
  topic,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  topic: ImageKey;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={unsplashUrl(topic)}
        alt={alt ?? images[topic].alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    </div>
  );
}
