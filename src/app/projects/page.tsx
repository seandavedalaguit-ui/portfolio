import Link from "next/link";
import { projects } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-muted-foreground">Recent work and side projects.</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardContent className="p-0">
              <a
                href={project.url}
                target="_blank"
                rel="noopener"
                className="flex items-start justify-between gap-4 p-6 transition hover:bg-muted/50"
              >
                <div>
                  <h2 className="font-semibold">{project.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.domain}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
