import Link from "next/link";
import { Container } from "@/components/Container";
import { IconLeaf, IconChart } from "@/components/icons";
import { companyInfo } from "@/lib/data";

export function SustainabilityInvestorSplit() {
  return (
    <section className="bg-paper py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link
            href="/sustainability"
            className="group relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-green/90 to-ink p-10"
          >
            <div>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
                Sustainability
              </span>
              <h2 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight text-paper">
                Building a better Zimbabwe, together.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
                We are committed to responsible business, environmental stewardship and
                empowering the communities we serve.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-paper group-hover:text-brass-light">
                Our Sustainability Journey →
              </span>
              <IconLeaf className="h-10 w-10 text-paper/40" />
            </div>
          </Link>

          <div className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl bg-navy-deep p-10">
            <div>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
                Investor Centre
              </span>
              <h2 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight text-paper">
                Creating value. Delivering growth.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
                Zimplow Holdings Limited (ZWSE: ZIMW) is listed on the Zimbabwe Stock Exchange.
                Access reports, results and shareholder information in the Investor Centre.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/investors"
                className="font-display text-sm font-semibold uppercase tracking-wide text-paper hover:text-brass-light"
              >
                Go to Investor Centre →
              </Link>
              <a
                href={companyInfo.stockLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:border-brass-light hover:text-brass-light"
              >
                <IconChart className="h-4 w-4" />
                Live Share Price
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
