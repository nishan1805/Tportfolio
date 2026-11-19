import type { CaseStudy } from "@/types";

export const telescopeOverview: CaseStudy = {
  slug: "telescope-overview",
  title: "Telescope Overview",
  description: "It uniquely unifies ASA, ASO, and MMP data for comprehensive reports, making it a highly advanced ad-tech tool.",
  meta: [
    {
      label: "Duration",
      value: "6 Weeks"
    },
    {
      label: "Tool",
      value: "Figma, ClaudedAI"
    }
  ],
  accent: "bg-gradient-to-br from-orange-500 to-orange-300",
  summary: [
    {
      width: 294,
      images: [
        {
          alt: "Summary - Competition",
          src: "/images/case-studies/telescope-overview/frame-2085663027-competitors-analysis-1-2303x3357-ac31497290.webp",
          width: 294,
          height: 358
        }
      ],
      text: {
        title: "Competition",
        text: "No one has the same tool"
      },
      textPosition: "below",
      footerImage: {
        alt: "Summary - Competition logo",
          src: "/images/case-studies/telescope-overview/frame-2085663030-rectangle-1070x1105-826b282e2a.webp",
        width: 132,
        height: 36
      }
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - image 2",
          src: "/images/case-studies/telescope-overview/frame-2085663027-image-3687-3024x4032-20e9da433e.webp",
          width: 294,
          height: 540
        }
      ]
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - Wireframing",
          src: "/images/case-studies/telescope-overview/frame-2085663027-image-3686-4096x3072-06996c6fb2.webp",
          width: 294,
          height: 263
        }
      ],
      text: {
        label: "5 Iterations",
        title: "Wireframing",
        text: "More then 5 Iterations has been done to reach upto final solution."
      },
      textPosition: "below"
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - Prototype Testing",
          src: "/images/case-studies/telescope-overview/frame-2085663030-image-2-828x1792-a3b3126427.webp",
          width: 294,
          height: 399
        }
      ],
      text: {
        title: "Prototype Testing",
        text: "More then 5 Iterations has been done to reach upto final solution."
      },
      textPosition: "below"
    }
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "text",
          text: "Newton’s Telescope is an advanced analytics tool designed to give you a complete picture of your app's App Store performance in seconds."
        },
        {
          type: "text",
          text: "By consolidating data from Apple Search Ads, Apple Search Optimization ASO, and your Mobile Measurement Partners MMPs, it provides a unified, high-level view of your app's standing. It is built to deliver these detailed, actionable insights faster than any other tool in the ad-tech space, helping you make informed decisions quickly."
        },
        {
          type: "item",
          title: "Summary",
          text: "Telescope by Newton is an advanced ad-tech tool that unifies ASA, ASO, and MMP metrics into a single score to generate comprehensive App Store performance reports in seconds.",
          width: 992
        }
      ]
    },
    {
      id: "problem-statement",
      title: "Problem Statement",
      blocks: [
        {
          type: "text",
          text: "Since Affle has been in the ad-tech industry for decades, we have long observed advertisers struggling to create app store screenshots for different occasions. Although we recognized this gap early on, viable solutions were limited at the time. Below are the key challenges our clients consistently faced:"
        },
        {
          type: "text",
          text: "- Report generation was previously manual and time-consuming, involving data extraction from disparate platforms like SplitMetrics and Sensor Tower.\n- This method was unprofessional, increasing human error and lacking the consistency of automated solutions.\n- The significant effort involved directly hindered operational efficiency and overall productivity."
        },
        {
          type: "item",
          title: "Summary",
          text: "Manual report generation across scattered platforms was slow, prone to human error, and severely hindered operational productivity.",
          width: 992
        }
      ]
    },
    {
      id: "solution",
      title: "Solution",
      blocks: [
        {
          type: "text",
          text: "We aim to develop a comprehensive platform for generating pre- and post-acquisition reports on App Store Ads (ASA) and App Store Optimisation (ASO) performance. This solution will enable us to demonstrate our impact to clients and identify areas for improvement, facilitating strategic partnerships."
        }
      ]
    },
    {
      id: "challenges",
      title: "Challenges",
      blocks: [
        {
          type: "text",
          text: "Earlier, though APIs were available, we had to first confirm if the data was suitable for our new platform. Visualising this, especially with some inaccuracies and the challenge of aligning diverse data for comprehensive reports, was our biggest hurdle."
        }
      ]
    },
    {
      id: "research",
      layout: "stacked",
      title: "Research",
      blocks: [
        {
          type: "text",
          text: "Wireframing and visualization started in multiple iterations we started with picking external telescope ideation. We also decided to go build it phase by phase so initially we thought to have ASA and ASO section in the report. Because data which we’re getting was bit prominent for this report generation."
        },
        {
          type: "item",
          title: "Competition Analysis",
          text: "Before diving into wireframe we had lot of internal interviews to get the idea of visualization and sequencing the data in right manner so that both side of business can adapt it very easily. Our Interview held in different levels which I’m listing down below.",
          width: 346
        },
        {
          type: "image",
          alt: "Research - image 1",
          src: "/images/case-studies/telescope-overview/research-competition.webp",
          width: 616,
          height: 317
        },
        {
          type: "item",
          title: "Internal Interviews to Frame Data",
          note: "Structure or Level of Interviews\nFounder and Co-Founder level\nOps team\nSales Team\nTech and Product Team",
          text: "Before diving into wireframe we had lot of internal interviews to get the idea of visualization and sequencing the data in right manner so that both side of business can adapt it very easily. Our Interview held in different levels which I’m listing down below.",
          width: 346
        },
        {
          type: "image",
          alt: "Research - image 2",
          src: "/images/case-studies/telescope-overview/research-interviews.webp",
          width: 616,
          height: 485
        },
        {
          type: "item",
          title: "Group Brainstorming",
          text: "Following extensive internal team sessions, we gathered numerous requirements and visualization ideas for data sequencing. This led to wireframing and parameter framing, ultimately guiding our decision to organize the structure as detailed below.",
          width: 1018
        },
        {
          type: "image",
          alt: "Research - image 3",
          src: "/images/case-studies/telescope-overview/research-brainstorm.webp",
          width: 1018,
          height: 317
        }
      ]
    },
    {
      id: "getting-prd",
      title: "Getting PRD",
      blocks: [
        {
          type: "text",
          text: "Having a PRD is extremely helpful for design since it provides clarity about how the product will look, what the ultimate goals are, and what edge cases to consider. It helped us uncover many potential scenarios we needed to address."
        },
        {
          type: "image",
          alt: "Getting PRD - image 1",
          src: "/images/case-studies/telescope-overview/frame-2085663029-getting-prd-2880x1556-32cf4f2e2a.webp",
          width: 1018,
          height: 341
        }
      ]
    },
    {
      id: "wireframing",
      layout: "stacked",
      title: "Wireframing",
      blocks: [
        {
          type: "text",
          text: "Having a PRD is extremely helpful for design since it provides clarity about how the product will look, what the ultimate goals are, and what edge cases to consider. It helped us uncover many potential scenarios we needed to address."
        },
        {
          type: "item",
          title: "Loading Page · Iteration 1",
          text: "Initially, stakeholders asked us to create a gamified version of the landing page. We designed it to give users the feeling of navigating through a spaceship.",
          width: 232
        },
        {
          type: "image",
          alt: "Wireframing - image 1",
          src: "/images/case-studies/telescope-overview/wf-loading-1.webp",
          width: 730,
          height: 337
        },
        {
          type: "item",
          title: "Loading Page · Iteration 2",
          text: "Having a gamified landing page felt too subjective, so we created a simpler version that would be more accessible and easier for most users to understand.",
          width: 232
        },
        {
          type: "image",
          alt: "Wireframing - image 2",
          src: "/images/case-studies/telescope-overview/wf-loading-2.webp",
          width: 730,
          height: 337
        },
        {
          type: "item",
          title: "Report Generation · Iteration 1",
          text: "Our main goal was a UI that makes complex data easy to digest, using visual elements like progress bars, tachometers, and bar graphs.",
          width: 232
        },
        {
          type: "image",
          alt: "Wireframing - image 3",
          src: "/images/case-studies/telescope-overview/wf-report-1.webp",
          width: 730,
          height: 328
        },
        {
          type: "item",
          title: "Report Generation · Iteration 2",
          text: "With the data ready, we presented it clearly using donut and line charts, while streamlining the view by removing non-essential details.",
          width: 232
        },
        {
          type: "image",
          alt: "Wireframing - image 4",
          src: "/images/case-studies/telescope-overview/wf-report-2.webp",
          width: 730,
          height: 337
        }
      ]
    },
    {
      id: "final-ui",
      title: "Final UI",
      blocks: [
        {
          type: "text",
          text: "With the established design system and graph library, we proceeded to align data presentation with practices from Telescope External. Our focus shifted to optimizing data accessibility through strategic grouping and placement."
        },
        {
          type: "item",
          title: "Overview Section",
          text: "This section provides a high-level performance overview, featuring the Newton Index Score with breakdowns for App Store Ads (ASA) and App Store Optimization ASO.",
          width: 473,
          variant: "panel",
          note: "This page is designed to provide advertisers with an immediate overview of current performance status."
        },
        {
          type: "item",
          title: "Detailed View, Apple Ads and ASO",
          text: "The detailed view is split into ASA and ASO, with ASA offering deeper, more granular insights since we fetch this data directly via client app integration.",
          width: 473,
          variant: "panel",
          note: "These two sections enable users to closely analyze performance through appropriate graphs and data."
        },
        {
          type: "image",
          alt: "Final UI - image 1",
          src: "/images/case-studies/telescope-overview/final-ui-overview.webp",
          width: 1018,
          height: 511
        }
      ]
    },
    {
      id: "delivery-benchmark",
      title: "Delivery Benchmark",
      blocks: [
        {
          type: "item",
          title: "Preparing Variants",
          text: "Variants are essential for efficiently controlling individual sectional elements with a single click across all screens, effectively handling edge cases.",
          width: 232
        },
        {
          type: "image",
          alt: "Delivery Benchmark - image 1",
          src: "/images/case-studies/telescope-overview/frame-2085663027-whatsapp-image-1600x1200-36ed45d6c3.webp",
          width: 730,
          height: 267
        },
        {
          type: "item",
          title: "Loading States",
          text: "Loading state are comming form frontend library these day but sometime to be precise we need to make loading state by our own.",
          width: 232
        },
        {
          type: "image",
          alt: "Delivery Benchmark - image 2",
          src: "/images/case-studies/telescope-overview/frame-2085663027-image-3686-4096x3072-06996c6fb2.webp",
          width: 730,
          height: 267
        }
      ]
    }
  ]
};
