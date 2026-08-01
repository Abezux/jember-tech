import { Triangle } from "lucide-react";

export default function Logos() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-2xl font-bold tracking-tighter">EARTH 2.0</span>
          <span className="text-2xl font-bold tracking-tighter italic">AVEN.</span>
          <span className="text-2xl font-bold tracking-tighter uppercase">acme</span>
          <span className="text-2xl font-bold tracking-tighter font-mono">{`{}`} CodeLab</span>
          <span className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Triangle className="w-6 h-6" /> FOXHUB
          </span>
          <span className="text-2xl font-bold tracking-tighter uppercase">acme</span>
          <span className="text-2xl font-bold tracking-tighter font-mono">{`{}`} CodeLab</span>
          <span className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Triangle className="w-6 h-6" /> FOXHUB
          </span>
          <span className="text-2xl font-bold tracking-tighter italic">AVEN.</span>
          <span className="text-2xl font-bold tracking-tighter">EARTH 2.0</span>
        </div>
      </div>
    </section>
  );
}
