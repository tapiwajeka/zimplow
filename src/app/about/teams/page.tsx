import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { executiveTeam, generalManagers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the executive team and general managers leading Zimplow Holdings Limited.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        breadcrumb="Our Team"
        title="The executives steering the Group."
        description="A team of finance, legal, risk and operations leaders combining decades of industry experience across Zimbabwe's core sectors."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <SectionLabel>Group Executive Team</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {executiveTeam.map((m) => (
              <div key={m.name} className="bg-paper p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-dim font-display text-lg font-bold text-brass-dark">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{m.name}</h3>
                <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wide text-brass-dark">
                  {m.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-24 lg:py-28">
        <Container>
          <SectionLabel>Business Unit General Managers</SectionLabel>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Local leadership, close to every customer.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalManagers.map((m) => (
              <div key={m.name} className="rounded-xl border border-line bg-paper p-6">
                <h3 className="font-display text-base font-bold text-ink">{m.name}</h3>
                <p className="mt-1 text-sm text-stone">General Manager, {m.unit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
