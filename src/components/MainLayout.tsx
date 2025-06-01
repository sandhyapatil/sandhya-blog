import Header from './Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <Header />
        <main>
          <div className="py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 