import type { Kontroll, KontrollInput } from "./types";

const STORAGE_KEY = "lagefterlevnad:v0";

// Local storage är inte system of record. Det ersätts av en riktig lagring senare.
function canUseStorage() {
  return typeof window !== "undefined";
}

export function getKontroller(): Kontroll[] {
  if (!canUseStorage()) return [];

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Kontroll[]) : [];
  } catch {
    return [];
  }
}

function saveKontroller(kontroller: Kontroll[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(kontroller));
}

export function createKontroll(input: KontrollInput): Kontroll {
  const now = new Date().toISOString();
  const kontroll: Kontroll = {
    ...input,
    id: crypto.randomUUID(),
    status: "utkast", // Status är en förbättring jämfört med fri text.
    createdAt: now,
    updatedAt: now,
  };

  saveKontroller([kontroll, ...getKontroller()]);
  return kontroll;
}

export function updateKontroll(id: string, input: KontrollInput): Kontroll | null {
  const kontroller = getKontroller();
  const existing = kontroller.find((kontroll) => kontroll.id === id);
  if (!existing) return null;

  const updated = { ...existing, ...input, updatedAt: new Date().toISOString() };
  saveKontroller(kontroller.map((kontroll) => (kontroll.id === id ? updated : kontroll)));
  return updated;
}

export function getKontroll(id: string): Kontroll | null {
  return getKontroller().find((kontroll) => kontroll.id === id) ?? null;
}
