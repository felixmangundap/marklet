import { useState } from 'preact/hooks';
import { marked } from 'marked';
import Helmet from 'preact-helmet';

import { DocumentTextIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
// import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';


const MarkdownPreview = () => {
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
      <Helmet title={title || 'New Note'} />
      <div className='overflow-hidden flex grow-1 relative'>
        <div className='absolute top-0 h-8 w-full bg-linear-to-b from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
        <div
          className='
            text-zinc-700 dark:text-zinc-50
            preview prose prose-zinc max-w-none h-full w-full p-8 pb-32
            flex items-center overflow-scroll
          '
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) as string }}
        />
        <div className='absolute bottom-0 h-8 w-full bg-linear-to-t from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
      </div>
    </div>
  );
};

export default MarkdownPreview;