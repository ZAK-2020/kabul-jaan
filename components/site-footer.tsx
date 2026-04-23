import { ArrowRight, Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { businessInfo, contactDetails, hours } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-kj-bg">
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl leading-tight text-kj-text">
              Kabul Jaan
            </p>
            <p className="mt-4 max-w-sm text-base leading-7 text-kj-muted">
              Charred kebabs, saffron-threaded rice, and a room glowing like
              dinner should.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
              Contact
            </h2>
            <div className="grid gap-4 text-sm text-kj-text/80">
              {contactDetails.map((detail) => (
                <Link
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-kj-accent"
                >
                  {detail.label === "Phone" ? <Phone size={17} /> : null}
                  {detail.label === "WhatsApp" ? <MessageCircle size={17} /> : null}
                  {detail.label === "Instagram" ? <Camera size={17} /> : null}
                  {detail.label === "Address" ? <MapPin size={17} /> : null}
                  {detail.value}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
              Hours
            </h2>
            <dl className="grid gap-3 text-sm text-kj-text/78">
              {hours.map(([day, time]) => (
                <div key={day} className="grid gap-1">
                  <dt>{day}</dt>
                  <dd className="font-mono text-kj-accent-hover">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-kj-border pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
              Ready for dinner?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-kj-muted">
              Call, message, or open directions. Every footer action now leads
              to a real customer step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={businessInfo.whatsappHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#25D366] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>
            <Link
              href={businessInfo.directionsHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-kj-accent px-5 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent transition-colors duration-200 hover:bg-kj-accent/10"
            >
              Directions
              <ArrowRight size={18} />
            </Link>
          </div>
          <p className="text-sm text-kj-text/50 md:col-span-2">
            Copyright 2026 Kabul Jaan Restaurant. Taste the tradition.
          </p>
        </div>
      </div>
    </footer>
  );
}
