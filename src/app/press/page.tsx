import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { pressReleases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press Room",
  description: "Announcements, shareholder notices and Group news from Zimplow Holdings Limited.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press Room"
        breadcrumb="Press Room"
        title="Announcements and Group news."
        description="Stay up to date with official notices, board changes and shareholder announcements from Zimplow Holdings Limited."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {pressReleases.map((p) => (
              <article key={p.title} className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <SectionLabel>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </SectionLabel>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="font-display text-2xl font-bold text-ink">{p.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
