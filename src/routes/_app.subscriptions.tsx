import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, StatusBadge } from "@/components/dashboard/page-header";
import { subscriptions } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/subscriptions")({
  head: () => ({ meta: [{ title: "Subscriptions · CMNHousing BRM" }] }),
  component: SubscriptionsPage,
});

const plans = [
  { name: "Starter", price: "₹4,999/mo", features: ["Up to 3 projects", "Basic analytics", "Email support"], tone: "bg-muted/50" },
  { name: "Professional", price: "₹14,999/mo", features: ["Up to 10 projects", "Lead insights", "Priority support"], tone: "bg-info/10" },
  { name: "Developer Premium", price: "₹39,999/mo", features: ["Unlimited projects", "Featured slots", "AI Trust Badge"], tone: "bg-primary/10" },
  { name: "Enterprise", price: "Custom", features: ["Dedicated manager", "API access", "White-glove onboarding"], tone: "bg-[image:var(--gradient-primary)] text-primary-foreground" },
];

function SubscriptionsPage() {
  return (
    <div>
      <PageHeader title="Subscription Management" description="Plans, renewals, invoices and payment history" />
      <div className="mb-6 grid gap-3 md:grid-cols-4">
        {plans.map((p) => (
          <Card key={p.name} className={`overflow-hidden ${p.tone}`}>
            <CardHeader>
              <CardTitle className="text-base">{p.name}</CardTitle>
              <p className="text-lg font-bold">{p.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                {p.features.map((f) => (<li key={f}>· {f}</li>))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Builder</TableHead>
                <TableHead>Current Plan</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Renewal Status</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((s) => (
                <TableRow key={s.builder}>
                  <TableCell className="font-medium">{s.builder}</TableCell>
                  <TableCell>{s.plan}</TableCell>
                  <TableCell>{s.expiry}</TableCell>
                  <TableCell><StatusBadge status={s.renewal} /></TableCell>
                  <TableCell><StatusBadge status={s.payment} /></TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="sm" variant="outline">Renew</Button>
                      <Button size="sm" variant="outline">Upgrade</Button>
                      <Button size="sm" variant="ghost">Invoice</Button>
                      <Button size="sm" variant="ghost">History</Button>
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
