import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";

export default function WritingPage() {
  const posts = [
    {
      title: "Building for the next generation of developers",
      date: "Nov 2024",
      href: "/blog",
      description: "How we're thinking about developer experience and what it means to build tools that feel obvious.",
    },
    {
      title: "The art of shipping",
      date: "Oct 2024",
      href: "/blog",
      description: "Thoughts on momentum, iteration, and finding the balance between perfection and progress.",
    },
    {
      title: "Why I love Zoho",
      date: "Sep 2024",
      href: "/blog/why-i-love-zoho",
      description: "Reflections on working at scale and building enterprise software that matters.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <PageTransition>
        {/* Writing Section */}
        <section className="flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 lg:gap-24 items-start">
            {/* Left Column */}
            <div className="space-y-8 md:space-y-10 max-w-2xl">
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-normal tracking-tight leading-[1.15]">
                Writing
              </h1>

              <div className="space-y-5 md:space-y-6 text-muted-foreground leading-[1.7] text-[13px] sm:text-[14px]">
                <p>
                  Thoughts on building and learning.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                {posts.map((post, idx) => (
                  <Link
                    key={idx}
                    href={post.href}
                    className="block group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-[16px] font-normal text-foreground group-hover:text-muted-foreground transition-colors">
                          {post.title}
                        </h3>
                        <span className="text-[12px] text-muted-foreground font-mono whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-[1.7]">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/blog"
                  className="text-[14px] text-foreground hover:text-muted-foreground transition-colors inline-flex items-center group"
                >
                  View all posts <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Empty for balance */}
            <div></div>
          </div>
        </div>
      </section>
      </PageTransition>

      <Footer />
    </main>
  );
}

