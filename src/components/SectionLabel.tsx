export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-brass" />
      <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
        {children}
      </span>
    </div>
  );
}
