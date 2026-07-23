import Image from "next/image";
import Link from "next/link";
import { businessUnits, companyInfo } from "@/lib/data";
import { Container } from "./Container";

const social = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/business-units" },
  { label: "Products", href: "/#equipment" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Sustainability", href: "/sustainability" },
];

const investorLinks = [
  { label: "Investor Centre", href: "/investors" },
  { label: "Financial Reports", href: "/investors" },
  { label: "Share Information", href: "/investors" },
  { label: "Governance", href: "/about/board-of-directors" },
  { label: "Announcements", href: "/press" },
];

const supportLinks = [
  { label: "Find a Dealer", href: "/contact" },
  { label: "Service Booking", href: "/contact" },
  { label: "Spare Parts", href: "/business-units" },
  { label: "Warranty Registration", href: "/contact" },
  { label: "Customer Portal", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/zimplow-logo.png"
              alt="Zimplow Holdings"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
            Engineering Zimbabwe&rsquo;s future — a market leader across agriculture, mining,
            logistics, tyres, infrastructure and power generation equipment, delivering premium
            brands with parts and service support.
          </p>
          <div className="mt-6 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-xs text-paper/70 transition-colors hover:border-brass-light hover:text-brass-light"
              >
                {s.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-brass-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Investors
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {investorLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-brass-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Support
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {supportLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-brass-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Contact Us
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li>{companyInfo.address}</li>
            <li><a href={`tel:${companyInfo.phone}`} className="hover:text-brass-light">{companyInfo.phone}</a></li>
            <li><a href={`mailto:${companyInfo.email}`} className="hover:text-brass-light">{companyInfo.email}</a></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="grid shrink-0 grid-cols-4 gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    [1, 4, 5, 7, 9].includes(i) ? "bg-brass" : "bg-paper/20"
                  }`}
                />
              ))}
            </div>
            <div>
              <p className="font-display text-sm font-bold text-paper">Operating Across Zimbabwe</p>
              <Link href="/contact" className="text-xs text-brass-light hover:underline">
                View our locations →
              </Link>
            </div>
          </div>
          <p className="text-xs text-paper/50">Business units in Harare, Bulawayo, Mutare, Chiredzi &amp; Marondera</p>
        </Container>
      </div>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Zimplow Holdings Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/sustainability" className="hover:text-brass-light">Privacy &amp; Terms</Link>
            <span>Listed on the Zimbabwe Stock Exchange</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
