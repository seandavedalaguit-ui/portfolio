import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site, heroBadges } from "@/data/site";
import {
  Calendar,
  Mail,
  BookOpen,
  MapPin,
  Check,
  Trophy,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

function Avatar() {
  const name = site.name.trim();
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (site.avatarUrl) {
    return (
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted sm:h-24 sm:w-24">
        <Image
          src={site.avatarUrl}
          alt=""
          fill
          className="object-cover"
          sizes="96px"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-border bg-muted text-lg font-semibold text-muted-foreground sm:h-24 sm:w-24"
      aria-hidden
    >
      {initials || "?"}
    </div>
  );
}

export function Hero() {
  const primaryBadge = heroBadges[0];

  return (
    <section className="relative bg-background pt-6 pb-4 md:pt-8 md:pb-5">
      <div className="container mx-auto flex max-w-3xl flex-row flex-wrap items-center gap-6 px-4 md:flex-nowrap md:gap-8">
        <Avatar />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <h1 className="truncate text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                  {site.name}
                </h1>
                {site.verified && (
                  site.facebookUrl ? (
                    <a
                      href={site.facebookUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex shrink-0 transition opacity-90 hover:opacity-100"
                      aria-label="Verified on Facebook"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm sm:h-6 sm:w-6">
                        <Check className="h-3 w-3 stroke-[3] sm:h-3.5 sm:w-3.5" />
                      </span>
                    </a>
                  ) : (
                    <span className="flex shrink-0" aria-label="Verified">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm sm:h-6 sm:w-6">
                        <Check className="h-3 w-3 stroke-[3] sm:h-3.5 sm:w-3.5" />
                      </span>
                    </span>
                  )
                )}
              </div>
              <div className="shrink-0">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{site.location}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-3">
              <p className="text-sm text-foreground md:text-base">
                {site.tagline.split(" \\ ").join(" \ ")}
              </p>
              {primaryBadge && (
                <Link
                  href={primaryBadge.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  <Trophy className="h-4 w-4" />
                  <span>{primaryBadge.subtitle ?? primaryBadge.label}</span>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </Link>
              )}
            </div>
            <div className="mt-1 flex w-full gap-1.5">
              <Button asChild className="h-8 min-w-0 flex-1 gap-1 px-2 text-xs">
                <Link href={site.calendlyUrl} target="_blank" rel="noopener" className="flex min-w-0 items-center justify-center gap-1">
                  <Calendar className="h-3 w-3 shrink-0" />
                  <span className="truncate">Schedule a Call</span>
                  <ArrowRight className="h-3 w-3 shrink-0" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-8 min-w-0 flex-1 gap-1 px-2 text-xs">
                <Link href={`mailto:${site.email}`} className="flex min-w-0 items-center justify-center gap-1">
                  <Mail className="h-3 w-3 shrink-0" />
                  <span className="truncate">Send Email</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-8 min-w-0 flex-1 gap-1 px-2 text-xs">
                <Link href={site.blogUrl} target="_blank" rel="noopener" className="flex min-w-0 items-center justify-center gap-1">
                  <BookOpen className="h-3 w-3 shrink-0" />
                  <span className="truncate">Read my blog</span>
                  <ArrowRight className="h-3 w-3 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
