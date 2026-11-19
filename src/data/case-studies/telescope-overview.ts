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
          text: "Newton’s Telescope is an advanced analytics tool designed to give you a complete picture of your app's App Store performance in seconds.  By consolidating data from Apple Search Ads, Apple Search Optimization ASO, and your Mobile Measurement Partners MMPs, it provides a unified, high-level view of your app's standing. It is built to deliver these detailed, actionable insights faster than any other tool in the ad-tech space, helping you make informed decisions quickly."
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
          text: "Report generation was previously manual and time-consuming, involving data extraction from disparate platforms like SplitMetrics and Sensor Tower. This method was unprofessional, increasing human error and lacking the consistency of automated solutions. The significant effort involved directly hindered operational efficiency and overall productivity."
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
          width: 346,
          footerImage: {
            alt: "Competitor logos",
            src: "/images/case-studies/telescope-overview/competition-logos.png",
            width: 132,
            height: 36
          }
        },
        {
          type: "frame",
          pairAt: "lg",
          width: 360,
          height: 480,
          background: "#eaeefb",
          radius: 8,
          cap: true,
          items: [
            {
              alt: "MobileAction competitor comparison",
              src: "/images/case-studies/telescope-overview/frame-2085663027-competitors-analysis-1-2303x3357-ac31497290.webp",
              x: 23,
              y: 33,
              width: 439,
              height: 639
            }
          ]
        },
        {
          type: "item",
          title: "Internal Interviews to Frame Data",
          text: "Before diving into wireframe we had lot of internal interviews to get the idea of visualization and sequencing the data in right manner so that both side of business can adapt it very easily. Our Interview held in different levels which I’m listing down below.",
          note: "Structure or Level of Interviews Founder and Co-Founder level Ops team Sales Team Tech and Product Team",
          width: 346
        },
        {
          type: "image",
          alt: "Research - image 2",
          src: "/images/case-studies/telescope-overview/frame-2085663027-telescope-research-shot-2-1824x1288-630ce03873.webp",
          width: 616,
          height: 485
        },
        {
          type: "item",
          variant: "heading",
          title: "Group Brainstorming",
          text: "Following extensive internal team sessions, we gathered numerous requirements and visualization ideas for data sequencing. This led to wireframing and parameter framing, ultimately guiding our decision to organize the structure as detailed below.",
          width: 1018
        },
        {
          type: "frame",
          width: 1018,
          height: 317,
          background: "#eaeefb",
          radius: 8,
          items: [
            {
              alt: "Team meeting sketching the Telescope structure",
              src: "/images/case-studies/telescope-overview/frame-2085663027-telescope-screenshot-2880x1800-c7a05f854b.webp",
              x: 14,
              y: 14,
              width: 231,
              height: 144
            },
            {
              alt: "Whiteboard notes from the brainstorm",
              src: "/images/case-studies/telescope-overview/frame-2085663027-whatsapp-image-1600x1200-36ed45d6c3.webp",
              x: 14,
              y: 168,
              width: 231,
              height: 134
            },
            {
              alt: "Brainstorm whiteboard, portrait",
              src: "/images/case-studies/telescope-overview/frame-2085663027-image-3687-3024x4032-20e9da433e.webp",
              x: 262,
              y: 14,
              width: 216,
              height: 288
            },
            {
              alt: "Brainstorm whiteboard with red marker",
              src: "/images/case-studies/telescope-overview/frame-2085663027-image-3688-4096x3072-47254dbf01.webp",
              x: 495,
              y: 14,
              width: 240,
              height: 288
            },
            {
              alt: "Brainstorm whiteboard with a diagram",
              src: "/images/case-studies/telescope-overview/frame-2085663027-image-3686-4096x3072-06996c6fb2.webp",
              x: 752,
              y: 14,
              width: 345,
              height: 289
            }
          ],
          mobile: {
            width: 360,
            height: 1454,
            background: "#eaeefb",
            radius: 8,
            items: [
              {
                alt: "Team meeting sketching the Telescope structure",
                src: "/images/case-studies/telescope-overview/frame-2085663027-telescope-screenshot-2880x1800-c7a05f854b.webp",
                x: 0,
                y: 14,
                width: 360,
                height: 225
              },
              {
                alt: "Whiteboard notes from the brainstorm",
                src: "/images/case-studies/telescope-overview/frame-2085663027-whatsapp-image-1600x1200-36ed45d6c3.webp",
                x: 0,
                y: 249,
                width: 360,
                height: 134
              },
              {
                alt: "Brainstorm whiteboard with red marker",
                src: "/images/case-studies/telescope-overview/frame-2085663027-image-3688-4096x3072-47254dbf01.webp",
                x: 0,
                y: 383,
                width: 360,
                height: 288
              },
              {
                alt: "Brainstorm whiteboard, portrait",
                src: "/images/case-studies/telescope-overview/frame-2085663027-image-3687-3024x4032-20e9da433e.webp",
                x: 0,
                y: 671,
                width: 360,
                height: 480
              },
              {
                alt: "Brainstorm whiteboard with a diagram",
                src: "/images/case-studies/telescope-overview/frame-2085663027-image-3686-4096x3072-06996c6fb2.webp",
                x: 0,
                y: 1151,
                width: 345,
                height: 289
              }
            ]
          }
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
          type: "frame",
          width: 1018,
          height: 341,
          background: "#eaeefb",
          radius: 8,
          items: [
            {
              alt: "Telescope overview PRD",
              src: "/images/case-studies/telescope-overview/frame-2085663029-getting-prd-2880x1556-32cf4f2e2a.webp",
              x: 170,
              y: 32,
              width: 678,
              height: 366
            }
          ],
          mobile: {
            width: 360,
            height: 341,
            background: "#eaeefb",
            radius: 8,
            items: [
              {
                alt: "Telescope overview PRD",
                src: "/images/case-studies/telescope-overview/frame-2085663029-getting-prd-2880x1556-32cf4f2e2a.webp",
                x: 29,
                y: 44,
                width: 468,
                height: 253
              }
            ]
          }
        }
      ]
    },
    {
      id: "wireframing",
      title: "Wireframing",
      blockGap: 48,
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
          alt: "Loading page, iteration 1",
          src: "/images/case-studies/telescope-overview/wire-loading-1-desktop.png",
          width: 730,
          height: 337,
          mobileSrc: "/images/case-studies/telescope-overview/wire-loading-1-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
        },
        {
          type: "item",
          title: "Loading Page · Iteration 2",
          text: "Having a gamified landing page felt too subjective, so we created a simpler version that would be more accessible and easier for most users to understand.",
          width: 232
        },
        {
          type: "image",
          alt: "Loading page, iteration 2",
          src: "/images/case-studies/telescope-overview/wire-loading-2-desktop.png",
          width: 730,
          height: 337,
          mobileSrc: "/images/case-studies/telescope-overview/wire-loading-2-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
        },
        {
          type: "item",
          title: "Report Generation · Iteration 1",
          text: "Our main goal was a UI that makes complex data easy to digest, using visual elements like progress bars, tachometers, and bar graphs.",
          width: 232
        },
        {
          type: "image",
          alt: "Report generation, iteration 1",
          src: "/images/case-studies/telescope-overview/wire-report-1-desktop.png",
          width: 730,
          height: 328,
          mobileSrc: "/images/case-studies/telescope-overview/wire-report-1-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
        },
        {
          type: "item",
          title: "Report Generation · Iteration 2",
          text: "With the data ready, we presented it clearly using donut and line charts, while streamlining the view by removing non-essential details.",
          width: 232
        },
        {
          type: "image",
          alt: "Report generation, iteration 2",
          src: "/images/case-studies/telescope-overview/wire-report-2-desktop.png",
          width: 730,
          height: 337,
          mobileSrc: "/images/case-studies/telescope-overview/wire-report-2-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
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
          width: 473
        },
        {
          type: "text",
          text: "Objective: This page is designed to provide advertisers with an immediate overview of current performance status."
        },
        {
          type: "item",
          title: "Detailed View, Apple Ads and ASO",
          text: "The detailed view is split into ASA and ASO, with ASA offering deeper, more granular insights since we fetch this data directly via client app integration.",
          width: 473
        },
        {
          type: "text",
          text: "Objective: These two sections enable users to closely analyze performance through appropriate graphs and data."
        },
        {
          type: "frame",
          width: 1018,
          height: 511,
          background: "#eaeefb",
          radius: 8,
          items: [
            {
              alt: "Telescope dashboard",
              src: "/images/case-studies/telescope-overview/final-ui-dashboard.gif",
              x: 102,
              y: 37,
              width: 814,
              height: 438,
              radius: 8,
              border: "#99e0ed",
              borderWidth: 4
            }
          ],
          mobile: {
            width: 360,
            height: 511,
            background: "#eaeefb",
            radius: 8,
            items: [
              {
                alt: "Telescope dashboard",
                src: "/images/case-studies/telescope-overview/final-ui-dashboard.gif",
                x: -392,
                y: 61,
                width: 722,
                height: 389,
                radius: 8,
                border: "#99e0ed",
                borderWidth: 4
              }
            ]
          }
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
          width: 232,
          align: "center"
        },
        {
          type: "image",
          alt: "Preparing variants of the Telescope charts",
          src: "/images/case-studies/telescope-overview/delivery-variants-desktop.png",
          width: 730,
          height: 267,
          mobileSrc: "/images/case-studies/telescope-overview/delivery-variants-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
        },
        {
          type: "item",
          title: "Loading States",
          text: "Loading state are comming form frontend library these day but sometime to be precise we need to make loading state by our own.",
          width: 232,
          align: "center"
        },
        {
          type: "image",
          alt: "Loading state skeletons for the Telescope report",
          src: "/images/case-studies/telescope-overview/delivery-loading-desktop.png",
          width: 730,
          height: 267,
          mobileSrc: "/images/case-studies/telescope-overview/delivery-loading-mobile.png",
          mobileWidth: 360,
          mobileHeight: 380,
          pairAt: "lg"
        }
      ]
    }
  ]
};
