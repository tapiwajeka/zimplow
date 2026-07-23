import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { businessUnits } from "@/lib/data";

export function generateStaticParams() {
  return businessUnits.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unit = businessUnits.find((u) => u.slug === slug);
  if (!unit) return {};
  return {
    title: unit.name,
    description: unit.description,
  };
}

export default async function BusinessUnitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = businessUnits.find((u) => u.slug === slug);
  if (!unit) notFound();

  const others = businessUnits.filter((u) => u.slug !== unit.slug);

  return (
    <>
      <PageHero eyebrow={unit.sector} breadcrumb={unit.name} title={unit.name} description={unit.tagline} />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>Overview</SectionLabel>
            <div className="mt-6 space-y-5">
              {unit.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>

            {unit.services && (
              <div className="mt-12">
                <SectionLabel>Products &amp; Services</SectionLabel>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {unit.services.map((s) => (
                    <div key={s} className="flex items-center gap-3 rounded-lg border border-line bg-paper-dim px-5 py-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span className="text-sm font-medium text-ink">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {unit.brands && (
              <div className="mt-12">
                <SectionLabel>Brands Represented</SectionLabel>
                <div className="mt-6 flex flex-wrap gap-3">
                  {unit.brands.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-line px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-ink-soft"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-paper-dim p-8">
              {unit.leadership && (
                <div className="mb-8 border-b border-line pb-8">
                  <SectionLabel>Leadership</SectionLabel>
                  <p className="mt-4 font-display text-lg font-bold text-ink">{unit.leadership.name}</p>
                  <p className="text-sm text-brass-dark">{unit.leadership.title}</p>
                </div>
              )}

              <SectionLabel>Locations</SectionLabel>
              <div className="mt-6 space-y-6">
                {unit.locations.map((loc) => (
                  <div key={loc.label}>
                    <p className="font-display text-sm font-bold text-ink">{loc.label}</p>
                    <p className="mt-1 text-sm text-ink-soft">{loc.address}</p>
                    {loc.phone && <p className="mt-1 text-sm text-stone">{loc.phone}</p>}
                    {loc.email && (
                      <a href={`mailto:${loc.email}`} className="mt-1 block text-sm text-brass-dark hover:underline">
                        {loc.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {unit.website && (
                <a
                  href={`https://${unit.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block w-full rounded-full bg-ink px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-brass"
                >
                  Visit {unit.website}
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-20 lg:py-24">
        <Container>
          <SectionLabel>Other Business Units</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/business-units/${o.slug}`}
                className="rounded-full border border-line bg-paper px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-brass hover:text-brass-dark"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
