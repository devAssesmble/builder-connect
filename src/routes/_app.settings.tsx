import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings · CMNHousing BRM" }] }),
  component: SettingsPage,
});

const permissions = [
  ["Builders", "Full"],
  ["Projects", "Full"],
  ["Builder Leads", "Full"],
  ["Site Visits", "Full"],
  ["Builder Support", "Full"],
  ["Payments", "View & Manage Builder Billing"],
  ["Subscriptions", "Full"],
  ["Reports", "Full"],
  ["User Management", "View Only"],
  ["Platform Settings", "No Access"],
  ["AI System Settings", "No Access"],
];

const integrations = [
  { name: "Zoho CRM", status: "Connected" },
  { name: "HubSpot", status: "Available" },
  { name: "Google Meet", status: "Connected" },
  { name: "Zoom", status: "Available" },
  { name: "Leegality eSign", status: "Connected" },
  { name: "Digio eSign", status: "Available" },
  { name: "Razorpay", status: "Connected" },
  { name: "Cashfree", status: "Connected" },
  { name: "PhonePe", status: "Connected" },
  { name: "PayU", status: "Available" },
  { name: "WhatsApp Business", status: "Connected" },
  { name: "Google Maps", status: "Connected" },
  { name: "Google Calendar", status: "Connected" },
];

function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="Role permissions and integrations" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-base">BRM Role Permissions</CardTitle></CardHeader>
          <CardContent className="divide-y">
            {permissions.map(([m, a]) => (
              <div key={m} className="flex items-center justify-between py-2 text-sm">
                <span>{m}</span>
                <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                  a === "Full" ? "bg-success/15 text-success" :
                  a === "No Access" ? "bg-destructive/15 text-destructive" :
                  "bg-info/15 text-info"
                }`}>{a}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Integrations</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {integrations.map((i) => (
              <div key={i.name} className="flex items-center justify-between rounded-md border bg-card px-3 py-2 text-sm">
                <span>{i.name}</span>
                <span className={`text-xs font-medium ${i.status === "Connected" ? "text-success" : "text-muted-foreground"}`}>
                  {i.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
