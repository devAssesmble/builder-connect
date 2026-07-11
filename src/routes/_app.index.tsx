import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  builderSummary,
  kpis,
  notifications,
  pipeline,
  revenueFunnel,
  revenueStreams,
  revenueTrend,
  timelineEvents,
} from "@/lib/mock-data";

export const Route = createFileRoute("/_app/")({
  head: () => ({
    meta: [
      { title: "BRM Dashboard · CMNHousing" },
      { name: "description", content: "Builder Relationship Manager command center for CMNHousing." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const maxPipeline = Math.max(...pipeline.map((p) => p.count));

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border bg-[image:var(--gradient-primary)] p-6 text-primary-foreground shadow-[var(--shadow-elegant)]">
        <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Badge className="bg-white/20 text-primary-foreground hover:bg-white/25">Enterprise BRM Console</Badge>
            <h2 className="mt-2 text-2xl font-semibold">Welcome back, Anita</h2>
            <p className="mt-1 max-w-xl text-sm text-primary-foreground/80">
              You have 22 renewals due this week, 38 project approvals waiting, and 7 open complaints across your portfolio.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" className="bg-white/15 text-primary-foreground hover:bg-white/25">
              <Sparkles className="mr-1 h-4 w-4" /> AI Insights
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90">
              View Renewals <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="h-4 w-4 text-primary" /> Monthly Revenue Trend
            </CardTitle>
            <CardDescription>Subscription + featured + advertising · in ₹ Lakhs</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} className="text-xs" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "var(--primary)" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users2 className="h-4 w-4 text-primary" /> Builder Summary
            </CardTitle>
            <CardDescription>Portfolio at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {builderSummary.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-semibold">{s.value.toLocaleString()}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Builder Pipeline</CardTitle>
          <CardDescription>Lead → Live on CMNHousing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-7">
            {pipeline.map((p, i) => (
              <div key={p.stage} className="relative rounded-lg border bg-card p-3">
                <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Step {i + 1}
                </div>
                <div className="mt-1 text-sm font-semibold">{p.stage}</div>
                <div className="mt-2 text-2xl font-bold text-primary">{p.count}</div>
                <Progress className="mt-2 h-1.5" value={(p.count / maxPipeline) * 100} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue split + Notifications + Timeline */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Revenue by Stream</CardTitle>
            <CardDescription>All active monetization channels</CardDescription>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueStreams.slice(3)}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} className="text-[10px]" interval={0} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Bar dataKey={(d) => parseFloat(String(d.value).replace(/[^\d.]/g, ""))} name="₹ Cr" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
            <CardDescription>Latest activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {notifications.slice(0, 5).map((n, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                    n.tone === "success"
                      ? "bg-success"
                      : n.tone === "warning"
                        ? "bg-warning"
                        : n.tone === "destructive"
                          ? "bg-destructive"
                          : "bg-info"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{n.type}</p>
                  <p className="text-xs text-muted-foreground">{n.text}</p>
                </div>
                <span className="text-[11px] text-muted-foreground">{n.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Insights + Trust Score + Timeline */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Bot className="h-4 w-4 text-primary" /> AI Builder Insights
            </CardTitle>
            <CardDescription>Powered by CMNHousing Intelligence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Insight label="Builder Growth" value="+18%" tone="success" />
            <Insight label="Lead Quality" value="Excellent" tone="success" />
            <Insight label="Renewal Chance" value="92%" tone="primary" />
            <Insight label="Suggested Upgrade" value="Developer Premium" tone="warning" />
            <Insight label="Expected Revenue" value="₹24 Lakhs" tone="primary" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ShieldCheck className="h-4 w-4 text-success" /> AI Trust Score
            </CardTitle>
            <CardDescription>Skyline Developers · Featured</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">97</span>
              <span className="text-sm text-muted-foreground">/100</span>
              <span className="ml-auto text-warning">★★★★★</span>
            </div>
            <Progress value={97} className="mt-2 h-2" />
            <ul className="mt-4 space-y-1.5 text-sm">
              <li className="flex items-center gap-2 text-success">✓ KYC Complete</li>
              <li className="flex items-center gap-2 text-success">✓ GST Verified</li>
              <li className="flex items-center gap-2 text-success">✓ RERA Verified</li>
              <li className="flex items-center gap-2 text-success">✓ Documents Verified</li>
            </ul>
            <div className="mt-4 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs text-primary">
              AI Recommendation: Eligible for <b>Premium Builder Badge</b>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Relationship Timeline</CardTitle>
            <CardDescription>Skyline Developers</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative space-y-4 border-l border-border pl-4">
              {timelineEvents.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary shadow" />
                  <p className="text-xs font-medium text-muted-foreground">{t.date}</p>
                  <p className="text-sm font-medium">{t.event}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Revenue funnel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Builder Revenue Funnel</CardTitle>
          <CardDescription>Full lifecycle conversion overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-6">
            {revenueFunnel.map((f, i) => (
              <div
                key={f.stage}
                className="rounded-xl border p-4 text-center"
                style={{ background: `color-mix(in oklab, var(--primary) ${(i + 1) * 4}%, transparent)` }}
              >
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {f.stage}
                </p>
                <p className="mt-2 text-xl font-bold">{f.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Insight({ label, value, tone }: { label: string; value: string; tone: "success" | "primary" | "warning" }) {
  const cls =
    tone === "success" ? "text-success" : tone === "warning" ? "text-warning-foreground" : "text-primary";
  return (
    <div className="flex items-center justify-between rounded-lg border bg-card/60 px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-semibold ${cls}`}>{value}</span>
    </div>
  );
}
