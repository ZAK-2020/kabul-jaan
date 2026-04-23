"use client";

import { CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { businessInfo, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-kj-border bg-[var(--color-nav-bg)] shadow-[var(--shadow-nav)] backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Kabul Jaan home">
          <span className="relative h-14 w-14 shrink-0 md:h-16 md:w-16">
            <Image
              src="/images/logo.png"
              alt="Kabul Jaan logo"
              fill
              priority
              sizes="(min-width: 768px) 64px, 56px"
              className="object-contain"
            />
          </span>
          <span className="hidden font-display text-3xl leading-none text-kj-text sm:block">
            Kabul Jaan
          </span>
        </Link>

        <nav className="hidden justify-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200 hover:text-kj-accent ${
                  active ? "text-kj-accent" : "text-kj-text/85"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-kj-accent transition-transform duration-200 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/reservations"
            className="hidden h-12 items-center gap-2 rounded-[4px] bg-kj-accent px-5 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent-ink transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-kj-accent-hover md:inline-flex"
          >
            <CalendarDays aria-hidden="true" size={18} />
            Reserve
          </Link>
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-12 items-center gap-2 rounded-[4px] border border-kj-border bg-[#25D366] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:inline-flex"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.11 4.91A10 10 0 0 0 4.1 18.3L3 22l3.79-1.08a10 10 0 0 0 15.11-8.6 10 10 0 0 0-2.79-7.4Zm-7.11 15.4a8.28 8.28 0 0 1-4.22-1.16l-.3-.18-2.25.64.6-2.2-.2-.31a8.34 8.34 0 1 1 15.48-4.38 8.26 8.26 0 0 1-9.11 7.59Zm4.54-6.21c-.25-.12-1.47-.72-1.7-.8s-.4-.12-.56.13-.64.8-.78.96-.29.19-.53.06a6.75 6.75 0 0 1-2-1.23 7.47 7.47 0 0 1-1.38-1.72c-.14-.24 0-.37.11-.49s.25-.29.37-.43a1.63 1.63 0 0 0 .25-.41.46.46 0 0 0 0-.43c-.06-.12-.56-1.34-.76-1.83s-.4-.41-.55-.42h-.48a.92.92 0 0 0-.67.31 2.81 2.81 0 0 0-.87 2.09 4.86 4.86 0 0 0 1 2.6 11.13 11.13 0 0 0 4.25 3.77 14.55 14.55 0 0 0 1.42.52 3.41 3.41 0 0 0 1.57.1 2.56 2.56 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.09-.22-.14-.47-.27Z" />
            </svg>
            WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-kj-border text-kj-text transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-kj-border bg-kj-bg px-4 py-5 md:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {[...navItems, { label: "Reservations", href: "/reservations" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[4px] border border-kj-border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-kj-text transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
