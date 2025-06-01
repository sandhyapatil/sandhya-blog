export default function About() {
  return (
    <main>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-6">
            Hi, I'm Sandhya! I'm a software developer passionate about web development,
            technology, and creating meaningful digital experiences.
          </p>
          <p className="text-lg mb-6">
            I specialize in building modern web applications using technologies like
            React, Next.js, and TypeScript. Through this blog, I share my learnings,
            experiences, and insights about software development and technology.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills & Expertise</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Frontend Development (React, Next.js, TypeScript)</li>
            <li>Backend Development (Node.js, Express)</li>
            <li>Database Design (SQL, MongoDB)</li>
            <li>Cloud Services (AWS, Vercel)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch</h2>
          <p className="text-lg">
            Feel free to reach out to me on{' '}
            <a
              href="https://github.com/sandhyapatil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
            {' '}or{' '}
            <a
              href="https://linkedin.com/in/yourprofile"
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