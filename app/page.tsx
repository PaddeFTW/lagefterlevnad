import { ClipboardCheck, Home, Settings2 } from "lucide-react";
import Link from "next/link";

import { EmptyState } from "@/components/common/empty-state";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";

const navigation = [{ title: "Översikt", href: "/", icon: <Home className="size-4" /> }, { title: "Kontroller", href: "/kontroller", icon: <ClipboardCheck className="size-4" /> }, { title: "Inställningar", href: "/", icon: <Settings2 className="size-4" /> }];

export default function HomePage() { return <DashboardLayout navigation={navigation} title="Översikt" description="En samlad vy över lagefterlevnad i appen." actions={<Button asChild><Link href="/kontroller/ny">Ny kontroll</Link></Button>}><EmptyState title="Inga kontroller ännu" description="Skapa din första kontroll för att börja samla grunduppgifter och scope." actionLabel="Skapa första kontrollen" actionHref="/kontroller/ny" /></DashboardLayout>; }
