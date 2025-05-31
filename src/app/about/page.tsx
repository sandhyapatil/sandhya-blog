import Header from '@/components/Header'

export default function About() {
  return (
    <main>
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            <p className="mt-4 text-xl text-gray-500">Get to know the person behind the blog</p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p>
              Hello! I'm a passionate writer and developer who loves to share knowledge and experiences 
              through this blog. I write about technology, personal development, and lessons learned 
              along my journey.
            </p>
            
            <h2>What I Write About</h2>
            <ul>
              <li>Web Development and Programming</li>
              <li>Technology Trends and Reviews</li>
              <li>Personal Growth and Learning</li>
              <li>Project Experiences and Case Studies</li>
            </ul>
            
            <h2>Connect With Me</h2>
            <p>
              Feel free to reach out to me on social media or via email. I'm always excited to connect 
              with readers and fellow enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 