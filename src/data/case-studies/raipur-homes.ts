import type { CaseStudy } from "@/types";

export const raipurHomes: CaseStudy = {
  slug: "raipur-homes",
  title: "Raipur Homes",
  description: "Raipur Homes, a platform for property and related services in Raipur, needed a revamp. Phase 1 focused on resolving user pain points and streamlining property processes, paving the way for future monetization.",
  meta: [
    {
      label: "Duration",
      value: "6 Weeks"
    },
    {
      label: "Design Tool",
      value: "Figma"
    },
    {
      label: "Device Adaptability",
      value: "Desktop, Mobile (Android)"
    }
  ],
  mobileMeta: [
    {
      label: "Duration",
      value: "16 Weeks"
    },
    {
      label: "Tools",
      value: "Figma"
    },
    {
      label: "Device Adaptibility",
      value: "Desktop and Mobile"
    }
  ],
  accent: "bg-gradient-to-br from-indigo-500 to-indigo-300",
  summary: [
    {
      width: 294,
      images: [
        {
          alt: "Summary - image 1",
          src: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-1-gif-666x1482-d059c95ff1.webp",
          webm: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-1-gif-666x1482-d059c95ff1.webm",
          mp4: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-1-gif-666x1482-d059c95ff1.mp4",
          poster: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-1-gif-666x1482-d059c95ff1.webp",
          width: 294,
          height: 540
        }
      ]
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - image 2",
          src: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-gif-666x1482-55169e6639.webp",
          webm: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-gif-666x1482-55169e6639.webm",
          mp4: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-gif-666x1482-55169e6639.mp4",
          poster: "/images/case-studies/raipur-homes/frame-2085663036-raipur-proto-gif-666x1482-55169e6639.webp",
          width: 294,
          height: 540
        }
      ]
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - Ideation",
          src: "/images/case-studies/raipur-homes/frame-2085663035-storyboard-1-2560x1532-ff4c5fec66.webp",
          width: 294,
          height: 263
        }
      ],
      text: {
        label: "3 step process",
        title: "Ideation",
        text: "We combined user and operations feedback with competitor analysis via user journey, userflow, moodboard."
      },
      textPosition: "below"
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - Prototype Delivery",
          src: "/images/case-studies/raipur-homes/frame-2085663027-raipur-problem-1-1102x1392-8e903594af.webp",
          width: 294,
          height: 385
        }
      ],
      text: {
        title: "Prototype Delivery",
        text: "It was really easy to communicated with the engineering team with prototype"
      },
      textPosition: "below"
    }
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      layout: "stacked",
      blocks: [
        {
          type: "text",
          text: "Raipur Homes, a platform for property and related services in Raipur, needed a revamp. Phase 1 focused on resolving user pain points and streamlining property processes, paving the way for future monetization."
        },
        {
          type: "text",
          text: "Raipur Homes is an established platform in the real estate domain with an existing web product tailored for multiple user personas. Therefore, understanding each persona is essential to ensure a user-centric and effective experience."
        },
        {
          type: "item",
          title: "Tenant",
          text: "These users are the primary audience for the platform, actively seeking properties for sale or rent.",
          width: 490
        },
        {
          type: "image",
          alt: "Introduction - image 1",
          src: "/images/case-studies/raipur-homes/frame-2085663016-raipur-intro-iphone-1-1920x2095-a57015f888.webp",
          width: 490,
          height: 425
        },
        {
          type: "item",
          title: "Owners",
          text: "The platform's data is primarily driven by sellers seeking customers for their properties.",
          width: 490
        },
        {
          type: "image",
          alt: "Introduction - image 2",
          src: "/images/case-studies/raipur-homes/frame-2085663016-raipur-intro-iphone-2-1920x2095-7231ce1910.webp",
          width: 490,
          height: 425
        },
        {
          type: "item",
          title: "Administrators",
          text: "It require an intelligent dashboard for comprehensive backend operational management.",
          width: 1016
        },
        {
          type: "image",
          alt: "Introduction - image 3",
          src: "/images/case-studies/raipur-homes/frame-2085663016-raipur-intro-screenshot-2210x1324-8feaa00079.webp",
          width: 1016,
          height: 425
        }
      ]
    },
    {
      id: "problem-statement",
      layout: "plain-grid",
      title: "Problem Statement",
      blocks: [
        {
          type: "text",
          text: "Here we are not only creating a product to just have it, we having a product to solve the problem in the context of raipur homes."
        },
        {
          type: "item",
          title: "Buyer's Concern",
          text: "Our research indicates over 80% of our target users, mainly professionals and students, use OLX for property, but they prioritize data quality and verification.",
          width: 315
        },
        {
          type: "item",
          title: "Seller's Concern",
          text: "Property sellers and landlords face heavy app engagement due to customer background concerns, making high-quality, pre-screened leads their top priority.",
          width: 315
        },
        {
          type: "item",
          title: "Internal Operation",
          text: "The admin panel is slow and cluttered, lacking analytics and lead distribution. Duplicate fields, confusing statuses, and vanishing listings force error-prone manual work.",
          width: 315
        }
      ]
    },
    {
      id: "project-goals-and-requirements",
      layout: "plain-grid",
      title: "Project Goals and Requirements",
      blocks: [
        {
          type: "text",
          text: "Raipur Homes is an established platform in the real estate domain with an existing web product tailored for multiple user personas. Therefore, understanding each persona is essential to ensure a user-centric and effective experience."
        },
        {
          type: "item",
          title: "Streamline Property Discovery",
          text: "Simplify property search for buyers and renters using intuitive, high-relevance filters.",
          width: 315
        },
        {
          type: "item",
          title: "Free Listings Communications",
          text: "Allow unlimited free listings in Phase 1, integrating in-app chat, WhatsApp, and masked calls.",
          width: 315
        },
        {
          type: "item",
          title: "Robust Dashboards",
          text: "Deliver tailored CRM dashboards for buyers, sellers, agents, and the operations team.",
          width: 315
        },
        {
          type: "item",
          title: "Notifications and Transparency",
          text: "Implement push SMS alerts for approvals and inquiries alongside unique listing IDs.",
          width: 315
        },
        {
          type: "item",
          title: "Foundation for Monetization",
          text: "Design Phase 1 to scale into Phase 2 paid packages, limits, and featured listings.",
          width: 315
        },
        {
          type: "item",
          title: "Additional Services",
          text: "Showcase interior and construction portfolios with lead forms to drive alternate revenue.",
          width: 315
        }
      ]
    },
    {
      id: "user-research",
      layout: "stacked",
      title: "User Research",
      blocks: [
        {
          type: "text",
          text: "Our research was diverse yet focused—centered on insights from existing users and the operations team. Competitor analysis helped us identify key features and refine the overall style and experience."
        },
        {
          type: "item",
          title: "Interenal and User Interviews",
          text: "We prepared question sets for both personas, recognizing their close interaction. The operations team provided clarity on user needs, while user interviews offered valuable insights to shape the product effectively.",
          width: 485
        },
        {
          type: "image",
          alt: "User Research - image 1",
          src: "/images/case-studies/raipur-homes/research-interviews.webp",
          width: 485,
          height: 442
        },
        {
          type: "item",
          title: "Competitor Analysis and Benchmarking",
          text: "In this phase, we conducted competitor research to understand their positioning in Raipur’s market. Based on our analysis, we created a benchmarking sheet to consolidate key insights into a single reference framework.",
          width: 485
        },
        {
          type: "image",
          alt: "User Research - image 2",
          src: "/images/case-studies/raipur-homes/research-competitors.webp",
          width: 485,
          height: 442
        }
      ]
    },
    {
      id: "ideation",
      layout: "stacked",
      title: "Ideation",
      blocks: [
        {
          type: "item",
          title: "User story and Journey",
          text: "Before moving into design and ideation, it’s essential to understand the user story in depth to identify the core problems the application aims to solve and what lies ahead in the user journey.",
          width: 1018
        },
        {
          type: "images",
          items: [
            {
              alt: "Ideation - user journey",
              src: "/images/case-studies/raipur-homes/ideation-user-journey.webp",
              width: 666,
              height: 373
            },
            {
              alt: "Ideation - storyboard",
              src: "/images/case-studies/raipur-homes/ideation-storyboard.webp",
              width: 328,
              height: 373
            }
          ]
        },
        {
          type: "item",
          title: "User Flow Mapping",
          text: "We invested quality time in ideating and mapping user flows, which provided deeper product understanding and ensured clarity across the entire experience.",
          width: 1018
        },
        {
          type: "image",
          alt: "Ideation - user flow",
          src: "/images/case-studies/raipur-homes/ideation-user-flow.webp",
          width: 1018,
          height: 354
        },
        {
          type: "item",
          title: "Refrence Gethring and Moodbaord",
          text: "After gathering references, creating user flow and lots of research had given us a clear picture that how this product should look like and what basic problem we are going to solve so we started shaping the whole product in rough and flexible manner.",
          width: 1018
        },
        {
          type: "image",
          alt: "Ideation - moodboard",
          src: "/images/case-studies/raipur-homes/ideation-moodboard.webp",
          width: 1018,
          height: 354
        },
        {
          type: "item",
          title: "High Fidelity Wireframing",
          text: "In this phase, we conducted competitor research to understand their positioning in Raipur’s market. Based on our analysis, we created a benchmarking sheet to consolidate key insights into a single reference framework.",
          width: 1018
        },
        {
          type: "image",
          alt: "Ideation - wireframing",
          src: "/images/case-studies/raipur-homes/ideation-wireframing.webp",
          width: 1018,
          height: 354
        }
      ]
    },
    {
      id: "design",
      layout: "stacked",
      title: "Design",
      blocks: [
        {
          type: "item",
          title: "Interenal and User Interviews",
          text: "We spent two weeks building a robust design system of over 30 components, which significantly accelerated the creation of our final visuals.",
          width: 232
        },
        {
          type: "image",
          alt: "Design - Design system",
          src: "/images/case-studies/raipur-homes/design-system.webp",
          width: 754,
          height: 346
        },
        {
          type: "item",
          title: "Tenant Section",
          text: "The homepage serves as a key engagement point, designed to capture user interest and support seamless discovery of services and listings.",
          width: 232
        },
        {
          type: "image",
          alt: "Design - Tenant section",
          src: "/images/case-studies/raipur-homes/design-tenant.webp",
          width: 754,
          height: 446
        },
        {
          type: "item",
          title: "Property Owner Section",
          text: "The homepage serves as a key engagement point, designed to capture user interest and support seamless discovery of services and listings.",
          width: 1018
        },
        {
          type: "image",
          alt: "Design - Property owner section",
          src: "/images/case-studies/raipur-homes/design-owner.webp",
          width: 1018,
          height: 446
        },
        {
          type: "item",
          title: "Admin Panel",
          text: "To streamline operations, we introduced a centralized master admin panel. Our primary objective was to ensure the interface was intuitive and easy to navigate, minimizing complexity to reduce the learning curve and enhance efficiency for internal users.",
          width: 1018
        },
        {
          type: "image",
          alt: "Design - Admin panel",
          src: "/images/case-studies/raipur-homes/design-admin.webp",
          width: 1018,
          height: 562
        }
      ]
    }
  ]
};
