import { Button } from "@/components/ui/button";
import { hire, site } from "@/data/content";

export function Hire() {
  return (
    <section id="hire" className="mx-auto max-w-6xl px-5 pb-6" aria-labelledby="hire-heading">
      <div className="rounded-2xl border border-white/10 border-l-4 border-l-primary bg-card/80 p-6 sm:p-10">
        <p className="text-sm font-medium tracking-wide text-primary">{hire.eyebrow}</p>
        <h2 id="hire-heading" className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {hire.title}
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          {hire.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-5">
            <a href="#contact">Start a website enquiry</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-5">
            <a href={`mailto:${site.email}?subject=Website%20enquiry`}>Email {site.email}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
