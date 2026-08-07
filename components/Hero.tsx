"use client";

import Image from "next/image";
import { Brain, ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transform values into -20px to 20px range
  const translateX = useTransform(springX, [-1, 1], [-20, 20]);
  const translateY = useTransform(springY, [-1, 1], [-20, 20]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Only apply on devices with hover/pointer capabilities
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="z-10">
          <h1 className="text-display-lg mb-8 leading-[1.05]">
            Innovative. Scalable.<br />
            <span className="italic font-extrabold chrome-text">Secure</span> — Welcome<br />
            To Jember tech
          </h1>
          <button className="btn-primary px-10 py-4 text-lg">
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
          <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] relative">
            {/* Glow Background */}
            <motion.div
              className="absolute inset-20 bg-primary/20 blur-[120px] rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ x: translateX, y: translateY }}
            />

            <Image
              className="object-cover rounded-full scale-110 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-700 relative z-10"
              alt="A hyper-realistic 3D render of a glossy black liquid chrome sphere"
              src="/hero1.png"
              fill
              priority
            />
            {/* TODO: revisit once we have real numbers */}
            {/* Glass Cards */}
            <motion.div
              className="absolute top-10 right-0 glass-card p-6 rounded-card w-48"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-3xl font-bold">Now</span>
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
              <p className="text-xs text-on-surface-variant font-label-bold uppercase tracking-wider">Accepting New Clients</p>
            </motion.div>

            <motion.div
              className="absolute bottom-20 -left-10 glass-card p-6 rounded-card w-48 hidden sm:block"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-3xl font-bold">Stack</span>
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>
              <p className="text-xs text-on-surface-variant font-label-bold uppercase tracking-wider">Full-Stack + Security</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-container-margin mt-20 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/5 pt-12 gap-8 md:gap-0">
        <div className="flex items-center gap-4">
          {/* TODO: revisit once we have real numbers */}
          <div>
            <p className="font-label-bold text-primary mb-1">Now Booking</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Founding Clients</p>
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
