import { site } from "@/data/site";

export function Copyright() {
  const year = new Date().getFullYear();
  return (
    <section className="py-6">
      <div className="container mx-auto max-w-3xl px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
