import { ClipboardCheck, Home, Settings2 } from "lucide-react";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KontrollDetail } from "@/components/kontroller/kontroll-detail";

const navigation = [{ title: "Översikt", href: "/", icon: <Home className="size-4" /> }, { title: "Kontroller", href: "/kontroller", icon: <ClipboardCheck className="size-4" /> }, { title: "Inställningar", href: "/", icon: <Settings2 className="size-4" /> }];

export default async function KontrollPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <DashboardLayout navigation={navigation} title="Kontroll" description="Översikt över kontrollens uppgifter och scope."><KontrollDetail id={id} /></DashboardLayout>; }
