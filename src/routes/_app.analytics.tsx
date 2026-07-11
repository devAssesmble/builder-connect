import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";
import { revenueTrend, pipeline } from "@/lib/mock-data";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend,
} from "recharts";

export const Route = createFileRoute("/_app/analytics")({
  head: () => ({ meta: [{ title: "Analytics · CMNHousing BRM" }] }),
  component: AnalyticsPage,
});

const cityData = [
  { city: "Bengaluru", builders: 84 },
  { city: "Mumbai", builders: 76 },
  { city: "Hyderabad", builders: 58 },
  { city: "Delhi", builders: 52 },
  { city: "Pune", builders: 42 },
  { city: "Chennai", builders: 38 },
  { city: "Kochi", builders: 24 },
];

const planMix = [
  { name: "Starter", value: 480 },
  { name: "Professional", value: 420 },
  { name: "Developer Premium", value: 220 },
  { name: "Enterprise", value: 80 },
];

const COLORS = ["var(--info)", "var(--primary)", "var(--primary-glow)", "var(--success)"];

function AnalyticsPage() {
  return (
    <div>
      <PageHeader title="Analytics" description="Cross-portfolio trends, city mix and plan distribution" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue Growth</CardTitle>
            <CardDescription>Last 6 months · ₹ Lakhs</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="var(--primary)" fill="url(#rev)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Builders by City</CardTitle>
            <CardDescription>Top 7 metros</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="city" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Bar dataKey="builders" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Subscription Plan Mix</CardTitle>
            <CardDescription>Active plans across portfolio</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={planMix} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={4}>
                  {planMix.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pipeline Conversion</CardTitle>
            <CardDescription>Volumes at each stage</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipeline} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis type="number" className="text-xs" />
                <YAxis type="category" dataKey="stage" width={140} className="text-xs" />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Bar dataKey="count" fill="var(--primary-glow)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
