"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "about", label: "About Us", href: "/#about" },
  { id: "portfolio", label: "Portfolio", href: "/#portfolio" },
  { id: "faq", label: "FAQ", href: "/#faq" },
  { id: "contact", label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActiveSection = pathname === "/contact"
    ? "contact"
    : pathname.startsWith("/services")
      ? "services"
      : pathname === "/"
        ? activeSection
        : "";

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const ids = ["home", "services", "about", "portfolio", "faq", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-[1280px] mx-auto px-container-margin py-base flex items-center justify-between">
        <Link href="/" className="font-headline-lg text-[24px] font-bold tracking-tight text-primary">Jember</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-label-md transition-colors duration-300 pb-1 border-b-2 ${
                currentActiveSection === link.id
                  ? "text-primary font-bold border-primary"
                  : "text-on-surface-variant font-medium hover:text-primary border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary px-6 py-2.5 text-sm inline-block">Get Started</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-on-surface w-11 h-11" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface border-l border-white/10">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    onClick={() => setOpen(false)}
                    className={`text-label-md ${
                      currentActiveSection === link.id
                        ? "text-primary font-bold"
                        : "text-on-surface-variant font-medium"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary px-6 py-2.5 mt-4 w-full text-sm text-center block">Get Started</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
