"use client";

import { megaMenuData } from "@/data/megaMenuData";

import CapabilitiesMenu from "./layouts/CapabilitiesMenu";
import IndustriesMenu from "./layouts/IndustriesMenu";
import SimpleListMenu from "./layouts/SimpleListMenu";

interface MegaMenuPanelProps {
  menu: string | null;
}

export default function MegaMenuPanel({
  menu,
}: MegaMenuPanelProps) {
  if (!menu) {
    return null;
  }

  const data = megaMenuData[menu];

  if (!data) {
    return null;
  }

  if (data.type === "capabilities") {
    return <CapabilitiesMenu data={data} />;
  }

  if (data.type === "industries") {
    return <IndustriesMenu data={data} />;
  }

  if (data.type === "simple") {
    return <SimpleListMenu data={data} />;
  }

  return null;
}