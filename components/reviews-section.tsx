import { Star } from "lucide-react";
import { businessInfo, reviews } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-kj-accent" aria-label={`${count} star review`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={17}
          className={index < count ? "fill-current" : "text-kj-text/22"}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-y border-kj-border bg-kj-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <SectionIntro
              eyebrow="Google reviews"
              title="Social proof the owner can sell with."
            >
              <p>
                A strong local rating and visible customer comments make the
                site feel trusted before a guest ever calls.
              </p>
            </SectionIntro>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border-l-2 border-kj-accent bg-kj-surface-raised p-5">
                <p className="font-display text-5xl text-kj-text">
                  {businessInfo.googleRating}
                </p>
                <div className="mt-2">
                  <Stars count={4} />
                </div>
                <p className="mt-3 text-sm text-kj-muted">
                  Based on {businessInfo.googleReviewCount} Google reviews.
                </p>
              </div>
              <div className="bg-kj-surface-raised p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                  Best for
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-kj-text">
                  Afghan dinner, family tables, and rosh.
                </p>
              </div>
              <div className="bg-kj-surface-raised p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent">
                  Location
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-kj-text">
                  Airport Road, Quetta.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <article className="h-full border border-kj-border bg-kj-surface p-5">
                <Stars count={review.rating} />
                <p className="mt-5 text-base leading-7 text-kj-text">
                  "{review.quote}"
                </p>
                <div className="mt-6 border-t border-kj-border pt-4">
                  <p className="font-semibold text-kj-text">{review.name}</p>
                  <p className="mt-1 text-sm text-kj-muted">{review.meta}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
