import { Container } from "@/components/Container";
import { IconYears, IconCompanies, IconMachines, IconCustomers, IconGlobe } from "@/components/icons";

const items = [
  { icon: IconYears, value: "75+", label: "Years of Excellence" },
  { icon: IconCompanies, value: "7", label: "Business Units" },
  { icon: IconMachines, value: "400+", label: "Staff Members" },
  { icon: IconCustomers, value: "100+", label: "OEM-Trained Specialists" },
];

export function StatsBar() {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:items-center">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-4">
            <it.icon className="h-8 w-8 shrink-0 text-brass" />
            <div>
              <p className="font-display text-2xl font-extrabold text-ink">{it.value}</p>
              <p className="text-xs uppercase tracking-wide text-stone">{it.label}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-4">
          <IconGlobe className="h-8 w-8 shrink-0 text-brass" />
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">Operating</p>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brass-dark">Across Zimbabwe</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
