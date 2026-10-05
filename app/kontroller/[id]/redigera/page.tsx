import { ClipboardCheck, Home, Settings2 } from "lucide-react";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KontrollForm } from "@/components/kontroller/kontroll-form";
import { getKontroll } from "@/lib/kontroller/store";

const navigation = [{ title: "Översikt", href: "/", icon: <Home className="size-4" /> }, { title: "Kontroller", href: "/kontroller", icon: <ClipboardCheck className="size-4" /> }, { title: "Inställningar", href: "/", icon: <Settings2 className="size-4" /> }];

export default async function EditKontrollPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const kontroll = getKontroll(id); return <DashboardLayout navigation={navigation} title="Redigera kontroll" description="Uppdatera kontrollens grunduppgifter och scope."><KontrollForm kontroll={kontroll ?? undefined} /></DashboardLayout>; }
