import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-12">
            <Link href={`/blog/${post.id}`} className="block group">
              {post.coverImage && (
                <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-lg">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
                {post.title}
              </h2>
              <time className="text-gray-500 mb-2 block">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              <p className="text-gray-700 dark:text-gray-300">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 