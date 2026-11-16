import type { CareerStory, CurrentRole } from "@/types";

export const careerStories: CareerStory[] = [
  {
    id: "childhood",
    title: "Most of my childhood...",
    subtitle: "I was bit creative in my childhood used to do lot of floor sketches",
    emphasis: "floor sketches",
    background: "bg-prime-blue-100",
  },
  {
    id: "engineering",
    title: "Got into engineering",
    subtitle: "2016  Central college of engineering",
    background: "bg-[#eef5ee]",
  },
  {
    id: "digital-creativity",
    title: "Digital creativity begins",
    subtitle: "Graphics and website design",
    bottomText: "Cause poster and website designs excites me a lot, so i started designing by my own. Curiosity 😊",
    background: "bg-[#fbeeee]",
  },
  {
    id: "racketszone",
    title: "Started with Racketszone",
    subtitle: "2020",
    bottomTitle: "I was UI designer",
    bottomText: "Who was doing everything btw posters, videos, branding and website design and development😅",
    background: "bg-prime-blue-100",
  },
  {
    id: "bvc",
    title: "Then joined BVC",
    subtitle: "Sep 2020",
    bottomTitle: "Finally UI UX Designer 🥳",
    bottomText: "But but but..... website, poster, website, poster, webiste poster damn..........",
    background: "bg-[#eef5ee]",
  },
  {
    id: "geekyants",
    title: "With Lot of hopes, joined Geekyants",
    subtitle: "Oct 2023",
    chips: ["Research", "Iconography", "Communication", "Design System"],
    bottomTitle: "Design led organization",
    bottomText: "Got chance to work with top brands. Got learning about end to end design delivery.",
    background: "bg-[#fbeeee]",
  },
];

export const currentRole: CurrentRole = {
  company: "Ohh my SAAS",
  period: "May 2024 - Present",
  logo: "affle",
  summary: "2 Years of pure execution",
  jobTitle: "Lead Product designer",
  skills: [
    { title: "Design System", text: "Built and maintaining it to scale" },
    { title: "Quick Prototyping", text: "Interactive prototype to test it out" },
    { title: "Audit, analysis Benchmarking", text: "Just to make sure we are always up there" },
    { title: "Interviews. Testing", text: "Clarity gives us basics to innovate" },
    { title: "Research and Conceptualisation", text: "Research and concept making before design" },
    { title: "Leading the conversations", text: "From sanity to overlooking deliveries" },
  ],
};
