import type { CaseStudy, ImageBlock } from "@/types";

const clip = (
  file: string,
  alt: string,
  frame: { x: number; y: number; width: number; height: number },
  mobile: { x: number; y: number; width: number; height: number },
  slotHeight = 436,
): ImageBlock => ({
  type: "image",
  alt,
  src: `/images/case-studies/media-planner/${file}.webp`,
  webm: `/images/case-studies/media-planner/${file}.webm`,
  mp4: `/images/case-studies/media-planner/${file}.mp4`,
  poster: `/images/case-studies/media-planner/${file}.webp`,
  width: 1018,
  height: slotHeight,
  inset: { ...frame, background: "#eaeefb", border: "#acbcef" },
  mobile: {
    width: mobile.width,
    height: mobile.height,
    slotWidth: 360,
    slotHeight: slotHeight === 590 ? 408 : 312,
    inset: mobile,
  },
});

export const mediaPlanner: CaseStudy = {
  slug: "media-planner",
  title: "Media Planner",
  description: "It uniquely unifies ASA, ASO, and MMP data for comprehensive reports, making it a highly advanced ad-tech tool.",
  meta: [
    { label: "Duration", value: "5 Weeks" },
    { label: "Design Tool", value: "Figma" },
    { label: "Ideation Tool", value: "Lovable, Figma Make" },
  ],
  accent: "bg-gradient-to-br from-purple-500 to-purple-300",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "text",
          text: "Media Planner is an internal enterprise platform designed for Newton to centralize, automate, and streamline the media report generation process. By replacing fragmented workflows with an intelligent, centralized dashboard, the platform transforms a highly manual process into a seamless, data driven experience for digital media planners and campaign managers.",
        },
      ],
    },
    {
      id: "problem-statement",
      title: "Problem Statement",
      blocks: [
        {
          type: "text",
          emphasis: "such as SensorTower",
          text: "Previously, generating media reports at Newton was a highly manual, fragmented, and time-consuming endeavor. Teams had to jump between multiple external platforms such as SensorTower to dig out data, calculate metrics by hand, and painstakingly build individual reports from scratch using Google Sheets.",
        },
        {
          type: "text",
          text: "Because each business unit operated independently, there was a critical need for a unified platform that could automate data aggregation and standardise reporting.",
        },
        {
          type: "item",
          title: "Summary",
          text: "Manual report generation across scattered platforms was slow, prone to human error, and severely hindered operational productivity.",
        },
      ],
    },
    {
      id: "challenges",
      title: "Challenges",
      blocks: [
        {
          type: "list",
          indent: 24,
          items: [
            { text: "Fragmented Data: Designers and planners had to dig out campaign data across multiple external platforms like SensorTower." },
            { text: "Manual Bottlenecks: Teams calculated metrics by hand and built every report from scratch in Google Sheets, causing severe time drains." },
            { text: "Inconsistent Standards: Different business units used varying formats, leading to fragmented reporting structures across the company." },
            { text: "Slow Alignment: Mapping complex enterprise workflows meant stakeholder alignment could stall without rapid conceptual validation." },
          ],
        },
      ],
    },
    {
      id: "solution",
      title: "Solution",
      blocks: [
        {
          type: "list",
          indent: 24,
          items: [
            { text: "Centralized Dashboard: Unified external data sources into a single platform, eliminating multi-tool hopping." },
            { text: "Automated Workflows: Replaced manual formulas and spreadsheet creation with instant, platform-driven report generation." },
            { text: "Unified Design System: Standardized reporting by transforming diverse business unit templates into a cohesive interface." },
            { text: "AI & Figma Prototyping: Used AI tools to rapidly align stakeholders on user flows, then built a scalable, interactive prototype in Figma using our design system." },
            { text: "Potential Users are basically internal campaign managers and our advertisers." },
          ],
        },
      ],
    },
    {
      id: "getting-direct-inspiration",
      title: "Getting Direct Inspiration",
      navTitle: "Inspiration",
      blocks: [
        {
          type: "text",
          text: "We used existing business unit templates as the direct inspiration for the design and layout, leveraging AI to quickly ideate and align stakeholders on user flows. Once validated, we built the final UI and interactive prototype in Figma using our design system.",
        },
        {
          type: "image",
          alt: "Media Plan PDF report mock",
          src: "/images/case-studies/media-planner/media-plan-report-desktop.webp",
          width: 612,
          height: 289,
        },
        {
          type: "image",
          alt: "Media Plan PDF report mock",
          src: "/images/case-studies/media-planner/media-plan-report-mobile.webp",
          width: 326,
          height: 287,
        },
      ],
    },
    {
      id: "wireframing",
      title: "Wireframing",
      blocks: [
        {
          type: "text",
          text: "AI Driven Ideation Process",
        },
        {
          type: "list",
          indent: 48,
          items: [
            {
              lead: "Rapid Conceptualization",
              text: "Used AI tools to quickly generate and explore multiple layout ideas and workflow structures for the Media Planner dashboard.",
            },
            {
              lead: "Stakeholder Alignment",
              text: "Shared AI-generated concepts early on to align with internal teams and ensure the product direction met business needs before moving to production.",
            },
            {
              lead: "Figma Translation",
              text: "Once the user flows and conceptual structures were confirmed, we brought those validated ideas into Figma to design the final UI using our design system.",
            },
          ],
        },
        clip(
          "frame-2085663030-media-wireframe-gif-1-1280x721-54884dd9f7",
          "Wireframing - Welcome to Mediaplanner",
          { x: 123, y: 28, width: 779, height: 379 },
          { x: -53, y: 41, width: 466, height: 227 },
        ),
        clip(
          "frame-2085663030-media-wireframe-gif-2-1280x600-569fe15c38",
          "Wireframing - Define your expected journey",
          { x: 118, y: 26, width: 782, height: 367 },
          { x: -48, y: 50, width: 455, height: 213 },
        ),
        clip(
          "frame-2085663030-media-wireframe-gif-4-800x375-e947d0a3ca",
          "Wireframing - Generate report",
          { x: 115, y: 34, width: 786, height: 368 },
          { x: -54, y: 47, width: 468, height: 219 },
        ),
        clip(
          "frame-2085663030-media-wireframe-gif-3-1280x600-f53e4f5bb7",
          "Wireframing - Media planner report",
          { x: 115, y: 34, width: 787, height: 369 },
          { x: -89, y: 45, width: 474, height: 222 },
        ),
      ],
    },
    {
      id: "final-ui",
      title: "Final UI",
      blocks: [
        {
          type: "text",
          text: "With the established design system and graph library, we proceeded to align data presentation with practices from Telescope External. Our focus shifted to optimizing data accessibility through strategic grouping and placement.",
        },
        {
          type: "item",
          variant: "panel",
          title: "Landing Page",
          text: "First user has to give the appstore link of app. System will automatically pick the country. ",
          note: "Also to educate user about the platform.",
        },
        {
          type: "item",
          variant: "panel",
          title: "Landing Page",
          text: "Second section will be about splitting the budget strategy the budget in different placements.",
          note: "Let users strategies the spendings.",
        },
        {
          type: "item",
          variant: "panel",
          title: "Planner Report",
          text: "Planner page all about showing all possible outcome. It gives lot of clarity to campaign managers and advertisers about the outcome.",
        },
        clip(
          "frame-2085663031-media-final-ui-gif-1280x692-0cdb17a428",
          "Final UI recording",
          { x: 61, y: 56, width: 885, height: 478 },
          { x: -79, y: 64, width: 518, height: 280 },
          590,
        ),
      ],
    },
  ],
};
