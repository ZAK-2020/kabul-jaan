import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { ReservationForm } from "@/components/reservation-form";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { businessInfo, hours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Kabul Jaan Restaurant. Reserve online for family dinners, celebrations, and Eid nights.",
  alternates: { canonical: "/reservations" },
  openGraph: {
    title: "Reservations | Kabul Jaan Restaurant",
    description: "Book your table at Kabul Jaan.",
    url: "/reservations"
  }
};

export default function ReservationsPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Reservations"
              title="Tell us the night. We will ready the table."
              showSunburst
            >
              <p>
                Small family dinner, Eid table, anniversary, or wedding night.
                Send the details and the host will shape the room around it.
              </p>
            </SectionIntro>

            <div className="mt-10 grid gap-5">
              <div className="flex gap-4 border-l border-kj-border pl-5">
                <Phone className="mt-1 text-kj-accent" size={20} />
                <div>
                  <h2 className="font-display text-2xl text-kj-text">
                    Direct line
                  </h2>
                  <p className="mt-1 font-mono text-sm text-kj-accent-hover">
                    {businessInfo.phoneDisplay}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-l border-kj-border pl-5">
                <Clock className="mt-1 text-kj-accent" size={20} />
                <div>
                  <h2 className="font-display text-2xl text-kj-text">
                    Hours
                  </h2>
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
          </Reveal>

          <Reveal delay={0.08}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative min-h-[360px] overflow-hidden rounded-[8px] border border-kj-border bg-kj-bg">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.3]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 18%, transparent) 1px, transparent 1px), linear-gradient(0deg, color-mix(in srgb, var(--color-accent) 14%, transparent) 1px, transparent 1px)",
                  backgroundSize: "52px 52px"
                }}
              />
              <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center gap-4 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-[8px] border border-kj-accent bg-kj-bg text-kj-accent">
                  <MapPin size={30} />
                </span>
                <div>
                  <p className="font-display text-3xl text-kj-text">
                    Kabul Jaan Restaurant
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-kj-accent-hover">
                    Airport Road, near Honda Point
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
