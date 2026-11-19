import type { CaseStudy } from "@/types";

export const designSystemAndIconography: CaseStudy = {
  slug: "design-system-and-iconography",
  title: "Design System and Iconography",
  description: "Designing empathetic interface systems for digital well-being platforms that leverage emotional triggers, calm aesthetics, and reflective interaction loops to support user mental health.",
  meta: [
    {
      label: "Design Tool and Community",
      value: "Figma"
    },
    {
      label: "Resource Type",
      value: "Free"
    }
  ],
  mobileMeta: [
    {
      label: "Tools",
      value: "Figma"
    },
    {
      label: "Source Type",
      value: "Free"
    }
  ],
  accent: "bg-gradient-to-br from-green-500 to-green-300",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      layout: "copy",
      blocks: [
        {
          type: "text",
          text: "Building modern digital products at scale requires consistency, efficiency, and seamless collaboration between design and engineering. To streamline this process and give back to the global design ecosystem, I created and published the Pixel Design System on the Figma Community."
        },
        {
          type: "text",
          text: "The system serves as a foundational toolkit, providing pre-built, accessible, and tokenized UI components designed to accelerate workflows and unify brand aesthetics across desktop and mobile interfaces."
        }
      ]
    },
    {
      id: "what-why-and-when-to-use-a-design-system",
      navTitle: "What, Why, When",
      title: "What, Why, and When to Use a Design System",
      layout: "plain",
      blocks: [
        {
          type: "item",
          title: "Why?",
          text: "When scaling digital products across multi-platform ecosystems, establishing brand consistency across growing teams, or reducing repetitive design work during fast-paced product sprints.",
          width: 315
        },
        {
          type: "item",
          title: "When?",
          text: "To eliminate redundant UI creation, maintain strict visual and interaction standards, improve accessibility, and bridge the gap between design specs and developer handoff.",
          width: 315
        },
        {
          type: "item",
          title: "What?",
          text: "A centralized collection of reusable UI components, typography scales, color tokens, layout grids, and interactive variants built using modern Figma features like Auto Layout and Variables.",
          width: 315
        }
      ]
    },
    {
      id: "how-to-design-it-how-i-designed-it",
      navTitle: "How to Design It",
      title: "How to Design It, How I Designed It",
      layout: "components",
      blocks: [
        {
          type: "item",
          title: "Core Philosophy",
          text: "Systems should be flexible, highly customisable, and intuitive for both designers and developers to adopt seamlessly.",
          width: 315
        },
        {
          type: "item",
          title: "Foundational Tokens",
          text: "Established a robust system of variables for typography, spacing, elevation, and color palettes including light dark mode logic) to ensure multi theme adaptability.",
          width: 315
        },
        {
          type: "item",
          title: "Component Architecture",
          text: "Built over 25 core UI components—including dynamic buttons, input fields, navigation bars, modals, and status badges leveraging Auto Layout and component properties for variants.",
          width: 315
        },
        {
          type: "item",
          title: "List of Components",
          text: "Here are the list of some of the primary UI components. Although there are more than 25 UI components.",
          width: 1016
        },
        {
          type: "image",
          alt: "Avatars",
          src: "/images/case-studies/design-system-and-iconography/components/avatars.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Buttons",
          src: "/images/case-studies/design-system-and-iconography/components/buttons.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Chips",
          src: "/images/case-studies/design-system-and-iconography/components/chips.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Calendar",
          src: "/images/case-studies/design-system-and-iconography/components/calendar.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Cards",
          src: "/images/case-studies/design-system-and-iconography/components/cards.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Input Field",
          src: "/images/case-studies/design-system-and-iconography/components/input-field.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Menu",
          src: "/images/case-studies/design-system-and-iconography/components/menu.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "List",
          src: "/images/case-studies/design-system-and-iconography/components/list.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Progress",
          src: "/images/case-studies/design-system-and-iconography/components/progress.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Sliders",
          src: "/images/case-studies/design-system-and-iconography/components/sliders.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Snack bar",
          src: "/images/case-studies/design-system-and-iconography/components/snack-bar.webp",
          width: 494,
          height: 278
        },
        {
          type: "image",
          alt: "Tabs",
          src: "/images/case-studies/design-system-and-iconography/components/tabs.webp",
          width: 494,
          height: 278
        },
        {
          type: "text",
          text: "There are 10 more components"
        }
      ]
    },
    {
      id: "iconography",
      title: "Iconography",
      layout: "icon-tile",
      blocks: [
        {
          type: "text",
          text: "I designed a fully custom, handcrafted iconography suite tailored specifically for this project. Every icon is built on a precise geometric grid to deliver pixel-perfect clarity, brand uniqueness, and visual consistency across all touchpoints."
        },
        {
          type: "image",
          alt: "Iconography - image 1",
          src: "/images/case-studies/design-system-and-iconography/icons-1.png",
          width: 1012,
          height: 353
        }
      ]
    },
    {
      id: "conclusion",
      title: "Conclusion",
      blocks: [
        {
          type: "text",
          text: "Publishing Pixel Design System proved how systematic UI foundations drastically reduce design technical debt, accelerate prototyping velocity, and promote cross-functional design consistency."
        }
      ]
    }
  ]
};
