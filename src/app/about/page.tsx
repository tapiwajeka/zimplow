import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { coreValues, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zimplow Holdings Limited is a distributor of international brands across agriculture, mining, infrastructure, logistics and automotive sectors in Zimbabwe.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zimplow"
        breadcrumb="About"
        title="A dependable Group behind Zimbabwe's essential industries."
        description="Zimplow Group operates as a distributor of international brands across agriculture, mining, infrastructure, logistics and automotive sectors, representing Massey Ferguson, Valtra, Perkins, Monosem, Mealie Brand, Goodyear and CT Bolts through multiple business divisions."
      />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper-dim p-10">
            <SectionLabel>Vision</SectionLabel>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">
              &ldquo;To be the dominant supplier of choice for quality and innovative equipment
              solutions delivered through mutual partnerships, high performance and
              innovation.&rdquo;
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-dim p-10">
            <SectionLabel>Mission</SectionLabel>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">
              &ldquo;Provision of value driven mining, agricultural and logistics equipment
              solutions for all our stakeholders.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ink py-24 text-paper lg:py-28">
        <Container>
          <SectionLabel>Brand Promise</SectionLabel>
          <p className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            &ldquo;Reliability of our premium brands, people and financial strength so that our
            customers can focus on their core business.&rdquo;
          </p>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container>
          <SectionLabel>Core Values</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <div key={v.name} className="bg-paper p-8">
                <span className="font-display text-xs font-semibold text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-24 lg:py-28">
        <Container>
          <SectionLabel>Organisational Capacity</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Built on scale, expertise and a nationwide footprint.
          </h2>
          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-ink lg:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-stone">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ink-soft">
            The Group operates through seven business units — Mealie Brand, Farmec, Powermec, CT
            Bolts, TrenTyre, Scanlink and JCB Link — supported by Manica Road Investments, with a
            strategic focus on sustainability, innovation and community engagement across
            automotive &amp; logistics, agriculture, power solutions, infrastructure, and mining
            &amp; construction.
          </p>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-line bg-paper-dim p-10 lg:flex-row lg:items-center lg:p-14">
          <div>
            <SectionLabel>Meet the people</SectionLabel>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink">
              Experienced leadership steering the Group forward.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              href="/about/teams"
              className="rounded-full bg-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-paper hover:bg-brass"
            >
              Our Team
            </Link>
            <Link
              href="/about/board-of-directors"
              className="rounded-full border border-ink/15 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:border-brass hover:text-brass-dark"
            >
              Board of Directors
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
