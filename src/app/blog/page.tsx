import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-12">
            <Link href={`/blog/${post.id}`} className="block group">
              {post.coverImage && (
                <div className="relative w-full mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] relative">
                    <img
                      src={post.coverImage}
                      alt={`Cover image for ${post.title}`}
                      className="absolute inset-0 w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
                    />
                  </div>
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
    </>
  )
} 