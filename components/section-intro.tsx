import type { ReactNode } from "react";
import { Sunburst } from "@/components/sunburst";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  showSunburst?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  align = "left",
  showSunburst = false
}: SectionIntroProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {showSunburst ? (
        <Sunburst
          className={align === "center" ? "mx-auto mb-4" : "mb-4"}
        />
      ) : null}
      <p
        className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-kj-accent ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-kj-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-medium leading-tight text-kj-text md:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-7 text-kj-muted md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
