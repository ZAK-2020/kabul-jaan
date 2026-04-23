import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, Users } from "lucide-react";
import { GalleryMosaic } from "@/components/gallery-mosaic";
import { HeroSection } from "@/components/hero-section";
import { LocationSection } from "@/components/location-section";
import { MenuCard } from "@/components/menu-card";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { SectionIntro } from "@/components/section-intro";
import { featuredDishes } from "@/lib/site-data";

const storyNotes = [
  {
    title: "Coal",
    copy: "Kebabs with charred edges and warm spice.",
    Icon: Flame
  },
  {
    title: "Gather",
    copy: "Tables made for family noise.",
    Icon: Users
  },
  {
    title: "Glow",
    copy: "Tungsten, brass, and evening energy.",
    Icon: Sparkles
  }
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section id="story" className="relative overflow-hidden border-t border-kj-border bg-kj-bg px-4 py-20 md:px-8 md:py-28">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16px 16px, var(--color-accent) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 28px"
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.85fr] md:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Our room"
              title="A Kabul-born table under amber light."
              showSunburst
            >
              <p>
                Kabul Jaan is built for families, Eid nights, wedding dinners,
                and the soft hour when tea keeps the table talking. The floor is
                sharp black and ivory. The ceiling breaks into warm geometry.
                The illuminated tree columns make the whole room glow.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyNotes.map(({ title, copy, Icon }) => (
                <div
                  key={title}
                  className="border-l border-kj-border pl-5"
                >
                  <Icon className="mb-3 text-kj-accent" size={22} />
                  <h3 className="font-display text-2xl text-kj-text">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-kj-muted">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-kj-border bg-kj-bg">
              <Image
                src="/images/img4.PNG"
                alt="Warm Kabul Jaan dining room with illuminated tree column"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover [object-position:50%_48%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-kj-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionIntro
                eyebrow="Signature dishes"
                title="Rice slow. Dumplings folded. Kebabs loud."
              >
                <p>
                  The menu keeps its center close to Afghan homes: palaw,
                  mantu, bolani, and coals.
                </p>
              </SectionIntro>
              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-kj-accent px-5 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent transition-colors duration-200 hover:bg-kj-accent/10 md:mb-1"
              >
                Full Menu
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <Reveal key={dish.title} delay={index * 0.08}>
                <MenuCard dish={dish} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-kj-border bg-kj-surface px-4 py-20 text-kj-text md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
              <div>
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-kj-terracotta">
                  <span className="h-px w-10 bg-kj-terracotta" />
                  Gallery
                </p>
                <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                  The room carries the appetite.
                </h2>
                <p className="mt-5 text-base leading-7 text-kj-muted">
                  Teal-quilted chairs, amber signage, warm ceiling geometry,
                  and tungsten light set the rhythm before the first plate lands.
                </p>
              </div>
              <GalleryMosaic />
            </div>
          </Reveal>
        </div>
      </section>

      <ReviewsSection />

      <LocationSection />

      <section className="relative overflow-hidden bg-kj-bg px-4 py-20 md:px-8 md:py-28">
        <div className="absolute inset-y-0 left-0 w-1 bg-kj-accent" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
              Tonight at Kabul Jaan
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-kj-text md:text-6xl">
              Bring the family. We will keep the rice warm.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/reservations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-kj-accent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent-ink transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-kj-accent-hover"
            >
              Reserve a Table
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
