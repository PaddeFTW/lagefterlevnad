import { ClipboardCheck, Home, Settings2 } from "lucide-react";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KontrollerList } from "@/components/kontroller/kontroller-list";

const navigation = [{ title: "Översikt", href: "/", icon: <Home className="size-4" /> }, { title: "Kontroller", href: "/kontroller", icon: <ClipboardCheck className="size-4" /> }, { title: "Inställningar", href: "/", icon: <Settings2 className="size-4" /> }];

export default function KontrollerPage() { return <DashboardLayout navigation={navigation} title="Kontroller" description="Skapa och följ upp lagefterlevnadskontroller."><KontrollerList /></DashboardLayout>; }
