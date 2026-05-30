"use client";

import { useState, useEffect } from "react";
import { recommendations } from "@/data/site";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_DELAY_MS = 6000;

export function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % recommendations.length);
    }, AUTO_ADVANCE_DELAY_MS);
    return () => clearInterval(id);
  }, []);

  const rec = recommendations[activeIndex];
  if (!rec) return null;

  return (
    <section id="recommendations" className="border-b py-6 md:py-8 lg:border-b-0 lg:py-0">
      <div className="w-full">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          Recommendations
        </h2>
        <div className="flex flex-col">
          <p className="line-clamp-6 font-serif text-sm leading-relaxed text-foreground">
            &ldquo;{rec.quote}&rdquo;
          </p>
          <div className="mt-4 border-t border-border pt-4">
            <p className="font-semibold text-foreground">{rec.author}</p>
            <p className="mt-0.5 text-sm text-foreground">{rec.title}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {recommendations.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to recommendation ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2 w-2 rounded-none border-0 transition-colors",
                i === activeIndex
                  ? "bg-primary"
                  : "bg-muted hover:bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
