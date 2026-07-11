import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { revenueStreams } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_app/payments")({
  head: () => ({ meta: [{ title: "Payments · CMNHousing BRM" }] }),
  component: PaymentsPage,
});

const recent = [
  { id: "TXN-40021", builder: "Skyline Developers", amount: "₹4.2 L", method: "Razorpay", date: "10 Jul 2026", status: "Success" },
  { id: "TXN-40022", builder: "Mehta Realty", amount: "₹12.6 L", method: "PayU", date: "10 Jul 2026", status: "Success" },
  { id: "TXN-40023", builder: "Coastal Homes", amount: "₹1.8 L", method: "PhonePe", date: "09 Jul 2026", status: "Pending" },
  { id: "TXN-40024", builder: "Green Nest Builders", amount: "₹49,999", method: "Cashfree", date: "09 Jul 2026", status: "Failed" },
  { id: "TXN-40025", builder: "Singh Infratech", amount: "₹6.4 L", method: "Razorpay", date: "08 Jul 2026", status: "Success" },
];

function PaymentsPage() {
  return (
    <div>
      <PageHeader title="Payments" description="Revenue streams, invoices and gateway reconciliation" />
      <div className="mb-6 grid gap-3 md:grid-cols-4">
        {revenueStreams.map((r) => (
          <KpiCard key={r.label} label={r.label} value={r.value} tone="success" />
        ))}
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs">{r.id}</TableCell>
                  <TableCell className="font-medium">{r.builder}</TableCell>
                  <TableCell className="font-semibold">{r.amount}</TableCell>
                  <TableCell>{r.method}</TableCell>
                  <TableCell>{r.date}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        r.status === "Success"
                          ? "bg-success/15 text-success"
                          : r.status === "Pending"
                            ? "bg-warning/25 text-warning-foreground"
                            : "bg-destructive/15 text-destructive"
                      }`}
                    >
                      {r.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline">Invoice</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
