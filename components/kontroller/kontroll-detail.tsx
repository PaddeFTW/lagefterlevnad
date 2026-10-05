"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKontroll } from "@/lib/kontroller/store";
import type { Kontroll } from "@/lib/kontroller/types";

export function KontrollDetail({ id }: { id: string }) {
  const router = useRouter();
  const [kontroll, setKontroll] = useState<Kontroll | null>(null);
  useEffect(() => setKontroll(getKontroll(id)), [id]);
  if (kontroll === null) return <p className="text-sm text-muted-foreground">Kontrollen kunde inte hittas.</p>;
  return <div className="flex flex-col gap-6"><div className="flex justify-end gap-3"><Button asChild variant="secondary"><Link href="/kontroller">Alla kontroller</Link></Button><Button onClick={() => router.push(`/kontroller/${id}/redigera`)}>Redigera</Button></div><Card><CardHeader><CardTitle>{kontroll.företag}</CardTitle><p className="text-sm text-muted-foreground">{kontroll.organisationsnummer} · Utkast</p></CardHeader><CardContent className="grid gap-6 sm:grid-cols-2"><div><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Period</p><p className="mt-1">{kontroll.period}</p></div><div><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Datum</p><p className="mt-1">{kontroll.datum}</p></div><div><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Arbetsställe eller projekt</p><p className="mt-1">{kontroll.arbetsställeEllerProjekt || "—"}</p></div><div><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ansvarig lagefterlevnad</p><p className="mt-1">{kontroll.ansvarigLagefterlevnad || "—"}</p></div><div className="sm:col-span-2"><p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Scope</p><p className="mt-1">Bygg och entreprenad: {kontroll.byggOchEntreprenad ? "Ja" : "Nej"}</p>{kontroll.byggOchEntreprenad ? <p className="mt-2 text-sm text-muted-foreground">Byggherre: {kontroll.byggherre || "—"} · Arbetsmiljösamordnare: {kontroll.arbetsmiljösamordnare || "—"} · BAS-P / BAS-U: {kontroll.basPBasU || "—"}</p> : null}</div></CardContent></Card></div>;
}
