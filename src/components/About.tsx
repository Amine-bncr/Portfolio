import {
  certification,
  education,
  languages,
  otherWork,
  skillGroups,
} from "@/data/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-8 sm:py-12" aria-labelledby="about-heading">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-primary">Background</p>
        <h2 id="about-heading" className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Studies, skills and languages
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Third year of a BSc in Computer Science at Middlesex University, London, expected in 2027.
          The degree covers programming, web applications, software engineering, full-stack development
          and business intelligence. Alongside it I have been building and deploying small sites.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <h3 className="font-heading text-xl font-semibold">Skills</h3>
          <dl className="mt-4 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="text-sm font-medium text-primary">{group.label}</dt>
                <dd className="text-sm leading-relaxed text-foreground/90">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            Also comfortable with Microsoft Office, including Excel and Word.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-xl font-semibold">Education</h3>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.place} · {item.when}
                  </p>
                  {item.detail ? (
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold">Certification</h3>
            <p className="mt-3 font-medium">{certification.title}</p>
            <p className="text-sm text-muted-foreground">
              {certification.by} · {certification.when}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/90">
              {certification.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold">Languages</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {languages.map((language) => (
                <li key={language.name}>
                  <span className="font-medium">{language.name}</span>
                  <span className="text-muted-foreground"> — {language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 p-5 sm:p-6">
        <h3 className="font-heading text-lg font-semibold">Other work</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {otherWork.map((job) => (
            <li key={job.role}>
              <p className="font-medium">
                {job.role}
                <span className="font-normal text-muted-foreground"> · {job.place}</span>
              </p>
              <p className="text-sm text-muted-foreground">{job.when}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{job.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
