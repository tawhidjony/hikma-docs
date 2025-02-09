import { UiButton } from "hikma-ui";
import { Link } from "react-router";

const Home = () => {
  
  return (<>
    <div className="min-h-screen w-7xl mx-auto mt-20">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <h1>
              <span className="block text-6xl font-bold bg-gradient-to-r from-primary-400 to-primary-900 bg-clip-text text-transparent">
                Hikma UI
              </span>
              <span className="block text-5xl font-bold text-[#213547] mt-4">
              React Hook Form Components UI Library
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
              <Link to="https://tawhidjony.github.io/hikma-ui/" className="px-6 py-2 rounded-full bg-[#f6f6f7] text-[#213547] hover:bg-[#e6e6e6] transition-colors">
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
