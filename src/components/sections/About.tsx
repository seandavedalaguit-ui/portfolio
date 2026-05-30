import { about } from "@/data/site";

export function About() {
  return (
    <section id="about" className="pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          About
        </h2>
        <div className="max-w-none">
          {about.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
