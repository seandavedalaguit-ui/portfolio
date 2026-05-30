import Link from "next/link";
import { projects } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="border-b py-4 md:py-5">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
            Recent Projects
          </h2>
          <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
            <Link href="/projects" className="gap-1">
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden transition hover:shadow-md">
              <CardContent className="p-0">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-start justify-between gap-2 p-3 transition hover:bg-muted/50"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold">{project.name}</h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {project.domain}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
