export type MenuId =
  | "what-we-do"
  | "who-we-help"
  | "who-we-are"
  | "how-we-deliver"
  | "join";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavbarSection {
  title: string;
  links: NavigationLink[];
}