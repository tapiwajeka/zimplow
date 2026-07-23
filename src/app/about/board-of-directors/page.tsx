import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { boardMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the Board of Directors of Zimplow Holdings Limited.",
};

export default function BoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        breadcrumb="Board of Directors"
        title="Independent oversight, deep sector expertise."
        description="Zimplow's Board combines finance, legal, agriculture, logistics and industrial leadership experience to guide the Group's long-term strategy and governance."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <div className="divide-y divide-line border-t border-line">
            {boardMembers.map((m, i) => (
              <div key={m.name} className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <span className="font-display text-xs font-semibold text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wide text-brass-dark">
                    {m.title}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-ink-soft">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
