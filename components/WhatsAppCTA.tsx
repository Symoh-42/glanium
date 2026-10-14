import { ArrowUpRight } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/site-config";

export function WhatsAppCTA({
  messageKey,
  label = "Request Quote",
  variant = "dark",
  className = "",
}: {
  messageKey: keyof typeof whatsappMessages;
  label?: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const variantClasses =
    variant === "light"
      ? "border-cream/30 text-cream hover:border-accent hover:bg-accent hover:text-ink"
      : "border-ink text-ink hover:border-accent hover:bg-accent hover:text-ink";
  return (
    <a
      href={whatsappLink(whatsappMessages[messageKey])}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 border px-4 py-2.5 font-heading text-xs font-semibold tracking-wide transition-colors ${variantClasses} ${className}`}
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}
