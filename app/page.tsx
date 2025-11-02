import Link from "next/link";
import { ModeToggle } from "../components/ModeToggle";

export default function Home() {
  const featuredProjects = [
    {
      title: "Pocketsflow",
      summary: "Modern payments infrastructure for internet businesses.",
      href: "https://pocketsflow.com",
      meta: "Co‑founder • Product & Systems",
      stack: ["TypeScript", "Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Traviflow",
      summary: "Trip planning and booking with a focus on simplicity.",
      href: "https://traviflow.com",
      meta: "Co‑founder • Mobile App",
      stack: ["SwiftUI", "MongoDB", "Maps"],
    },
  ];

  const links = [
    { label: "GitHub", href: "https://github.com/Niranjan753" },
    { label: "Instagram", href: "https://www.instagram.com/berlified/" },
    { label: "Mail", href: "mailto:niranjanr753@gmail.com" },
    { label: "Writing", href: "/blog" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          {/* Left: Intro / Sticky */}
          <aside className="md:sticky md:top-16 self-start">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Berlin | Niranjan</div>
                <div className="h-8 w-8 rounded-md border flex items-center justify-center">
                  <ModeToggle />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Builder designing for clarity.
              </h1>
              <p className="text-muted-foreground">
                Co‑founder at <a className="underline" href="https://pocketsflow.com" target="_blank" rel="noreferrer">Pocketsflow</a> & {""}
                <a className="underline" href="https://traviflow.com" target="_blank" rel="noreferrer">Traviflow</a>. B.Tech CSE. I build products that feel obvious.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border px-3 py-1 text-sm hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: Content */}
          <section className="space-y-12">
            {/* About */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-muted-foreground">About</div>
              <p className="leading-relaxed text-foreground/90">
                I craft simple, durable interfaces and systems. My current focus is
                internet payments and travel. Outside of building, I enjoy writing about
                products and process.
              </p>
            </div>

            {/* Work / Projects */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-muted-foreground">Work</div>
              <div className="divide-y divide-[var(--border)] border rounded-lg overflow-hidden">
                {featuredProjects.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 hover:bg-secondary transition-colors"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                        <span className="text-xs text-muted-foreground">{p.meta}</span>
                      </div>
                      <p className="text-muted-foreground">{p.summary}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Writing */}
            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground">Writing</div>
              <div className="rounded-lg border p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Thoughts</div>
                    <p className="text-sm text-muted-foreground">Thoughts on building and learning.</p>
                  </div>
                  <Link href="/blog" className="text-blue-600 hover:underline text-sm">View all →</Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-muted-foreground">Contact</div>
              <div className="flex flex-wrap gap-2">
                {links.map((l) => (
                  <a
                    key={l.label + "-contact"}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border px-3 py-1 text-sm hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer mini */}
            <div className="pt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Berlin |  Niranjan
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
