export type NavLink = {
  label: string;
  href: string;
};

export type SocialPlatform = "figma" | "behance" | "youtube" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type LabelValue = {
  label: string;
  value: string;
};

/* ---------- Home page ---------- */

/** Small card shown in the 2x2 grid below the hero. */
export type Highlight = {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
  tags?: string[];
  caption: string;
  /** Tailwind background class for the preview panel. */
  previewBg: string;
  /** Path inside /public. Add the exported Figma image here. */
  image?: string;
  /** Case study page, if one exists. */
  href?: string;
};

/** Big project card shown in the "Work" list. */
export type Project = {
  slug: string;
  title: string;
  /** Text after the divider, e.g. "Opticks AI | Editor". */
  titleSuffix?: string;
  description: string;
  meta: LabelValue[];
  /** Tailwind gradient classes for the preview panel. */
  gradient: string;
  image?: string;
  webm?: string;
  mp4?: string;
  /** Shown as a small badge, e.g. "Coming Soon". */
  status?: string;
  /** Only set when the case study page exists. */
  href?: string;
};

/** Phone mockup cards (apps that are coming soon). */
export type MobileApp = {
  id: string;
  category: string;
  status: string;
  background: string;
  image?: string;
  webm?: string;
  mp4?: string;
};

/** Cards in the horizontal "Passion Project" carousel. */
export type PassionProject = {
  id: string;
  kicker: string;
  title: string;
  tags: string[];
  /** Tags shown on the mobile carousel, which differ from the desktop card. */
  mobileTags?: string[];
  caption: string;
  image?: string;
  /** Right-hand panel gradient classes. */
  panel: string;
  /** Size of the image slot in Figma (px). */
  imageSize: { width: number; height: number };
};

export type CareerStory = {
  id: string;
  title: string;
  subtitle?: string;
  /** Part of the subtitle that is shown in the brand color. */
  emphasis?: string;
  chips?: string[];
  bottomTitle?: string;
  bottomText?: string;
  background: string;
  image?: string;
};

export type CareerSkill = {
  title: string;
  text: string;
};

export type CurrentRole = {
  company: string;
  period: string;
  logo: string;
  summary: string;
  jobTitle: string;
  skills: CareerSkill[];
};

/* ---------- Case study pages ---------- */

/** `width` = width of the text column in Figma (px). Used to keep the same column ratio. */
export type ItemBlock = {
  type: "item";
  title: string;
  text: string;
  width?: number;
  /** Green header/body card. Other items keep the default white card. */
  variant?: "panel" | "note" | "heading";
  /** Small label above the title, e.g. "Phase 1". */
  eyebrow?: string;
  /** Second paragraph inside a panel body. Rendered after a bold "Object:" label. */
  note?: string;
  /** Still or video rendered inside the item (media-card sections). */
  media?: ImageItem;
};

type MobileCardBox = { x: number; y: number; w: number; h: number };

/** One layer inside a 360×height mobile card. Positions are Figma px; the renderer turns them into %. */
export type MobileCardLayer =
  | (MobileCardBox & { kind: "img"; src: string; fit: "contain" | "cover" })
  | (MobileCardBox & { kind: "bordered"; src?: string; video?: string })
  | (MobileCardBox & {
      kind: "crop";
      src: string;
      /** Inner image box, each value a percentage of the crop wrapper. */
      image: { left: number; top: number; width: number; height: number };
    })
  | (MobileCardBox & { kind: "video"; video: string })
  | { kind: "line"; y: number };

export type MobileCardSpec = {
  /** Card height in the 360-wide mobile frame. */
  height: number;
  background: string;
  layers: MobileCardLayer[];
};

/** `width` and `height` = size of the image slot in Figma (px). Gives the slot the exact same shape. */
export type ImageItem = {
  alt: string;
  src?: string;
  /** Looping stand-in for a former GIF. */
  webm?: string;
  mp4?: string;
  poster?: string;
  width: number;
  height: number;
  /**
   * Horizontal offset of a media element wider than its frame, in px.
   * Negative values reveal the right-hand portion (used by the NIKO well).
   */
  shiftX?: number;
  /** Same crop at the mobile frame size. */
  mobile?: {
    width: number;
    height: number;
    shiftX?: number;
    /** Slot size the mobile inset is measured against. */
    slotWidth?: number;
    slotHeight?: number;
    inset?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
  /**
   * Media placed inside a coloured slot. Coordinates are the desktop slot
   * (`width`/`height`). Omitted images fill the slot.
   */
  inset?: {
    x: number;
    y: number;
    width: number;
    height: number;
    background: string;
    border?: string;
  };
  /** Layered card shown below `lg`. Desktop keeps `src` / `width` / `height`. */
  mobileCard?: MobileCardSpec;
};
export type ImageBlock = { type: "image" } & ImageItem;
/** Images placed side by side in one row. */
export type ImagesBlock = { type: "images"; items: ImageItem[] };
export type TextBlock = {
  type: "text";
  text: string;
  /** Phrase inside `text` drawn at semibold. */
  emphasis?: string;
};

export type ListBlock = {
  type: "list";
  /** Left margin of each item, in px. */
  indent: 24 | 48;
  items: { lead?: string; text: string }[];
};

export type CaseStudyBlock = TextBlock | ItemBlock | ImageBlock | ImagesBlock | ListBlock;

export type CaseStudySection = {
  /** Used for the #anchor link and the side menu. */
  id: string;
  title: string;
  /** Shorter label for the page-content menu. The section heading stays `title`. */
  navTitle?: string;
  blocks: CaseStudyBlock[];
  /**
   * Optional layout. Unset sections keep the shared card / feature rendering.
   * `copy` — body paragraphs at 16/24. `plain` — text columns, no cards.
   * `media-cards` — pastel cards with text above an image or video.
   * `components` — three text columns, a lead-in, then a 2-column grid of labelled image tiles.
   * `story` — Emotion Driven Design: text + phone panel row, then a 2x2 grid of pastel image cards.
   * `plain-grid` — lead copy, then 3-column text items with 20px titles, no cards.
   * `stacked` — each item sits above its image; items whose widths fit one row share it.
   * `photo-pair` — 28px copy followed by two bordered photos.
   * `icon-tile` — 24px heading, copy, and one image on a pale green tile.
   */
  layout?: "copy" | "plain" | "media-cards" | "components" | "icon-tile" | "story" | "photo-pair" | "stacked" | "plain-grid";
};

/** One tall card in the "Summary" strip under the banner (image + text). */
export type SummaryText = {
  /** Big number or short label, e.g. "5 Iterations". */
  label?: string;
  title: string;
  text: string;
};

export type SummaryCard = {
  /** Card width in Figma (px). Cards in a row keep the same width ratio. */
  width: number;
  images: ImageItem[];
  text?: SummaryText;
  /** Where the text sits compared to the images. */
  textPosition?: "below" | "above" | "overlay";
  /** Small image shown under the text (for example a logo). */
  footerImage?: ImageItem;
};

export type CaseStudy = {
  slug: string;
  title: string;
  titleSuffix?: string;
  description: string;
  meta: LabelValue[];
  /** Meta shown below the `lg` breakpoint when the labels differ from desktop. */
  mobileMeta?: LabelValue[];
  /** Tailwind gradient classes for the banner. */
  accent: string;
  bannerImage?: string;
  summary?: SummaryCard[];
  sections: CaseStudySection[];
};
