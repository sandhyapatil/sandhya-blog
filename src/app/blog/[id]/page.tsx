import { getPostData, getSortedPostsData } from '@/lib/posts'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = await getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  coverImage?: string;
}

async function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="mb-8">
        {post.coverImage && (
          <div className="relative w-full mb-8 overflow-hidden rounded-lg">
            <div className="aspect-[16/9] relative">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-contain bg-gray-100 dark:bg-gray-800"
                priority
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

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)
  return <BlogPostContent post={post} />
} 