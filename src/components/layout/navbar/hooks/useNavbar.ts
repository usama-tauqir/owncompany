"use client";

import { useCallback, useState } from "react";
import type { MenuId } from "../mega-menu/types";

export interface UseNavbarResult {
  activeMenu: MenuId | null;
  isMobileOpen: boolean;
  isGlobalSelectorOpen: boolean;

  openMenu: (menuId: MenuId) => void;
  toggleMenu: (menuId: MenuId) => void;
  closeMenu: () => void;

  openMobileMenu: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  openGlobalSelector: () => void;
  toggleGlobalSelector: () => void;
  closeGlobalSelector: () => void;

  closeAll: () => void;
}

export function useNavbar(): UseNavbarResult {
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGlobalSelectorOpen, setIsGlobalSelectorOpen] =
    useState(false);

  const openMenu = useCallback((menuId: MenuId) => {
    setActiveMenu(menuId);
    setIsMobileOpen(false);
    setIsGlobalSelectorOpen(false);
  }, []);

  const toggleMenu = useCallback((menuId: MenuId) => {
    setActiveMenu((currentMenu: MenuId | null) =>
      currentMenu === menuId ? null : menuId,
    );

    setIsMobileOpen(false);
    setIsGlobalSelectorOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const openMobileMenu = useCallback(() => {
    setIsMobileOpen(true);
    setActiveMenu(null);
    setIsGlobalSelectorOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((currentValue) => !currentValue);
    setActiveMenu(null);
    setIsGlobalSelectorOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const openGlobalSelector = useCallback(() => {
    setIsGlobalSelectorOpen(true);
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, []);

  const toggleGlobalSelector = useCallback(() => {
    setIsGlobalSelectorOpen((currentValue) => !currentValue);
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, []);

  const closeGlobalSelector = useCallback(() => {
    setIsGlobalSelectorOpen(false);
  }, []);

  const closeAll = useCallback(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
    setIsGlobalSelectorOpen(false);
  }, []);

  return {
    activeMenu,
    isMobileOpen,
    isGlobalSelectorOpen,

    openMenu,
    toggleMenu,
    closeMenu,

    openMobileMenu,
    toggleMobileMenu,
    closeMobileMenu,

    openGlobalSelector,
    toggleGlobalSelector,
    closeGlobalSelector,

    closeAll,
  };
}