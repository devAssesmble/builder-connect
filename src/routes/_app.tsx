import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { Bell, Search, Plus } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

const titles: Record<string, string> = {
  "/": "Dashboard Overview",
  "/builders": "Builders",
  "/projects": "Projects",
  "/leads": "Builder Leads",
  "/approvals": "Project Approvals",
  "/subscriptions": "Subscriptions",
  "/site-visits": "Site Visits",
  "/support": "Builder Support Center",
  "/payments": "Payments",
  "/documents": "Documents",
  "/performance": "Builder Performance",
  "/analytics": "Analytics",
  "/marketing": "Marketing Center",
  "/notifications": "Notification Center",
  "/reports": "Reports",
  "/settings": "Settings",
};

function AppLayout() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const title = titles[pathname] ?? "CMNHousing BRM";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur">
            <SidebarTrigger />
            <div>
              <h1 className="text-base font-semibold leading-tight">{title}</h1>
              <p className="text-xs text-muted-foreground">CMNHousing · Builder Relationship Manager</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search builder, project, RERA, GST…"
                  className="w-80 pl-8"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="gap-1 bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90">
                    <Plus className="h-4 w-4" /> Quick Action
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>+ Add Builder</DropdownMenuItem>
                  <DropdownMenuItem>+ Add Project</DropdownMenuItem>
                  <DropdownMenuItem>+ Schedule Meeting</DropdownMenuItem>
                  <DropdownMenuItem>+ Upload Documents</DropdownMenuItem>
                  <DropdownMenuItem>+ Approve Project</DropdownMenuItem>
                  <DropdownMenuItem>+ Upgrade Subscription</DropdownMenuItem>
                  <DropdownMenuItem>+ Generate Invoice</DropdownMenuItem>
                  <DropdownMenuItem>+ Export Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link to="/notifications">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -right-1 -top-1 h-4 min-w-4 justify-center px-1 text-[10px]" variant="destructive">
                    7
                  </Badge>
                </Link>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
