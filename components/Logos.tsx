import Image from "next/image";

// TOD0: populate with real client logos once we have 2-3+ clients. 
// Example shape: { name: "Client Co", logoSrc: "/logos/client-co.svg" }
const clients: { name: string; logoSrc?: string }[] = [];

export default function Logos() {
  if (clients.length === 0) return null;

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, idx) => (
            client.logoSrc ? (
              <div key={idx} className="relative h-12 w-32 flex items-center justify-center">
                <Image src={client.logoSrc} alt={client.name} fill className="object-contain" />
              </div>
            ) : (
              <span key={idx} className="text-2xl font-bold tracking-tighter">
                {client.name}
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
