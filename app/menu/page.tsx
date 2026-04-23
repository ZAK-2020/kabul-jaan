import type { Metadata } from "next";
import {
  Beef,
  ChefHat,
  Fish,
  GlassWater,
  Salad,
  Soup,
  UtensilsCrossed,
  Users
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { businessInfo, menuCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Kabul Jaan menu: family platters, karahi, rosh, tandoori meats, BBQ, Kabuli pulao, fish, desserts, lassi, and tea.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu | Kabul Jaan Restaurant",
    description:
      "Kebabs, palaw, mantu, bolani, and traditional Afghan desserts at Kabul Jaan.",
    url: "/menu"
  }
};

const iconMap = {
  Platters: Users,
  "Main Courses": Soup,
  "Tandoori & BBQ": Beef,
  Seafood: Fish,
  "Rice & Pulao": UtensilsCrossed,
  "Desserts & Beverages": GlassWater,
  "Sides, Breads & Extras": Salad
};

function toId(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function MenuPage() {
  return (
    <main className="bg-kj-bg">
      <section className="px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Menu"
              title="Kebabs, palaw, mantu, bolani, tea."
              showSunburst
            >
              <p>
                Full restaurant menu with family platters, karahi, rosh,
                tandoori, BBQ, pulao, desserts, drinks, and sides.
              </p>
            </SectionIntro>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="border-l-2 border-kj-accent bg-kj-surface-raised p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                  Google rating
                </p>
                <p className="mt-2 font-display text-4xl text-kj-text">
                  {businessInfo.googleRating}
                </p>
                <p className="mt-1 text-sm text-kj-muted">
                  {businessInfo.googleReviewCount} reviews
                </p>
              </div>
              <div className="border-l border-kj-border bg-kj-surface-raised p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                  Best sellers
                </p>
                <p className="mt-2 font-display text-2xl text-kj-text">
                  Rosh, Kabuli pulao, BBQ, and family platters.
                </p>
              </div>
              <div className="border-l border-kj-border bg-kj-surface-raised p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                  Quick booking
                </p>
                <p className="mt-2 text-sm leading-6 text-kj-muted">
                  Guests can call, WhatsApp, or reserve directly after browsing
                  the menu.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-y border-kj-border bg-kj-bg/92 px-4 py-3 backdrop-blur-xl md:top-20 md:px-8">
        <nav
          aria-label="Menu categories"
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto"
        >
          {menuCategories.map((category) => {
            const Icon = iconMap[category.title as keyof typeof iconMap] ?? ChefHat;

            return (
              <a
                key={category.title}
                href={`#${toId(category.title)}`}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-[4px] border border-kj-border px-3 text-xs font-semibold uppercase tracking-[0.08em] text-kj-text transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent"
              >
                <Icon size={15} />
                {category.title}
              </a>
            );
          })}
        </nav>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14">
          {menuCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.title as keyof typeof iconMap] ?? ChefHat;
            const featuredLayout = category.title === "Platters";

            return (
              <Reveal key={category.title} delay={categoryIndex * 0.04}>
                <section
                  id={toId(category.title)}
                  className="scroll-mt-36 border-l border-kj-border pl-5 md:pl-8"
                >
                  <div className="grid gap-6 md:grid-cols-[0.32fr_1fr] md:gap-10">
                    <div>
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-[4px] border border-kj-accent text-kj-accent">
                        <Icon size={24} />
                      </div>
                      <h2 className="font-display text-4xl font-semibold leading-tight text-kj-text">
                        {category.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-kj-muted">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid gap-8">
                      {category.groups.map((group) => (
                        <div key={group.title}>
                          <div className="mb-4 flex items-center gap-3">
                            <span className="h-px flex-1 bg-kj-border" />
                            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                              {group.title}
                            </h3>
                          </div>

                          <div
                            className={
                              featuredLayout
                                ? "grid gap-4 lg:grid-cols-2"
                                : "grid gap-0 border border-kj-border bg-kj-surface"
                            }
                          >
                            {group.items.map((item) => (
                              <article
                                key={`${group.title}-${item.title}`}
                                className={
                                  featuredLayout
                                    ? "flex h-full flex-col justify-between border border-kj-border bg-kj-surface p-5"
                                    : "grid gap-3 border-b border-kj-border/60 p-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-start"
                                }
                              >
                                <div>
                                  <h4 className="font-display text-xl font-semibold leading-snug text-kj-text">
                                    {item.title}
                                  </h4>
                                  <p className="mt-2 text-sm leading-6 text-kj-muted">
                                    {item.description}
                                  </p>
                                </div>
                                <p
                                  className={
                                    featuredLayout
                                      ? "mt-5 font-mono text-lg font-semibold text-kj-accent"
                                      : "font-mono text-sm font-semibold tabular-nums text-kj-accent sm:pt-1 sm:text-right"
                                  }
                                >
                                  {item.price}
                                </p>
                              </article>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
