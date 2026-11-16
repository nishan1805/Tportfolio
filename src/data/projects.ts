import type { Project } from "@/types";

const SHARED_DESCRIPTION =
  "Newton’s Telescope delivers real-time App Store performance analysis by unifying ASA, ASO, and MMP data.";

const newtonMeta = [
  { label: "Organization", value: "Newton" },
  { label: "Timeline", value: "Sep 2025   Nov 2025" },
];

const raipurHomesMeta = [
  { label: "Organization", value: "Raipur Homes" },
  { label: "Category", value: "Real Estate" },
];

export const projects: Project[] = [
  {
    slug: "telescope-overview",
    title: "Telescope Overview",
    description: SHARED_DESCRIPTION,
    meta: newtonMeta,
    gradient: "bg-gradient-to-b from-[#ea6828] to-[#fdad86]",
    image: "/images/case-studies/banner-telescope-overview.webp",
    webm: "/images/case-studies/banner-telescope-overview.webm",
    mp4: "/images/case-studies/banner-telescope-overview.mp4",
    href: "/work/telescope-overview",
  },
  {
    slug: "media-planner",
    title: "Media Planner",
    description: SHARED_DESCRIPTION,
    meta: newtonMeta,
    gradient: "bg-gradient-to-b from-[#9244b9] to-[#e2a8ff]",
    image: "/images/case-studies/banner-media-planner.webp",
    webm: "/images/case-studies/banner-media-planner.webm",
    mp4: "/images/case-studies/banner-media-planner.mp4",
    href: "/work/media-planner",
  },
  {
    slug: "opticks-ai-editor",
    title: "Opticks AI",
    titleSuffix: "Editor",
    description: SHARED_DESCRIPTION,
    meta: newtonMeta,
    gradient: "bg-gradient-to-b from-[#b40001] to-[#f99a9a]",
    image: "/images/case-studies/banner-opticks-ai-editor.webp",
    webm: "/images/case-studies/banner-opticks-ai-editor.webm",
    mp4: "/images/case-studies/banner-opticks-ai-editor.mp4",
    href: "/work/opticks-ai-editor",
  },
  {
    slug: "raipur-homes",
    title: "Raipur Homes",
    description: SHARED_DESCRIPTION,
    meta: raipurHomesMeta,
    gradient: "bg-gradient-to-b from-[#3f5cff] to-[#bcc6ff]",
    image: "/images/projects/raipur-homes.webp",
    href: "/work/raipur-homes",
  },
  {
    slug: "audit-tool",
    title: "Audit Tool",
    description: SHARED_DESCRIPTION,
    meta: raipurHomesMeta,
    gradient: "bg-gradient-to-b from-[#59c269] to-[#ddf6e1]",
    image: "/images/projects/audit-tool.webp",
    webm: "/images/projects/audit-tool.webm",
    mp4: "/images/projects/audit-tool.mp4",
    status: "Coming Soon",
  },
];
