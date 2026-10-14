import {
  SquareStack,
  Layers,
  ShieldCheck,
  Sparkles,
  Ruler,
  PenTool,
  Wrench,
  DoorOpen,
  DoorClosed,
  Building2,
  Home,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Hammer,
  Paintbrush,
  ClipboardCheck,
  FileSearch,
  Compass,
  Package,
  ScanLine,
  Truck,
  CheckCircle2,
  Building,
  Users,
  Factory,
  Grid3x3,
  Lock,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  SquareStack,
  Layers,
  ShieldCheck,
  Sparkles,
  Ruler,
  PenTool,
  Wrench,
  DoorOpen,
  DoorClosed,
  Building2,
  Home,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Hammer,
  Paintbrush,
  ClipboardCheck,
  FileSearch,
  Compass,
  Package,
  ScanLine,
  Truck,
  CheckCircle2,
  Building,
  Users,
  Factory,
  Grid3x3,
  Lock,
  Zap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = iconMap[name] ?? Sparkles;
  return <Component className={className} aria-hidden="true" />;
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-2.63-2.63V3h-3.34v13.07a2.6 2.6 0 1 1-1.84-2.49v-3.4a5.97 5.97 0 1 0 5.18 5.9V9.4a7.62 7.62 0 0 0 4.4 1.4V7.46a4.28 4.28 0 0 1-1.77-1.64Z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
