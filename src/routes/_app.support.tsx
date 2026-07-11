import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { tickets } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/support")({
  head: () => ({ meta: [{ title: "Builder Support · CMNHousing BRM" }] }),
  component: SupportPage,
});

const categories = ["Technical", "Project Upload", "Payment", "KYC", "Marketing", "Agreement", "Complaint"];
const priorities = [
  { name: "Low", tone: "bg-muted text-muted-foreground" },
  { name: "Medium", tone: "bg-info/15 text-info" },
  { name: "High", tone: "bg-warning/25 text-warning-foreground" },
  { name: "Critical", tone: "bg-destructive/15 text-destructive" },
];

function SupportPage() {
  return (
    <div>
      <PageHeader title="Builder Support Center" description="7 open · 2 critical · Avg. first response 42 min" />
      <div className="mb-4 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-base">Support Categories</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full border bg-card px-3 py-1 text-sm">{c}</span>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Priority Levels</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {priorities.map((p) => (
              <span key={p.name} className={`rounded-full px-3 py-1 text-sm font-medium ${p.tone}`}>{p.name}</span>
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-mono text-xs">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.builder}</TableCell>
                  <TableCell>{t.category}</TableCell>
                  <TableCell><StatusBadge status={t.priority} /></TableCell>
                  <TableCell><StatusBadge status={t.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{t.subject}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">Open</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
