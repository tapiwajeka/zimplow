import { Container } from "@/components/Container";
import { innovations } from "@/lib/data";
import {
  IconPrecisionAg,
  IconTelematics,
  IconDiagnostics,
  IconSmartEquipment,
  IconDigitalPlatform,
} from "@/components/icons";

const icons = [IconPrecisionAg, IconTelematics, IconDiagnostics, IconSmartEquipment, IconDigitalPlatform];

export function InnovationBand() {
  return (
    <section id="innovation" className="relative overflow-hidden bg-navy-mid py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>
      <Container className="relative">
        <div className="max-w-2xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Innovation for Impact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl">
            Intelligent solutions. Real world impact.
          </h2>
          <p className="mt-4 text-paper/60">
            From precision agriculture to smart fleets and predictive maintenance, we use
            technology to help our customers do more, efficiently.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {innovations.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.name}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/15 bg-paper/5">
                  <Icon className="h-6 w-6 text-brass-light" />
                </span>
                <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-wide text-paper">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
