import Link from "next/link";
import { Container } from "@/components/Container";
import { businessCategories } from "@/lib/data";
import {
  IconAgriculture,
  IconMining,
  IconInfrastructure,
  IconEngineering,
  IconAftermarket,
} from "@/components/icons";

const icons = [IconAgriculture, IconMining, IconInfrastructure, IconEngineering, IconAftermarket];

export function BusinessCategories() {
  return (
    <section className="bg-navy-mid">
      <Container className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-3">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Our Businesses
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper">
            Strong businesses. Stronger Africa.
          </h2>
          <Link
            href="/business-units"
            className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-wide text-paper/60 hover:text-brass-light"
          >
            View all businesses →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/10 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
          {businessCategories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex flex-col items-center gap-4 bg-navy-mid px-4 py-8 text-center transition-colors hover:bg-ink"
              >
                <Icon className="h-9 w-9 text-paper/80 transition-colors group-hover:text-brass-light" />
                <span className="font-display text-xs font-semibold uppercase tracking-wide text-paper/80">
                  {cat.name}
                </span>
                <span className="h-0.5 w-6 bg-brass transition-all group-hover:w-10" />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
