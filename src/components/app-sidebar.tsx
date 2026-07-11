import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  FolderKanban,
  UserPlus,
  ClipboardCheck,
  CreditCard,
  MapPin,
  LifeBuoy,
  Wallet,
  FileText,
  TrendingUp,
  BarChart3,
  Megaphone,
  Bell,
  FileBarChart,
  Settings,
  Sparkles,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const primary = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Builders", url: "/builders", icon: Building2 },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Builder Leads", url: "/leads", icon: UserPlus },
  { title: "Project Approvals", url: "/approvals", icon: ClipboardCheck },
  { title: "Subscriptions", url: "/subscriptions", icon: CreditCard },
  { title: "Site Visits", url: "/site-visits", icon: MapPin },
  { title: "Builder Support", url: "/support", icon: LifeBuoy },
  { title: "Payments", url: "/payments", icon: Wallet },
  { title: "Documents", url: "/documents", icon: FileText },
];

const insights = [
  { title: "Builder Performance", url: "/performance", icon: TrendingUp },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Marketing", url: "/marketing", icon: Megaphone },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Reports", url: "/reports", icon: FileBarChart },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (url: string) => (url === "/" ? pathname === "/" : pathname.startsWith(url));

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-sidebar-foreground">CMNHousing</span>
            <span className="text-xs text-sidebar-foreground/70">Builder Relationship</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {primary.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Insights</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {insights.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-xs font-semibold">
            AR
          </div>
          <div className="flex flex-col text-xs leading-tight">
            <span className="font-medium text-sidebar-foreground">Anita Rao</span>
            <span className="text-sidebar-foreground/70">Senior BRM</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
