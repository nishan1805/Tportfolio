import type { CaseStudy } from "@/types";

import { telescopeOverview } from "./telescope-overview";
import { mediaPlanner } from "./media-planner";
import { opticksAiEditor } from "./opticks-ai-editor";
import { raipurHomes } from "./raipur-homes";
import { intelligenceAndRecommendation } from "./intelligence-and-recommendation";
import { emotionDrivenDesign } from "./emotion-driven-design";
import { designSystemAndIconography } from "./design-system-and-iconography";

export const caseStudies: CaseStudy[] = [
  telescopeOverview,
  mediaPlanner,
  opticksAiEditor,
  raipurHomes,
  intelligenceAndRecommendation,
  emotionDrivenDesign,
  designSystemAndIconography,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
