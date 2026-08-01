import Image from "next/image";
import { Globe, ShieldCheck, ArrowRight } from "lucide-react";

export default function FeatureSpotlight() {
  return (
    <section className="py-section-gap relative">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[400px] w-full max-w-md mx-auto">
          <Image 
            className="object-contain" 
            fill 
            alt="An abstract 3D chrome orb with deep concentric grooves" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQi3Y7Lc65FkphzUmzTW9cCO5vjOFtU99kzeWHKY8CZwbuFdwQXoepe_vdEhxIrZXTKKLMZbzs9j5oB6pZSBSJ2CxJWtM2POW_LrJ306Mx3biqMuQdMvCRLh38Nbp7VrTmcZWZ_Qpq_2EJcuLRGCsdrO10wBda2LI42G8_lUNivmaBJOlTkTfokYGXrLWoyEgCK2-Woc_ajSmgyPocb9Lyu8z5jXUuB2P7gxjSdi-T5XFWb5qfA5eA"
          />
        </div>
        <div>
          <h2 className="text-headline-lg mb-8">More Than A Dev Agency — We're A Product Partner</h2>
          <button className="bg-primary text-background rounded-full px-8 py-3.5 font-label-bold mb-16 hover:opacity-90 transition-all">Explore Now</button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <div className="w-10 h-10 bg-surface hairline-border flex items-center justify-center rounded-lg mb-6">
                <Globe className="text-primary w-5 h-5" />
              </div>
              <h4 className="font-label-bold text-lg mb-3">Global Infrastructure</h4>
              <p className="text-on-surface-variant text-sm mb-6">Deploying applications on distributed cloud networks for zero latency and 99.9% uptime.</p>
              <a className="text-primary text-xs font-bold flex items-center gap-1" href="#">
                Explore Services <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div>
              <div className="w-10 h-10 bg-surface hairline-border flex items-center justify-center rounded-lg mb-6">
                <ShieldCheck className="text-primary w-5 h-5" />
              </div>
              <h4 className="font-label-bold text-lg mb-3">Military Grade Security</h4>
              <p className="text-on-surface-variant text-sm mb-6">Implementing advanced encryption protocols and biometric authentication for ironclad protection.</p>
              <a className="text-primary text-xs font-bold flex items-center gap-1" href="#">
                Explore Services <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
