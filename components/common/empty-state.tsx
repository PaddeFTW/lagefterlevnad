import Link from "next/link";
import { FileSearch } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/30 px-6 py-10 text-center",
        className,
      )}
    >
      <div className="mb-5 rounded-2xl bg-primary/10 p-4 text-primary">
        <FileSearch className="size-6" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {actionLabel ? (
        <Button className="mt-6" variant="secondary" asChild={Boolean(actionHref)}>
          {actionHref ? <Link href={actionHref}>{actionLabel}</Link> : actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
