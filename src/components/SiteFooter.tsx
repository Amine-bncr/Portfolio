import { site } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.name}
          <span className="hidden sm:inline"> · {site.brand}</span>
        </p>
        <p>
          <a className="underline decoration-white/20 underline-offset-4 hover:text-foreground" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span aria-hidden="true"> · </span>
          <a className="underline decoration-white/20 underline-offset-4 hover:text-foreground" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true"> · </span>
          <a className="underline decoration-white/20 underline-offset-4 hover:text-foreground" href={`mailto:${site.email}`}>
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
