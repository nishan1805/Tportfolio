import type { PassionProject } from "@/types";

const CAPTION = "Available in behance";

/**
 * Desktop clips are bottom-aligned in the 532px panel (y = 532 − height) and
 * start at panel x −42. Image boxes are relative to that clip.
 * Mobile boxes are relative to the panel (313px, or 289px on the two-line card).
 */
export const passionProjects: PassionProject[] = [
  {
    id: "payment-reminder",
    kicker: "Passion Project",
    title: "Payment Reminder App",
    desktopHref: "https://www.behance.net/gallery/193664943/Payment-Reminder-App-UX-Audit",
    tags: ["Android App", "16 Screens"],
    mobileTags: ["Mobile App", "18 Screens"],
    caption: CAPTION,
    image: "/images/passion/payment-reminder.webp",
    panel: "bg-gradient-to-b from-[#eaa03e] to-[#fef3e7]",
    mobileCopyH: 112,
    desktop: {
      clip: { x: -42, y: 40, w: 533, h: 492 },
      image: { x: -499, y: -183, w: 1570.7, h: 1294.4 },
      fit: "cover",
    },
    mobile: {
      clip: { x: -2.2, y: -9, w: 349.9, h: 323 },
      image: { x: -327.6, y: -120.1, w: 1031.2, h: 849.8 },
      fit: "cover",
    },
  },
  {
    id: "chatbot",
    kicker: "Interests",
    mobileKicker: "Passion Project",
    title: "Chatbot Design",
    desktopHref: "https://www.behance.net/gallery/185487135/Chatbot-UI-and-Prototype",
    tags: ["Android App", "12 Screens"],
    mobileTags: ["Feature", "13 Screens"],
    caption: CAPTION,
    image: "/images/passion/chatbot.webp",
    panel: "bg-gradient-to-b from-[#100f53] to-[#302ec4]",
    mobileCopyH: 112,
    desktop: {
      clip: { x: -42, y: 40, w: 533, h: 492 },
      image: { x: -412.9, y: -156.3, w: 1392.8, h: 1127.1 },
      fit: "cover",
    },
    mobile: {
      clip: { x: -5.6, y: 0, w: 340.2, h: 314 },
      image: { x: -263.5, y: -99.8, w: 888.9, h: 719.3 },
      fit: "cover",
    },
  },
  {
    id: "tele-medical",
    kicker: "Interests",
    mobileKicker: "Passion Project",
    title: "Tele Medical Consultation App",
    desktopHref: "https://www.behance.net/gallery/191426547/Telemedicine-App-UX-Case-study",
    tags: ["Android App", "51 Screens"],
    mobileTags: ["Mobile App", "56 Screens"],
    caption: CAPTION,
    image: "/images/passion/tele-medical.webp",
    panel: "bg-gradient-to-b from-[#0486a3] to-[#70daf2]",
    mobileCopyH: 136,
    desktop: {
      image: { x: 101, y: 92, w: 311, h: 610 },
      fit: "fill",
    },
    mobile: {
      image: { x: 30, y: 29, w: 237, h: 465 },
      fit: "fill",
    },
  },
  {
    id: "medicine-reminder",
    kicker: "Passion Project",
    title: "Medicine Reminder App",
    tags: ["Android App", "38 Screens"],
    mobileTags: ["Mobile App", "36 Screens"],
    caption: CAPTION,
    image: "/images/passion/medicine-reminder.webp",
    panel: "bg-gradient-to-b from-[#4514db] to-[#162d2d]",
    mobileCopyH: 112,
    desktop: {
      clip: { x: -42, y: 108, w: 533, h: 424 },
      image: { x: -99, y: 0, w: 732, h: 687 },
      fit: "fill",
    },
    mobile: {
      clip: { x: -16, y: 64, w: 312.7, h: 248.7 },
      image: { x: -58.1, y: 0, w: 429.4, h: 403 },
      fit: "fill",
    },
  },
];
