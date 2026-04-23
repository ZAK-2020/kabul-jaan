import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import { LocationSection } from "@/components/location-section";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kabul Jaan Restaurant - reservations, WhatsApp, Instagram, and directions to our dining room in Quetta.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Kabul Jaan Restaurant",
    description: "Call, message, or follow Kabul Jaan Restaurant.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Contact"
              title="Call, message, or follow the glow."
              showSunburst
            >
              <p>
                Book the table, ask about a family event, or send the guest
                count before the rice pot starts.
              </p>
            </SectionIntro>
            <div className="mt-10 grid gap-4">
              {contactDetails.map((detail) => (
                <Link
                  key={detail.label}
                  href={detail.href}
                  className="group flex items-center justify-between gap-5 border-l-2 border-kj-accent bg-kj-surface-raised p-5 transition-colors duration-200 hover:bg-kj-surface-hover"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-kj-accent">
                      {detail.label === "WhatsApp" ? <MessageCircle size={22} /> : null}
                      {detail.label === "Instagram" ? <Camera size={22} /> : null}
                      {detail.label === "Address" ? <MapPin size={22} /> : null}
                      {detail.label === "Phone" ? <Phone size={22} /> : null}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                        {detail.label}
                      </span>
                      <span className="mt-1 block text-kj-text">
                        {detail.value}
                      </span>
                    </span>
                  </span>
                  <ArrowRight
                    className="text-kj-accent transition-transform duration-200 group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-kj-border bg-kj-bg">
              <Image
                src="/images/img6.PNG"
                alt="Kabul Jaan exterior amber signage"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover [object-position:50%_48%]"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <LocationSection />
    </main>
  );
}
