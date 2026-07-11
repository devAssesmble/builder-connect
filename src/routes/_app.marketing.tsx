import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/page-header";
import { marketingChannels } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/marketing")({
  head: () => ({ meta: [{ title: "Marketing · CMNHousing BRM" }] }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <div>
      <PageHeader title="Marketing Center" description="Assign builders to featured slots, campaigns and channels" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketingChannels.map((c) => (
          <Card key={c.name}>
            <CardHeader>
              <CardTitle className="text-base">{c.name}</CardTitle>
              <p className="text-xs text-muted-foreground">Currently: {c.assigned}</p>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="rounded-md bg-success/10 px-2 py-1 text-xs font-medium text-success">
                {c.performance}
              </span>
              <Button size="sm" variant="outline">Assign Builder</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
