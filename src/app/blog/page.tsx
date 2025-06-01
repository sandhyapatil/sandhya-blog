import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { format } from 'date-fns'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="relative overflow-hidden rounded-lg group">
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative aspect-[16/9]">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-300 mb-2">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <p className="text-gray-200 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
} 