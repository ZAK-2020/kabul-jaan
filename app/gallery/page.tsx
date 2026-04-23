import type { Metadata } from "next";
import { GalleryMosaic } from "@/components/gallery-mosaic";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of Kabul Jaan - dining room, kitchen moments, and signature Afghan plates.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Kabul Jaan Restaurant",
    description:
      "See the Kabul Jaan room, the food, and the glow. A visual tour of amber signs, teal chairs, and sharp floors.",
    url: "/gallery"
  }
};

export default function GalleryPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Gallery"
              title="A room of amber signs, teal chairs, and sharp floors."
              showSunburst
            >
              <p>
                The gallery is asymmetric on purpose. Kabul Jaan is all rhythm:
                columns, angles, stair rails, and tables set under warm light.
              </p>
            </SectionIntro>
          </Reveal>
        </div>
      </section>
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.08}>
            <GalleryMosaic />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
