import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/page-header";
import { FileText, Download, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_app/documents")({
  head: () => ({ meta: [{ title: "Documents · CMNHousing BRM" }] }),
  component: DocumentsPage,
});

const docs = [
  { name: "Skyline_Heights_RERA.pdf", builder: "Skyline Developers", type: "RERA Certificate", size: "1.2 MB", status: "Verified" },
  { name: "Mehta_Realty_GST_2026.pdf", builder: "Mehta Realty Group", type: "GST Certificate", size: "820 KB", status: "Verified" },
  { name: "Coastal_Homes_PAN.pdf", builder: "Coastal Homes", type: "PAN", size: "180 KB", status: "Verified" },
  { name: "GreenNest_KYC_Bundle.zip", builder: "Green Nest Builders", type: "KYC Pack", size: "8.4 MB", status: "Pending" },
  { name: "Singh_Signature_Brochure.pdf", builder: "Singh Infratech", type: "Marketing Brochure", size: "4.1 MB", status: "Verified" },
  { name: "Rao_Meadows_Agreement.pdf", builder: "Rao Constructions", type: "Agreement", size: "2.6 MB", status: "Under Review" },
];

function DocumentsPage() {
  return (
    <div>
      <PageHeader title="Documents" description="KYC, RERA, GST, agreements and marketing assets" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {docs.map((d) => (
          <Card key={d.name}>
            <CardHeader className="flex flex-row items-start gap-3 space-y-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-sm">{d.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{d.builder} · {d.type}</p>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{d.size}</span>
              <div className="flex items-center gap-2">
                <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                  d.status === "Verified" ? "bg-success/15 text-success" : d.status === "Pending" ? "bg-warning/25 text-warning-foreground" : "bg-info/15 text-info"
                }`}>
                  <ShieldCheck className="h-3 w-3" /> {d.status}
                </span>
                <Button size="icon" variant="ghost"><Download className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
