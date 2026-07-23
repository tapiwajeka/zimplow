import Image from "next/image";
import { Container } from "@/components/Container";
import { industriesServed } from "@/lib/data";

export function IndustriesGrid() {
  return (
    <section className="bg-paper-dim py-24 lg:py-28">
      <Container>
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
          Industries We Serve
        </span>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          Powering every industry that moves Zimbabwe forward.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industriesServed.map((ind) => (
            <div
              key={ind.name}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink"
            >
              <Image
                src={ind.image}
                alt={ind.name}
                fill
                className="object-contain p-6 opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                sizes="(min-width: 1024px) 16vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 font-display text-xs font-bold uppercase leading-tight tracking-wide text-paper">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
