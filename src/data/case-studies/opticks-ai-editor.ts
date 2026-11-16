import type { CaseStudy } from "@/types";

export const opticksAiEditor: CaseStudy = {
  slug: "opticks-ai-editor",
  title: "Opticks AI",
  titleSuffix: "Editor",
  description: "Opticks is an AI-powered tool that generates and customizes app store creatives with minimal input, offering advanced editing and fine-tuning capabilities.",
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
      label: "Ideation Tool",
      value: "Lovable, Figma Make"
    }
  ],
  accent: "bg-gradient-to-br from-red-600 to-red-400",
  summary: [
    {
      width: 294,
      images: [
        {
          alt: "Summary - image 1",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-imockup-iphone-13-793x1600-088cdacc0c.webp",
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
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-firefly-user-440x566-12a579eb0e.webp",
          width: 294,
          height: 540
        }
      ]
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - image 3",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-ideation-1-1680x1408-b6dad96ade.webp",
          width: 294,
          height: 292
        },
        {
          alt: "Summary - image 4",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-pikaso-photo-604x413-b1d6adcfd7.png",
          width: 294,
          height: 232
        }
      ]
    },
    {
      width: 294,
      images: [
        {
          alt: "Summary - Wireframing",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-imockup-iphone-14-1021x2000-aa75637e6f.webp",
          width: 294,
          height: 299
        }
      ],
      text: {
        label: "5 Iterations",
        title: "Wireframing",
        text: "More then 5 Iterations has been done to reach upto final solution."
      },
      textPosition: "above"
    }
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "text",
          text: "Affle's decades in ad-tech revealed a persistent struggle for advertisers to create diverse app store screenshots. Though identified early, solutions were lacking. Key client challenges included"
        },
        {
          type: "item",
          title: "Phase 1, Generation Tool",
          text: "The initial phase focused on defining the UX and UI foundation for the image generation engine. Our goal was to simplify complex AI inputs into a clean interface, enabling advertisers to effortlessly generate assets and establishing a baseline workflow before expanding into advanced editing.",
          width: 227
        },
        {
          type: "image",
          alt: "Introduction - image 1",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-screen-gif-800x452-b4be34057b.webp",
          webm: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-screen-gif-800x452-b4be34057b.webm",
          mp4: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-screen-gif-800x452-b4be34057b.mp4",
          poster: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-screen-gif-800x452-b4be34057b.webp",
          width: 717,
          height: 418
        },
        {
          type: "item",
          title: "Phase 2, Editor",
          text: "Advertiser feedback showed that Phase 1's basic tools were insufficient for professional workflows. To allow users to refine assets without restarting generation, we built a comprehensive editor with precise controls to deliver production-ready creative assets.",
          width: 227
        },
        {
          type: "image",
          alt: "Introduction - image 2",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-adcreative-gif-1-800x432-20c2293789.webp",
          webm: "/images/case-studies/opticks-ai-editor/frame-2085663060-adcreative-gif-1-800x432-20c2293789.webm",
          mp4: "/images/case-studies/opticks-ai-editor/frame-2085663060-adcreative-gif-1-800x432-20c2293789.mp4",
          poster: "/images/case-studies/opticks-ai-editor/frame-2085663060-adcreative-gif-1-800x432-20c2293789.webp",
          width: 717,
          height: 390
        },
        {
          type: "item",
          title: "Summary",
          text: "Phase 1 established the core UX/UI for the image generation engine to simplify asset creation, while Phase 2 introduced a comprehensive editor based on user feedback to provide the precise controls needed for production-ready designs.",
          width: 976
        }
      ]
    },
    {
      id: "problem-statement",
      title: "Problem Statement",
      blocks: [
        {
          type: "text",
          text: "Advertisers struggle to quickly create ready-to-use app store images. While AI tools help them generate initial designs easily, these tools lack the simple, precise editing features needed to fix details, forcing users to start over and slowing down their work. There are the different categories of problems which our advertisers were facing. Frequent Creative Generation: A constant need for daily or occasion-based updates means advertisers are always scrambling for new visuals. High Resource Consumption: Producing these creatives demands significant bandwidth and effort, draining valuable team resources. Theme Selection Challenges: Difficulty aligning new themes with existing brand guidelines, often leading to conflicts. Which takes to much time to decide"
        }
      ]
    },
    {
      id: "solution",
      title: "Solution",
      blocks: [
        {
          type: "text",
          text: "We designed a two-phase solution: first, an intuitive AI engine that generates initial designs from single prompts, followed by a comprehensive editor that gives users complete control to modify layouts, text, and visuals manually. This combined approach bridges the gap between raw AI outputs and specific user expectations, ensuring a precise, production-ready result."
        }
      ]
    },
    {
      id: "challenges",
      title: "Challenges",
      blocks: [
        {
          type: "text",
          text: "During our research, we observed that AI generation adaptors sometimes produce inconsistent results, and the accuracy of APIs can decline under high simultaneous usage. Identifying reliable generation API partners and ensuring seamless integration became a major challenge in building a stable and scalable solution."
        }
      ]
    },
    {
      id: "approach",
      title: "Approach",
      blocks: [
        {
          type: "text",
          text: "Our multi-phase research, split between product and design teams, explored implementation possibilities—an exciting yet frustrating process of generating many unfeasible ideas. Below are the detailed phases and responsibilities for both design and product research."
        },
        {
          type: "item",
          title: "Competition Analysis",
          text: "The product team concentrated on the technical backbone and strategic partnerships necessary for bringing the AI image generation to life: Finding AI partners to integrate Research about there capabilities and linitations API Testing to confirm accuracy and tech featibilities.",
          width: 492
        },
        {
          type: "item",
          title: "Design Team Research",
          text: "The design team’s focus was on shaping the user experience and visual interface of our AI image generation tool Researched how AI Image generation flow should be ideally Finding UI references to ideate visuals Creating flow and low level wireframes",
          width: 492
        }
      ]
    },
    {
      id: "research-phase-1",
      title: "Research (Phase 1)",
      blocks: [
        {
          type: "item",
          title: "Competitive Research",
          text: "Moving into the research phase, we conducted a competitive analysis of existing creative and image generation platforms to understand industry standards and analyze user generation patterns.",
          width: 1000
        },
        {
          type: "item",
          title: "AdCreative.ai",
          text: "We observed that despite a clean layout, the platform felt feature-heavy, leading to a steep learning curve. The average task completion time reached a high of 40–55 seconds per asset generation.",
          width: 227
        },
        {
          type: "image",
          alt: "Research (Phase 1) - image 1",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-gif-maker-1920x911-46b04a4ccd.webp",
          webm: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-gif-maker-1920x911-46b04a4ccd.webm",
          mp4: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-gif-maker-1920x911-46b04a4ccd.mp4",
          poster: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-gif-maker-1920x911-46b04a4ccd.webp",
          width: 717,
          height: 340
        },
        {
          type: "item",
          title: "Kittl",
          text: "When evaluating Kittl, we noted that while the platform is not explicitly tailored for app store screenshot design, it delivers high-quality outputs. Additionally, its generation process is significantly faster, showcasing a much lower task completion time compared to AdCreative.",
          width: 227
        },
        {
          type: "image",
          alt: "Research (Phase 1) - image 2",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-1-gif-1280x599-63dd369639.webp",
          webm: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-1-gif-1280x599-63dd369639.webm",
          mp4: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-1-gif-1280x599-63dd369639.mp4",
          poster: "/images/case-studies/opticks-ai-editor/frame-2085663060-opticks-1-gif-1280x599-63dd369639.webp",
          width: 717,
          height: 384
        },
        {
          type: "item",
          title: "Mood Board and References",
          text: "To ensure a modern, user-friendly interface, the team actively sought strong UI references across industries, aiding in the creation of visually appealing and functional layouts.",
          width: 227
        },
        {
          type: "image",
          alt: "Research (Phase 1) - image 3",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-image-41756-1920x1200-3b233ca998.webp",
          width: 717,
          height: 340
        },
        {
          type: "item",
          title: "User Flow Mapping and Ideation",
          text: "Based on their research and UI inspirations, the design team crafted comprehensive user flows, which they then translated into detailed wireframes, providing a structural blueprint for the user interface.",
          width: 227
        },
        {
          type: "image",
          alt: "Research (Phase 1) - image 4",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-image-41757-1920x1200-46c9bbd989.webp",
          width: 717,
          height: 340
        }
      ]
    },
    {
      id: "wireframing",
      title: "Wireframing",
      blocks: [
        {
          type: "text",
          text: "We began with a clear vision for the editor design, but during iterations, we identified the need to incorporate chain editing features. Through multiple refinements, we successfully arrived at the final design."
        },
        {
          type: "item",
          title: "Iteration 1",
          text: "Our first attempt to arrange all key elements within a single frame for structural approval was rejected due to its rough design. However, gaining preliminary approval on the overall structure allowed us to proceed with refinements.",
          width: 243
        },
        {
          type: "image",
          alt: "Wireframing - image 1",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-image-41758-1920x1200-9f5a8ba278.webp",
          width: 717,
          height: 340
        },
        {
          type: "item",
          title: "Iteration 2",
          text: "We initially proposed a sidebar design with a mascot and intro, but it proved redundant for daily users and created unnecessary friction. So, we moved to a more seamless and efficient design iteration.",
          width: 243
        },
        {
          type: "image",
          alt: "Wireframing - image 2",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-image-41759-1920x1200-2fa8ec1f9b.webp",
          width: 717,
          height: 340
        },
        {
          type: "item",
          title: "Iteration 1",
          text: "The initial design was quite raw, as we were still exploring the best approach, specifically whether the editor should function as a separate, dedicated section.",
          width: 243
        },
        {
          type: "image",
          alt: "Wireframing - image 3",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-rectangle-8433x2655-d206003775.webp",
          width: 717,
          height: 287
        },
        {
          type: "item",
          title: "Iteration 2",
          text: "In subsequent iterations, we realized a separate editor flow would be more effective. While we enhanced the visuals, they still felt rough, prompting further refinement to achieve a polished design.",
          width: 243
        },
        {
          type: "image",
          alt: "Wireframing - image 4",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-blinkit-1-1-1290x2796-07236c505b.webp",
          width: 717,
          height: 287
        }
      ]
    },
    {
      id: "final-ui",
      title: "Final UI",
      blocks: [
        {
          type: "text",
          text: "By aligning user needs with business goals, we refined the final design into an intuitive, scalable solution that streamlines the asset creation workflow. To maximize creative control, this iteration introduces features like drag and drop editing, background removal, AI text suggestions, and custom logo integration, empowering advertisers to efficiently deliver production-ready assets."
        },
        {
          type: "item",
          title: "Generation Feature",
          text: "Our first attempt to arrange all key elements within a single frame for structural approval was rejected due to its rough design. However, gaining preliminary approval on the overall structure allowed us to proceed with refinements.",
          width: 1000
        },
        {
          type: "item",
          title: "Onboarding",
          text: "Introduce capabilities early to set clear user expectations and demonstrate product impact.",
          width: 248
        },
        {
          type: "item",
          title: "Generation",
          text: "Guide users through the creation workflow to build their initial assets.",
          width: 195
        },
        {
          type: "item",
          title: "Selection",
          text: "Empower users to choose the layout that best fits their app's style.",
          width: 195
        },
        {
          type: "item",
          title: "Customization",
          text: "Allow users to modify elements to fix AI inaccuracies and meet precise requirements.",
          width: 195
        },
        {
          type: "image",
          alt: "Final UI - image 1",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-blinkit-1-1-1290x2796-2fe914dca1.webp",
          width: 1000,
          height: 482
        },
        {
          type: "item",
          title: "Editor",
          text: "In this iteration, we focused on enhancing the overall user experience by introducing advanced tools such as drag-and-drop, background removal, AI text suggestions, and options to add logos or images. These features empower users with greater visual control and creative flexibility.",
          width: 1000
        },
        {
          type: "image",
          alt: "Final UI - image 2",
          src: "/images/case-studies/opticks-ai-editor/frame-2085663060-blinkit-1-1-1290x2796-3071462cc6.webp",
          width: 1000,
          height: 482
        }
      ]
    }
  ]
};
