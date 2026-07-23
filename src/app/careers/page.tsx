import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { businessUnits, companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career with Zimplow Holdings Limited and its business units.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        breadcrumb="Careers"
        title="Build your career with Zimplow."
        description="We're always looking for skilled technicians, engineers, sales professionals and finance specialists to join our business units across Zimbabwe."
      />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Why Zimplow</SectionLabel>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Across our seven business units, our people keep Zimbabwe&rsquo;s agriculture,
                mining, logistics and infrastructure sectors running — from OEM-trained
                technicians in our workshops to engineers, sales teams and corporate specialists
                at Group level.
              </p>
              <p>
                We don&rsquo;t currently list live vacancies on this site. To enquire about
                opportunities or submit a speculative application, please get in touch with the
                Group Corporate Services team using the details below, or contact your business
                unit of interest directly.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-paper-dim p-8">
              <SectionLabel>Get in Touch</SectionLabel>
              <p className="mt-5 text-sm text-ink-soft">
                Send your CV and a short note about the role or business unit you&rsquo;re
                interested in.
              </p>
              <a
                href={`mailto:${companyInfo.email}?subject=Careers Enquiry`}
                className="mt-6 inline-block w-full rounded-full bg-ink px-6 py-3.5 text-center font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-brass"
              >
                Email the Group Team
              </a>
              <p className="mt-4 text-xs text-stone">{companyInfo.email}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-20 lg:py-24">
        <Container>
          <SectionLabel>Our Business Units</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-3">
            {businessUnits.map((u) => (
              <a
                key={u.slug}
                href={`/business-units/${u.slug}`}
                className="rounded-full border border-line bg-paper px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-brass hover:text-brass-dark"
              >
                {u.name}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
