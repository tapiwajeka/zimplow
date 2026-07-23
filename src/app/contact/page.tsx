import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { companyInfo, businessUnits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zimplow Holdings Limited and its business units.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Let's start a conversation."
        description="Reach the Zimplow Holdings head office, or connect directly with any of our business units below."
      />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Head Office</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink">
              Zimplow Holdings Limited
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-stone">Address</p>
                <p className="mt-1.5 text-ink-soft">{companyInfo.address}</p>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-stone">Phone</p>
                <a href={`tel:${companyInfo.phone}`} className="mt-1.5 block text-ink-soft hover:text-brass-dark">
                  {companyInfo.phone}
                </a>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-stone">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="mt-1.5 block text-ink-soft hover:text-brass-dark">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div
              className="relative mt-10 h-56 overflow-hidden rounded-2xl border border-line bg-paper-dim"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20,20,15,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,15,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg shadow-ink/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <p className="font-display text-sm font-bold text-ink">Msasa, Harare</p>
                <p className="text-xs text-stone">10 Harrow Road</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-paper-dim p-8 sm:p-10">
              <SectionLabel>Send a Message</SectionLabel>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-24 lg:py-28">
        <Container>
          <SectionLabel>Business Unit Contacts</SectionLabel>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Speak directly with the right division.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit) => {
              const primary = unit.locations[0];
              return (
                <div key={unit.slug} className="rounded-xl border border-line bg-paper p-6">
                  <h3 className="font-display text-base font-bold text-ink">{unit.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{primary.address}</p>
                  {primary.phone && <p className="mt-1 text-sm text-stone">{primary.phone}</p>}
                  {primary.email && (
                    <a href={`mailto:${primary.email}`} className="mt-1 block text-sm text-brass-dark hover:underline">
                      {primary.email}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
