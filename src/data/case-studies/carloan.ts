import type { CaseStudy } from "./types";

export const carloan: CaseStudy = {
  slug: "carloan",
  title: "Helping buyers get car loans super fast",
  subtitle: "A series of research-based experiments helped shorten the loan processing time by ~2 days.",
  role: "Product Designer",
  timeline: "6 months",
  company: "CARS24",
  category: "FINTECH",
  metric: "Loan processing time reduced by ~2 days",
  heroImage: "https://framerusercontent.com/images/WVj6fG4yMc9gTKof0A59onEJ0Y.png?width=3704&height=3532",
  cardImage: "/images/case-studies/carloan/card4.png",
  overview: {
    role: "Product Designer",
    team: [
      "Archit Aggrawal, PM",
      "Harshit Sinha, Manager",
    ],
    timelineStatus: "6 months, launched in May 2022",
    paragraphs: [
      "CARS24 is a second-hand used car marketplace. To be able to afford a car, ~70% of users required loans. I worked with the consumer finance team at CARS24 for almost 2 years to make loans more accessible for used-car buyers. However, there were several macro and micro problems associated with doing so.",
      "Loan-related issues were the second-highest reason for cancelled bookings after test-drives. Finance customers were waiting ~5 days for delivery while cash buyers got their cars in under a day. This project was a series of research-based experiments aimed at closing that gap — and ultimately shortened loan processing time by ~2 days.",
    ],
  },
  sections: [
    {
      id: "why-speed-mattered",
      heading: "Why Speed Mattered",
      content: [
        {
          type: "InsightCallout",
          text: "Loan-related issues ranked as the second highest reason for customers canceling their car bookings after test-drives. An in-depth analysis helped pinpoint actual user problems: uncertainty surrounding loan approvals, and inconsistencies in offer communication.",
        },
        {
          type: "TextBlock",
          text: "On average, the time taken to deliver a car (after a test-drive) with finance involved was ~5 days, compared to less than 1 day for non-finance customers.",
        },
        {
          type: "MetricHighlight",
          stat: "5 days",
          label: "average delivery time for finance customers vs. <1 day for cash buyers",
        },
      ],
    },
    {
      id: "the-bottleneck",
      heading: "The Bottleneck: Bank Statements",
      content: [
        {
          type: "TextBlock",
          text: "Upon investigation into prolonged loan approval times, the primary hurdle was acquiring bank statements from users. Banking data was crucial for categorizing customers by risk profile, enabling the prioritization of on-ground and credit team efforts.",
        },
        {
          type: "TextBlock",
          text: "Our data science team had implemented a decision engine capable of classifying users into green, amber, and red risk profiles. Users in the green category could be approved solely based on their bank statements, streamlining their experience akin to cash-paying users. However, the engine couldn't identify these users until their bank statements were provided.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/TrC3TTs2nz9RWgv3cIHVITbRha8.png",
          maxWidth: "800px",
        },
        {
          type: "InsightCallout",
          text: "Despite our product's feature allowing users to share bank statements before booking, most statements were still shared manually — leading to a cumbersome back-and-forth process between agents and customers. This directly impacted car bookings.",
        },
        
      ],
    },
    {
      id: "user-research",
      heading: "Understanding the User",
      content: [
        {
          type: "TextBlock",
          text: "Triangulating quantitative data with qualitative research insights and recorded user sessions helped uncover various user problems:",
        },
        {
          type: "InsightCallout",
          text: "Users assumed the loan was car-specific — they wanted to put in the effort of sharing bank statements only once they had finalised a car after the test-drive.",
        },
        {
          type: "InsightCallout",
          text: "Users new to the entire idea of online loans were just continuing the flow without knowing what they were actually doing.",
        },
        {
          type: "InsightCallout",
          text: "Users not having the PDF handy dropped off and tried to continue sharing after getting the document.",
        },
        {
  type: "TextBlock",
  text: "Delving deeper helped us uncover a task framework:",
},
{
  type: "ListBlock",
  ordered: true,
  items: [
    "Realisation of the need for banking",
    "Evaluation of options to share bank statements",
    "Delving into details",
    "Fulfilling the requirements",
    "Expectation of feedback for the transaction",
  ]
},
        {
          type: "TextBlock",
          text: "We utilised this framework to formulate various hypotheses at different stages of the user journey. Subsequently, we tested the designs based on these hypotheses using A/B testing.",
        },
      ],
    },
    {
      id: "experiments",
      heading: "The Experiments",
      content: [
        {
          type: "TextBlock",
          text: "**Hypothesis 1 (in the realisation phase)**:<br />Educating users about the loan process right from the start would better prepare them for sharing bank statements at a later stage.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/rFImG9lm43ppimk84gO5IPYmJOk.png",
          maxWidth: "800px",
        },
        {
          type: "InsightCallout",
          text: "Impact: ToF pre-approved users shared approximately 32% more banking information on the app compared to users pre-approved from checkout.",
        },
        {
          type: "TextBlock",
          text: "**Hypothesis 2**:<br />Making bank statements optional while clearly communicating their importance during the test-drive booking would encourage users to provide them later in the journey while also improving the booking completion rate.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/dZFGcP70PlbpSB0zEBL9izMqPeY.png",
          maxWidth: "800px",
        },
        {
          type: "InsightCallout",
          text: "The variant with optional banking during test-drive booking performed significantly better. It not only improved booking completion rates but also doubled the number of bookings with bank statements (measured across all users entering checkout), compared to the mandatory banking variant. This insight ultimately enabled us to shift the entire loan flow to post-booking.",
        },
        
        {
          type: "TextBlock",
          text: "It was evident from data that users preferred the PDF upload method for sharing. Research indicated that users often shared incomplete bank statements. We began with a phased approach: communicating specific months instead of a range, assisting users in downloading bank statements from net-banking, and introducing nudges to encourage users to directly use net-banking credentials.",
        },
      ],
    },
    {
      id: "pdf-upload-improvements",
      heading: "Improving the sharing experience",
      content: [
        {
          type: "TextBlock",
          text: "Between the two options for sharing bank statements, net banking was more convenient; but users were more familiar with the PDF upload method. It gave them a greater sense of control and security—something the metrics also clearly reflected.",
        },
        {
          type:"FullBleedImage",
          src: "https://framerusercontent.com/images/aOizG2MCOsdIUxaxIlrwW7PG7A.png",
          maxWidth: "400px",
        },
        {
          type: "TextBlock",
          text: "However, lot of users were either dropping-off while sharing or sharing incorrect or partial bank statements. To address this, we made some improvements to the PDF upload flow:<br />1) Clearly communicated the specific months required instead of a vague range <br /> 2) Helped users in downloading correct bank statements from their banks' portal <br /> 3) Introduced contextual nudges to use net-banking as an alternative. <br /> 4) Introduced a feedback loop that let user know about incorrect or partial bank statements and helped them share the correct ones.",
        },
        {
          type: "ImageGrid",
          rows: [
            [
              "https://framerusercontent.com/images/KKdhBwOyApWOp1Zb7aZuLoje8.png",
              "https://framerusercontent.com/images/Skya8jlfOjOF287gtnJi5nzAo1s.png",
            ],
          ],
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
          text: "The series of experiments — from better onboarding and education, to improved PDF upload flows — compounded into a measurable reduction in the loan processing time and a significant improvement in booking completion rates.",
        },
      ],
    },
    {
      id: "account-aggregator",
      heading: "Further way forward: Account Aggregator",
      content: [
        {
          type: "TextBlock",
          text: "While the improvements to the PDF upload flow were impactful, they still required users to take multiple steps and had a significant drop-off. To further streamline the process, we explored integrating with an Account Aggregator (AA) — a framework in India that allows users to securely share their financial data directly from their bank accounts without needing to download and upload statements.",
        },
        {
          type: "TextBlock",
          text: "It was more secure than PDF uploads and significantly simpler, requiring just two OTPs to share banking details. However, user awareness and trust in this method were low. To address this, we planned a phased rollout: starting with a small percentage of users, accompanied by educational prompts and support to build trust and familiarity with the AA method.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/t3OtwYCQ1tmscFvkw44LCzJbiw.png",
          maxWidth: "800px",
        }
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