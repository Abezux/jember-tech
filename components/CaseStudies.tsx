import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="py-section-gap" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-headline-lg">Proof Over Promises —<br/>See What We've Built</h2>
          <button className="bg-primary text-background rounded-full px-8 py-3.5 font-label-bold hidden md:block">Explore Now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Project 1 */}
          <div className="group relative bg-surface-dim hairline-border rounded-card overflow-hidden">
            <div className="h-[400px] w-full relative">
              <Image 
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
                fill 
                alt="A sprawling, detailed 3D abstract landscape made of polished black obsidian" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLQSgyA9nyWjh7BJobwqZwYtt1owVrrTGrgI200gkwq7B_gwF7i3w8Ljjbm8sH8ayqiVTsp-cgWXZzp0odlQCB2FF7AlucktWnXVl7J-oaczQGuV4-GZzU_fF49fv6zuvPIMSG2dQddEoFF501uGTprb8caShBuAYm1Xcg6P-7KYlu5E7dOWkQHXqLd_kPmCjSBNFesiAHKP35ihjXWb2sg-vcT8iDpC2GYKhsbD-6rHq2i_uBwoIa"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
              <div>
                <h3 className="text-headline-accent text-2xl mb-2">Nexus Cyber Core</h3>
                <p className="text-on-surface-variant text-sm max-w-xs mb-6">A centralized security dashboard for monitoring multi-cloud enterprise ecosystems.</p>
                <button className="bg-primary text-background rounded-full px-6 py-2.5 font-label-bold text-sm">Explore Now</button>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group relative bg-surface-dim hairline-border rounded-card overflow-hidden">
            <div className="h-[400px] w-full relative">
              <Image 
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
                fill 
                alt="A crystalline geometric sphere exploding into thousands of sharp glass shards" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGljIFqGyI92pospk2L-UUF1ab4GwYtJ5xKXHgLWUIVjJjikwowX2OWx7b75YRStdbdJoiHIPQyscdWV4lQtm2GfvwZwRHI94W4JzxE5PlkiEPhGclTDMJRpJ8fyVBC41E3qG5B7V9gERCfFpqauOUfJ1qwwtw64d8x7zMVKXW6FUXkl9zWowzgbnzP-ctexC3b0CvaOl5dvEEmSkxyZkVT41wy0dhUYvnG93_WwRbgjhCMbADjGc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
              <div>
                <h3 className="text-headline-accent text-2xl mb-2">Aura Fintech App</h3>
                <p className="text-on-surface-variant text-sm max-w-xs mb-6">High-frequency trading platform built with Rust and React for ultimate performance.</p>
                <button className="bg-primary text-background rounded-full px-6 py-2.5 font-label-bold text-sm">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
