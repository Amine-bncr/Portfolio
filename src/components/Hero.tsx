import { Button } from "@/components/ui/button";
import { hero, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="rise mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
      <div>
        <p className="text-sm font-medium tracking-wide text-primary">{hero.eyebrow}</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/90">{hero.lead}</p>
        <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
          <li className="border-l-2 border-primary/70 pl-4">{hero.recruiter}</li>
          <li className="border-l-2 border-white/20 pl-4">{hero.business}</li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-5">
            <a href="#hire">Hire me for a website</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-5">
            <a href="#work">See the work</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {site.location}
          <span aria-hidden="true"> · </span>
          <a className="underline decoration-white/30 underline-offset-4 hover:decoration-primary" href={site.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <span aria-hidden="true"> · </span>
          <a className="underline decoration-white/30 underline-offset-4 hover:decoration-primary" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>

      <figure className="mx-auto w-40 lg:w-full">
        <img
          src={site.photo}
          alt={site.photoAlt}
          width={240}
          height={240}
          className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/15"
        />
        <figcaption className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
          Photo placeholder. Swap the URL in the content file when a real portrait is ready.
        </figcaption>
      </figure>
    </section>
  );
}
