import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="group flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-md bg-primary text-sm text-primary-foreground">
            A
          </span>
          <span>
            {site.brand}
            <span className="sr-only">, home</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="lg" className="ml-2 h-10 px-4">
            <a href={`mailto:${site.email}`}>Email</a>
          </Button>
        </nav>

        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="size-11 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-5 py-3 md:hidden" aria-label="Page">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-base hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="block rounded-md px-2 py-3 text-base text-primary"
                onClick={() => setOpen(false)}
              >
                Email {site.shortName}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
