import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Kabul Jaan Restaurant. Future jobs and restaurant roles will be posted here.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Kabul Jaan Restaurant",
    description:
      "Future kitchen, service, and floor roles at Kabul Jaan will be posted here.",
    url: "/careers"
  }
};

export default function CareersPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Careers"
              title="New jobs will be posted here soon."
              showSunburst
            >
              <p>
                Kabul Jaan is preparing future opportunities for warm hosts,
                sharp service teams, and kitchen talent who care about Afghan
                food and family dining.
              </p>
            </SectionIntro>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-l border-kj-border bg-kj-surface-raised p-7 md:p-9">
              <BriefcaseBusiness className="mb-5 text-kj-accent" size={30} />
              <p className="font-display text-3xl leading-tight text-kj-text md:text-4xl">
                Hiring updates are coming soon.
              </p>
              <p className="mt-5 text-base leading-7 text-kj-muted">
                When positions open, this page will list available roles,
                requirements, and how to apply.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
