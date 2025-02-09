import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ content }:any) => {
  return (
    <ReactMarkdown
      components={{
        // Custom code block renderer
        code({ node, inline, className, children, ...props }:any) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : ''; // Extract language from class name

          return !inline && language ? (
            <SyntaxHighlighter
              style={atomDark}
              language={language}
              PreTag="div" // Use a div instead of pre to avoid default styles
              customStyle={{
                padding: '1rem',
                fontSize: '0.875rem', // Tailwind's text-sm equivalent
                lineHeight: '1.5', // Tailwind's leading-relaxed equivalent
              }}
              {...props}
            >
              {String(children).trim()}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;