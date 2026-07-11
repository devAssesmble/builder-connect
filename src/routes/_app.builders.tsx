import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, Eye, Pencil, UserCog, Ban, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { builders } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/builders")({
  head: () => ({ meta: [{ title: "Builders · CMNHousing BRM" }] }),
  component: BuildersPage,
});

function BuildersPage() {
  return (
    <div>
      <PageHeader
        title="Builders"
        description="324 active builders across 42 cities · Manage relationships end-to-end"
        actions={
          <>
            <Input placeholder="Filter by name, city, RERA…" className="w-64" />
            <Button className="gap-1"><Plus className="h-4 w-4" /> Add Builder</Button>
          </>
        }
      />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Builder</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-center">Projects</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {builders.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {b.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{b.name}</div>
                        <div className="text-xs text-muted-foreground">{b.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{b.company}</TableCell>
                  <TableCell className="text-center font-medium">{b.projects}</TableCell>
                  <TableCell>{b.city}</TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {b.subscription}
                    </span>
                  </TableCell>
                  <TableCell><StatusBadge status={b.status} /></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{b.manager}</TableCell>
                  <TableCell className="text-right font-semibold">{b.revenue}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="icon" variant="ghost" title="View"><Eye className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="Edit"><Pencil className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="Call"><Phone className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="WhatsApp"><MessageCircle className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="Email"><Mail className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="Assign"><UserCog className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" title="Suspend"><Ban className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Feature builder profile */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Featured Builder Profile</h3>
              <p className="text-sm text-muted-foreground">Skyline Developers · Ravi Kumar</p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Trust Score 97/100
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["Company", "Skyline Developers"],
              ["Owner", "Ravi Kumar"],
              ["GST", "29ABCDE1234F1Z5"],
              ["RERA", "PRM/KA/RERA/1251/446"],
              ["PAN", "ABCDE1234F"],
              ["KYC", "Verified"],
              ["Rating", "★★★★★ 4.8"],
              ["Subscription", "Developer Premium"],
              ["Projects", "12"],
              ["Revenue Generated", "₹42.5 L"],
              ["Support Tickets", "2 (Resolved)"],
              ["Assigned Manager", "Anita Rao"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border bg-muted/40 p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{k}</p>
                <p className="mt-1 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
