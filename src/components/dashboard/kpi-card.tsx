import { cn } from "@/lib/utils";

type Tone = "primary" | "success" | "warning" | "info" | "destructive";

const toneStyles: Record<Tone, string> = {
  primary: "from-primary/10 to-primary-glow/5 text-primary",
  success: "from-success/15 to-success/5 text-success",
  warning: "from-warning/20 to-warning/5 text-warning-foreground",
  info: "from-info/15 to-info/5 text-info",
  destructive: "from-destructive/15 to-destructive/5 text-destructive",
};

const dotStyles: Record<Tone, string> = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  info: "bg-info",
  destructive: "bg-destructive",
};

export function KpiCard({
  label,
  value,
  delta,
  tone = "primary",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: Tone;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70",
          toneStyles[tone],
        )}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className={cn("h-2 w-2 rounded-full", dotStyles[tone])} />
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        </div>
        <p className="mt-3 text-2xl font-bold text-foreground">{value}</p>
        {delta && <p className="mt-1 text-xs text-muted-foreground">{delta}</p>}
      </div>
    </div>
  );
}
