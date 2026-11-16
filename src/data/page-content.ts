/** The Page Content list shown on every case study, matching the Figma sidebar. */
export const pageContent = [
  { id: "introduction", title: "Introduction" },
  { id: "problem-statement", title: "Problem Statement" },
  { id: "solution", title: "Solution" },
  { id: "challenges", title: "Challenges" },
  { id: "research", title: "Research" },
  { id: "getting-prd", title: "PRD", also: ["prd", "approach"] },
  { id: "wireframing", title: "Wireframing" },
  { id: "final-ui", title: "Final UI", also: ["design", "iconography"] },
  { id: "delivery-benchmark", title: "Delivery Benchmark", also: ["conclusion"] },
] as const;

export function pageContentTarget(item: (typeof pageContent)[number], present: Set<string>) {
  if (present.has(item.id)) return item.id;
  const alias = "also" in item ? item.also?.find((id) => present.has(id)) : undefined;
  return alias ?? item.id;
}
