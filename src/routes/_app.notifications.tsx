import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/page-header";
import { notifications } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/notifications")({
  head: () => ({ meta: [{ title: "Notifications · CMNHousing BRM" }] }),
  component: NotificationsPage,
});

function NotificationsPage() {
  return (
    <div>
      <PageHeader title="Notification Center" description="Realtime alerts across your portfolio" />
      <Card>
        <CardContent className="divide-y p-0">
          {notifications.map((n, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                n.tone === "success" ? "bg-success" :
                n.tone === "warning" ? "bg-warning" :
                n.tone === "destructive" ? "bg-destructive" : "bg-info"
              }`} />
              <div className="flex-1">
                <p className="text-sm font-semibold">{n.type}</p>
                <p className="text-sm text-muted-foreground">{n.text}</p>
              </div>
              <span className="text-xs text-muted-foreground">{n.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
