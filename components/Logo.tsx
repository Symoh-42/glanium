import Image from "next/image";

// Extracted from the brand flyer (public/logo.png). "white" swaps the navy
// lettering to white for use on ink/navy backgrounds.
export function Logo({
  variant = "white",
  className = "h-10 w-auto",
  priority = false,
}: {
  variant?: "white" | "color";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "white" ? "/logo-full-white.png" : "/logo-full.png"}
      alt="Glanium Engineering"
      width={535}
      height={161}
      priority={priority}
      className={className}
    />
  );
}
