import { Link, useLocation, Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";

function DocsLayout() {
  const location = useLocation();
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2'));
      setHeadings(elements);
    };

    getHeadings();
    // Re-run when route changes
    const observer = new MutationObserver(getHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location]);

  const components = {
    h1: (props:any) => <h1 className="text-4xl font-bold mb-8" {...props} />,
    h2: (props:any) => <h2 className="text-2xl font-semibold mb-4" {...props} />,
    p: (props:any) => <p className="mb-4" {...props} />,
    a: (props:any) => <a className="text-blue-600 hover:text-blue-800" {...props} />,
  };
  return (<>
     <div className="container mx-auto flex min-h-screen mt-14">
      {/* Sidebar */}
      <aside className="docs-sidebar w-64 border-r border-gray-200 p-">
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Introduction</h3>
          <ul className="space-y-2">
            <li><Link to="/hikma-docs/introduction" className="text-gray-600 hover:text-blue-600">What is VitePress?</Link></li>
            <li><Link to="/hikma-docs/getting-started" className="text-blue-600">Getting Started</Link></li>
            <li><Link to="/hikma-docs/routing" className="text-gray-600 hover:text-blue-600">Routing</Link></li>
            <li><Link to="/hikma-docs/deploy" className="text-gray-600 hover:text-blue-600">Deploy</Link></li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="docs-content flex-1">
        <div className="p-8 max-w-4xl mx-auto">
          <MDXProvider components={components}>
            <Outlet />
          </MDXProvider>
        </div>
      </main>

      <aside className="w-64 border-l border-gray-200 p-4">
        <h3 className="font-semibold mb-2">On this page</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((heading, index) => (
            <li key={index}>
              <a 
                href={`#${heading.id}`}
                className="text-gray-600 hover:text-blue-600"
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </aside>

    </div>
    </>);
}
export default DocsLayout;
