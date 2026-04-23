"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import type { FormEvent } from "react";

const fields = [
  { label: "Name", type: "text", name: "name", required: true },
  { label: "Phone", type: "tel", name: "phone", required: true },
  { label: "Date", type: "date", name: "date", required: true },
  { label: "Time", type: "time", name: "time", required: true },
  { label: "Guests", type: "number", name: "guests", min: "1", required: true }
];

const whatsappNumber = "923368156071";

export function ReservationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) ?? "").trim();
    const notes = getValue("notes");
    const message = [
      "Hello Kabul Jaan, I would like to reserve a table.",
      "",
      `Name: ${getValue("name")}`,
      `Phone: ${getValue("phone")}`,
      `Date: ${getValue("date")}`,
      `Time: ${getValue("time")}`,
      `Guests: ${getValue("guests")}`,
      notes ? `Notes: ${notes}` : null
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 border border-kj-border bg-kj-surface-raised p-6 md:p-8"
    >
      <div className="flex items-center gap-3 text-kj-accent">
        <CalendarDays aria-hidden="true" size={20} />
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
          Reservation
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {fields.map(({ label, ...field }) => (
          <label key={field.name} className="grid gap-2">
            <span className="text-[0.8125rem] font-medium text-kj-text/75">
              {label}
            </span>
            <input
              {...field}
              suppressHydrationWarning
              className="h-12 border-0 border-b border-kj-border bg-transparent px-0 text-kj-text outline-none transition-colors duration-200 placeholder:text-kj-text/35 focus:border-b-2 focus:border-kj-accent"
            />
          </label>
        ))}
      </div>
      <label className="grid gap-2">
        <span className="text-[0.8125rem] font-medium text-kj-text/75">
          Notes
        </span>
        <textarea
          name="notes"
          rows={4}
          suppressHydrationWarning
          className="resize-none border-0 border-b border-kj-border bg-transparent px-0 py-3 text-kj-text outline-none transition-colors duration-200 placeholder:text-kj-text/35 focus:border-b-2 focus:border-kj-accent"
        />
      </label>
      <button
        type="submit"
        suppressHydrationWarning
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-kj-accent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-kj-accent-ink transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-kj-accent-hover md:w-fit"
      >
        Send Request
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
