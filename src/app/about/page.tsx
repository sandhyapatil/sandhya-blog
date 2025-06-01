export default function About() {
  return (
    <main>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-6">
            Hi, I'm Sandhya! 
          </p>
          <p className="text-lg mb-6">
            Coming soon...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills & Expertise</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>...</li>
            <li>...</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch</h2>
          <p className="text-lg">
            Feel free to reach out to me on{' '}
            <a
              href="https://www.linkedin.com/in/sandhya-patil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
} 