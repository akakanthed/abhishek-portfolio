import type { CaseStudy } from "./types";

export const los: CaseStudy = {
  slug: "los",
  title: "Improving efficiency in banks' loan origination system",
  subtitle: "A collaborative tool to create & manage financial templates used for lending by all leading banks.",
  role: "UX Designer",
  timeline: "2020–2021",
  company: "Wongdoody",
  category: "FINTECH · ENTERPRISE",
  metric: "Improved loan origination template creation across leading banks",
  heroImage: "https://framerusercontent.com/images/fT2zrwTh3ImAeccFhJoI1xsvA.png",
  cardImage: "/images/case-studies/los/loscard.png",
  overview: {
    role: "UX Design Consultant",
    timelineStatus: "Nov 2020 – Jan 2021",
    paragraphs: [
      "Loan Origination Solution (LOS) is part of an industry-leading digital banking solution suite used by banks in around 100 countries to serve over 1 billion customers. Origination is a lengthy process followed by banks to investigate the financial health of a borrower — this helps the bank negotiate terms and agree upon the loan amount to be offered.",
      "Financial statements — Income Statement, Balance Sheet, and Cash Flow Statement — are key to investigating the financial health of any commercial organisation. As a UX consultant on this engagement, I focused on the template-authoring workflow that analysts use to standardize these statements across borrowers — turning a slow, error-prone manual process into a collaborative tool used by leading banks.",
    ],
  },
  sections: [
    {
      id: "the-problem",
      heading: "The Problem",
      content: [
        {
          type: "TextBlock",
          text: "With continually emerging industries and customer segments, banks must constantly update their financial statement templates. Additionally, these templates must adhere to numerous global, local, and organisational regulatory compliance policies.",
        },
        {
          type: "InsightCallout",
          text: "Currently, all activities related to managing financial templates — authoring, documenting, configuring, and sharing — are performed manually using standard office suite tools. Although familiar, these tools hinder transparency in the origination process, increasing the likelihood of errors and operational inefficiencies.",
        },
        {
          type: "TextBlock",
          text: "Ultimately, this lengthens the loan closing time and impacts the profitability of banks.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/aYvfIGUCsv06Jf3O1WAmpzeTaA.png",
          maxWidth: "800px",
        },
      ],
    },
    {
      id: "user-research",
      heading: "User Research",
      content: [
        {
          type: "TextBlock",
          text: "A remote workshop was conducted with Finacle stakeholders, product owners, ICICI Bank admins, and relationship managers. My research encompassed: <br /> - Understanding the current process of creating financial templates<br /> - Flow of a financial template across the bank <br /> - Roles and responsibilities of bank employees at different levels.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/367BbVK5CrzNm75VUwXymZL9c.png",
          maxWidth: "800px",
        },
      ],
    },
    {
      id: "user-profiles",
      heading: "User Profiles",
      content: [
        {
          type: "TextBlock",
          text: "The research made it evident how employees at different levels would have different expectations from the platform. To cater to this, I categorized them into three user profiles based on their roles and responsibilities:",
        },
        {
          type: "TextBlock",
          text: "1. **Regulating admin**: <br />Responsible for Reporting & monitoring regulatory metrics across the organisation.",
        },
        {
          type: "TextBlock",
          text: "2. **Bank Admin**: <br />- Configures various financial templates for various commercial segments & domains.<br />- Responsible for making sure that the financial templates are constantly updated to comply with the global, local & organisational regulatory mandates.",
        },
        {
          type: "TextBlock",
          text: "3. **Relationship Manager**: <br />- Point of contact with the end customer(borrower)<br />- Shares relevant & updated financial templates with the customers.<br />- Collects financial statements and necessary proofs from the customer.",
        },
        {
          type: "TextBlock",
          text: "4. **Customer**: <br />Fills data according to the attributes provided in financial templates.",
        },
        {
          type: "TextBlock",
          text: "5. **Credit Analyst**: <br />Calculates & analyses financial ratios for credit underwriting and monitoring.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/91YY2sAzuWVaQosdczQg2BCE.png",
          maxWidth: "800px",
        },
      ],
    },
    {
      id: "opportunity-areas",
      heading: "Opportunity Areas",
      content: [
        {
          type: "TextBlock",
          text: "The insights gathered from stakeholders were analysed and mapped to 3 main opportunity areas:",
        },
        {
          type: "InsightCallout",
          text: "1. **Optimising Resources**: Admins are handling compliance issues in silos across various bank divisions. Significant time and resources are spent achieving the same result with no centralised medium to manage financial templates.",
        },
        {
          type: "InsightCallout",
          text: "2. **Reducing Cycle Time**: Customers now expect documentation and approvals in minutes, not days. Current manual management of templates is ineffective and considerably increases the loan closing time.",
        },
        {
          type: "InsightCallout",
          text: "3. **Reducing Risk Exposure**: Financial statements must fulfil numerous and complicated compliance requirements. Manual handling of financial templates increases the potential for non-compliance due to human errors.",
        },
      ],
    },
    {
      id: "design-challenge",
      heading: "The Design Challenge",
      content: [
        {
          type: "InsightCallout",
          text: "The biggest challenge was identifying the capabilities and constraints to be introduced for each user role — so they could carry out required functions efficiently and with the least errors.",
        },
        {
          type: "TextBlock",
          text: "The workflow helped me identify user goals for each profile. Tasks and actions to be performed for achieving each goal were identified, which helped in creating the Information Architecture for the platform.",
        },
        {
          type: "TextBlock",
          text: "Key user flows designed: <br />1. Creating/Uploading a master attribute template, <br />2. Updating a master-attribute template, <br />3. Configuring a new financial template, and <br />4. Customising an existing financial template.",
        },
      ],
    },
    {
      id: "design-process",
      heading: "Design Process",
      content: [
        {
          type: "TextBlock",
          text: "I started creating task flows and lo-fidelity concepts for primary use cases. Lo-fi prototypes were tested with stakeholders weekly to get feedback on functionality, content, and interactivity.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/qIyTyA4cgkRwua36h8sZKP9ntY.png",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/DDTP7gptlbbwIJu9Ju0Q3OfA.png",
        },
        {
          type: "InsightCallout",
          text: "A key feedback obtained was that the hierarchy in attributes is defined in the master-template itself. This changed the task flow for bank admins — the priority moved from helping them define hierarchy every time, to simply selecting required attributes from a master template when creating a new one.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/BU845QKl6Oqa4NOVS9aog5iYUA.png",
        },
        {
          type: "TextBlock",
          text: "Additionally, bank admins were already accustomed to a spreadsheet interface — the unfamiliar interface increased the time taken to perceive the attributes. This pushed us to reconsider the visual language and lean into familiar patterns.",
        },
        {
          type: "TextBlock",
          text: "Hi-fidelity screens were prepared for the finalised workflow. Developer feedback was essential to understand technical constraints while designing. Components already existing in the Finacle design system were extensively used to save on development resources.",
        },
        {          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/IKzQOBsrw7yyV3dx2CTGV3rggnc.png",
          maxWidth: "800px",
        },
        {          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/JGuVIlsgkcJ3hT72qFaLXnZEHc.png",
          maxWidth: "800px",
        },
        {
          type: "TextBlock",
          text: "Note: Finalised wireframes are confidential in nature. To comply with my non-disclosure agreement, I have omitted confidential information in this case study. Do connect with me directly to learn more.",
        },
      ],
    },
    {
      id: "reflection",
      heading: "Reflection",
      content: [
        {
          type: "PullQuote",
          text: "Simplicity is strength. As a designer, it’s easy to get drawn to trendy, visually appealing solutions—but this experience reinforced that the simplest approach often works best. Staying grounded in user needs helped me focus on what truly matters.",
        },
        {
          type: "TextBlock",
          text: "This project reinforced that in enterprise design, the real complexity lies beneath the UI—in navigating roles, regulations, and workflows. Seeking feedback early and testing ideas quickly, from paper to hi-fi, helped reduce rework and move faster with confidence. Working within the Finacle design system also highlighted the value of constraints, where the challenge wasn’t to design from scratch but to solve new problems by thoughtfully composing existing components.",
        },
        
      ],
    },
  ],
};