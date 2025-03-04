import { useState } from 'preact/hooks';
import { marked } from 'marked';
import { DocumentTextIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
// import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';


const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  // marked.setOptions({
  //   highlight: (code: string, lang: string) => {
  //     return hljs.highlight(lang, code).value;
  //   },
  // });

  return (
    <div className='overflow-hidden flex flex-col h-full w-full relative'>
      {/* <input className='
            text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg:text-zinc-700
            border border-zinc-700 dark:border-zinc-50 outline-none rounded-full
            p-2 text-center w-32 z-2
            absolute top-20 left-0 right-0 mx-auto
          '
        value={title}
        onInput={(e) => setTitle(e.currentTarget.value)}
      /> */}
      <div className='flex items-center'>
        <input className='
            text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900
            outline-none rounded-full px-8 pt-0 pb-4 grow-1 font-semibold text-center
            '
          value={title}
          placeholder='untitled document'
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
      </div>
      <div className='overflow-hidden flex grow-1 relative'>
        <div className='absolute top-0 h-8 w-full bg-linear-to-b from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
        {!isPreview ?
          <textarea
            className='
            text-zinc-700 dark:text-zinc-50
            h-full w-full p-8 pb-32
            border-none outline-none resize-none
          '
            value={markdown}
            onInput={(e) => setMarkdown(e.currentTarget.value)}
          /> :
          <div
            className='
            text-zinc-700 dark:text-zinc-50
            preview prose prose-zinc max-w-none h-full w-full p-8 pb-32
            overflow-scroll
          '
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) as string }}
          />}
        <div
          className='
          p-4 fixed bottom-8 right-8 cursor-pointer
          border rounded-full border-zinc-700 dark:border-zinc-50 bg-zinc-50 dark:bg-zinc-900
          transition delay-150 duration-300 ease-in-out hover:text-red-400
        '
          onClick={() => { setIsPreview(!isPreview) }}
        >
          {isPreview ? <PencilSquareIcon className='size-6' /> : <DocumentTextIcon className='size-6' />}
        </div>
        <div className='absolute bottom-0 h-8 w-full bg-linear-to-t from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
      </div>
    </div>
  );
};

export default MarkdownEditor;