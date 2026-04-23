"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

const actions = [
  {
    label: "Call",
    href: businessInfo.phoneHref,
    Icon: Phone,
    className: "bg-[#1e3a5f] text-white hover:bg-[#294e7a]"
  },
  {
    label: "WhatsApp",
    href: businessInfo.whatsappHref,
    Icon: MessageCircle,
    className: "bg-[#25D366] text-black hover:bg-[#1ebe5d]"
  },
  {
    label: "Directions",
    href: businessInfo.directionsHref,
    Icon: MapPin,
    className: "bg-[#6b4e32] text-white hover:bg-[#86653f]"
  }
];

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-kj-border bg-kj-bg/96 px-3 py-2 shadow-[0_-12px_32px_rgba(0,0,0,0.42)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map(({ label, href, Icon, className }) => (
          <Link
            key={label}
            href={href}
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-[4px] text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${className}`}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
