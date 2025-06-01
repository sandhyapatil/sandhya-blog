export default function Home() {
  return (
    <main>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-8">
            Hi! I'm Sandhya. This is my personal blog where I share my thoughts and experiences
            about technology, web development, and other interesting topics.
          </p>
        </div>
        <div className="grid gap-8 mt-12">
          {/* Sample blog post previews - these will be dynamically generated later */}
          <article className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="text-2xl font-bold mb-4">
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">
                Getting Started with Next.js and TypeScript
              </a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A comprehensive guide to setting up a new Next.js project with TypeScript and best practices.
            </p>
            <div className="text-sm text-gray-500">March 10, 2024</div>
          </article>
        </div>
      </div>
    </main>
  );
}
