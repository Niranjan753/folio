import Link from 'next/link';
import { ModeToggle } from "../../components/ModeToggle";

export default function Blog() {
  const blogPosts = [
    {
      id: 'why-i-love-zoho',
      title: "Why I Love Zoho: The Power of Being Bootstrapped",
      excerpt: "Zoho is a company that Silicon valley geniuses could only dream to be",
      date: "October 2025",
      readTime: "5 min read",
      slug: "why-i-love-zoho"
    }
  ];

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

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Blog</h1>
        <p className="text-muted-foreground mb-12">Thoughts, insights, and lessons from building in the tech world</p>

        {/* Blog Posts */}
        <section className="mb-12">
          <div className="text-muted-foreground mb-4">$ ls ./posts</div>
          <div className="space-y-6 pl-4">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block border-l-2 border border-t-0 border-r-0 border-b-0 pl-4 hover:underline transition-colors rounded-none"
              >
                <h2 className="text-xl font-semibold mb-2 hover:underline">{post.title}</h2>
                <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <div className="text-center text-muted-foreground text-sm">
          <p>$ echo "More posts coming soon..."</p>
        </div>

        {/* Footer */}
        <footer className="pt-8 mt-12 text-center text-sm text-muted-foreground">
          <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
        </footer>
      </div>
    </div>
  );
}