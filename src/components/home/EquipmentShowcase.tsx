import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ScrollCarousel } from "@/components/ScrollCarousel";
import { equipmentShowcase } from "@/lib/data";

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="bg-ink py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
              Featured Equipment
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl">
              Built for performance. Built for Africa.
            </h2>
          </div>
          <Link
            href="/business-units"
            className="shrink-0 font-display text-sm font-semibold uppercase tracking-wide text-brass-light hover:text-paper"
          >
            View all equipment →
          </Link>
        </div>

        <div className="mt-12">
          <ScrollCarousel arrowClassName="border-paper/20 text-paper hover:bg-paper/10">
            {equipmentShowcase.map((eq) => (
              <Link
                key={eq.name}
                href={eq.href}
                className="group flex w-80 shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-paper/10 bg-navy-mid"
              >
                <div className="relative h-52 w-full bg-navy-deep">
                  <Image src={eq.image} alt={eq.name} fill className="object-contain p-6" sizes="320px" />
                </div>
                <div className="border-t border-paper/10 px-6 py-5">
                  <h3 className="font-display text-base font-bold text-paper">{eq.name}</h3>
                  <p className="mt-1 text-sm text-paper/50">{eq.specs}</p>
                  <span className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-wide text-brass-light group-hover:text-paper">
                    View machine →
                  </span>
                </div>
              </Link>
            ))}
          </ScrollCarousel>
        </div>
      </Container>
    </section>
  );
}
