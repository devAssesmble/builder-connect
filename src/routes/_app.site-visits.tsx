import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { siteVisits } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/site-visits")({
  head: () => ({ meta: [{ title: "Site Visits · CMNHousing BRM" }] }),
  component: SiteVisitsPage,
});

function SiteVisitsPage() {
  return (
    <div>
      <PageHeader title="Site Visit Management" description="154 visits scheduled this week across 42 projects" />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Builder</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Visit Date</TableHead>
                <TableHead>Executive</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {siteVisits.map((v, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{v.builder}</TableCell>
                  <TableCell>{v.project}</TableCell>
                  <TableCell>{v.date}</TableCell>
                  <TableCell>{v.executive}</TableCell>
                  <TableCell><StatusBadge status={v.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{v.remarks}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="sm" variant="outline">Confirm</Button>
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm" variant="outline">Complete</Button>
                      <Button size="sm" variant="ghost">Cancel</Button>
                    </div>
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
