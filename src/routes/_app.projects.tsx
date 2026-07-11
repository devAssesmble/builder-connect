import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { projects } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/projects")({
  head: () => ({ meta: [{ title: "Projects · CMNHousing BRM" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const counts = {
    Live: projects.filter((p) => p.status === "Live").length,
    "Pending Approval": projects.filter((p) => p.status === "Pending Approval").length,
    "Under Review": projects.filter((p) => p.status === "Under Review").length,
    Rejected: projects.filter((p) => p.status === "Rejected").length,
  };

  return (
    <div>
      <PageHeader
        title="Projects"
        description="1,286 active projects · 38 awaiting approval"
        actions={<Button className="gap-1"><Plus className="h-4 w-4" /> Add Project</Button>}
      />
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {Object.entries(counts).map(([k, v]) => (
          <Card key={k}><CardContent className="p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{k}</p>
            <p className="mt-1 text-2xl font-bold">{v}</p>
          </CardContent></Card>
        ))}
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Properties</TableHead>
                <TableHead className="text-right">Leads</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Offers</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="text-muted-foreground">{p.builder}</TableCell>
                  <TableCell>{p.location}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-right">{p.properties}</TableCell>
                  <TableCell className="text-right">{p.leads.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{p.views.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{p.offers}</TableCell>
                  <TableCell className="text-right font-semibold">{p.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
