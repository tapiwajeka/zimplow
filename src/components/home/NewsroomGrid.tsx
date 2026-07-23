import Link from "next/link";
import { Container } from "@/components/Container";
import { pressReleases } from "@/lib/data";

export function NewsroomGrid() {
  return (
    <section className="bg-paper-dim py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
              Newsroom
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              News that inspires progress.
            </h2>
          </div>
          <Link
            href="/press"
            className="shrink-0 font-display text-sm font-semibold uppercase tracking-wide text-brass-dark hover:text-brass"
          >
            View all news →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pressReleases.map((p) => (
            <Link
              key={p.title}
              href="/press"
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="flex h-32 items-end bg-gradient-to-br from-ink to-navy-mid p-5">
                <span className="font-display text-xs font-semibold uppercase tracking-wide text-brass-light">
                  {new Date(p.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-bold leading-snug text-ink group-hover:text-brass-dark">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                <span className="mt-4 font-display text-xs font-semibold uppercase tracking-wide text-brass-dark">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
