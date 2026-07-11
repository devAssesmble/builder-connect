import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/dashboard/page-header";
import { builders } from "@/lib/mock-data";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/_app/performance")({
  head: () => ({ meta: [{ title: "Builder Performance · CMNHousing BRM" }] }),
  component: PerformancePage,
});

function grade(score: number) {
  if (score >= 90) return { label: "A+", tone: "text-success" };
  if (score >= 80) return { label: "A", tone: "text-success" };
  if (score >= 70) return { label: "B", tone: "text-info" };
  if (score >= 60) return { label: "C", tone: "text-warning-foreground" };
  return { label: "D", tone: "text-destructive" };
}

function PerformancePage() {
  const top = [...builders].sort((a, b) => b.trustScore - a.trustScore).slice(0, 6);
  return (
    <div>
      <PageHeader title="Builder Performance" description="Portfolio benchmarking, response times, conversion & revenue" />

      <Card className="mb-6 border-primary/30 bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="h-5 w-5" /> Top Performing Builder
          </CardTitle>
          <CardDescription className="text-primary-foreground/80">Skyline Developers · Bengaluru</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <Stat k="Performance Score" v="93/100" />
          <Stat k="Rating" v="★★★★★" />
          <Stat k="Properties Sold" v="128" />
          <Stat k="Lead Conversion" v="74%" />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {top.map((b) => {
          const g = grade(b.trustScore);
          return (
            <Card key={b.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-base">{b.company}</CardTitle>
                  <CardDescription>{b.name} · {b.city}</CardDescription>
                </div>
                <span className={`text-2xl font-bold ${g.tone}`}>{g.label}</span>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <Metric k="Projects" v={b.projects} />
                  <Metric k="Rating" v={b.rating.toFixed(1)} />
                  <Metric k="Revenue" v={b.revenue} />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">Trust Score</span>
                    <span className="font-semibold">{b.trustScore}/100</span>
                  </div>
                  <Progress value={b.trustScore} className="h-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-white/10 p-3">
      <p className="text-[11px] uppercase tracking-wide text-primary-foreground/80">{k}</p>
      <p className="text-xl font-bold">{v}</p>
    </div>
  );
}

function Metric({ k, v }: { k: string; v: string | number }) {
  return (
    <div className="rounded-md border bg-muted/40 p-2 text-center">
      <p className="text-[11px] uppercase text-muted-foreground">{k}</p>
      <p className="text-sm font-semibold">{v}</p>
    </div>
  );
}
