import Header from '@/components/Header'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, React, and TypeScript.',
    date: 'March 15, 2024',
  },
  {
    id: 2,
    title: 'The Power of Tailwind CSS',
    excerpt: 'Discover how Tailwind CSS can help you build beautiful websites faster than ever.',
    date: 'March 10, 2024',
  },
  {
    id: 3,
    title: 'Building a Personal Blog',
    excerpt: 'A step-by-step guide to creating your own personal blog using modern web technologies.',
    date: 'March 5, 2024',
  },
]

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Welcome to My Blog</h1>
            <p className="mt-4 text-xl text-gray-500">Sharing thoughts, experiences, and learnings</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
                  <p className="mt-3 text-gray-500">{post.excerpt}</p>
                  <div className="mt-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
