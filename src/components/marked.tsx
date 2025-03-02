import { useState } from 'preact/hooks';
import { marked } from 'marked';
// import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  // marked.setOptions({
  //   highlight: (code: string, lang: string) => {
  //     return hljs.highlight(lang, code).value;
  //   },
  // });

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden h-4/5 w-full'>
      <textarea
        className='p-2 border rounded text-black dark:text-white h-full w-1/2'
        value={markdown}
        onInput={(e) => setMarkdown(e.currentTarget.value)}
      />
      {/* <div
        className='p-2 border rounded text-black dark:text-white overflow-scroll'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) as string }}
      /> */}
    </div>
  );
};

export default MarkdownEditor;