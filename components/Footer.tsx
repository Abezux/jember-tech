export default function Footer() {
  return (
    <footer className="bg-surface w-full pt-section-gap pb-container-margin border-t border-white/5" id="contact">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <span className="text-headline-lg font-bold text-primary">አጀብ Tech</span>
          <button className="bg-primary text-background rounded-full px-8 py-3.5 font-label-bold hover:opacity-90 active:scale-95 transition-all">Get In Touch</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-24">
          <div>
            <h5 className="text-primary font-label-bold mb-8 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">About Us</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Services</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Why Choose</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Portfolio</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-label-bold mb-8 uppercase tracking-widest text-xs">Link</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Privacy Policy</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Terms of Service</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Cookies Settings</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Support Center</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-label-bold mb-8 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4">
              <li className="text-on-surface-variant text-sm">Bole, Addis Ababa, Ethiopia</li>
              <li className="text-on-surface-variant text-sm">+251 900 000 000</li>
              <li className="text-on-surface-variant text-sm">hello@ajebtech.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-label-bold mb-8 uppercase tracking-widest text-xs">Social Media</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm flex items-center gap-2" href="#">Facebook</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm flex items-center gap-2" href="#">Twitter / X</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm flex items-center gap-2" href="#">LinkedIn</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm flex items-center gap-2" href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs">© 2024 አጀብ Tech. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-xs text-on-surface-variant hover:text-primary" href="#">Legal</a>
            <a className="text-xs text-on-surface-variant hover:text-primary" href="#">Compliance</a>
            <a className="text-xs text-on-surface-variant hover:text-primary" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
