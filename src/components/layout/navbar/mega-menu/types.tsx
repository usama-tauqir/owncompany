export type MenuId =
  | "what-we-do"
  | "who-we-help"
  | "who-we-are"
  | "how-we-deliver"
  | "join-devsinc";

export interface NavigationLink {
  label: string;
  href: string;
}