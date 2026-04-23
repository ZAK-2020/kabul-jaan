import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Kabul Jaan - Afghan hospitality reimagined in a modern, tungsten-lit dining room built for celebration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Kabul Jaan Restaurant",
    description:
      "Afghan food in a room built for celebration. Learn about Kabul Jaan's kitchen and space.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.92fr] md:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Story"
              title="Afghan food in a room built for celebration."
              showSunburst
            >
              <p>
                Kabul Jaan takes the warmth of Afghan hosting and gives it a
                modern, opulent room: illuminated tree columns, black and ivory
                floor geometry, brass slats, and teal chairs ready for long
                tables.
              </p>
              <p className="mt-4">
                The cooking stays grounded. Rice should be slow. Kebabs should
                carry smoke. Dumplings should arrive soft under yogurt and
                paprika oil. Tea should keep coming.
              </p>
            </SectionIntro>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-kj-border bg-kj-bg">
              <Image
                src="/images/img5.PNG"
                alt="Kabul Jaan teal dining chairs and staircase"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover [object-position:50%_54%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-kj-bg px-4 py-20 md:px-8 md:py-28">
        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Floor", "A black and ivory harlequin rhythm, sharp and theatrical."],
            ["Columns", "Lit trunks rise through the room and soften into branches."],
            ["Ceiling", "Hexagonal panels echo Art Deco geometry without shouting."]
          ].map(([title, copy]) => (
            <Reveal key={title}>
              <article className="border-l border-kj-border pl-6">
                <h2 className="font-display text-3xl text-kj-text">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-7 text-kj-muted">
                  {copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-kj-surface px-4 py-20 text-kj-text md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-kj-terracotta">
              Our promise
            </p>
            <p className="font-display text-5xl leading-tight text-kj-text md:text-7xl">
              Warm food. Bright rooms. Long tables.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-kj-muted">
              A modern Afghan dining room for family meals, celebrations, and
              the kind of nights that keep tea moving around the table.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
