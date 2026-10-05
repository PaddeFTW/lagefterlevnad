"use client";

import Link from "next/link";
import { ClipboardCheck, Plus } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getKontroller } from "@/lib/kontroller/store";
import type { Kontroll } from "@/lib/kontroller/types";
import { useEffect, useState } from "react";

export function KontrollerList() {
  const [kontroller, setKontroller] = useState<Kontroll[]>([]);
  useEffect(() => setKontroller(getKontroller()), []);

  if (!kontroller.length) return <EmptyState title="Inga kontroller ännu" description="Skapa en lagefterlevnadskontroll för att samla kontrollens grunduppgifter och scope." actionLabel="Ny kontroll" actionHref="/kontroller/ny" />;

  return <div className="flex flex-col gap-5"><div className="flex justify-end"><Button asChild><Link href="/kontroller/ny"><Plus data-icon="inline-start" />Ny kontroll</Link></Button></div><div className="grid gap-4">{kontroller.map((kontroll) => <Link href={`/kontroller/${kontroll.id}`} key={kontroll.id}><Card className="transition-token hover:border-primary/40"><CardContent className="flex items-center justify-between gap-4 p-5"><div className="flex items-center gap-4"><div className="rounded-xl bg-primary/10 p-3 text-primary"><ClipboardCheck className="size-5" /></div><div><p className="font-semibold">{kontroll.företag}</p><p className="text-sm text-muted-foreground">{kontroll.period} · {kontroll.arbetsställeEllerProjekt || "Arbetsställe eller projekt saknas"}</p></div></div><Badge variant="secondary">Utkast</Badge></CardContent></Card></Link>)}</div></div>;
}
