"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import GlobalSelector from "./GlobalSelector";
import ThemeToggle from "./ThemeToggle";

import NavbarLogo from "./logo/NavbarLogo";

import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuBackdrop from "./mega-menu/MegaMenuBackdrop";

import MobileDrawer from "./mobile/MobileDrawer";
import MobileMenu from "./mobile/MobileMenu";

import { useNavbar } from "./hooks/useNavbar";
import useOutsideClick from "./hooks/useOutsideClick";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";

import styles from "./Navbar.module.css";

const DESKTOP_BREAKPOINT = 992;

function combineClasses(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const {
    activeMenu,
    isMobileOpen,
    isGlobalSelectorOpen,

    openMenu,
    toggleMenu,
    closeMenu,

    toggleMobileMenu,
    closeMobileMenu,

    toggleGlobalSelector,
    closeGlobalSelector,

    closeAll,
  } = useNavbar();

  const hasOpenDesktopPanel =
    activeMenu !== null || isGlobalSelectorOpen;

  /*
   * Prevent page scrolling while the mobile drawer is open.
   */
  useBodyScrollLock(isMobileOpen);

  /*
   * Close desktop menus when clicking outside the navbar.
   * The mobile drawer handles its own backdrop click.
   */
  useOutsideClick(
    navbarRef,
    () => {
      closeMenu();
      closeGlobalSelector();
    },
    hasOpenDesktopPanel,
  );

  /*
   * Add the scrolled state to the navbar.
   */
  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateScrollState = () => {
      animationFrameId = null;
      setIsScrolled(window.scrollY > 8);
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(
        updateScrollState,
      );
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  /*
   * Close everything whenever the current route changes.
   */
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  /*
   * Close menus with Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      closeAll();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAll]);

  /*
   * Clean up navigation state when crossing the desktop/mobile
   * breakpoint.
   */
  useEffect(() => {
    let previousDesktopState =
      window.innerWidth >= DESKTOP_BREAKPOINT;

    const handleResize = () => {
      const isDesktop =
        window.innerWidth >= DESKTOP_BREAKPOINT;

      if (isDesktop === previousDesktopState) {
        return;
      }

      previousDesktopState = isDesktop;

      if (isDesktop) {
        closeMobileMenu();
      } else {
        closeMenu();
        closeGlobalSelector();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    closeGlobalSelector,
    closeMenu,
    closeMobileMenu,
  ]);

  const handleMenuToggle = useCallback(
    (menuId: Parameters<typeof toggleMenu>[0]) => {
      closeGlobalSelector();
      toggleMenu(menuId);
    },
    [closeGlobalSelector, toggleMenu],
  );

  const handleMenuOpen = useCallback(
    (menuId: Parameters<typeof openMenu>[0]) => {
      closeGlobalSelector();
      openMenu(menuId);
    },
    [closeGlobalSelector, openMenu],
  );

  const handleGlobalSelectorToggle = useCallback(() => {
    closeMenu();
    toggleGlobalSelector();
  }, [
    closeMenu,
    toggleGlobalSelector,
  ]);

  const handleMobileToggle = useCallback(() => {
    closeMenu();
    closeGlobalSelector();
    toggleMobileMenu();
  }, [
    closeGlobalSelector,
    closeMenu,
    toggleMobileMenu,
  ]);

  // const handleMobileButtonKeyDown = (
  //   event: KeyboardEvent<HTMLButtonElement>,
  // ) => {
  //   if (
  //     event.key === "ArrowDown" &&
  //     !isMobileOpen
  //   ) {
  //     event.preventDefault();
  //     handleMobileToggle();
  //   }
  // };

  return (
    <>
      <header
  ref={navbarRef}
  className={combineClasses(
    styles.header,
    isScrolled && styles.headerScrolled,
    activeMenu !== null && styles.headerMenuOpen,
    isMobileOpen && styles.headerMobileOpen,
  )}
>
  <div className={styles.navbarContainer}>
    <div className={styles.navbarLeft}>
      <NavbarLogo onNavigate={closeAll} />

      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
    </div>

    <div className={styles.navbarCenter}>
      <NavbarLinks
        activeMenu={activeMenu}
        onMenuToggle={handleMenuToggle}
        onMenuOpen={handleMenuOpen}
        onMenuClose={closeMenu}
      />
    </div>

    <div className={styles.navbarRight}>
      <NavbarActions onNavigate={closeAll} />

      <GlobalSelector
        open={isGlobalSelectorOpen}
        onToggle={handleGlobalSelectorToggle}
        onClose={closeGlobalSelector}
        onNavigate={closeAll}
      />
    </div>

    <button
      type="button"
      className={combineClasses(
        styles.mobileMenuButton,
        isMobileOpen && styles.mobileMenuButtonOpen,
      )}
      aria-label={
        isMobileOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={isMobileOpen}
      aria-controls="mobile-navigation"
      onClick={handleMobileToggle}
    >
      <span className={styles.mobileMenuIcon} aria-hidden="true">
        <span className={styles.mobileMenuLineTop} />
        <span className={styles.mobileMenuLineMiddle} />
        <span className={styles.mobileMenuLineBottom} />
      </span>
    </button>
  </div>

  <MegaMenu
    activeMenu={activeMenu}
    open={activeMenu !== null}
    onMenuOpen={handleMenuOpen}
    onMenuClose={closeMenu}
    onNavigate={closeAll}
  />
</header>

      {/* Dark page overlay shown behind desktop mega menus */}
      <MegaMenuBackdrop
        open={activeMenu !== null}
        onClick={closeMenu}
      />

      {/* Mobile navigation drawer */}
      <MobileDrawer
        id="mobile-navigation"
        open={isMobileOpen}
        onClose={closeMobileMenu}
      >
        <MobileMenu
          onNavigate={closeAll}
          onClose={closeMobileMenu}
        />
      </MobileDrawer>
    </>
  );
}