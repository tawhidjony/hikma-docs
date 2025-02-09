import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { UiButton } from 'hikma-ui'
import { themes } from "prism-react-renderer"
import { useState } from 'react';

export function ButtonLiveEditor() {
  const [copied, setCopied] = useState(false);
  const code = `// Try changing variant values
function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <UiButton >Primary</UiButton>
      <UiButton variant="danger">Danger</UiButton>
      <UiButton variant="success">Success</UiButton>
    </div>
  )
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LiveProvider 
      code={code}
      scope={{UiButton }}
      theme={themes.dracula}
      language="tsx"
      enableTypeScript
    >
      <div className="border rounded overflow-hidden w-full bg-white shadow-sm border-gray-200">
        <div className="p-3 bg-light border-bottom">
          <LivePreview />
        </div>
        <div className="relative">
          <LiveEditor 
            className="p-3 font-sans"
            style={{ fontSize: '14px' }}
          />
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-2 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <LiveError className="p-2 text-danger bg-light m-0" />
      </div>
    </LiveProvider>
  );
}
