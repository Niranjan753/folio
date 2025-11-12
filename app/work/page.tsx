import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ContactForm from "../../components/ContactForm";

export default function WorkPage() {
  const projects = [
    {
      title: "Pocketsflow",
      role: "Co‑founder • Product & Systems",
      description: "Modern payments infrastructure for internet businesses.",
      stack: ["TypeScript", "Next.js", "Stripe", "MongoDB"],
      href: "https://pocketsflow.com",
    },
    {
      title: "Traviflow",
      role: "Co‑founder • Mobile App",
      description: "Trip planning and booking with a focus on simplicity.",
      stack: ["SwiftUI", "MongoDB", "Maps"],
      href: "https://traviflow.com",
    },
    {
      title: "Live Docs",
      role: "Founder",
      description: "An attempt to make college experience better",
      stack: ["Next.js", "Supabase", "Clerk Auth"],
      href: "https://livedocs.xyz",
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <PageTransition>
        {/* Work Section */}
        <section className="flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 lg:gap-24 items-start">
            {/* Left Column */}
            <div className="space-y-8 md:space-y-10 max-w-2xl">
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-normal tracking-tight leading-[1.15]">
                Work
              </h1>

              <div className="space-y-5 md:space-y-6 text-muted-foreground leading-[1.7] text-[13px] sm:text-[14px]">
                <p>
                  Projects and companies I've built and worked on. Each represents a commitment to simple, thoughtful design and robust systems.
                </p>
              </div>
            </div>

            {/* Right Column - Projects */}
            <div className="space-y-6 md:space-y-8">
              {projects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="space-y-3 border border-border/75 rounded-lg p-5 hover:shadow transition-shadow bg-background">
                    <div>
                      <h3 className="text-[16px] font-normal text-foreground group-hover:text-muted-foreground transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[12px] text-muted-foreground mt-1">{project.role}</p>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-[1.7]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] border border-border/40 rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-[1.75rem] sm:text-[2rem] font-normal tracking-tight">Get in Touch</h2>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-[1.7]">
                If you have any inquiries, feel free to reach out. You can contact me via email at
              </p>
              <a
                href="mailto:niranjanr753@gmail.com"
                className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors inline-block break-all"
              >
                niranjanr753@gmail.com
              </a>
              
              <div className="pt-4 md:pt-6">
                <p className="text-[12px] sm:text-[13px] text-muted-foreground mb-3 md:mb-4">Follow me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Niranjan753"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/berlified/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      </PageTransition>

      <Footer />
    </main>
  );
}

