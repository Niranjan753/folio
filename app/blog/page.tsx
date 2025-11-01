import Link from 'next/link';

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
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-500 mb-2">~ berlin-niranjan</div>
          <nav className="flex gap-2 text-sm">
            <Link href="/" className="px-3 py-1 rounded-full border border-black/10 hover:bg-black/5">home</Link>
            <Link href="/blog" className="px-3 py-1 rounded-full border border-black/10 hover:bg-black/5">blog</Link>
          </nav>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Blog</h1>
        <p className="text-gray-600 mb-12">Thoughts, insights, and lessons from building in the tech world</p>

        {/* Blog Posts */}
        <section className="mb-12">
          <div className="text-gray-500 mb-4">$ ls ./posts</div>
          <div className="space-y-6 pl-4">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block border-l-2 border-black/10 pl-4 hover:border-black transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2 hover:underline">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <div className="text-center text-gray-500 text-sm">
          <p>$ echo "More posts coming soon..."</p>
        </div>

        {/* Footer */}
        <footer className="pt-8 mt-12 border-t border-black/10 text-center text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
        </footer>
      </div>
    </div>
  );
}