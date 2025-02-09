import { Link, Outlet } from "react-router";

function HomeLayouts() {
  return (<>
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e7eb] bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Left side - Logo and Search */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/hikma-docs/" className="flex items-center gap-2">
              <img src="./logo.svg" alt="VitePress" className="h-6 w-6" />
              <span className="font-semibold text-[#213547]">Hikma UI</span>
            </Link>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center gap-4">
            <Link to="/hikma-docs/guide/" className="text-sm text-[#213547] hover:text-[#646cff]">Guide</Link>
            <Link to="/hikma-docs/reference/" className="text-sm text-[#213547] hover:text-[#646cff]">Reference</Link>
            
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
    <Outlet />
    </>);
}

export default HomeLayouts;
