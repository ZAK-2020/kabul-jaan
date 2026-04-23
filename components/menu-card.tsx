import type { Dish } from "@/lib/site-data";

type MenuCardProps = {
  dish: Dish;
};

export function MenuCard({ dish }: MenuCardProps) {
  return (
    <article className="flex items-center justify-between gap-4 border-b border-kj-border/50 py-4 last:border-0">
      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold leading-snug text-kj-text">
          {dish.title}
        </h3>
      </div>
      <p className="shrink-0 font-mono text-sm font-semibold tabular-nums text-kj-accent md:text-base">
        {dish.price}
      </p>
    </article>
  );
}
