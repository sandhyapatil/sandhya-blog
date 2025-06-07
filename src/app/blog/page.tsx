import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default async function Blog() {
  const posts = await getSortedPostsData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map(post => (
        <article 
          key={post.id} 
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
        >
          <Link href={`/blog/${post.id}`} className="block">
            <div className="relative aspect-[16/9]">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={`Cover image for ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={posts.indexOf(post) < 2}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
              )}
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:text-white">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {post.description}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
} 