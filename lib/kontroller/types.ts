export type KontrollStatus = "utkast";

export interface Kontroll {
  id: string;
  företag: string;
  organisationsnummer: string;
  arbetsställeEllerProjekt: string;
  ansvarigLagefterlevnad: string;
  period: string;
  datum: string;
  byggOchEntreprenad: boolean;
  byggherre?: string;
  arbetsmiljösamordnare?: string;
  basPBasU?: string;
  status: KontrollStatus;
  createdAt: string;
  updatedAt: string;
}

export type KontrollInput = Omit<Kontroll, "id" | "status" | "createdAt" | "updatedAt">;

export const emptyKontrollInput: KontrollInput = {
  företag: "",
  organisationsnummer: "",
  arbetsställeEllerProjekt: "",
  ansvarigLagefterlevnad: "",
  period: "",
  datum: "",
  byggOchEntreprenad: false,
};
