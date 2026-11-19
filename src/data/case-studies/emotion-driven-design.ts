import type { CaseStudy } from "@/types";

export const emotionDrivenDesign: CaseStudy = {
  slug: "emotion-driven-design",
  title: "Emotion Driven Design",
  description: "Designing empathetic interface systems for digital well-being platforms that leverage emotional triggers, calm aesthetics, and reflective interaction loops to support user mental health.",
  meta: [
    {
      label: "Design Tool",
      value: "Figma"
    },
    {
      label: "Device Adaptability",
      value: "Mobile (Android)"
    }
  ],
  accent: "bg-gradient-to-br from-sky-500 to-sky-200",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      layout: "copy",
      blocks: [
        {
          type: "text",
          text: "Digital well-being and mental health platforms require an approach that goes far beyond utility and performance metrics. Traditional UI patterns can induce stress or overwhelming cognitive fatigue when users are already emotionally vulnerable. By applying Emotion-Driven Design, I created an intuitive experience centred on empathy, self reflection, and calming visual hierarchy, transforming daily digital interactions into moments of mindfulness and support."
        }
      ]
    },
    {
      id: "what-why-and-when-to-use-intelligence",
      navTitle: "What, Why, When",
      layout: "plain",
      title: "What, Why, and When to Use Intelligence",
      blocks: [
        {
          type: "item",
          title: "Why?",
          text: "Because human decision making is fundamentally driven by emotion. Connecting with users on visceral, behavioural, and reflective levels reduces cognitive friction, builds long term loyalty, and transforms functional interactions into memorable experiences.",
          width: 315
        },
        {
          type: "item",
          title: "When?",
          text: "When designing products where user sentiment, trust, and cognitive state directly impact engagement, retention, or brand perception especially during critical, high friction, or stressful user moments.",
          width: 315
        },
        {
          type: "item",
          title: "What?",
          text: "A design approach that purposefully shapes the aesthetic appeal, behavioural usability and pleasure of use, and reflective meaning and personal connection responses of users to build deeply resonant digital products.",
          width: 315
        }
      ]
    },
    {
      id: "how-to-design-it-how-i-designed-it",
      navTitle: "How to Design It",
      title: "How to Design It & How I Designed It",
      layout: "story",
      blocks: [
        {
          type: "text",
          text: "Core Philosophy: Interfaces should listen, validate, and calm—never overwhelm or demand immediate action."
        },
        {
          type: "item",
          title: "Calming Aesthetic Soft Visuals",
          text: "Used soft gradients, gentle typography, and non-intrusive UI elements to create an instantly soothing visual environment, avoiding high contrast stress triggers.",
          width: 501
        },
        {
          type: "text",
          text: "These are some primary factors to design screens to emphasis over emotion."
        },
        {
          type: "text",
          text: "Colours and Elementary Selection. Fonts are the key. Layout and categorisation. Self explanatory visuals elements."
        },
        {
          type: "image",
          alt: "How to Design It & How I Designed It - image 1",
          src: "/images/case-studies/emotion-driven-design/how-to-panel.webp",
          width: 459,
          height: 403
        },
        {
          type: "item",
          title: "Empathetic Interaction Loops",
          text: "Designed guided mood tracking and reflective onboarding prompts that let users express feelings at their own pace without guilt, pressure, or dark patterns.",
          width: 1016
        },
        {
          type: "item",
          title: "Identity and Connection",
          text: "To build a strong user connection, the platform uses a live mascot that reacts dynamically to different situations, giving the interface a sense of life, relatability and compatibility.",
          width: 444
        },
        {
          type: "image",
          alt: "Identity and Connection - mascot home screen",
          src: "/images/case-studies/emotion-driven-design/how-to-identity.webp",
          width: 448,
          height: 466
        },
        {
          type: "item",
          title: "The Interaction Loop",
          text: "We need serve the users even after chat session has ended so that we can track the users and also alerting the users about previous tasks.",
          width: 444
        },
        {
          type: "image",
          alt: "How to Design It & How I Designed It - image 3",
          src: "/images/case-studies/emotion-driven-design/how-to-interaction-loop.webp",
          width: 448,
          height: 466
        },
        {
          type: "item",
          title: "Concept of wise emotional support",
          text: "When analyzing our user personas, it’s clear they are in an emotionally and mentally vulnerable state, making clear, reassuring information essential. To address this, we introduced audio/podcast content as a core concept—while carefully designing around regional and language nuances.",
          width: 444
        },
        {
          type: "image",
          alt: "How to Design It & How I Designed It - image 4",
          src: "/images/case-studies/emotion-driven-design/how-to-emotional-support.webp",
          width: 448,
          height: 418
        },
        {
          type: "item",
          title: "Organised chat",
          text: "Since it is mental well being app, we have to make sure that chats are directional and solution oriented.",
          width: 444
        },
        {
          type: "image",
          alt: "How to Design It & How I Designed It - image 5",
          src: "/images/case-studies/emotion-driven-design/how-to-organised-chat.webp",
          width: 448,
          height: 466
        }
      ]
    },
    {
      id: "conclusion",
      title: "Conclusion",
      layout: "photo-pair",
      blocks: [
        {
          type: "text",
          text: "Because human decision making is fundamentally driven by emotion. Connecting with users on visceral, behavioural, and reflective levels reduces cognitive friction, builds long term loyalty, and transforms functional interactions into memorable experiences."
        },
        {
          type: "text",
          text: "Won the contest at IIT Bhilai for “Best Design Solution”"
        },
        {
          type: "images",
          items: [
            {
              alt: "Conclusion - image 1",
          src: "/images/case-studies/emotion-driven-design/frame-2085663076-image-41766-1280x960-029bb6e9b3.webp",
              width: 496,
              height: 377
            },
            {
              alt: "Conclusion - image 2",
          src: "/images/case-studies/emotion-driven-design/frame-2085663076-image-41765-960x1280-acf836300f.webp",
              width: 496,
              height: 377
            }
          ]
        }
      ]
    }
  ]
};
