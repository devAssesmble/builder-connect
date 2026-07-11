import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, CalendarPlus } from "lucide-react";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { leads } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/leads")({
  head: () => ({ meta: [{ title: "Builder Leads · CMNHousing BRM" }] }),
  component: LeadsPage,
});

function LeadsPage() {
  const priorityCls = (p: string) =>
    p === "High" ? "text-destructive" : p === "Medium" ? "text-warning-foreground" : "text-muted-foreground";
  return (
    <div>
      <PageHeader title="Builder Leads" description="48 new leads this week · 68% conversion rate" />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Builder</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Follow-up</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.builder}</TableCell>
                  <TableCell>{l.source}</TableCell>
                  <TableCell>{l.city}</TableCell>
                  <TableCell className="text-muted-foreground">{l.assigned}</TableCell>
                  <TableCell><StatusBadge status={l.status} /></TableCell>
                  <TableCell>{l.followUp}</TableCell>
                  <TableCell className={`font-medium ${priorityCls(l.priority)}`}>{l.priority}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="icon" variant="ghost"><Phone className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost"><Mail className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost"><MessageCircle className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost"><CalendarPlus className="h-4 w-4" /></Button>
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
