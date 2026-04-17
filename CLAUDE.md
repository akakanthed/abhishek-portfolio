@AGENTS.md

# Portfolio — Claude Context

## Project
Abhishek Kanthed's personal design portfolio.
Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lenis · Lucide React.

## What's built

### Global foundation
- `src/app/globals.css` — all design tokens as CSS custom properties (colors, typography scale, spacing scale, mockup treatment, transitions). Tailwind v4 `@theme inline` block maps them to utility classes.
- `src/app/layout.tsx` — DM Serif Display (`--font-dm-serif`) + Inter (`--font-inter`) from Google Fonts. `SmoothScrollProvider` wraps children.
- `src/components/ui/SmoothScrollProvider.tsx` — Lenis smooth scroll, RAF loop, cleans up on unmount.

### UI components (`src/components/ui/`)
- `Nav.tsx` — fixed 56px nav, transparent → blur on scroll past 60px. Left wordmark is "Abhishek Kanthed" in DM Serif at `--text-xl`, links home. "Work" smooth-scrolls to `#work`, "Resume" opens Google Drive.
- `Typewriter.tsx` — client component used in the hero. Types phrase char-by-char (~55ms), holds ~1.8s, backspaces (~30ms), pauses ~400ms, advances to next phrase, wraps. Blinking `|` caret via `@keyframes blink` in `globals.css` (1s `steps(2, end)`). Honours `prefers-reduced-motion` (renders first phrase statically). `minHeight: 1.05em` + `whiteSpace: nowrap` on parent prevent layout shift between phrases.
- `MockupFrame.tsx` — three types: `browser` (chrome bar + dots), `fullscreen` (no chrome), `card` (gradient overlay). Uses plain `<img>` for external URLs, Next.js `<Image>` for local. Glow colors: blue/indigo/amber/neutral.
- `CaseStudyCard.tsx` — homepage card with cursor-following pill label (`CursorLabel`) via `createPortal`. `cursor: none` on hover. Card border brightens on hover. Cursor pill reads "Dig deeper →".
- `CursorLabel.tsx` — portal-rendered pill that follows mouse at `position: fixed`. Animates circle → full width pill on hover entry (spring width expansion, text fades in with delay).
- `ContactBlock.tsx` — two-column contact section: heading "I think we should talk." + subtext on the left, interactive email container on the right with animated noise canvas (RAF at ~12fps), blue gradient seep on hover, rotating arrow icon.

### Homepage (`src/app/page.tsx`)
Sections in order:
1. `<Nav />`
2. Hero — staggered fade-in cascade: "I think…" (serif, `--text-5xl`, delay 0.1s) → `<Typewriter />` (Inter, `--text-xl`, muted, delay 0.25s, single-line `whiteSpace: nowrap`) → role chip "Currently designing for DevOps @ Perforce" (delay 0.55s) → CTA "See how I think ↓" (delay 0.65s). No greeting, no name in the hero (name lives in the nav). The one-liner subtitle was removed.
3. Work — "Selected Work" label + 2-col card grid mapping `caseStudies`
4. `<ContactBlock />` — contact + footer

**Hero copy (Typewriter phrases — connected narrative, do not reorder):**
1. the hardest problems make the best design work.
2. most enterprise tools are designed for demos, not for Tuesdays.
3. the hardest workflows deserve the most patient design.
4. removing a feature takes more conviction than adding one.
5. the best tools don't feel like tools.

### Case study data (`src/data/case-studies/`)
- `types.ts` — `ContentBlock` union type, `CaseStudySection`, `CaseStudy`
- `puppet.ts`, `carloan.ts`, `los.ts` — fully authored data files
- `index.ts` — `caseStudies` array + `getCaseStudy(slug)` helper

**ContentBlock types:**
| Type | Props |
|---|---|
| `TextBlock` | `text` — parses `**bold**` and `<br />` |
| `InsightCallout` | `text` — parses `**bold**`, lightbulb icon, blue left border |
| `MetricHighlight` | `stat`, `label` |
| `FullBleedImage` | `src`, `caption?`, `maxWidth?` — breaks to 1100px |
| `ImageGrid` | `images[]`, `maxWidth?` — 2-col grid, breaks to 1100px |
| `PullQuote` | `text` |
| `ListBlock` | `items[]`, `ordered?` — numbered (blue) or em-dash list, parses `**bold**` |

### Case study page (`src/app/case-studies/[slug]/page.tsx`)
- `generateStaticParams` pre-renders all three slugs
- Hero: category tag, large serif title, subtitle, 3 metadata chips
- Full-bleed hero image (no browser chrome, glow from `cs.glowColor`)
- Body sections: `SectionHeading` in 740px column; `FullBleedImage` + `ImageGrid` break out to 1100px; all other blocks stay in 740px column
- Footer: "Next Project →" (cycles through studies) + `<ContactBlock />`

### Case study body components (`src/components/case-study/`)
`SectionHeading`, `TextBlock`, `InsightCallout`, `MetricHighlight`, `FullBleedImage`, `ImageGrid`, `PullQuote`, `ListBlock`

## Key conventions
- Typography scale in `globals.css`: `--text-xs` 12 · `sm` 13 · `base` 17 · `lg` 20 · `xl` 24 · `2xl` 32 · `3xl` 44 · `4xl` 56 · `5xl` 72 · `6xl` 96.
- Never hardcode hex values — always use CSS custom properties from `globals.css`
- External image URLs → plain `<img>`. Local `/public` paths → Next.js `<Image>`
- All entrance animations: `initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`
- No spring animations — they feel too playful
- `FullBleedImage` and `ImageGrid` both render outside the 740px narrow wrapper (full-bleed breakout in page template)
- `caption` prop is optional on all image blocks; never write `caption: ""`

## Scripts
- `npm run dev` — start dev server
- `npm run scrape` — re-run the Framer portfolio scraper (one-time use)
