import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { businessUnits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Units",
  description:
    "Explore Zimplow Holdings' seven business units spanning agriculture, power, infrastructure and automotive & logistics sectors.",
};

const sectors = Array.from(new Set(businessUnits.map((u) => u.sector)));

export default function BusinessUnitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        breadcrumb="Business Units"
        title="Seven specialised divisions, one dependable Group."
        description="Globally, there are increasingly stringent standards on emissions — and the technology we use ensures our products meet the standards wherever the engines are being used in the world."
      />

      {sectors.map((sector) => (
        <section key={sector} className="border-b border-line py-20 lg:py-24">
          <Container>
            <SectionLabel>{sector}</SectionLabel>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {businessUnits
                .filter((u) => u.sector === sector)
                .map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/business-units/${unit.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-line bg-paper-dim p-8 transition-colors hover:border-brass"
                  >
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brass-dark">
                        {unit.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-brass-dark">{unit.tagline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{unit.description}</p>
                    </div>
                    <span className="mt-8 font-display text-xs font-semibold uppercase tracking-wide text-ink group-hover:text-brass-dark">
                      View division →
                    </span>
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
