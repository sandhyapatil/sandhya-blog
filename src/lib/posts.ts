import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

interface PostData {
  id: string;
  date: string;
  title: string;
  description: string;
  coverImage?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(fileNames.map(async fileName => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; description: string; coverImage?: string })
    }
  }))

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string): Promise<PostData & { content: string }> {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; description: string; coverImage?: string })
  }
} 