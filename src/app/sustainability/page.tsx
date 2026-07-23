import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Zimplow Holdings' approach to Economic, Environmental, Social and Governance (ESG) responsibility.",
};

const pillars = [
  {
    name: "Economic",
    description:
      "Economic performance, tax practices, competition and benchmarking, and the business operating environment are detailed across our reporting.",
  },
  {
    name: "Environment",
    description:
      "Initiatives encompass water conservation, energy efficiency, and waste reduction efforts through recycling and responsible disposal.",
  },
  {
    name: "Social",
    description:
      "The company prioritises strengthening community ties, promoting fair employment, and ensuring workplace safety.",
  },
  {
    name: "Governance",
    description:
      "Focus areas include leadership structure and our strong governance standards across the Group.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability &amp; ESG"
        breadcrumb="Sustainability"
        title="Sustainable value for every stakeholder."
        description="Zimplow aims to maximise the social and environmental impact of its operations while ensuring long-term economic sustainability, embracing a transformational business philosophy that uncovers opportunities to generate sustainable value for all stakeholders."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <SectionLabel>Our Four Pillars</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.name} className="bg-paper p-8">
                <span className="font-display text-xs font-semibold text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>Business Conduct</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              The organisation consistently adheres to the various legislative and regulatory
              frameworks while maintaining honesty, integrity and fairness in all our business
              activities.
            </p>
          </div>
          <div>
            <SectionLabel>Risk Management</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              The Board holds ultimate accountability for risk management and has established
              frameworks classifying risks as short, medium and long-term, with formal
              assessments conducted annually by senior management and the Board.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container className="rounded-2xl border border-line bg-ink p-10 text-paper lg:p-14">
          <SectionLabel>Innovation &amp; Quality</SectionLabel>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/75">
            The company recognises that innovation drives competitive advantage, though it
            acknowledges challenges including increased costs, employee resistance, and
            intellectual property risks. Across the Group, quality management systems — including
            ISO 9001:2015 certification at Mealie Brand — anchor our commitment to consistent,
            export-grade standards.
          </p>
        </Container>
      </section>
    </>
  );
}
