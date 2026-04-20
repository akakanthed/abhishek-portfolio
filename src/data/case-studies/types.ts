export type TwoColSplit = "40/60" | "50/50" | "60/40";

export type ImageVariant = "default" | "browser" | "device" | "borderless";

export type TextColumn = {
  sections: Array<{ heading?: string; text: string }>;
};

export type ImageCell = {
  src: string;
  caption?: string;
  number?: string;
  variant?: ImageVariant;
};

export type ContentBlock =
  | { type: "TextBlock"; text: string }
  | { type: "SubHeading"; text: string }
  | { type: "InsightCallout"; text: string }
  | { type: "MetricHighlight"; stat: string; label: string }
  | { type: "FullBleedImage"; src: string; caption?: string; maxWidth?: string; variant?: ImageVariant }
  | { type: "PullQuote"; text: string }
  | { type: "ImageGrid"; rows: string[][]; caption?: string; number?: string; maxWidth?: string }
  | { type: "ListBlock"; items: string[]; ordered?: boolean }
  | { type: "TwoColText"; left: TextColumn; right: TextColumn; split?: TwoColSplit }
  | {
      type: "TwoColImageText";
      image: ImageCell;
      text: { heading?: string; text: string };
      imagePosition: "left" | "right";
      split?: TwoColSplit;
    };

export type CaseStudySection = {
  id: string;
  heading: string;
  content: ContentBlock[];
};

export type CaseStudyOverview = {
  role: string;
  team?: string[];
  timelineStatus: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  company: string;
  category: string;
  metric: string;
  heroImage: string;
  cardImage: string;
  overview?: CaseStudyOverview;
  sections: CaseStudySection[];
};
