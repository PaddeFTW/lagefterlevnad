import { ClipboardCheck, Home, Settings2 } from "lucide-react";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KontrollForm } from "@/components/kontroller/kontroll-form";

const navigation = [{ title: "Översikt", href: "/", icon: <Home className="size-4" /> }, { title: "Kontroller", href: "/kontroller", icon: <ClipboardCheck className="size-4" /> }, { title: "Inställningar", href: "/", icon: <Settings2 className="size-4" /> }];

export default function NewKontrollPage() { return <DashboardLayout navigation={navigation} title="Ny kontroll" description="Fyll i grunduppgifter och välj kontrollens scope."><KontrollForm /></DashboardLayout>; }
