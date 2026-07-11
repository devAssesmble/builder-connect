import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/page-header";
import { FileDown } from "lucide-react";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({ meta: [{ title: "Reports · CMNHousing BRM" }] }),
  component: ReportsPage,
});

const cadences = [
  { name: "Daily", desc: "Yesterday's activity, revenue, tickets and approvals" },
  { name: "Weekly", desc: "Pipeline movement, conversion and renewals" },
  { name: "Monthly", desc: "Portfolio performance, revenue and satisfaction" },
  { name: "Yearly", desc: "Full-year financial and operational summary" },
];

function ReportsPage() {
  return (
    <div>
      <PageHeader title="Reports" description="Scheduled and on-demand exports" />
      <div className="grid gap-4 md:grid-cols-2">
        {cadences.map((c) => (
          <Card key={c.name}>
            <CardHeader>
              <CardTitle className="text-base">{c.name} Report</CardTitle>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" className="gap-1"><FileDown className="h-4 w-4" /> PDF</Button>
              <Button size="sm" variant="outline" className="gap-1"><FileDown className="h-4 w-4" /> Excel</Button>
              <Button size="sm" variant="outline" className="gap-1"><FileDown className="h-4 w-4" /> CSV</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
