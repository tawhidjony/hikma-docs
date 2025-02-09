import { UiButton } from "hikma-ui";
import { Link } from "react-router";


const Home = () => {
  return (<>
  
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e7eb] bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Left side - Logo and Search */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="./logo.svg" alt="VitePress" className="h-6 w-6" />
              <span className="font-semibold text-[#213547]">Hikma UI</span>
            </a>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center gap-4">
            <a href="/guide/" className="text-sm text-[#213547] hover:text-[#646cff]">Guide</a>
            <a href="/reference/" className="text-sm text-[#213547] hover:text-[#646cff]">Reference</a>
            
            {/* Version Dropdown */}
            <button className="flex items-center gap-1 text-sm text-[#213547]">
              2.0.0-alpha.2
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Toggle */}
            <button className="text-[#666666] hover:text-[#213547]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button className="text-[#666666] hover:text-[#213547]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* GitHub Link */}
            <a href="https://github.com/vuejs/vitepress" className="text-[#666666] hover:text-[#213547]" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div className="min-h-screen w-7xl mx-auto mt-20">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <h1>
              <span className="block text-6xl font-bold bg-gradient-to-r from-primary-300 to-primary-800 bg-clip-text text-transparent">
                Hikma UI
              </span>
              <span className="block text-5xl font-bold text-[#213547] mt-4">
              React Hook Form Components Library
              </span>
            </h1>
            <p className="text-xl text-[#666666]">
            Hikma UI is a React Hook Form, Zod & Tailwind CSS Headless Components Library
            </p>
            <div className="flex gap-4 pt-4">
              <UiButton className="px-6 py-2 rounded-full   text-white hover:bg-[#747bff] transition-colors">
                What is Hikma UI?
              </UiButton>
              <Link to="/hikma-docs/getting-started" className="px-6 py-2 rounded-full bg-[#f6f6f7] text-[#213547] hover:bg-[#e6e6e6] transition-colors">
                Quickstart
              </Link>
              <Link to="https://tawhidjony.github.io/hikma-docs/" className="px-6 py-2 rounded-full bg-[#f6f6f7] text-[#213547] hover:bg-[#e6e6e6] transition-colors">
                GitHub
              </Link>
            </div>
          </div>
          
          {/* Right image with glow effect */}
          <div className="md:w-1/2 relative mt-8 md:mt-0 justify-center flex items-center">
            <div className="relative">
              <div className="w-[250px] h-[250px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#37671e]/25 to-[#73cc45] blur-3xl rounded-full " />
                    <div className="flex items-center justify-center w-full h-full">
                        <img src="./logo.svg" alt="VitePress" className="w-[180px] h-[180px] " />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Focus on Your Content</h3>
            <p className="text-gray-600">Write in markdown and let our components handle the heavy lifting. Build beautiful documentation effortlessly.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Built on modern technologies for optimal performance. Instant hot updates and blazing-fast build times.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Customizable</h3>
            <p className="text-gray-600">Fully customizable components that adapt to your brand. Style with ease using our utility classes.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Production Ready</h3>
            <p className="text-gray-600">Battle-tested components used by thousands of developers. Ready for your next project.</p>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Started in Minutes</h2>
          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400">
              npm install hikma-ui
            </code>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-purple-500">1.</div>
              <h3 className="text-xl font-bold text-gray-800">Install the package</h3>
              <p className="text-gray-600">Add Hikma UI to your project using npm or yarn</p>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-purple-500">2.</div>
              <h3 className="text-xl font-bold text-gray-800">Import components</h3>
              <p className="text-gray-600">Use our components directly in your React application</p>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-purple-500">3.</div>
              <h3 className="text-xl font-bold text-gray-800">Start building</h3>
              <p className="text-gray-600">Create beautiful interfaces with our pre-built components</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </> 
  )
};

export default Home;
