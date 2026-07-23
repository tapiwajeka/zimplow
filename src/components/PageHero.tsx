import Link from "next/link";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-dim">
      <Container className="py-20 lg:py-28">
        <div className="flex items-center gap-2 text-xs text-stone">
          <Link href="/" className="hover:text-brass-dark">
            Home
          </Link>
          {breadcrumb && (
            <>
              <span>/</span>
              <span className="text-ink-soft">{breadcrumb}</span>
            </>
          )}
        </div>
        <div className="mt-6">
          <SectionLabel>{eyebrow}</SectionLabel>
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
        )}
      </Container>
    </section>
  );
}
