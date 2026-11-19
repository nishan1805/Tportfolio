import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyBanner } from "@/components/case-study/CaseStudyBanner";
import { CaseStudyBody } from "@/components/case-study/CaseStudyBody";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { SummaryCards } from "@/components/case-study/SummaryCards";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/data/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

// Builds all 7 case study pages at build time.
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} | ${siteConfig.name}`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyHeader study={study} />
      <CaseStudyBanner study={study} />
      <SummaryCards study={study} />
      <CaseStudyBody
        sections={study.sections}
        lead={study.slug === "intelligence-and-recommendation"}
        variant={
          study.slug === "opticks-ai-editor"
            ? "opticks"
            : study.slug === "media-planner"
              ? "media-planner"
              : study.slug === "raipur-homes"
                ? "raipur"
                : undefined
        }
      />
    </>
  );
}
