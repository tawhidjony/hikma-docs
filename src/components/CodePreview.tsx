import { ButtonLiveEditor } from "./LiveEditor";

type CodePreviewProps = {
    code: string;
    language?: string;
  };
  
  function CodePreview({ code, language = 'javascript' }: CodePreviewProps) {
    return (
      <div className="my-4 border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-2 border-b">
          <span className="text-sm text-gray-600">Example</span>
        </div>
        <pre className="p-4 bg-gray-50">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <div className="p-4 border-t">
          <ButtonLiveEditor />
        </div>
      </div>
    );
  }
  
  export default CodePreview;