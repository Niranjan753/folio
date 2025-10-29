import Link from "next/link";
import Image from "next/image";

export default function ZohoBlogPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-200 mb-2">~ berlin-niranjan</div>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">home</Link>
            <Link href="/blog" className="hover:underline">blog</Link>
          </nav>
        </div>

        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Why I Love Zoho</h1>
          <p className="text-gray-400 mb-4">
            In a startup world obsessed with unicorns, venture capital, and rapid scaling, Zoho stands out as a rare breed—a global SaaS giant that has grown entirely through bootstrapping.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>October 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="space-y-6 leading-relaxed">
          <div className="text-green-200 mb-2">$ cat ./zoho-story.md</div>
          
          <div className="pl-4 space-y-6">
            <p>
              Zoho is a rare example of a huge software company built without outside funding. They focused on building good products and serving customers, not chasing investors.
            </p>

            <div className="border-l-2 border-white/30 pl-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Bootstrapped from day one</li>
                <li>• Over 80 million users</li>
                <li>• 50+ products</li>
                <li>• Profitable and independent</li>
              </ul>
            </div>

            <p>
              I like bootstrapping because it means you build for real users, not for investors. Every dollar comes from customers, not VCs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Zoho Story</h2>
            
            <p>
              Zoho's story is legendary in the Indian and global tech ecosystem. Founded in 1996 by Sridhar Vembu, Zoho has never taken a single dollar of external funding.
            </p>

            <div className="border-l-2 border-white/30 pl-4 space-y-2">
              <p className="text-gray-300">
                <span className="text-green-200">→</span> <strong>Prioritize long-term value</strong> over short-term growth hacks
              </p>
              <p className="text-gray-300">
                <span className="text-green-200">→</span> <strong>Invest in people and culture</strong>—from building a rural campus to nurturing talent from scratch
              </p>
              <p className="text-gray-300">
                <span className="text-green-200">→</span> <strong>Innovate at its own pace</strong>, launching products when they're truly ready
              </p>
              <p className="text-gray-300">
                <span className="text-green-200">→</span> <strong>Stay profitable and sustainable</strong> through every market cycle
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Bootstrapping Resonates With Me</h2>
            
            <p>
              As a builder, I've always admired companies that choose the harder, slower, but ultimately more rewarding path of bootstrapping. It's not just about retaining equity or control—it's about building a business that's <em>real</em>. Every dollar earned is a validation from a customer, not an investor. Every feature shipped is driven by user need, not a pitch deck.
            </p>

            <blockquote className="border-l-4 border-white/50 pl-4 italic text-gray-400 my-6">
              "Bootstrapping forces you to be scrappy, creative, and customer-obsessed. It teaches you discipline and resilience. And most importantly, it lets you build a company on your own terms."
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">How Zoho Inspires Pocketsflow</h2>
            
            <p>
              At <strong>Pocketsflow</strong>, we've taken a page out of Zoho's playbook. We're building our product with a laser focus on solving real problems for real users. We're not chasing funding rounds or growth-at-all-costs. Instead, we're obsessed with delivering value, listening to our users, and growing sustainably.
            </p>

            <div className="flex items-center gap-3 my-6 p-4 bg-white/5 rounded">
              <Image src="/pocketsflow logo.png" alt="Pocketsflow logo" width={40} height={40} className="object-contain rounded-full" />
              <span className="text-gray-400">Inspired by Zoho's journey</span>
            </div>

            <p>
              Zoho's journey gives us the confidence that it's possible to build something meaningful without external capital. It reminds us that culture, product, and customer obsession matter more than headlines or valuations. And it proves that, with patience and perseverance, bootstrapped companies can not only survive—but thrive—on the global stage.
            </p>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/30">
          <div className="text-center text-gray-400">
            <p className="mb-4">Thanks for reading!</p>
            <Link href="/blog" className="hover:underline">← Back to all posts</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
