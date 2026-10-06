export interface PartnershipItem {
  name: string;
  image: string;
  width: number;
  height: number;
}

/* Only list partner programmes your company is actually enrolled in. */
export const partnerships: PartnershipItem[] = [
  {
    name: "Microsoft",
    image: "",
    width: 156,
    height: 46,
  },
  {
    name: "Salesforce",
    image: "",
    width: 132,
    height: 88,
  },
  {
    name: "Shopify Plus Partner",
    image: "",
    width: 158,
    height: 66,
  },
  {
    name: "Amazon Web Services",
    image: "",
    width: 146,
    height: 86,
  },
];