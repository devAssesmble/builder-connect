import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/dashboard/page-header";
import { approvals } from "@/lib/mock-data";
import { Check, X, RefreshCcw } from "lucide-react";

export const Route = createFileRoute("/_app/approvals")({
  head: () => ({ meta: [{ title: "Project Approvals · CMNHousing BRM" }] }),
  component: ApprovalsPage,
});

function ApprovalsPage() {
  return (
    <div>
      <PageHeader title="Project Approval Center" description="AI-assisted quality checks · Human-in-the-loop review" />
      <div className="grid gap-4 md:grid-cols-2">
        {approvals.map((a) => {
          const tone =
            a.recommendation === "Approve"
              ? "text-success"
              : a.recommendation === "Reject"
                ? "text-destructive"
                : "text-warning-foreground";
          return (
            <Card key={a.project} className="overflow-hidden">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{a.project}</CardTitle>
                    <p className="text-xs text-muted-foreground">{a.builder}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] uppercase text-muted-foreground">AI Quality Score</p>
                    <p className="text-2xl font-bold text-primary">{a.aiScore}</p>
                  </div>
                </div>
                <Progress value={a.aiScore} className="mt-2 h-1.5" />
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Row k="Image Quality" v={a.images} />
                  <Row k="Documents" v={a.docs} />
                  <Row k="RERA" v={a.rera} />
                  <Row k="Location" v={a.location} />
                </div>
                <div className={`rounded-md border p-2 text-sm font-medium ${tone}`}>
                  AI Recommendation: {a.recommendation}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1"><Check className="h-4 w-4" />Approve</Button>
                  <Button size="sm" variant="destructive" className="gap-1"><X className="h-4 w-4" />Reject</Button>
                  <Button size="sm" variant="outline" className="gap-1"><RefreshCcw className="h-4 w-4" />Request Changes</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded border bg-card px-2 py-1.5">
      <span className="text-xs text-muted-foreground">{k}</span>
      <span className="text-xs font-semibold">{v}</span>
    </div>
  );
}
