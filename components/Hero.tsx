import Image from "next/image";
import { Brain, ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="z-10">
          <h1 className="text-display-lg mb-8 leading-[1.05]">
            Innovative. Scalable.<br />
            <span className="italic font-extrabold chrome-text">Secure</span> — Welcome<br />
            To Jember tech
          </h1>
          <button className="bg-primary text-background rounded-full px-10 py-4 font-label-bold text-lg hover:scale-105 transition-transform">
            Explore Now
          </button>

          <div className="mt-20 flex items-start gap-6 max-w-md">
            <div className="w-16 h-16 rounded-full overflow-hidden hairline-border bg-surface flex items-center justify-center shrink-0">
              <Brain className="text-primary w-8 h-8" />
            </div>
            <div>
              <p className="font-label-bold text-primary mb-1">Build Resilience With AI-Powered Tech Solutions</p>
              <p className="text-on-surface-variant text-sm">Empowering modern enterprises with future-ready architecture and intelligent defense systems.</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] relative">
            {/* Glow Background */}
            <div className="absolute inset-20 bg-primary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
            
            <Image
              className="object-cover rounded-full scale-110 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-700 relative z-10"
              alt="A hyper-realistic 3D render of a glossy black liquid chrome sphere"
              src="/hero1.png"
              fill
              priority
            />
            {/* Glass Cards */}
            <div className="absolute top-10 right-0 glass-card p-6 rounded-card w-48 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-display-lg text-3xl font-bold">150+</span>
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
              <p className="text-xs text-on-surface-variant font-label-bold uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="absolute bottom-20 -left-10 glass-card p-6 rounded-card w-48 animate-bounce hidden sm:block" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-display-lg text-3xl font-bold">98%</span>
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
              <p className="text-xs text-on-surface-variant font-label-bold uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-container-margin mt-20 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/5 pt-12 gap-8 md:gap-0">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-background bg-surface-variant"></div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-surface-container"></div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-on-surface-variant"></div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-primary text-background flex items-center justify-center font-bold text-xs">+</div>
          </div>
          <div>
            <p className="font-label-bold text-primary">31K+</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Happy Customers</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 opacity-50 self-center">
          <ArrowDown className="animate-bounce w-5 h-5" />
          <span className="text-[10px] font-label-bold uppercase tracking-[0.2em]">Scroll To Explore</span>
        </div>

        <p className="max-w-xs md:text-right font-label-bold text-on-surface-variant">
          Empower Your Business With<br />
          <span className="text-primary">Next-Gen Cyber Tech Solutions</span>
        </p>
      </div>
    </section>
  );
}
