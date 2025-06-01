import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getSortedPostsData } from '@/lib/posts';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const posts = getSortedPostsData();
  const isBlogPage = pathname.startsWith('/blog');

  return (
    <aside className="w-64 fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold">
            Sandhya's Blog
          </Link>
        </div>
        
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = 
              item.href === '/' 
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Show blog posts under Blog section when active */}
                {item.href === '/blog' && isActive && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700">
                    {posts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className={`block pl-4 py-1 text-sm transition-colors ${
                          pathname === `/blog/${post.id}`
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 Sandhya Patil</p>
            <p className="mt-1">GenAI Product at Adobe Firefly</p>
          </div>
        </div>
      </div>
    </aside>
  );
} 