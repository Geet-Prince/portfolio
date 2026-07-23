export interface TimelineItem {
  year: string;
  title: string;
  active: boolean;
}

export const timeline: readonly TimelineItem[] = [
  { year: "2026", title: "Building Verse", active: true },
  { year: "2025", title: "Built Eventify", active: false },
  { year: "2025", title: "Built Progex", active: false },
  { year: "2024", title: "Started Backend Development", active: false },
  { year: "2023", title: "Started Computer Science Journey", active: false },
];
