import { puppet } from "./puppet";
import { carloan } from "./carloan";
import { los } from "./los";

export const caseStudies = [puppet, carloan, los];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
