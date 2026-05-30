import Link from "next/link";
import { certifications } from "@/data/site";
import { ChevronRight } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="border-b py-4 md:py-5 lg:border-b-0 lg:py-0">
      <div className="w-full">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-tight md:text-base">
            Recent Certifications
          </h2>
          <Link
            href="/certifications"
            className="shrink-0 text-xs font-normal text-muted-foreground hover:text-foreground"
          >
            View All <ChevronRight className="inline-block h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {certifications.map((cert) => (
            <Link
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener"
              className="block rounded-md bg-muted/60 px-3 py-2 transition hover:bg-muted"
            >
              <p className="text-sm font-semibold text-foreground">{cert.name}</p>
              <p className="mt-0.5 text-xs font-normal text-muted-foreground">
                {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
