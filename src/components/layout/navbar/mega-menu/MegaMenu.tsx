"use client";

import type { MenuId } from "./types";

import MegaMenuPanel from "./MegaMenuPanel";

interface MegaMenuProps {
  activeMenu: MenuId | null;
  open: boolean;
  onMenuOpen?: (menuId: MenuId) => void;
  onMenuClose?: () => void;
  onNavigate?: () => void;
}

export default function MegaMenu({
  activeMenu,
  open,
  onMenuOpen,
  onMenuClose,
}: MegaMenuProps) {
  if (!open || !activeMenu) {
    return null;
  }

  return (
    <div
      onMouseEnter={() => onMenuOpen?.(activeMenu)}
      onMouseLeave={onMenuClose}
    >
      <MegaMenuPanel menu={activeMenu} />
    </div>
  );
}