"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createKontroll, updateKontroll } from "@/lib/kontroller/store";
import { emptyKontrollInput, type Kontroll, type KontrollInput } from "@/lib/kontroller/types";

interface KontrollFormProps { kontroll?: Kontroll }

export function KontrollForm({ kontroll }: KontrollFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<KontrollInput>(kontroll ?? emptyKontrollInput);
  const [error, setError] = useState("");
  const isEditing = Boolean(kontroll);

  function update(field: keyof KontrollInput, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.företag || !form.organisationsnummer || !form.period || !form.datum) {
      setError("Fyll i företag, organisationsnummer, period och datum.");
      return;
    }
    const input = form.byggOchEntreprenad
      ? form
      : { ...form, byggherre: undefined, arbetsmiljösamordnare: undefined, basPBasU: undefined };
    const saved = isEditing ? updateKontroll(kontroll!.id, input) : createKontroll(input);
    if (saved) router.push(`/kontroller/${saved.id}`);
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <Card>
        <CardHeader><CardTitle>Grunduppgifter</CardTitle></CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium">Företag<Input value={form.företag} onChange={(e) => update("företag", e.target.value)} /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Organisationsnummer<Input value={form.organisationsnummer} onChange={(e) => update("organisationsnummer", e.target.value)} /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Arbetsställe eller projekt<Input value={form.arbetsställeEllerProjekt} onChange={(e) => update("arbetsställeEllerProjekt", e.target.value)} /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Ansvarig lagefterlevnad<Input value={form.ansvarigLagefterlevnad} onChange={(e) => update("ansvarigLagefterlevnad", e.target.value)} /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Period<Input placeholder="Till exempel Q1 2026" value={form.period} onChange={(e) => update("period", e.target.value)} /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Datum<Input type="date" value={form.datum} onChange={(e) => update("datum", e.target.value)} /></label>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Scope</CardTitle></CardHeader>
        <CardContent className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium">Bygg och entreprenad<Select value={form.byggOchEntreprenad ? "ja" : "nej"} onValueChange={(value) => update("byggOchEntreprenad", value === "ja")}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="nej">Nej</SelectItem><SelectItem value="ja">Ja</SelectItem></SelectContent></Select></label>
          {form.byggOchEntreprenad ? <div className="grid gap-5 md:grid-cols-3"><label className="flex flex-col gap-2 text-sm font-medium">Byggherre<Input value={form.byggherre ?? ""} onChange={(e) => update("byggherre", e.target.value)} /></label><label className="flex flex-col gap-2 text-sm font-medium">Arbetsmiljösamordnare<Input value={form.arbetsmiljösamordnare ?? ""} onChange={(e) => update("arbetsmiljösamordnare", e.target.value)} /></label><label className="flex flex-col gap-2 text-sm font-medium">BAS-P / BAS-U<Input value={form.basPBasU ?? ""} onChange={(e) => update("basPBasU", e.target.value)} /></label></div> : null}
        </CardContent>
      </Card>
      {error ? <p className="text-sm text-destructive" role="alert">{error}</p> : null}
      <div className="flex justify-end gap-3"><Button type="button" variant="ghost" onClick={() => router.back()}>Avbryt</Button><Button type="submit">{isEditing ? "Spara ändringar" : "Skapa kontroll"}</Button></div>
    </form>
  );
}
