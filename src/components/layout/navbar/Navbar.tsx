import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTA from "./NavbarCTA";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-8xl mx-auto h-20 px-6 flex items-center justify-between">
      
        <NavbarLogo />
        
        <ThemeToggle />

        <NavbarLinks />

        

        <NavbarCTA />
      </div>
    
    </header>
    
  );
}