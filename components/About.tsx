
import { ScrollReveal } from "@/components/ScrollReveal";

export default function About() {
  return (
    <section className="py-section-gap" id="about">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <h2 className="text-headline-lg max-w-xl">The Minds Behind The<br/>Code & Design</h2>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-10">
            {/* TODO: revisit once we have real project history */}
            <ScrollReveal delay={0.1} className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">2026</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">Founded</span>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">2</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">Founders</span>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">Full-Stack</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">Security Specialists</span>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.4}>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-8">
                At Jember Tech, we believe that technology should be as fluid as it is formidable. Our multidisciplinary team of engineers, designers, and strategists works at the intersection of innovation and security, crafting digital experiences that don't just solve problems—they define new standards of excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <p className="text-[16px] leading-[1.5] text-on-surface-variant/60">
                Founded on the principles of Ethiopian ingenuity and global tech standards, we bridge the gap between complex technical requirements and intuitive user outcomes. Whether it's a decentralized blockchain platform or a streamlined e-commerce hub, we build for the future.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
