import type { CaseStudy } from "./types";

export const puppet: CaseStudy = {
  slug: "puppet",
  title: "Enabling Puppet customers to upgrade without fear",
  subtitle: "Simplifying the complexity of Puppet upgrades into a clear, predictable path.",
  role: "Sr. Product Designer",
  timeline: "2023–2024",
  company: "Perforce / Puppet",
  category: "DEVOPS",
  metric: "Reduce upgrade downtime from weeks to hours",
  heroImage: "/images/case-studies/puppet/hero1.png",
  cardImage: "/images/case-studies/puppet/puppet_card.png",
  overview: {
    role: "UX Lead",
    team: [
      "Saurabh Karwa, PM",
      "Parth Sabnis, EM",
      "Joe Wagner, DM",
      "Paulo Obasi, UXR",
    ],
    timelineStatus: "2 months, \n launched in Dec 2024 \n at [Puppet Forge](https://forge.puppet.com/)",
    paragraphs: [
      "Puppet is a configuration management tool that helps system administrators keep thousands of machines consistent and compliant. Instead of manually updating each server, teams write instructions in code. Puppet then automatically applies those instructions to all machines, keeping everything consistent. This saves time and prevents mistakes.",
      "But Puppet quietly did its job in the background, often fading from view. Most customers don't think about it until their version reaches end-of-life. That's when things become urgent and stressful.",
      "I worked closely with Product Managers and Engineers to align different teams under one vision, quickly learning the technical ins and outs to ensure my designs were realistic.",
    ],
  },
  sections: [
    {
      id: "the-cost-of-inaction",
      heading: "The Cost of Inaction",
      content: [
        {
          type: "TextBlock",
          text: "Puppet v8 was approaching its release date, meaning many major customers were due for an upgrade. At the same time, popular Puppet-maintained modules, such as stdlib, were also scheduled for new versions.",
        },
        {
          type: "InsightCallout",
          text: "Historically, these upgrades caused significant downtime — sometimes lasting weeks. Each failure damaged Puppet's reputation, eroded user trust, and made it harder to retain customers as they began looking for alternatives.",
        },
        {
          type: "TextBlock",
          text: "This directly impacted new customer acquisition and retention. After meeting with Product Managers, clear goals were established for the project:",
        },
        {
          type: "TextBlock",
          text: "**Short term**: Simplify the transition from Puppet 7 to Puppet 8. <br /> **Long term**: Help system administrators feel confident when applying regular module updates.",
        },
      ],
    },
    {
      id: "the-upgrade-blindness",
      heading: "The Upgrade Blindness",
      content: [
        {
          type: "TextBlock",
          text: "Discussions with support, the Puppet professional services team, and Voxpupuli revealed a key insight: while the Puppet upgrade involved many moving parts — the master server, PuppetDB, and agents across different operating systems — the most time-consuming and stressful part was **updating modules in the codebase**.",
        },
        {
          type: "InsightCallout",
          text: "Ideally, users should have updated these modules frequently. Instead, most followed a 'if it isn't broken, don't touch it' approach. They would leave their setup alone for years until a major Puppet release forced them to change everything at once. This created a 'cliff-edge' effect where years of technical debt piled up.",
        },
        {
          type: "ImageGrid",
          rows: [
            ["/images/case-studies/puppet/processhi.png"],
            [
              "https://framerusercontent.com/images/vsa0OcDw8hfT6MQAYhVcdWKfXWs.png",
              "https://framerusercontent.com/images/F3mozVi1P0NXGveQMKWp21oI.png",
            ],
          ],
        },
        {
          type: "TextBlock",
          text: "Customers were forced to plan extensively just to keep their modules compatible. There was a clear gap in the workflow: system admins wanted to upgrade safely, but they had **no way to see how code changes would actually impact their infrastructure**.",
        },
        {
          type: "TextBlock",
          text: "During major Puppet upgrades, they needed a way to overhaul their entire collection of modules at once. For long-term maintenance, they needed better visibility into dependencies so they could update specific parts of their system incrementally, rather than being forced into an all-or-nothing approach.",
        },
      ],
    },
    {
      id: "fragmented-ecosystem",
      heading: "A Fragmented Ecosystem of DIY Tools",
      content: [
        {
          type: "TextBlock",
          text: "When we began exploring solutions, it was clear that customers weren't starting from scratch. Across the Puppet community, teams had stitched together a mix of different tools and manual processes to manage their collection of modules.",
        },
        {
          type: "ImageGrid",
          rows: [
            ["/images/case-studies/puppet/tools.png"],
          ],
          maxWidth: "800px",
        },
        {
          type: "TextBlock",
          text: "Despite having various tools, users were still missing a few critical pieces of the puzzle:",
        },
        {
  type: "TextBlock",
  text: "1. **Centralized visibility**: A single place to see if their modules were compatible.",
},
{
  type: "TextBlock",
  text: "2. **Preventative insights**: Warnings about potential breaks before they even started the upgrade.",
},
{
  type: "TextBlock",
  text: "3. **Actionable paths**: Clear instructions on what to do next, rather than just error messages.",
},
{
  type: "TextBlock",
  text: "4. **Shareable reports**: Documents they could use to coordinate work across different teams.",
},
      ],
    },
    {
      id: "the-solution",
      heading: "The Solution: Puppet Module Compatibility Checker",
      content: [
        {
          type: "TextBlock",
          text: "To solve these problems, we decided to build the Puppet Module Compatibility Checker. This tool was designed to:",
        },
        {
          type: "TextBlock",
          text: "**1. Run targeted checks**: Users could analyze their modules based on a specific goal, such as moving to a new Puppet version or updating just a few specific modules.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/puppet/s1.png",
          variant: "browser",
        },
        {
          type: "TextBlock",
          text: "**2. Generate clear reports**: The tool produced a status report flagging which modules needed updates, which were no longer supported (deprecated), and which required manual investigation.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/puppet/report.png",
          variant: "browser",
        },
        {
          type: "TextBlock",
          text: "**3. Show version differences**: It allowed users to see a 'diff' — the exact code changes — between their current version and the recommended one.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/puppet/diff.png",
          variant: "browser",
        },
        {
          type: "TextBlock",
          text: "**4. Handle dependencies**: It automatically figured out complex version requirements using metadata from the Puppet Forge.",
        },
        {
          type: "FullBleedImage",
          src: "/images/case-studies/puppet/tree.png",
          variant: "browser",
        },
      ],
    },
    {
      id: "why-the-forge",
      heading: "Why Integrate This Into the Forge?",
      content: [
        {
          type: "TextBlock",
          text: "As the designer for Puppet Forge, I knew this was the natural home for the tool. Forge is a public repository where teams find and share modules — the building blocks of their infrastructure. It already held the metadata and dependency info that administrators usually had to hunt for manually during an upgrade.",
        },
        {
          type: "InsightCallout",
          text: "While the Forge already gave teams a bird's-eye view of their modules, it only showed them what they had — not what they needed to do. By placing the Compatibility Checker within the existing profile section, we turned a passive list into an active workspace.",
        },
        {
          type: "TextBlock",
          text: "Teams could now identify outdated modules and coordinate upgrade plans in the same tool they were already using.",
        },
        {
          type: "ImageGrid",
          rows: [
            ["https://framerusercontent.com/images/vtfh4Q13PYeSQRsQg4HSxH7PgzY.png"],
          ],
        },
      ],
    },
    {
      id: "refining-the-experience",
      heading: "Refining the Experience",
      content: [
        {
          type: "TextBlock",
          text: "I began by mapping out a basic workflow in FigJam to review with the engineering team. While gathering user inputs was straightforward, the engineers raised a technical constraint:",
        },
        {
          type: "TextBlock",
          text: "**Reports would be generated asynchronously**. This meant users couldn't see results instantly — they would upload their data, select a target Puppet version, and then wait for the report to process in the background.",
        },
        {
          type: "TextBlock",
          text: "Because of the background processing, the input phase needed to be frictionless. I designed a unified interface where users could easily upload their Puppetfile and define their goals.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/1ZXTn6EmnFXE4zprZV9RrtKCXE.png",
          variant: "browser",
        },
        {
          type: "TextBlock",
          text: "**The Compatibility Reports listing page** acted as a central dashboard where users could track the status of pending reports and access completed ones.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/isiWrElISSNbJNRzlG5KFnQ4Rkc.png",
          variant: "browser",
        },
      ],
    },
    {
      id: "solving-the-dependency-web",
      heading: "Solving the Dependency 'Web'",
      content: [
        {
          type: "TextBlock",
          text: "The biggest challenge was visualizing the results. The team struggled with how to show dependencies — should we use a complex 'web' of every interconnected module or a simple list?",
        },
        {
          type: "TextBlock",
          text: "To find the answer, I manually mapped out a sample Puppetfile with 60 modules, following the same tedious path a system administrator would take. The resulting 'web' was so messy it was nearly unreadable.",
        },
        {
          type: "InsightCallout",
          text: "We realized users didn't need to see everything at once — they needed **context**. This led to a two-part report design: an actionable table for prioritization, and a contextual dependency tree for understanding the 'why' behind conflicts.",
        },
        {
          type: "TextBlock",
          text: "**1. The Actionable Table**: We organized the modules into a table segmented by the specific action required. This helped users prioritize their work immediately. The tool wasn't designed to be a 'one-click' deployment solution — its goal was to handle the heavy lifting of **dependency resolution and version recommendations**.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/ySulpHeIcP3BueDSZ6ZTM9aB4.png",
          variant: "browser",
        },
        {
          type: "TextBlock",
          text: "**2. The Contextual Dependency Tree**: For 'Unresolved' or complex modules, I provided a tree-like structure. This allowed users to see exactly how a specific module was connected to others. It gave them the 'why' behind a conflict, making it much easier to fix issues that the automated tool couldn't handle alone.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/Tmlmb17Ky1AcnUDdwfYmenXleFo.png",
          variant: "browser",
        },
      ],
    },
    {
      id: "closing-the-loop",
      heading: "Closing the Loop: from Insights to Action",
      content: [
        {
          type: "TextBlock",
          text: "The final piece of the experience was moving the user from a static report to a functional starting point. We allowed users to **download the compatibility report as a Puppetfile**, which they could then test directly in their own environments.",
        },
        {
          type: "FullBleedImage",
          src: "https://framerusercontent.com/images/REMoV1pJScsgePutGB94YtIry0.png",
        },
      ],
    },
    {
      id: "reflection",
      heading: "Reflection",
      content: [
        {
          type: "MetricHighlight",
          stat: "Weeks → Hours",
          label: "reduction in Puppet upgrade downtime",
        },
        {
          type: "TextBlock",
          text: "This project stands out as a definitive anchor in my evolution as a designer. It wasn't just about designing features — it was about **architecting business outcomes**.",
        },
        {
          type: "InsightCallout",
          text: "**Solving for Churn**: 'Upgrade blindness' was a primary reason customers explored competitors. By removing the fear of the unknown, we tried to restore customers' trust in the ecosystem.",
        },
        {
          type: "InsightCallout",
          text: "**Driving Cultural Change**: More than a tool, this was a lever for process transformation. We attempted to enable customers to move away from 'high-stakes, once-a-year' upgrades toward a culture of small, frequent, and manageable updates.",
        },
        {
          type: "InsightCallout",
          text: "**The Ecosystem Play**: This was a vital piece of the broader Forge strategy. It laid the groundwork for Private Forge — allowing companies to secure tribal knowledge — and the Forge Marketplace, where users could eventually monetize their modules.",
        },
        {
          type: "PullQuote",
          text: "This project taught me that the best design doesn't just solve a user's immediate problem — it changes the culture around how they work.",
        },
      ],
    },
  ],
};