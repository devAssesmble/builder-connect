import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
      <div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-success/15 text-success",
    Live: "bg-success/15 text-success",
    Verified: "bg-success/15 text-success",
    Paid: "bg-success/15 text-success",
    Completed: "bg-success/15 text-success",
    Confirmed: "bg-info/15 text-info",
    "In Progress": "bg-info/15 text-info",
    "Pending Approval": "bg-warning/25 text-warning-foreground",
    Pending: "bg-warning/25 text-warning-foreground",
    Expiring: "bg-warning/25 text-warning-foreground",
    "Reminder Sent": "bg-warning/25 text-warning-foreground",
    "Under Review": "bg-info/15 text-info",
    Rescheduled: "bg-warning/25 text-warning-foreground",
    Overdue: "bg-destructive/15 text-destructive",
    Rejected: "bg-destructive/15 text-destructive",
    Suspended: "bg-destructive/15 text-destructive",
    Escalated: "bg-destructive/15 text-destructive",
    Open: "bg-warning/25 text-warning-foreground",
    Resolved: "bg-success/15 text-success",
    Inactive: "bg-muted text-muted-foreground",
    New: "bg-info/15 text-info",
    "KYC Pending": "bg-warning/25 text-warning-foreground",
    "Meeting Scheduled": "bg-info/15 text-info",
    Contacted: "bg-primary/15 text-primary",
    "Auto-Renew": "bg-success/15 text-success",
  };
  const cls = map[status] ?? "bg-muted text-muted-foreground";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>
      {status}
    </span>
  );
}
