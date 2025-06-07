import { getPostData, getSortedPostsData } from '@/lib/posts'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)

  return (
    <article>
      <header className="mb-8">
        {post.coverImage && (
          <div className="relative w-full mb-8 overflow-hidden rounded-lg">
            <div className="aspect-[16/9] relative">
              <img
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                className="absolute inset-0 w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
              />
            </div>
          </div>
        )}
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time className="text-gray-500">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
} 