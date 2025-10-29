import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: "Pocketsflow",
      description: "A modern payment solution platform for seamless transactions",
      tech: ["TypeScript", "Next.js", "Stripe", "MongoDB", "Tailwind"],
      url: "https://pocketsflow.com"
    },
    {
      name: "Traviflow",
      description: "Travel management and booking platform",
      tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
      url: "https://traviflow.com"
    }
  ];

  const contacts = [
    { name: "github.md", url: "https://github.com/Niranjan753" },
    { name: "instagram.md", url: "https://www.instagram.com/berlified/" },
    { name: "mail.txt", url: "mailto:berlin@example.com" },
    { name: "blog.sh", url: "/blog" }
  ];

  // Changed background to black
  return (
    <div
      className="min-h-screen text-white font-mono"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-200 mb-2">~ berlin | niranjan</div>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">home</Link>
            <Link href="/blog" className="hover:underline">blog</Link>
          </nav>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">Berlin |  Niranjan</h1>

        {/* About Section */}
        <section className="mb-12">
          <div className="text-green-200 mb-2">$ cat about.md</div>
          <div className="pl-4 space-y-2">
            <p>B.Tech CSE student | Web & app developer | Co-founder @Pocketsflow & @Traviflow</p>
            <p className="text-gray-100">20 year old hacking around the internet</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="text-green-200 mb-2">$ ls ./contact</div>
          <div className="pl-4 flex flex-wrap gap-3">
            {contacts.map((contact) => (
              <a 
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-200"
              >
                {contact.name}
              </a>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name} className="border-l-2 border-white/30 pl-4">
                <h3 className="text-xl font-semibold mb-2">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="text-gray-100 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-white/20 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="pl-4 space-y-2">
            <p><span className="text-green-200">Languages:</span> TypeScript, JavaScript, Python, Swift</p>
            <p><span className="text-green-200">Frontend:</span> React, Next.js, SwiftUI, Tailwind</p>
            <p><span className="text-green-200">Backend:</span> Node.js, Express, MongoDB, Supabase</p>
            <p><span className="text-green-200">Other:</span> Stripe, PayloadCMS, SEO, Performance Marketing</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="pl-4">
            <div className="mb-2">
              <span className="font-semibold">Sri Sairam Engineering College</span>
            </div>
            <div className="text-gray-100">
              <p>Computer Science and Engineering</p>
              <p className="text-sm">2022 - 2026</p>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <div className="border-l-2 border-white/30 pl-4">
            <Link href="/blog" className="hover:underline">
              <div className="mb-2">View all posts →</div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/30 text-center text-sm text-gray-100">
          <p>Aiming for global hegemony</p>
          <p className="mt-2">© {new Date().getFullYear()} Berlin |  Niranjan</p>
        </footer>
      </div>
    </div>
  );
}
