# Client's Portfolio (Next.js)

Product designer portfolio, built from the Figma file "Portfolio".
Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Pages

| URL | What |
|---|---|
| `/` | Home: hero, highlights, work list, mobile apps, passion projects, career summary |
| `/work/telescope-overview` | Case study |
| `/work/media-planner` | Case study |
| `/work/opticks-ai-editor` | Case study |
| `/work/raipur-homes` | Case study |
| `/work/intelligence-and-recommendation` | Case study |
| `/work/emotion-driven-design` | Case study |
| `/work/design-system-and-iconography` | Case study |

All case studies use ONE template: `src/app/work/[slug]/page.tsx`.

## Folder structure

```
src/
  app/
    page.tsx               Home
    work/[slug]/page.tsx   Case study template
  components/
    layout/                Navbar, MobileMenu, Footer, SocialLinks
    sections/              Home page blocks
    case-study/            Case study page blocks
    ui/                    Small reusable pieces (Container, Logo, cards, ImagePanel...)
    icons/
  data/                    ALL content lives here, not inside components
    case-studies/          One file per case study
  lib/                     Small helpers
  types/                   TypeScript types
public/images/             Images exported from Figma
```

## How to change content

- Contact info, nav, social links: `src/data/site.ts`
- Home cards and lists: `src/data/*.ts`
- A case study: `src/data/case-studies/<slug>.ts`
  - A section has blocks: `text`, `item` (title + text), `image` and `images` (side by side row).
  - Every `image` slot has the exact `width` and `height` from Figma, so the box has the same shape as the design.
  - An `item` followed by an `image` is shown side by side. Items next to each other become a card grid.
- Add an image or GIF: put the file in `public/images/...` and set `src: "/images/..."` on the block (GIFs are not re-compressed)
  (or `image` / `bannerImage` on cards and banners).
- Add a new case study: create a data file, add it to `src/data/case-studies/index.ts`. The page is created automatically.

## Sizes taken from Figma

Sizes are copied from the Figma file, then made fluid for smaller screens:
case study header 853 / 587, side menu 216, content 1016, summary cards 294 or 400 wide x 540 tall (24px gap),
project card 438 + 712 x 441, mobile cards 480 x 802, passion cards 1188 x 532 (gap 48), career cards 427 x 234.

## Responsive behavior

Mobile first. Main breakpoints: `sm` 640px, `md` 768px, `lg` 1024px.
- Navbar becomes a menu button below `md`.
- Grids become 1 column on mobile, 2 on tablet, 3 on desktop.
- Case study "Page Content" menu: sticky bar on mobile, sticky sidebar from `lg`.
- Passion projects carousel scrolls sideways with touch.

## TODO before launch

- Export images and icons from Figma into `public/` and connect them (all image slots are empty now).
- Replace social links (`#`) in `src/data/site.ts`.
- Font: Figma uses "Nekst" (demo licence). `Outfit` is used for now (`src/app/layout.tsx`).
- Check text and spelling from the design with the client ("experiece", "Interenal", "Dewanngan"...).
- Animation card on Home has no case study page in the Figma file.
