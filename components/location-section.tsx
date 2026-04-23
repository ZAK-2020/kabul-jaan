import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { businessInfo, hours } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export function LocationSection() {
  return (
    <section className="bg-kj-surface px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
        <Reveal>
          <SectionIntro
            eyebrow="Visit us"
            title="Easy to find. Easy to message. Easy to book."
            showSunburst
          >
            <p>
              The fastest path for a hungry guest is simple: call, WhatsApp, or
              open directions without searching again.
            </p>
          </SectionIntro>

          <div className="mt-8 grid gap-4">
            <div className="flex gap-4 border-l border-kj-border pl-5">
              <MapPin className="mt-1 text-kj-accent" size={20} />
              <div>
                <h3 className="font-display text-2xl text-kj-text">Address</h3>
                <p className="mt-1 text-sm leading-6 text-kj-muted">
                  {businessInfo.address}
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-l border-kj-border pl-5">
              <Clock className="mt-1 text-kj-accent" size={20} />
              <div>
                <h3 className="font-display text-2xl text-kj-text">Hours</h3>
                <dl className="mt-2 grid gap-2 text-sm text-kj-muted">
                  {hours.map(([day, time]) => (
                    <div key={day} className="grid gap-1">
                      <dt>{day}</dt>
                      <dd className="font-mono text-kj-accent-hover">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={businessInfo.whatsappHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#25D366] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>
            <Link
              href={businessInfo.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-kj-accent px-5 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent transition-colors duration-200 hover:bg-kj-accent/10"
            >
              <Phone size={18} />
              Call
            </Link>
            <Link
              href={businessInfo.directionsHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-kj-border px-5 text-sm font-semibold uppercase tracking-[0.08em] text-kj-text transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent"
            >
              Directions
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full min-h-[420px] overflow-hidden border border-kj-border bg-kj-bg">
            <iframe
              title="Kabul Jaan Restaurant location map"
              src={businessInfo.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0 grayscale invert-[0.92] hue-rotate-180"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
