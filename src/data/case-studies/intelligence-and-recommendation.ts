import type { CaseStudy } from "@/types";

export const intelligenceAndRecommendation: CaseStudy = {
  slug: "intelligence-and-recommendation",
  title: "Intelligence and Recommendation",
  description: "Designing AI-driven intelligence and contextual recommendations for ad platforms to translate complex data into immediate, one-click optimization strategies.",
  meta: [
    {
      label: "Design Tool",
      value: "Figma"
    },
    {
      label: "Device Adaptability",
      value: "Desktop, Mobile (Android)"
    }
  ],
  accent: "bg-gradient-to-br from-blue-600 to-blue-300",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: []
    },
    {
      id: "what-why-and-when-to-use-intelligence",
      title: "What, Why, and When to Use Intelligence",
      blocks: [
        {
          type: "item",
          title: "When?",
          text: "When users handle high density dashboards, when critical metrics cross a negative threshold, or when complex tasks can be automated through a conversational interface.",
          width: 315
        },
        {
          type: "item",
          title: "Why?",
          text: "To eliminate guesswork, reduce cognitive load, and help users prevent budget waste without forcing them to manually parse endless data tables.",
          width: 315
        },
        {
          type: "item",
          title: "What?",
          text: "A system that delivers contextual insights, direct action triggers (like one-click budget adjustments), and an interactive AI assistant.",
          width: 315
        }
      ]
    },
    {
      id: "how-to-design-it-how-i-designed-it",
      title: "How to Design It & How I Designed It",
      blocks: [
        {
          type: "text",
          text: "Core Philosophy: Recommendations must be contextual, highly visible but non-intrusive, and directly actionable."
        },
        {
          type: "item",
          title: "Actionable Recommendation",
          text: "I designed a dedicated recommendation widget on the dashboard. Instead of just showing data, it provides explicit advice e.g., Raise budget on brand campaign accompanied by a direct Apply button to reduce execution time.",
          width: 417
        },
        {
          type: "item",
          title: "Conversational AI (NIKO)",
          text: "Integrated a chat panel with predefined prompt chips. This allows users to ask natural language questions e.g., Which keywords are my competitors indexing that I am not?\") without navigating away from their workspace.",
          width: 479
        },
        {
          type: "image",
          alt: "How to Design It & How I Designed It - image 1",
          src: "/images/case-studies/intelligence-and-recommendation/frame-2085663075-actionable-insight-1-429x484-6c59afd850.png",
          width: 479,
          height: 462
        }
      ]
    },
    {
      id: "conclusion",
      title: "Conclusion",
      blocks: [
        {
          type: "text",
          text: "Moving from static dashboards to an intelligent recommendation model lowered user cognitive load and sped up optimization workflows, making data heavily actionable rather than just informational."
        }
      ]
    }
  ]
};
