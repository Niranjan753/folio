import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../../../components/ModeToggle";

export default function ZohoBlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Berlin | Niranjan</div>
          <div className="h-8 w-8 rounded-md border flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>

        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog" className="text-muted-foreground hover:underline">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Why I Love Zoho</h1>
          <p className="text-muted-foreground mb-4">
            In a startup world obsessed with unicorns, venture capital, and rapid scaling, Zoho stands out as a rare breed—a global SaaS giant that has grown entirely through bootstrapping.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>October 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="space-y-6 leading-relaxed">
          <div className="text-muted-foreground mb-2">$ cat ./zoho-story.md</div>
          
          <div className="pl-4 space-y-6">
            <p>
              Zoho is a rare example of a huge software company built without outside funding. They focused on building good products and serving customers, not chasing investors.
            </p>

            <div className="border-l-2 border border-t-0 border-r-0 border-b-0 pl-4">
              <ul className="space-y-2 text-foreground/90">
                <li>• Bootstrapped from day one</li>
                <li>• Over 80 million users</li>
                <li>• 50+ products</li>
                <li>• Profitable and independent</li>
              </ul>
            </div>

            <p>
              I like bootstrapping because it means you build for real users, not for investors. Every dollar comes from customers, not VCs.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Zoho Story</h2>
            
            <p>
              Zoho's story is legendary in the Indian and global tech ecosystem. Founded in 1996 by Sridhar Vembu, Zoho has never taken a single dollar of external funding.
            </p>

            <div className="border-l-2 border border-t-0 border-r-0 border-b-0 pl-4 space-y-2">
              <p className="text-foreground/90">
                <span className="text-muted-foreground">→</span> <strong>Prioritize long-term value</strong> over short-term growth hacks
              </p>
              <p className="text-foreground/90">
                <span className="text-muted-foreground">→</span> <strong>Invest in people and culture</strong>—from building a rural campus to nurturing talent from scratch
              </p>
              <p className="text-foreground/90">
                <span className="text-muted-foreground">→</span> <strong>Innovate at its own pace</strong>, launching products when they're truly ready
              </p>
              <p className="text-foreground/90">
                <span className="text-muted-foreground">→</span> <strong>Stay profitable and sustainable</strong> through every market cycle
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Bootstrapping Resonates With Me</h2>
            
            <p>
              As a builder, I've always admired companies that choose the harder, slower, but ultimately more rewarding path of bootstrapping. It's not just about retaining equity or control—it's about building a business that's <em>real</em>. Every dollar earned is a validation from a customer, not an investor. Every feature shipped is driven by user need, not a pitch deck.
            </p>

            <blockquote className="border-l-4 border border-t-0 border-r-0 border-b-0 pl-4 italic text-muted-foreground my-6">
              "Bootstrapping forces you to be scrappy, creative, and customer-obsessed. It teaches you discipline and resilience. And most importantly, it lets you build a company on your own terms."
            </blockquote>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How Zoho Inspires Pocketsflow</h2>
            
            <p>
              At <strong>Pocketsflow</strong>, we've taken a page out of Zoho's playbook. We're building our product with a laser focus on solving real problems for real users. We're not chasing funding rounds or growth-at-all-costs. Instead, we're obsessed with delivering value, listening to our users, and growing sustainably.
            </p>

            <div className="flex items-center gap-3 my-6 pl-4 border-l border border-t-0 border-r-0 border-b-0">
              <Image src="/pocketsflow logo.png" alt="Pocketsflow logo" width={40} height={40} className="object-contain rounded-full" />
              <span className="text-muted-foreground">Inspired by Zoho's journey</span>
            </div>

            <p>
              Zoho's journey gives us the confidence that it's possible to build something meaningful without external capital. It reminds us that culture, product, and customer obsession matter more than headlines or valuations. And it proves that, with patience and perseverance, bootstrapped companies can not only survive—but thrive—on the global stage.
            </p>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-4">Thanks for reading!</p>
            <Link href="/blog" className="text-blue-600 hover:underline">← Back to all posts</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
