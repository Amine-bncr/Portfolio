import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, site } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error" | "dev";

const fieldClass = "h-11 px-3 text-base md:text-base";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("bot-field") ?? "").trim().length > 0) {
      setStatus("sent");
      form.reset();
      return;
    }

    if (import.meta.env.DEV) {
      setStatus("dev");
      return;
    }

    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        body.append(key, String(value));
      });
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Form post failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary">Get in touch</p>
          <h2 id="contact-heading" className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{contact.lead}</p>
          <p className="mt-6">
            <a
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-primary" href={site.github} target="_blank" rel="noreferrer">
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-primary" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6"
          noValidate={false}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Do not fill this in
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" className={fieldClass} autoComplete="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className={fieldClass}
                autoComplete="email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="audience">This is about</Label>
              <select
                id="audience"
                name="audience"
                required
                defaultValue=""
                className="h-11 w-full rounded-lg border border-input bg-input/30 px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {contact.audiences.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                className="min-h-36 text-base md:text-base"
                placeholder="What you need, or the role you are hiring for."
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-5 h-11 px-5" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>

          <div className="mt-4 text-sm leading-relaxed" aria-live="polite">
            {status === "sent" ? (
              <p role="status">Thanks. Your message is on its way, and I will reply by email.</p>
            ) : null}
            {status === "error" ? (
              <p role="alert">
                That did not send. Please email{" "}
                <a className="underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                instead.
              </p>
            ) : null}
            {status === "dev" ? (
              <p role="status">
                The form is wired for Netlify. This local preview does not deliver it, so use the email
                link above.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
