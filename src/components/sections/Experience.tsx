import { experience } from "@/data/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-0 flex-1 flex-col border-b py-4 md:py-5 lg:h-full"
    >
      <div className="mx-auto flex h-full min-h-0 w-full max-w-3xl flex-1 flex-col px-4">
        <h2 className="mb-4 shrink-0 text-base font-semibold tracking-tight md:text-lg">
          Experience
        </h2>
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-border md:left-4" />
          <ul
            className="flex min-h-0 flex-1 flex-col space-y-3 lg:justify-evenly lg:space-y-0"
          >
            {experience.map((item, i) => (
              <li
                key={i}
                className="group relative flex shrink-0 cursor-default gap-3 pl-8 md:pl-10"
              >
                <span
                  className={`absolute left-1.5 h-2 w-2 rounded-none border-2 border-primary transition-colors md:left-3 ${
                    i === 0
                      ? "bg-primary"
                      : "bg-background group-hover:bg-primary"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <h3
                    className="truncate text-xs font-semibold"
                    title={item.role}
                  >
                    {item.role}
                  </h3>
                  <div className="flex items-baseline justify-between gap-2 text-xs text-muted-foreground">
                    <span className="min-w-0 truncate">{item.company}</span>
                    <span className="shrink-0 text-muted-foreground/80">
                      {item.year}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
