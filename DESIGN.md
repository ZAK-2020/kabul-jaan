\# DESIGN.md — Kabul Jaan Restaurant



> Design specification for AI coding agents. Drop this into the Next.js project root and pass it as binding context before generating UI.



\---



\## 1. Brand Essence



\*\*Kabul Jaan\*\* is an Afghan restaurant with a modern, opulent interpretation — not a rustic/traditional bazaar aesthetic. Think Kabul-meets-Art Deco with a warm tungsten glow. The space is built around illuminated tree columns, hexagonal wood-panel ceilings, black-and-white harlequin floors, saturated amber signage, and teal-quilted dining chairs. The brand slogan is \*"taste the tradition."\*



\- \*\*Positioning\*\*: Upscale-casual, family-friendly, event-worthy (Eid, weddings, anniversaries).

\- \*\*Mood\*\*: Warm, ornate, theatrical, celebratory. Dinner-service energy, not brunch.

\- \*\*Cultural register\*\*: Afghan heritage presented through a contemporary, confident lens. Arabic/Persian script treatments are welcome but must be deliberate, not decorative filler.

\- \*\*One thing to remember\*\*: The illuminated tree columns and the harlequin floor are the brand's signature visuals. The website should echo both.



\### Guiding principles

1\. \*\*Warmth over coolness.\*\* Tungsten, amber, and candlelight — never fluorescent or "cloud-SaaS" blue.

2\. \*\*Ornament with restraint.\*\* Use one ornate element per section, not five.

3\. \*\*Darkness is the default.\*\* Dark hero, dark menu, ivory body only where legibility demands it.

4\. \*\*Texture carries the weight.\*\* Gold hairlines, subtle grain, pattern overlays — not drop shadows.

5\. \*\*Bilingual awareness.\*\* Latin primary, Arabic/Persian as confident accent (menu items, tagline).



\---



\## 2. Color Tokens



Derived directly from the logo (navy shield, orange/amber ribbon, ivory crest), exterior signage (yellow-on-black), and interior upholstery.



\### Core palette



| Token | Hex | Role |

|---|---|---|

| `--kj-navy-900` | `#0D1A3A` | Primary brand anchor (logo base, hero bg) |

| `--kj-navy-800` | `#132450` | Elevated surfaces on dark |

| `--kj-navy-700` | `#1C3167` | Hover/active on navy |

| `--kj-amber-500` | `#F2A83B` | Primary accent (CTAs, signage echo) |

| `--kj-amber-400` | `#F5BC5E` | Hover state for amber |

| `--kj-gold-600` | `#C08A2E` | Hairlines, borders, dividers |

| `--kj-terracotta-500` | `#C5532B` | Secondary accent (upholstery echo) |

| `--kj-teal-700` | `#1F4A4A` | Tertiary accent (dining chair echo) |

| `--kj-ivory-50` | `#F7F1E3` | Body text on dark, warm off-white |

| `--kj-ivory-100` | `#EFE6D1` | Section backgrounds (light mode) |

| `--kj-black` | `#0A0A0A` | True black for signage blocks |



\### Seasonal accent (Eid, spring menu)



| Token | Hex | Role |

|---|---|---|

| `--kj-blossom-400` | `#F4A5B8` | Cherry-blossom pink — campaign-only, never primary |



\### Semantic tokens



```css

\--color-bg: var(--kj-navy-900);

\--color-surface: var(--kj-navy-800);

\--color-text: var(--kj-ivory-50);

\--color-muted: rgba(247, 241, 227, 0.62);

\--color-border: rgba(192, 138, 46, 0.35);   /\* gold hairline \*/

\--color-accent: var(--kj-amber-500);

\--color-accent-ink: var(--kj-navy-900);      /\* text on amber \*/

\--color-cta-bg: var(--kj-amber-500);

\--color-cta-ink: var(--kj-navy-900);

```



\### Palette rules

\- \*\*60/30/10\*\* — navy dominant, ivory supporting, amber accent. Never let amber exceed 15% of any viewport.

\- Terracotta and teal are \*\*spot accents only\*\* (category tiles, chair-inspired illustrations). Never large fills.

\- Blossom pink is \*\*campaign-only\*\*. Never in the default theme.

\- No pure white (`#FFFFFF`) and no pure cold grays. Everything warms toward ivory.



\---



\## 3. Typography



\### Families



```css

\--font-display: "Fraunces", "Playfair Display", Georgia, serif;

\--font-body: "Manrope", "Inter", system-ui, sans-serif;

\--font-arabic: "Amiri", "Noto Naskh Arabic", serif;  /\* for Persian/Pashto text \*/

\--font-mono: "JetBrains Mono", ui-monospace, monospace;  /\* for prices, timings \*/

```



Fraunces is chosen for its optical-size and SOFT axis — dial SOFT to 50 and opsz to 120+ for headlines to get that warm, slightly-bookish editorial feel. It is explicitly \*\*not\*\* Playfair Display (too brittle) or Inter-display (too flat). Do not substitute Cormorant or EB Garamond without updating this file.



\### Scale (desktop)



| Token | Size / Line-height | Weight | Use |

|---|---|---|---|

| `--text-display` | `clamp(3.5rem, 7vw, 6.5rem) / 0.95` | 400 | Hero wordmark |

| `--text-h1` | `clamp(2.5rem, 5vw, 4rem) / 1.05` | 400 | Page titles |

| `--text-h2` | `2.25rem / 1.1` | 500 | Section headings |

| `--text-h3` | `1.5rem / 1.2` | 600 | Menu category |

| `--text-h4` | `1.125rem / 1.3` | 600 | Dish name |

| `--text-body` | `1rem / 1.6` | 400 | Body copy (Manrope) |

| `--text-small` | `0.875rem / 1.5` | 500 | Metadata, captions |

| `--text-eyebrow` | `0.75rem / 1.4` | 600 | Uppercase labels, +180 tracking |



\### Typographic rules

\- \*\*Display serif + modern sans only.\*\* No third typeface without explicit update.

\- \*\*Headings in Fraunces are always tracked tight\*\* (`letter-spacing: -0.02em`). No exceptions.

\- \*\*Eyebrow labels\*\* are uppercase, Manrope 600, tracked `+0.18em`, often preceded by an amber horizontal rule (`—— EYEBROW`).

\- \*\*Menu prices\*\* in `--font-mono` to let numerals align vertically. Never in a serif.

\- \*\*Persian/Arabic tagline\*\* (`کابل جان — طعم سنت` or similar) appears in Amiri at 0.9× the Latin size, with `direction: rtl` handled properly.

\- \*\*Never set body text in Fraunces.\*\* Fraunces is display-only.



\---



\## 4. Spacing, Radius \& Elevation



\### Spacing scale (4px base)



```css

\--space-1: 0.25rem;   /\* 4 \*/

\--space-2: 0.5rem;    /\* 8 \*/

\--space-3: 0.75rem;   /\* 12 \*/

\--space-4: 1rem;      /\* 16 \*/

\--space-6: 1.5rem;    /\* 24 \*/

\--space-8: 2rem;      /\* 32 \*/

\--space-12: 3rem;     /\* 48 \*/

\--space-16: 4rem;     /\* 64 \*/

\--space-24: 6rem;     /\* 96 \*/

\--space-32: 8rem;     /\* 128 — section padding on desktop \*/

```



\### Radius



```css

\--radius-sm: 2px;   /\* inputs, hairline containers \*/

\--radius-md: 4px;   /\* cards, buttons \*/

\--radius-lg: 8px;   /\* images, hero media \*/

\--radius-pill: 999px;  /\* ONLY for category chips, never for cards \*/

```



\*\*Rule:\*\* The brand reads as architectural/structural. Keep radii small. The harlequin floor is all sharp angles — the UI should respect that.



\### Elevation — use borders, not shadows



Do \*\*not\*\* use `box-shadow` for elevation on dark backgrounds. Instead use gold hairlines:



```css

\--border-hairline: 1px solid rgba(192, 138, 46, 0.35);

\--border-hairline-strong: 1px solid rgba(242, 168, 59, 0.65);

```



Shadows are permitted \*\*only\*\* on food photography lift-ups (hover states) and the fixed nav bar backdrop.



\---



\## 5. Signature Motifs



These are the website's "tells" — the details that make it unmistakably Kabul Jaan and not a Squarespace template.



\### 5.1 Harlequin floor pattern

A black-and-white diamond-grid derived from the restaurant's actual floor. Use as:

\- Full-bleed footer background (subtle, 0.06 opacity)

\- Hero section texture behind the wordmark

\- Section divider between "About" and "Menu"



```css

.harlequin {

&#x20; background-image:

&#x20;   linear-gradient(45deg, var(--kj-ivory-100) 25%, transparent 25%),

&#x20;   linear-gradient(-45deg, var(--kj-ivory-100) 25%, transparent 25%),

&#x20;   linear-gradient(45deg, transparent 75%, var(--kj-ivory-100) 75%),

&#x20;   linear-gradient(-45deg, transparent 75%, var(--kj-ivory-100) 75%);

&#x20; background-size: 40px 40px;

&#x20; background-position: 0 0, 0 20px, 20px -20px, -20px 0;

&#x20; background-color: var(--kj-black);

&#x20; opacity: 0.06;

}

```



\### 5.2 Hexagonal grid (ceiling echo)

A flat-top hexagonal grid as a CSS/SVG pattern. Use behind the "Our Story" or "Gallery" section at 0.08 opacity, amber-on-navy. Reinforces the ceiling motif without being literal.



\### 5.3 Illuminated tree column (hero)

The illuminated-tree column from the photos is the strongest singular visual. In the hero, layer the actual photo behind the wordmark with a radial dark-to-transparent gradient centered on the trunk, so the branches fade into the navy. This is the site's most memorable moment.



\### 5.4 Gold vertical slats (menu dividers)

The interior has gold vertical slat treatments on walls. Translate to `border-left: 1px solid var(--color-border)` on menu-category columns, with a 1rem inset, echoing the architectural rhythm.



\### 5.5 Sunburst/fan accent

The sunburst wall panels become a small SVG flourish above section eyebrows (an amber 20px arc of 9 thin rays). Use sparingly — max twice per page.



\### 5.6 Cherry blossom (seasonal only)

Appears for Eid / spring campaigns. A single blossom sprig SVG in the corner of the announcement banner. Removed from the default theme.



\---



\## 6. Components



\### 6.1 Buttons



```

Primary:     bg: amber-500    | ink: navy-900    | radius: md | border: none

Secondary:   bg: transparent  | ink: amber-500   | radius: md | border: 1px amber-500

Ghost:       bg: transparent  | ink: ivory-50    | radius: md | border: 1px ivory/30

Disabled:    bg: navy-800     | ink: ivory/30    | cursor: not-allowed

```



\- Height: `48px` (desktop), `44px` (mobile).

\- Padding: `0 1.5rem`.

\- Label: Manrope 600, uppercase, `tracking: 0.08em`, `0.875rem`.

\- Hover: primary lifts to amber-400; secondary fills with amber-500/10.

\- Transition: `background 180ms ease, transform 180ms ease`.

\- \*\*Never\*\* use gradient-fill buttons. \*\*Never\*\* use fully-rounded pills except for category chips.



\### 6.2 Navigation



\- Fixed top, `80px` tall on desktop, `64px` on mobile.

\- Background: `rgba(13, 26, 58, 0.85)` with `backdrop-filter: blur(12px)`.

\- Bottom border: gold hairline.

\- Logo left (use the actual shield logo provided), nav links centered, reservation CTA right.

\- Nav links: Manrope 500, uppercase, `0.8125rem`, `+0.12em` tracking. Amber underline on hover (2px, animates width from 0 → 100%).



\### 6.3 Menu card



```

Container:  bg: navy-800                | border-left: 2px amber-500 | padding: 1.5rem 2rem

Title:      Fraunces 600, 1.25rem, ivory-50

Persian:    Amiri 400, 0.95rem, amber-500 (optional, below title)

Description: Manrope 400, 0.9375rem, ivory/70, max 2 lines

Price:      JetBrains Mono 500, 1rem, amber-500, tabular-nums

```



\- \*\*No rounded corners beyond `--radius-md`.\*\* No drop shadow. The amber left-border is the signature.

\- On hover: border widens to 4px, description reveals full length (if truncated), background lightens by 4%.



\### 6.4 Hero



\- Full-viewport height on desktop (`min-height: 100vh`), `85vh` on mobile.

\- Background: the tree-column photo, darkened with a radial gradient (`ellipse at center, transparent 0%, var(--kj-navy-900) 70%`).

\- Wordmark: Fraunces 400, `--text-display`, ivory-50, centered. A small amber-500 rule (`60px × 1px`) above the wordmark and below the eyebrow.

\- Eyebrow: "AFGHAN CUISINE · MODERN SOUL" or similar, Manrope 600, `+0.24em` tracking.

\- Subhead in Amiri: `طعم سنت — taste the tradition` as a bilingual touch.

\- Two CTAs: primary (Reserve a Table) + ghost (View Menu).



\### 6.5 Forms (Reservation)



\- Input bg: `transparent`, border-bottom: `1px solid var(--color-border)`, no box outline.

\- On focus: border-bottom color shifts to amber-500, `1.5px` thick, animated over 200ms.

\- Labels float-label style, Manrope 500 `0.8125rem`.

\- Submit button: primary variant.

\- \*\*Never\*\* use filled/rounded input fields. The architecture is hairline-driven.



\### 6.6 Footer



\- Background: navy-900 with harlequin pattern overlay at 0.06 opacity.

\- Three columns: brand + tagline, contact + hours, socials + newsletter.

\- Newsletter input: underline style, amber submit arrow.

\- Bottom bar: gold hairline divider + copyright in Manrope 400 ivory/50.



\---



\## 7. Motion



\- \*\*Page load\*\*: staggered reveal on hero. Eyebrow → rule → wordmark → subhead → CTAs, each `120ms` offset, `500ms` ease-out. One orchestrated moment, not scattered micro-interactions.

\- \*\*Scroll reveals\*\*: elements fade + translate-up `24px` as they enter viewport. `IntersectionObserver`, threshold 0.15, duration 600ms, ease-out.

\- \*\*Hover\*\*: `180–200ms ease`. Never longer.

\- \*\*Easing tokens\*\*:



```css

\--ease-out: cubic-bezier(0.16, 1, 0.3, 1);      /\* default reveals \*/

\--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /\* modals, overlays \*/

```



\- \*\*Respect `prefers-reduced-motion`\*\*: disable all translate/scale, keep opacity-only transitions.

\- \*\*Never auto-play carousels.\*\* Gallery uses click/swipe only.



\---



\## 8. Imagery \& Photography



Use the restaurant's own photography from their Instagram (with permission after deal close). Until then, use carefully matched stock that respects these rules:



\### Allowed

\- Low-light, warm-tungsten interiors. Visible golden-hour or candlelight glow.

\- Food shot overhead or 45° on \*\*dark plates\*\* (charcoal, matte black, or deep navy).

\- Architectural details: ceiling geometry, floor patterns, brass/gold fixtures.

\- Hands-in-frame for food prep (kebabs on skewer, rice being spooned).



\### Forbidden

\- Flat bright "product-on-white" food photography.

\- Cold daylight interiors or glass-office aesthetics.

\- Stock photos of generic "Middle Eastern food" with tagine props (wrong cuisine — Kabul Jaan is Afghan, not Moroccan).

\- Over-edited HDR with blown highlights.

\- AI-generated imagery. Ever.



\### Treatment

\- All images get a subtle navy-900 overlay at 0.10–0.15 opacity when placed on light backgrounds, to hold cohesion.

\- Hero images include a radial vignette from center-transparent to `--kj-navy-900` edges.

\- Aspect ratios: 3:2 for food, 4:5 for portraits/dishes on menu cards, 16:9 for hero media, square for gallery grid cells.



\---



\## 9. Guardrails — What NOT to Do



Explicit negative constraints. These override any default AI aesthetic choice:



1\. \*\*Never\*\* use Inter, Roboto, or generic system fonts for display. Fraunces for headlines is non-negotiable.

2\. \*\*Never\*\* use purple/pink gradients, or any gradient on a button or card background.

3\. \*\*Never\*\* use `rounded-full` / `border-radius: 999px` on cards, images, or containers. Only on small category chips.

4\. \*\*Never\*\* use glassmorphism except on the fixed nav bar.

5\. \*\*Never\*\* use drop-shadow for elevation on dark surfaces. Use gold hairlines.

6\. \*\*Never\*\* use emoji as decorative UI elements. Use SVG icons (Lucide or custom, stroke-only, 1.5px weight, amber or ivory).

7\. \*\*Never\*\* auto-rotate hero carousels. Static hero or manual-controlled gallery only.

8\. \*\*Never\*\* translate Persian/Arabic decoratively. If Persian appears, it must be accurate and meaningful — menu items, tagline, or section headers only.

9\. \*\*Never\*\* describe the cuisine as "Middle Eastern" or show generic Arab aesthetic cues (lanterns, Moroccan tilework). It is specifically \*\*Afghan\*\*.

10\. \*\*Never\*\* use cold grays (`#E5E5E5`, `slate-\*`). Warm neutrals only.

11\. \*\*Never\*\* use more than two typefaces on a single screen (plus Arabic as a third only when bilingual content is present).

12\. \*\*Never\*\* use stock photography of Western fine-dining where it could have been an authentic Afghan dish instead. Prefer real, flawed, warm photos over polished generic ones.

13\. \*\*Never\*\* use bright/neon green "available" dots or status indicators. Success = amber, not green.

14\. \*\*Never\*\* use the cherry-blossom pink as a primary or structural color. Campaign-accent only.



\---



\## 10. Site Structure (Next.js App Router)



Recommended route layout the generated code should follow:



```

app/

├── layout.tsx          # Nav, footer, font loading, metadata

├── page.tsx            # Home: hero, about, signature dishes, reservation CTA

├── menu/

│   └── page.tsx        # Full menu by category (Kebabs, Rice, Mantu, Desserts, Drinks)

├── about/

│   └── page.tsx        # Story, space, chef, bilingual tagline treatment

├── gallery/

│   └── page.tsx        # Asymmetric mosaic, not uniform grid

├── reservations/

│   └── page.tsx        # Form + hours + location map (dark-themed Mapbox)

└── contact/

&#x20;   └── page.tsx        # WhatsApp, Instagram, phone, address, embed map

```



\- \*\*Metadata\*\*: OG image should reuse the logo on navy-900 background with amber wordmark underneath.

\- \*\*Fonts\*\*: load via `next/font/google` for Fraunces, Manrope, Amiri. No FOIT — use `display: swap`.

\- \*\*Images\*\*: `next/image` everywhere, with `priority` on hero only.

\- \*\*Accessibility\*\*: contrast ratios verified against amber-on-navy (AA for large text, hand-check small). Amiri text must be zoom-resilient.



\---



\## 11. Code Conventions



\- \*\*TypeScript\*\*, strict mode.

\- \*\*Tailwind v4\*\* with these tokens exposed in `@theme { ... }`.

\- \*\*shadcn/ui\*\* for Button, Dialog, Input scaffolds only. Restyle every component to match this file.

\- \*\*Lucide React\*\* for icons.

\- \*\*Framer Motion\*\* for orchestrated reveals (hero, scroll).

\- \*\*No global CSS\*\* beyond tokens, reset, and font-face. Everything else in component scope.

\- \*\*Components in kebab-case filenames\*\*, PascalCase exports.



\---



\## 12. Content Voice



Copy written for the site should feel like a confident host, not a marketing team.



\*\*Good\*\*: \*"Kebabs turned over coals the way Kabul has turned them for a century. The rice, saffron-threaded and slow. The welcome, loud."\*



\*\*Bad\*\*: \*"Experience authentic Afghan cuisine in a modern setting!"\*



\- Active voice, short sentences, sensory nouns (saffron, coals, cardamom, tungsten).

\- Avoid: \*authentic, experience, culinary journey, fusion, elevate, curated, handcrafted\*. These are dead words.

\- Prefer: \*slow-cooked, charred, hand-folded, family-recipe, Kabul-born, tandoor-hot\*.

\- Persian phrases welcome where meaningful — \*mantu\*, \*qabili palaw\*, \*bolani\*, \*firni\* — italicized on first mention, not translated inline.



\---



\*End of DESIGN.md. This file is the source of truth. If it conflicts with a prompt, follow this file.\*

