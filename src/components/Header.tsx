import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Sandhya's Blog
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 