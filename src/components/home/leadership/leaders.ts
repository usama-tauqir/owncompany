export interface Leader {
  id: string;
  firstName: string;
  highlightedName: string;
  role: string;
  image: string;
  linkedin: string;
  imagePosition?: string;
}

/* Placeholder leadership team — replace with your real people and photos. */
export const leaders: Leader[] = [
  {
    id: "founder",
    firstName: "Founder",
    highlightedName: "Name",
    role: "Founder & CEO",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "cfo",
    firstName: "CFO",
    highlightedName: "Name",
    role: "Chief Financial Officer",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "cos",
    firstName: "Chief of Staff",
    highlightedName: "Name",
    role: "Chief of Staff",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "cdo",
    firstName: "CDO",
    highlightedName: "Name",
    role: "Chief Delivery Officer",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "cbo",
    firstName: "CBO",
    highlightedName: "Name",
    role: "Chief Business Officer",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "marketing",
    firstName: "Marketing",
    highlightedName: "Lead",
    role: "Head of Global Marketing",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "commerce",
    firstName: "Commerce",
    highlightedName: "Lead",
    role: "VP Digital Commerce",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "people",
    firstName: "People",
    highlightedName: "Lead",
    role: "VP People & Culture",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "services",
    firstName: "Services",
    highlightedName: "Lead",
    role: "VP Professional Services",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
];
