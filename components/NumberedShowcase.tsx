import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function NumberedShowcase() {
  return (
    <section className="py-section-gap">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center">
        <div>
          <h2 className="text-headline-lg mb-8 leading-tight">Born For Code.<br/>Built For Security.</h2>
          <div className="flex items-center gap-4 opacity-50">
            <ArrowDown className="animate-bounce w-5 h-5" />
            <span className="text-xs font-label-bold uppercase tracking-widest">Scroll To Explore</span>
          </div>
        </div>
        <div className="lg:col-span-2 bg-surface hairline-border rounded-card p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden">
          
          <ScrollReveal delay={0.1} className="flex flex-col">
            <span className="text-display-lg text-2xl mb-8 opacity-40">01.</span>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-background hairline-border p-4 relative">
              <Image className="object-contain grayscale opacity-60" fill alt="A small 3D sphere made of interlocking dark metallic strands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3dF-N28dlokQWPn1M2TET4Rx-jrnikoi7i3oz7at0dbNW7GGlY28QwFWPzlphU4i5Kd8YWlp3S0744C_zbISRYPmdfwDxHtwOTzfKGOC4IoeewAMurgRkzg-88fzxXvqdubZdU9AsI9zfAonEmtFRPNL4NTrrp2hGwV2oYslcbBq6utBkXawWNYil4yFPP-9HgDVoxakwOnxgB80X73nnx42HBR1seohzmtLzPK0kY1xyRLBq2IZs"/>
            </div>
            <h4 className="font-label-bold text-center">Web Security</h4>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col">
            <span className="text-display-lg text-2xl mb-8">02.</span>
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden bg-background hairline-border p-2 scale-110 shadow-2xl shadow-primary/5 relative">
              <Image className="object-contain" fill alt="A medium-sized 3D sphere with a high-contrast geometric pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy0J6aXBinkUZOpaqW3EIS2XU686uyU4fdsilbGUdLPvBy9kqrqJ846kUNoZm7Bcm3MKGdtfeAKgiTPhUslmvVbYf9QFuHDbDWDGaEv0LQNGWBcZV3XWuVzXHfEANea5eFMhXLcPM304-hrnJFu_NoA-046P-S2dAl0aFtaRxTm9bNg0dyjLzj6dtAHNvh27_aQjM7gXFjh8x8AmCyx-ulmtE4q34arTEhOT37LgX79mFSESbTCewX"/>
            </div>
            <h4 className="font-label-bold text-center text-primary">Full Stack Development</h4>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="flex flex-col">
            <span className="text-display-lg text-2xl mb-8 opacity-40">03.</span>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-background hairline-border p-4 relative">
              <Image className="object-contain grayscale opacity-60" fill alt="A minimalist 3D sphere with a soft velvet-like charcoal texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZbrXWjjRFu7FcX6a4T5mchmp4w16gWgK6EA4kFwrwMZoKBoknC3NsBQCEVdiCZVHRE-gy4nEbpmmRrk2gqbCfTjXi63q7z4vk9wbZuR5rq2cu5PqFuF2YRAtl51GQDht8ImvurP842b9jtRghPw_1uWCjuk2he-f-Ojn6X0veAdkapFOtXtgik_yUODwIMEnO0C0U1CAZ0PwooiSaBV1qzU7CzihTt7LnA7FnSecn2byY8iZP1N3"/>
            </div>
            <h4 className="font-label-bold text-center">AI Integration</h4>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
