import Link from "next/link";
import FallbackImage from "@/components/ui/FallbackImage";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2196f3] to-[#1976d2] text-white">
      {/* Hero section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center md:text-left">
              Music <span className="text-[#ffeb3b]">Blocks</span> 4
            </h1>
            <p className="text-xl text-center md:text-left max-w-2xl">
              A visual programming environment for music creation and exploration.
              Create, visualize, and understand how music programs execute.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/workspace"
                className="px-8 py-3 bg-[#4caf50] hover:bg-[#43a047] text-white font-bold rounded-full transition-colors shadow-lg flex items-center gap-2"
              >
                <span>Start Creating</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </Link>
              <Link
                href="#learn-more"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full transition-colors flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Using local fallback image instead of external URL */}
              {/* <FallbackImage
                src="/logo-mascot.png"
                alt="Music Blocks Mascot"
                fallbackSrc="/music-blocks-placeholder.png"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="learn-more" className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2196f3]">Why Music Blocks?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#ff9800] mb-4 text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Programming</h3>
              <p className="text-gray-600">Build music programs by connecting colorful blocks - no coding experience required.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#4caf50] mb-4 text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Music Education</h3>
              <p className="text-gray-600">Learn music theory and composition through interactive exploration and play.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#e91e63] mb-4 text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 16.3c0-3 3-5.3 5-5.3"></path>
                  <path d="M17 16.3c0-3-3-5.3-5-5.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-gray-600">Part of Sugar Labs, Music Blocks is free to use, modify, and distribute.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#bbdefb] text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to create music?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jump into the workspace and start building your musical creations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workspace"
              className="px-8 py-3 bg-[#2196f3] hover:bg-[#1976d2] text-white font-bold rounded-full transition-colors shadow-md"
            >
              Open Workspace
            </Link>
            <Link
              href="https://github.com/sugarlabs/musicblocks"
              target="_blank"
              className="px-8 py-3 bg-[#9c27b0] hover:bg-[#7b1fa2] text-white font-bold rounded-full transition-colors shadow-md"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Music Blocks. Part of{' '}
                <a href="https://sugarlabs.org/" target="_blank" className="text-[#ffeb3b] hover:underline">
                  Sugar Labs
                </a>
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/sugarlabs/musicblocks" target="_blank" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wiki.sugarlabs.org/go/Music_Blocks" target="_blank" className="text-gray-400 hover:text-white">
                <span className="sr-only">Documentation</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
