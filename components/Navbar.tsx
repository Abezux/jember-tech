import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-container-margin py-base flex items-center justify-between">
        <span className="font-headline-lg text-[24px] font-bold tracking-tight text-primary">አጀብ Tech</span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md" href="#">Home</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-label-md" href="#services">Services</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-label-md" href="#about">About Us</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-label-md" href="#portfolio">Portfolio</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-label-md" href="#faq">FAQ</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-label-md" href="#contact">Contact Us</a>
        </div>
        
        <div className="hidden md:block">
          <button className="bg-primary text-background rounded-full px-6 py-2.5 font-label-bold hover:opacity-90 active:scale-95 transition-all">Get Started</button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-on-surface" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface border-l border-white/10">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-12">
                <a className="text-primary font-bold text-label-md" href="#">Home</a>
                <a className="text-on-surface-variant font-medium text-label-md" href="#services">Services</a>
                <a className="text-on-surface-variant font-medium text-label-md" href="#about">About Us</a>
                <a className="text-on-surface-variant font-medium text-label-md" href="#portfolio">Portfolio</a>
                <a className="text-on-surface-variant font-medium text-label-md" href="#faq">FAQ</a>
                <a className="text-on-surface-variant font-medium text-label-md" href="#contact">Contact Us</a>
                <button className="bg-primary text-background rounded-full px-6 py-2.5 font-label-bold mt-4 w-full">Get Started</button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
