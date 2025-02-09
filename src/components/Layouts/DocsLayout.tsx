import { Link, useLocation, Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { routeLink } from "../../docs/routeLink";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ className, children, ...props }:any) => {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'javascript';

  return !className ? (
    <code {...props} className={className}>{children}</code>
  ) : (
    <SyntaxHighlighter 
      language={language} 
      style={atomDark}
      PreTag="div"
      customStyle={{
        padding: '1rem',
        borderRadius: '0.375rem',
        margin: '1rem 0'
      }}
      {...props}
    >
      {String(children).trim()}
    </SyntaxHighlighter>
  );
};

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
    h1: (props:any) => <h1 className="text-6xl font-bold mb-8" {...props} />,
    h2: (props:any) => <h2 className="text-2xl font-semibold mb-4" {...props} />,
    h3: (props:any) => <h3 className="text-xl font-semibold mb-3" {...props} />,
    h4: (props:any) => <h4 className="text-lg font-semibold mb-2" {...props} />,
    p: (props:any) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
    ul: (props:any) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: (props:any) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: (props:any) => <li className="mb-2" {...props} />,
    a: (props:any) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
    blockquote: (props:any) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props} />
    ),
    pre: (props:any) => <pre className="rounded-lg overflow-x-auto" {...props} />,
    code: CodeBlock,
    inlineCode: (props:any) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props} />
    ),
    table: (props:any) => (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 my-4" {...props} />
      </div>
    ),
    th: (props:any) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
    ),
    td: (props:any) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props} />,
    hr: (props:any) => <hr className="my-8 border-gray-200" {...props} />
  };
  
  // Initialize with all menu indices open
  const [openMenus, setOpenMenus] = useState<number[]>(
    routeLink.map((_, index) => index)
  );

  const toggleMenu = (index: number) => {
    setOpenMenus(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (<>
     <div className="w-7xl mx-auto flex h-[calc(100vh-56px)] mt-14">
      <aside className="docs-sidebar w-64 border-r border-gray-200 p-4">
        <div className="mb-8">
          <ul className="space-y-2">
            {routeLink.map((item:any, index:number) => {
              if(item.subMenu){
                return (
                  <>
                    <li key={index} className="mt-4 pt-4 border-t border-gray-200 first:mt-0 first:pt-0 first:border-t-0">
                      <button 
                        onClick={() => toggleMenu(index)}
                        className="flex items-center justify-between w-full text-gray-800 text-lg font-semibold hover:text-blue-600"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${openMenus.includes(index) ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </li>
                    {item.children && openMenus.includes(index) && (
                      item.children.map((child:any) => (
                        <li key={`${index}-${child.name}`} className="pl-4">
                          <Link to={child.path} className="text-gray-600 hover:text-blue-600">
                            {child.name}
                          </Link>
                        </li>
                      ))
                    )}
                  </>
                )
              } 
            })}
          </ul>
        </div>
      </aside>
      <main className="docs-content flex-1 overflow-y-auto">
        <div className="px-16 py-10 max-w-5xl mx-auto">
          <MDXProvider components={components}>
            <div className="prose max-w-none">
              <Outlet />
            </div>
          </MDXProvider>
          <div className="mt-12 flex justify-between border-t border-gray-200 pt-6">
            {routeLink.map((section) => {
              if (section.children) {
                const currentPath = location.pathname;
                const currentIndex = section.children.findIndex(child => child.path === currentPath);
                
                if (currentIndex !== -1) {
                  return (
                    <>
                      {currentIndex > 0 && (
                        <Link 
                          to={section.children[currentIndex - 1].path}
                          className="flex items-center text-gray-600 hover:text-blue-600"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          {section.children[currentIndex - 1].name}
                        </Link>
                      )}
                      {currentIndex < section.children.length - 1 && (
                        <Link 
                          to={section.children[currentIndex + 1].path}
                          className="flex items-center text-gray-600 hover:text-blue-600ml-auto"
                        >
                          {section.children[currentIndex + 1].name}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </>
                  );
                }
              }
              return null;
            })}
          </div>
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
