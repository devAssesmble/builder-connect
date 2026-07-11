export const kpis = [
  { label: "Active Builders", value: "324", delta: "+12", tone: "primary" as const },
  { label: "Active Projects", value: "1,286", delta: "+48", tone: "info" as const },
  { label: "Monthly Revenue", value: "₹1.82 Cr", delta: "+18%", tone: "success" as const },
  { label: "Pending Approvals", value: "38", delta: "-6", tone: "warning" as const },
  { label: "New Leads", value: "48", delta: "+9", tone: "info" as const },
  { label: "Premium Builders", value: "96", delta: "+4", tone: "primary" as const },
  { label: "Site Visits", value: "154", delta: "+22", tone: "info" as const },
  { label: "Renewal Due", value: "22", delta: "This week", tone: "warning" as const },
  { label: "Builder Satisfaction", value: "94%", delta: "+2%", tone: "success" as const },
  { label: "Complaints", value: "7", delta: "-3", tone: "destructive" as const },
  { label: "AI Score", value: "9.4/10", delta: "Excellent", tone: "primary" as const },
  { label: "Conversion Rate", value: "68%", delta: "+5%", tone: "success" as const },
];

export const builderSummary = [
  { label: "Total Registered", value: 1200 },
  { label: "Active", value: 892 },
  { label: "Inactive", value: 208 },
  { label: "Verified", value: 764 },
  { label: "Premium", value: 96 },
  { label: "Blacklisted", value: 12 },
];

export const pipeline = [
  { stage: "Lead Received", count: 480 },
  { stage: "Contacted", count: 362 },
  { stage: "Meeting Scheduled", count: 248 },
  { stage: "KYC Submitted", count: 186 },
  { stage: "Project Added", count: 142 },
  { stage: "Subscription Purchased", count: 98 },
  { stage: "Live on CMNHousing", count: 84 },
];

export type Builder = {
  id: string;
  name: string;
  company: string;
  owner: string;
  city: string;
  projects: number;
  subscription: "Starter" | "Professional" | "Developer Premium" | "Enterprise";
  status: "Active" | "Inactive" | "Suspended" | "Pending";
  manager: string;
  revenue: string;
  gst: string;
  rera: string;
  pan: string;
  kyc: "Verified" | "Pending" | "Rejected";
  rating: number;
  trustScore: number;
};

export const builders: Builder[] = [
  { id: "B-1001", name: "Ravi Kumar", company: "Skyline Developers", owner: "Ravi Kumar", city: "Bengaluru", projects: 12, subscription: "Developer Premium", status: "Active", manager: "Anita Rao", revenue: "₹42.5 L", gst: "29ABCDE1234F1Z5", rera: "PRM/KA/RERA/1251/446/2023", pan: "ABCDE1234F", kyc: "Verified", rating: 4.8, trustScore: 97 },
  { id: "B-1002", name: "Meera Nair", company: "Coastal Homes Pvt Ltd", owner: "Meera Nair", city: "Kochi", projects: 6, subscription: "Professional", status: "Active", manager: "Karan Shah", revenue: "₹18.2 L", gst: "32ABCDE5678G1Z2", rera: "K-RERA/PRJ/KKD/456", pan: "PQRSE5678G", kyc: "Verified", rating: 4.6, trustScore: 91 },
  { id: "B-1003", name: "Arjun Mehta", company: "Mehta Realty Group", owner: "Arjun Mehta", city: "Mumbai", projects: 21, subscription: "Enterprise", status: "Active", manager: "Anita Rao", revenue: "₹1.24 Cr", gst: "27ABCDE9876H1Z9", rera: "MahaRERA/P51900012345", pan: "MEHTA9876H", kyc: "Verified", rating: 4.9, trustScore: 99 },
  { id: "B-1004", name: "Sneha Iyer", company: "Green Nest Builders", owner: "Sneha Iyer", city: "Chennai", projects: 4, subscription: "Starter", status: "Pending", manager: "Rohit Verma", revenue: "₹3.6 L", gst: "33ABCDE1122K1Z8", rera: "TN/RERA/P/0987", pan: "IYERS1122K", kyc: "Pending", rating: 4.1, trustScore: 72 },
  { id: "B-1005", name: "Vikram Singh", company: "Singh Infratech", owner: "Vikram Singh", city: "Delhi", projects: 15, subscription: "Developer Premium", status: "Active", manager: "Karan Shah", revenue: "₹58.9 L", gst: "07ABCDE3344L1Z1", rera: "DLRERA2023P0001789", pan: "SINGH3344L", kyc: "Verified", rating: 4.7, trustScore: 94 },
  { id: "B-1006", name: "Priya Deshmukh", company: "Deshmukh Estates", owner: "Priya Deshmukh", city: "Pune", projects: 8, subscription: "Professional", status: "Inactive", manager: "Rohit Verma", revenue: "₹12.8 L", gst: "27DESHM5566M1Z3", rera: "MahaRERA/P52100066789", pan: "DESHM5566M", kyc: "Verified", rating: 4.2, trustScore: 81 },
  { id: "B-1007", name: "Aditya Rao", company: "Rao Constructions", owner: "Aditya Rao", city: "Hyderabad", projects: 10, subscription: "Professional", status: "Active", manager: "Anita Rao", revenue: "₹22.4 L", gst: "36RAOSK7788N1Z6", rera: "TS/RERA/P/2023/0234", pan: "RAOAD7788N", kyc: "Verified", rating: 4.5, trustScore: 89 },
  { id: "B-1008", name: "Farhan Sheikh", company: "Sheikh Homes", owner: "Farhan Sheikh", city: "Ahmedabad", projects: 3, subscription: "Starter", status: "Suspended", manager: "Karan Shah", revenue: "₹2.1 L", gst: "24SHKHM9900P1Z4", rera: "GJ/RERA/P/9876", pan: "SHEIK9900P", kyc: "Rejected", rating: 3.4, trustScore: 55 },
];

export type Project = {
  id: string;
  name: string;
  builder: string;
  location: string;
  status: "Live" | "Pending Approval" | "Under Review" | "Rejected";
  properties: number;
  leads: number;
  views: number;
  offers: number;
  revenue: string;
};

export const projects: Project[] = [
  { id: "P-2001", name: "Skyline Heights", builder: "Skyline Developers", location: "Whitefield, Bengaluru", status: "Live", properties: 240, leads: 1284, views: 18420, offers: 62, revenue: "₹8.4 Cr" },
  { id: "P-2002", name: "Coastal Breeze", builder: "Coastal Homes Pvt Ltd", location: "Marine Drive, Kochi", status: "Live", properties: 88, leads: 542, views: 7210, offers: 24, revenue: "₹2.1 Cr" },
  { id: "P-2003", name: "Mehta Grandeur", builder: "Mehta Realty Group", location: "Powai, Mumbai", status: "Live", properties: 360, leads: 2145, views: 32100, offers: 98, revenue: "₹18.6 Cr" },
  { id: "P-2004", name: "Green Nest Villas", builder: "Green Nest Builders", location: "OMR, Chennai", status: "Pending Approval", properties: 42, leads: 0, views: 0, offers: 0, revenue: "—" },
  { id: "P-2005", name: "Singh Signature", builder: "Singh Infratech", location: "Dwarka, Delhi", status: "Under Review", properties: 120, leads: 88, views: 1204, offers: 3, revenue: "₹42 L" },
  { id: "P-2006", name: "Deshmukh Woods", builder: "Deshmukh Estates", location: "Baner, Pune", status: "Live", properties: 96, leads: 612, views: 8850, offers: 21, revenue: "₹3.2 Cr" },
  { id: "P-2007", name: "Rao Meadows", builder: "Rao Constructions", location: "Gachibowli, Hyderabad", status: "Rejected", properties: 60, leads: 0, views: 0, offers: 0, revenue: "—" },
];

export const leads = [
  { id: "L-501", builder: "Nova Realty", source: "Website", city: "Bengaluru", assigned: "Anita Rao", status: "Contacted", followUp: "Tomorrow", priority: "High" },
  { id: "L-502", builder: "Prestige Homes", source: "Referral", city: "Mumbai", assigned: "Karan Shah", status: "Meeting Scheduled", followUp: "12 Jul", priority: "High" },
  { id: "L-503", builder: "Urban Nest", source: "Facebook Ads", city: "Delhi", assigned: "Rohit Verma", status: "New", followUp: "Today", priority: "Medium" },
  { id: "L-504", builder: "Palm Grove Developers", source: "LinkedIn", city: "Chennai", assigned: "Anita Rao", status: "KYC Pending", followUp: "15 Jul", priority: "Low" },
  { id: "L-505", builder: "Zenith Constructions", source: "Cold Call", city: "Hyderabad", assigned: "Karan Shah", status: "Contacted", followUp: "14 Jul", priority: "High" },
];

export const subscriptions = [
  { builder: "Skyline Developers", plan: "Developer Premium", expiry: "12 Aug 2026", renewal: "Auto-Renew", payment: "Paid" },
  { builder: "Coastal Homes Pvt Ltd", plan: "Professional", expiry: "28 Jul 2026", renewal: "Pending", payment: "Paid" },
  { builder: "Mehta Realty Group", plan: "Enterprise", expiry: "05 Mar 2027", renewal: "Auto-Renew", payment: "Paid" },
  { builder: "Green Nest Builders", plan: "Starter", expiry: "20 Jul 2026", renewal: "Reminder Sent", payment: "Overdue" },
  { builder: "Singh Infratech", plan: "Developer Premium", expiry: "18 Sep 2026", renewal: "Auto-Renew", payment: "Paid" },
  { builder: "Deshmukh Estates", plan: "Professional", expiry: "15 Jul 2026", renewal: "Expiring", payment: "Pending" },
];

export const siteVisits = [
  { builder: "Skyline Developers", project: "Skyline Heights", date: "12 Jul 2026", executive: "Neha Kapoor", status: "Confirmed", remarks: "Family viewing, 3BHK" },
  { builder: "Mehta Realty Group", project: "Mehta Grandeur", date: "13 Jul 2026", executive: "Sameer Patel", status: "Confirmed", remarks: "Investor group" },
  { builder: "Coastal Homes", project: "Coastal Breeze", date: "14 Jul 2026", executive: "Neha Kapoor", status: "Rescheduled", remarks: "Buyer travel delay" },
  { builder: "Singh Infratech", project: "Singh Signature", date: "14 Jul 2026", executive: "Arun Malhotra", status: "Completed", remarks: "Offer submitted" },
  { builder: "Deshmukh Estates", project: "Deshmukh Woods", date: "16 Jul 2026", executive: "Sameer Patel", status: "Confirmed", remarks: "NRI virtual tour" },
];

export const tickets = [
  { id: "T-9001", builder: "Skyline Developers", category: "Technical", priority: "High", status: "Open", subject: "Bulk image upload failing" },
  { id: "T-9002", builder: "Coastal Homes", category: "Payment", priority: "Critical", status: "Escalated", subject: "Renewal payment not reflecting" },
  { id: "T-9003", builder: "Green Nest Builders", category: "KYC", priority: "Medium", status: "In Progress", subject: "PAN mismatch during onboarding" },
  { id: "T-9004", builder: "Rao Constructions", category: "Project Upload", priority: "Low", status: "Resolved", subject: "Floor plan not visible" },
  { id: "T-9005", builder: "Sheikh Homes", category: "Complaint", priority: "High", status: "Open", subject: "Listing removed without notice" },
];

export const approvals = [
  { project: "Green Nest Villas", builder: "Green Nest Builders", aiScore: 82, images: "Good", docs: "Verified", rera: "Verified", location: "Verified", recommendation: "Approve" },
  { project: "Singh Signature", builder: "Singh Infratech", aiScore: 71, images: "Fair", docs: "Verified", rera: "Verified", location: "Pending", recommendation: "Request Changes" },
  { project: "Palm Court", builder: "Palm Grove Developers", aiScore: 64, images: "Poor", docs: "Pending", rera: "Verified", location: "Verified", recommendation: "Request Changes" },
  { project: "Urban Nest Phase 2", builder: "Urban Nest", aiScore: 45, images: "Poor", docs: "Missing", rera: "Not Provided", location: "Failed", recommendation: "Reject" },
];

export const revenueStreams = [
  { label: "Today's Revenue", value: "₹6.24 L" },
  { label: "Monthly Revenue", value: "₹1.82 Cr" },
  { label: "Annual Revenue", value: "₹18.4 Cr" },
  { label: "Subscription Income", value: "₹9.6 Cr" },
  { label: "Advertisement Income", value: "₹3.2 Cr" },
  { label: "Featured Project Income", value: "₹2.4 Cr" },
  { label: "AI Services Income", value: "₹1.8 Cr" },
  { label: "Loan Referral Income", value: "₹1.4 Cr" },
];

export const revenueFunnel = [
  { stage: "Builders Registered", value: "1,200" },
  { stage: "Premium Plans", value: "320" },
  { stage: "Projects Live", value: "1,850" },
  { stage: "Leads Generated", value: "28,000" },
  { stage: "Properties Sold", value: "2,650" },
  { stage: "Revenue Generated", value: "₹18.4 Cr" },
];

export const timelineEvents = [
  { date: "05 Jul", event: "Builder Registered" },
  { date: "06 Jul", event: "Meeting Completed" },
  { date: "08 Jul", event: "KYC Verified" },
  { date: "09 Jul", event: "Project Uploaded" },
  { date: "10 Jul", event: "Project Approved" },
  { date: "12 Jul", event: "Premium Plan Purchased" },
  { date: "15 Jul", event: "Featured Project Activated" },
];

export const notifications = [
  { type: "Builder Registered", text: "Nova Realty completed onboarding", time: "2m ago", tone: "info" },
  { type: "Subscription Expiring", text: "Deshmukh Estates plan expires in 3 days", time: "1h ago", tone: "warning" },
  { type: "Payment Received", text: "₹4.2 L from Skyline Developers", time: "3h ago", tone: "success" },
  { type: "Project Approved", text: "Skyline Heights Phase 3 is now live", time: "5h ago", tone: "success" },
  { type: "KYC Pending", text: "Palm Grove Developers KYC awaiting review", time: "Yesterday", tone: "warning" },
  { type: "Complaint Raised", text: "Sheikh Homes filed a listing complaint", time: "Yesterday", tone: "destructive" },
  { type: "Meeting Today", text: "Prestige Homes 4:30 PM · Google Meet", time: "Today", tone: "info" },
];

export const revenueTrend = [
  { month: "Feb", revenue: 128 },
  { month: "Mar", revenue: 142 },
  { month: "Apr", revenue: 156 },
  { month: "May", revenue: 149 },
  { month: "Jun", revenue: 168 },
  { month: "Jul", revenue: 182 },
];

export const marketingChannels = [
  { name: "Homepage Banner", assigned: "Mehta Realty Group", performance: "CTR 4.8%" },
  { name: "Featured Builder", assigned: "Skyline Developers", performance: "Impr. 128k" },
  { name: "Featured Project", assigned: "Coastal Breeze", performance: "Leads 214" },
  { name: "Email Campaign", assigned: "All Premium", performance: "Open 42%" },
  { name: "SMS Campaign", assigned: "Renewal Cohort", performance: "Delivered 98%" },
  { name: "Push Notification", assigned: "App users", performance: "Reach 84k" },
  { name: "Social Promotion", assigned: "Rao Constructions", performance: "Engaged 12k" },
];
