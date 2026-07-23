import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ScrollCarousel } from "@/components/ScrollCarousel";
import { brandShowcase } from "@/lib/data";

export function BrandsShowcase() {
  return (
    <section id="brands" className="bg-paper py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
              Our Brands
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              World-class brands. Local commitment.
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              We partner with the world&rsquo;s leading manufacturers to deliver superior
              equipment and support across Zimbabwe.
            </p>
          </div>
          <Link
            href="/business-units"
            className="shrink-0 font-display text-sm font-semibold uppercase tracking-wide text-brass-dark hover:text-brass"
          >
            View all brands →
          </Link>
        </div>

        <div className="mt-12">
          <ScrollCarousel>
            {brandShowcase.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group shrink-0 snap-start rounded-xl overflow-hidden border border-line bg-white w-64"
              >
                <div className="relative h-40 w-full bg-white">
                  <Image src={brand.image} alt={brand.name} fill className="object-contain p-4" sizes="256px" />
                </div>
              </Link>
            ))}
          </ScrollCarousel>
        </div>
      </Container>
    </section>
  );
}
