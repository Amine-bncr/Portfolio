import type { Project } from "@/data/content";
import { featuredProjects, smallerProjects } from "@/data/content";

const statusClass: Record<Project["status"], string> = {
  Live: "border-primary/40 bg-primary/15 text-primary",
  Demo: "border-white/20 bg-white/5 text-foreground",
  "In progress": "border-amber-200/40 bg-amber-200/10 text-amber-100",
  Coursework: "border-white/15 bg-transparent text-muted-foreground",
};

function ProjectLinks({ links }: { links: Project["links"] }) {
  if (links.length === 0) {
    return <p className="text-sm text-muted-foreground">No public link</p>;
  }
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-card/70 p-5 transition-colors hover:border-primary/40 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-heading text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusClass[project.status]}`}>
          {project.status}
        </span>
      </div>
      {project.when ? <p className="mt-2 text-sm text-muted-foreground">{project.when}</p> : null}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.map((item) => (
          <li key={item} className="rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:py-20" aria-labelledby="work-heading">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-primary">Selected work</p>
        <h2 id="work-heading" className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Sites, coursework and one project still being built
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Client sites are linked where they are live. Coursework and unfinished work point at the code.
          Hearback is labelled in progress. The lessons app is not shown as a live demo, because the Vue
          page currently calls a local address.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Smaller projects</h2>
        <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {smallerProjects.map((project) => (
            <article key={project.title} className="grid gap-3 py-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8">
              <div>
                <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.status}
                  {project.when ? ` · ${project.when}` : ""}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{project.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <ProjectLinks links={project.links} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
