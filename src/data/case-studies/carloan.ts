import type { CaseStudy } from "./types";

export const carloan: CaseStudy = {
  slug: "carloan",
  title: "Redefining the loan experience for used-car buyers",
  subtitle:
    "Redesigning the end-to-end financing journey at CARS24 — from discovery to delivery — through research, experimentation, and systems thinking.",
  role: "Product Designer",
  timeline: "2 years",
  company: "CARS24",
  category: "FINTECH",
  metric: "Loan processing time reduced by ~2 days",
  heroVideo: "/images/case-studies/carloan/hero.mp4",
  cardImage: "/images/case-studies/carloan/card4.png",
  overview: {
    role: "Product Designer",
    team: [
      "Archit Aggrawal, PM",
      "Harshit Sinha, Manager",
      "Nishanth Prabhu, UX Designer",
    ],
    timelineStatus: "2 years with the consumer finance team",
    paragraphs: [
      "CARS24 is a second-hand used car marketplace. ~70% of buyers needed loans to afford a car. I spent close to 2 years with the consumer finance team, redesigning the entire loan experience — from discovery and pre-approval to post-booking formalities and order tracking. The loan journey touched every stage of the car buying experience, and each stage had its own set of problems.",
      "Loan-related issues were the second-highest reason for cancelled bookings. Finance customers waited ~5 days for delivery while cash buyers got their cars in under a day. Through a series of research-driven experiments and systemic redesigns, we shortened loan processing time by ~2 days and significantly improved booking completion rates.",
    ],
  },
  sections: [
    {
      id: "why-speed-mattered",
      heading: "Why Speed Mattered",
      content: [
        {
          type: "MetricHighlight",
          stat: "5 days",
          label: "average delivery time for finance customers vs ~1 day for cash buyers",
        },
        {
          type: "TextBlock",
          text: "The gap was driven by multiple friction points across the loan journey; from users not knowing about loans early enough, to manual processes post-booking that left everyone confused. We needed to fix the entire pipeline, not just one step.",
        },
      ],
    },
    {
      id: "the-full-picture",
      heading: "The Full Picture",
      content: [
        {
          type: "TextBlock",
          text: "The loan journey spanned the entire car buying journey. Over 2 years, I redesigned every stage: discovery entry points, pre-approval, bank statement sharing, app navigation, the post-booking experience, order summary, and loan calculators.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/Journeymap.png",
          variant: "borderless",
        },
      ],
    },
    {
      id: "getting-users-in-early",
      heading: "Getting Users In Early",
      content: [
        {
          type: "TextBlock",
          text: "Loans were only visible during checkout. This felt more like a blocker to booking the test-drive rather than actually helping the user — since their goal at that moment was to book the test-drive, not figure out financing.",
        },
        {
          type: "InsightCallout",
          text: "Most users dropped the checkout flow entirely or opted for cash as the preferred mode of payment, even when they actually needed financing.",
        },
        {
          type: "TextBlock",
          text: "We needed to surface loans much earlier in the journey. We created entry points from the homepage, built a priming experience that explained loan features upfront, and showed users their pre-approved offer before they'd even booked a test-drive.",
        },
        // IMAGE 3.0 — image-grid, two app screens side by side, default variant
        // Left: Homepage with loan entry points. Right: The loan priming/features page.
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/entrypoint.png",
          variant: "borderless",
          maxWidth: "800px",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/preapproval.png",
          variant: "borderless",
          maxWidth: "800px",
        },
        {
          type: "InsightCallout",
          text: "Users who were pre-approved from the top of the funnel shared approximately 32% more banking information on the app compared to users pre-approved from checkout.",
        },        
      ],
    },
    
    {
      id: "the-bottleneck",
      heading: "The Bottleneck: Bank Statements",
      content: [
        {
          type: "TextBlock",
          text: "On investigating prolonged loan approval times, the primary hurdle was acquiring bank statements from users. Our data science team had built a decision engine that could classify users by risk profile; but it couldn't work until bank statements were provided.",
        },
        {
          type: "TextBlock",
          text: "Despite users having the ability to share bank statements via the app, most were still shared manually; leading to a cumbersome back-and-forth between agents and customers.",
        },
        {
          type: "TextBlock",
          text: "Triangulating quantitative data with qualitative research and recorded sessions helped uncover the core problems:",
        },
        {
          type: "InsightCallout",
          text: "Users assumed the loan was car-specific. They wanted to put in the effort only once they had finalised a car.",
        },
        {
          type: "InsightCallout",
          text: "Users not having the PDF handy dropped off and tried to continue sharing after getting the document. This was a major drop-off point.",
        },
        {
          type: "TextBlock",
          text: "We ran a series of experiments targeting different stages of the user journey. The checkout variant with bank statements optional during test-drive booking performed significantly better than the variant that required it upfront.",
        },
        {
          type: "InsightCallout",
          text: "The optional variant not only improved booking completion rates but also doubled the number of bookings with bank statements, compared to the mandatory variant. This enabled us to gradually remove the entire loan flow from checkout and shift it to the post-booking experience.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/checkout.png",
          variant: "borderless",
          maxWidth: "800px",
        },
        {
          type: "TextBlock",
          text: "We also improved the PDF upload experience: communicating specific months instead of a vague range, helping users download statements from their bank's portal, and introducing a feedback loop for incorrect or partial uploads.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/pdf1.png",
          variant: "borderless",
          maxWidth: "800px",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/pdf2.png",
          variant: "borderless",
          maxWidth: "800px",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/pdf3.png",
          variant: "borderless",
          maxWidth: "800px",
        },
      ],
    },
    {
      id: "post-booking-template",
      heading: "Redesigning the Post-Booking Experience",
      content: [
        {
          type: "TextBlock",
          text: "After booking a test-drive, the loan experience was largely manual. There were some digital steps, but they were inconsistent and incomplete. The relationship assistant communicated different things, the loan assistant communicated others, and the app showed information that contradicted both.",
        },
        {
          type: "InsightCallout",
          text: "Users had no single source of truth for what needed to happen between booking a test-drive and getting their car delivered.",
        },
        {
          type: "TextBlock",
          text: "Every customer and car was unique.Different loan situations, various documents required, multiple car formalities. We needed a scalable system that could handle these variations while keeping the experience consistent.",
        },
        {
          type: "SubHeading",
          text: "The Three-Tier Template",
        },
        {
          type: "TextBlock",
          text: "We designed a template system with three levels of depth: Card → Overlay → Full Page. Cards gave users a complete picture of all steps needed to complete their formalities. Tapping a card opened an overlay with contextual details; keeping users oriented while surfacing more information. From the overlay, users could open a full-page experience to take action.",
        },
        // IMAGE 6.0 — single-image, borderless
        // Conceptual diagram of the three-tier model: Card → Overlay → Full Page.
        // Under each: "See all steps" → "Get context" → "Take action".
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/template.png",
          variant: "borderless",
        },
        // IMAGE 6.1 — image-grid, three real screenshots in one row
        // Card list, overlay for one step, full-page action screen.
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/template-loan.png",
          variant: "borderless",
        },
        {
          type: "TextBlock",
          text: "This template wasn't just for loans. It was designed to be reusable across the entire post-booking experience. The same pattern was adopted for car formalities; document uploads, RC transfers, insurance steps. This ensured a consistent experience regardless of what the user was doing.",
        },
        // IMAGE 6.2 (optional) — image-grid
        // Two post-booking experiences: loan formalities (left) and car formalities (right),
        // both using the same template.
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/bigpicture1.png",
          variant: "borderless",
        },
      ],
    },
    {
      id: "order-summary",
      heading: "Order Summary: A Single Source of Truth",
      content: [
        {
          type: "TextBlock",
          text: "The order summary had to reflect every state change in real time. If the user opted for a loan but hadn't completed formalities, it showed that. If they'd paid the token in tranches, it reflected each payment. When bank statements were shared and an accurate offer was generated, the summary updated accordingly.",
        },
        {
          type: "InsightCallout",
          text: "The summary had to clearly communicate what was confirmed, what was pending, and when it would next update — across loan details, car details, offers, coupons, token payments, and down payments that could be split into tranches.",
        },
        {
          type: "TextBlock",
          text: "We designed the order summary to progressively reveal information as the user moved through their journey — starting minimal after booking and becoming more detailed as each step was completed.",
        },
        // IMAGE 7.0 — image-grid, 2x2
        // Four progressive states of the order summary:
        // (1) Just after booking — minimal, mostly pending.
        // (2) After bank statement shared — loan details appear.
        // (3) After offer selected — EMI and down payment reflected.
        // (4) After payments — tranches shown, remaining balance clear.
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/ordersummary.png",
          variant: "borderless",
        },
      ],
    },
    {
      id: "loan-calculators",
      heading: "Loan Calculators: From Generic to Precise",
      content: [
        {
          type: "TextBlock",
          text: "The loan calculator evolved with the user's journey. Before pre-approval, it showed broad ranges and estimated EMIs. After pre-approval, it personalised using known data. After bank statements were shared, it showed precise offers. And once the user selected an EMI plan, we showed a detailed breakdown of all charges involved.",
        },
        // IMAGE 8.0 — image-grid, 2x2
        // Four calculator states:
        // (1) Generic — before any data.
        // (2) Pre-approved — some personalisation.
        // (3) Accurate — after bank statement.
        // (4) Detailed offer breakdown — after EMI selection.
        {
          type: "FullBleedImage",
          src: "/images/case-studies/carloan/calculators.png",
          variant: "borderless",
        },
        {
          type: "VideoBlock",
          src: "/images/case-studies/carloan/DIY-calculator.mp4",
          variant: "borderless",
          maxWidth: "800px",
        },
      ],
    },
    {
      id: "outcomes",
      heading: "Outcomes",
      content: [
        {
          type: "MetricHighlight",
          stat: "31%",
          label: "increase in test-drives with banking (from 35% to 46%)",
        },
        {
          type: "MetricHighlight",
          stat: "26%",
          label: "increase in banking completed on app directly",
        },
        {
          type: "MetricHighlight",
          stat: "2.1 days",
          label: "reduction in loan processing time (5.6 → 3.5 days)",
        },
        {
          type: "TextBlock",
          text: "The improvements — from earlier entry points and better education, to the post-booking template system and improved upload flows — compounded into a measurable reduction in loan processing time and a significant improvement in booking completion rates.",
        },
      ],
    },
    {
      id: "reflection",
      heading: "Reflection",
      content: [
        {
          type: "PullQuote",
          text: "Research isn't a phase — it's a continuous loop. Every metric we moved was the result of listening carefully, hypothesising rigorously, and iterating relentlessly.",
        },
        {
          type: "TextBlock",
          text: "This project taught me the power of framing design around business outcomes. Each experiment wasn't just a UI change — it was a hypothesis tied to a specific drop-off in the funnel. That discipline of connecting design decisions to measurable impact is something I carry into every project since.",
        },
        {
          type: "TextBlock",
          text: "Working in fintech also sharpened my understanding of trust as a design variable. Users sharing sensitive financial data need to feel safe, understood, and in control — and every interaction either builds or erodes that trust.",
        },
      ],
    },
  ],
};
