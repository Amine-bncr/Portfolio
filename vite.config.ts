import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { site } from "./src/data/content.ts";

const root = fileURLToPath(new URL(".", import.meta.url));

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function seoPlugin(): Plugin {
  const origin = site.url.replace(/\/$/, "");
  const image = origin ? `${origin}/og.png` : site.photo;
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: [site.shortName, site.brand],
    email: `mailto:${site.email}`,
    image: site.photo,
    jobTitle: "Computer Science student and freelance web developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Middlesex University",
    },
    sameAs: [site.github, site.linkedin],
    knowsLanguage: ["ar", "en", "fr"],
  };
  if (origin) person.url = origin;
  const jsonLd = JSON.stringify(person).replaceAll("<", "\\u003c");

  return {
    name: "seo-from-content",
    transformIndexHtml(html) {
      let next = html
        .replaceAll("%TITLE%", escapeAttr(site.title))
        .replaceAll("%DESCRIPTION%", escapeAttr(site.description))
        .replaceAll("%OG_IMAGE%", escapeAttr(image))
        .replaceAll("%JSONLD%", jsonLd);
      next = next
        .replace(
          /^[ \t]*<!-- canonical -->\n/m,
          origin ? `    <link rel="canonical" href="${escapeAttr(origin)}" />\n` : "",
        )
        .replace(
          /^[ \t]*<!-- og:url -->\n/m,
          origin ? `    <meta property="og:url" content="${escapeAttr(origin)}" />\n` : "",
        );
      return next;
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 43123,
    strictPort: true,
  },
});
