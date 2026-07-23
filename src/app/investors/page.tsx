import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { financialDocuments, companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Financial results, shareholder notices and stock information for Zimplow Holdings Limited.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        breadcrumb="Investor Relations"
        title="Financial performance and shareholder information."
        description="Zimplow Holdings Limited is listed on the Zimbabwe Stock Exchange. Explore financial reports, trading updates and shareholder communications below."
      />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-line bg-paper-dim p-8">
            <SectionLabel>FY2024 Revenue</SectionLabel>
            <p className="mt-6 font-display text-4xl font-bold text-ink">US$29.78m</p>
            <p className="mt-2 text-sm text-stone">A 7.2% decline year-on-year</p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-dim p-8">
            <SectionLabel>Loss Before Tax</SectionLabel>
            <p className="mt-6 font-display text-4xl font-bold text-ink">US$3.44m</p>
            <p className="mt-2 text-sm text-stone">
              Driven by drought conditions, currency devaluation and liquidity constraints
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink p-8 text-paper">
            <div>
              <SectionLabel>Share Price</SectionLabel>
              <p className="mt-6 text-sm leading-relaxed text-paper/70">
                Live stock pricing for Zimplow Holdings Limited is available via African
                Financials.
              </p>
            </div>
            <a
              href={companyInfo.stockLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-brass px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brass-light"
            >
              View Stock Prices
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-24 lg:py-28">
        <Container>
          <SectionLabel>Performance Notes</SectionLabel>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              2024 results reflected a 7.2% revenue decline to US$29.778 million, with a loss
              before tax of US$3.437 million, primarily attributable to drought conditions,
              currency devaluation and liquidity constraints affecting agricultural operations.
            </p>
            <p>
              Management continues to highlight ongoing pressures from informal market
              competition, mining sector consolidation favouring alternative suppliers, and
              persistent liquidity constraints expected to continue through 2025.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container>
          <SectionLabel>Financial Documents &amp; Shareholder Notices</SectionLabel>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {financialDocuments.map((doc) => (
              <div key={doc.year} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:items-center">
                <div className="sm:col-span-2">
                  <span className="font-display text-2xl font-bold text-ink">{doc.year}</span>
                </div>
                <div className="sm:col-span-10">
                  <div className="flex flex-wrap gap-3">
                    {doc.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone">
            For copies of full financial statements or shareholder documentation, please contact{" "}
            <a href={`mailto:${companyInfo.email}`} className="text-brass-dark hover:underline">
              {companyInfo.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
