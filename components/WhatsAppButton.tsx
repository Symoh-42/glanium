"use client";

import { whatsappLink, whatsappMessages } from "@/lib/site-config";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.01 3C9.38 3 4 8.36 4 14.97c0 2.2.6 4.26 1.63 6.04L4 29l8.2-2.14a12.9 12.9 0 0 0 3.8.57h.01c6.63 0 12.01-5.36 12.01-11.97C28.02 8.36 22.64 3 16.01 3Zm0 21.9c-1.68 0-3.32-.45-4.75-1.3l-.34-.2-4.86 1.27 1.3-4.73-.22-.35a9.86 9.86 0 0 1-1.52-5.62c0-5.47 4.46-9.92 9.94-9.92 5.47 0 9.92 4.45 9.92 9.92 0 5.48-4.45 9.93-9.97 9.93Zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsAppButton({
  message = whatsappMessages.general,
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 hidden items-center justify-center rounded-full bg-[#25D366] p-4 shadow-lg shadow-black/20 transition-transform hover:scale-105 md:flex ${className}`}
      aria-label="Chat with Glanium Engineering on WhatsApp"
    >
      <WhatsAppGlyph className="h-6 w-6 text-white" />
    </a>
  );
}

export { WhatsAppGlyph };
