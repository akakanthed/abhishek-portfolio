export type ContentBlock =
  | { type: "TextBlock"; text: string }
  | { type: "InsightCallout"; text: string }
  | { type: "MetricHighlight"; stat: string; label: string }
  | { type: "FullBleedImage"; src: string; caption?: string; maxWidth?: string }
  | { type: "PullQuote"; text: string }
  | { type: "ImageGrid"; images: Array<{ src: string; caption?: string }>; maxWidth?: string }
  | { type: "ListBlock"; items: string[]; ordered?: boolean };

export type CaseStudySection = {
  id: string;
  heading: string;
  content: ContentBlock[];
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
  glowColor: "blue" | "indigo" | "amber";
  sections: CaseStudySection[];
};
