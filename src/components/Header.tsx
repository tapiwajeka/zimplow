"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { businessUnits } from "@/lib/data";
import { Container } from "./Container";

const nav = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Our Team", href: "/about/teams" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
    ],
  },
  {
    label: "Our Businesses",
    href: "/business-units",
    children: [
      { label: "All Business Units", href: "/business-units" },
      ...businessUnits.map((u) => ({ label: u.name, href: `/business-units/${u.slug}` })),
    ],
  },
  { label: "Products", href: "/#equipment" },
  { label: "Investors", href: "/investors" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Newsroom", href: "/press" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setLangOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ink transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-ink/20" : ""
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/zimplow-logo.png"
            alt="Zimplow Holdings"
            width={160}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap rounded px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-wider text-paper/80 transition-colors hover:text-brass-light"
              >
                {item.label}
                {item.children && (
                  <svg width="8" height="5" viewBox="0 0 9 6" className="mt-px opacity-60">
                    <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="max-h-[70vh] overflow-y-auto rounded-lg border border-line bg-paper py-2 shadow-xl shadow-ink/20">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-paper-dim hover:text-brass-dark"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <div className="relative">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            {searchOpen && (
              <form
                action="/press"
                className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-line bg-paper p-2 shadow-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  autoFocus
                  type="text"
                  placeholder="Search zimplow.co.zw"
                  className="w-full rounded-md border border-line bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-brass"
                />
              </form>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span className="font-display text-xs font-semibold">EN</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 rounded-lg border border-line bg-paper py-1 shadow-xl">
                <button className="block w-full px-4 py-2 text-left text-sm text-ink-soft hover:bg-paper-dim">English</button>
              </div>
            )}
          </div>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-paper/10 bg-ink xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-paper/10 py-2 last:border-none">
                <Link href={item.href} className="block py-2 font-display text-sm font-semibold uppercase tracking-wide text-paper">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-paper/15 pl-3">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="py-1.5 text-sm text-paper/70 hover:text-brass-light">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
