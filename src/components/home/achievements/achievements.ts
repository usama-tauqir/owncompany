export interface AchievementItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "projects",
    value: 3000,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    id: "countries",
    value: 23,
    suffix: "+",
    label: "Countries Supported",
  },
  {
    id: "clients",
    value: 250,
    suffix: "+",
    label: "Active Clients",
  },
  {
    id: "experience",
    value: 15,
    suffix: "+",
    label: "Years of Enablement Experience",
  },
];