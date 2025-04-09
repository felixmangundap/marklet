import { marked } from 'marked';
import Helmet from 'preact-helmet';

import 'highlight.js/styles/github.css';
import { useEditorStore } from '../stores/useEditorStore';


const MarkdownEditor = () => {
  const { title, markdownNote, isPreview, isSplitView, setMarkdownNote } = useEditorStore();

  const renderSplitViewEditor = () => (
    <div className='overflow-hidden flex flex-row grow-1 relative'>
      <textarea
        className='
          text-zinc-700 dark:text-zinc-50
          h-full w-1/2 p-8 pb-32
          border-none outline-none resize-none
        '
        value={markdownNote}
        onInput={(e) => setMarkdownNote(e.currentTarget.value)}
      />
      <div
        className='
              text-zinc-700 dark:text-zinc-50
              preview prose prose-zinc max-w-none h-full w-1/2 p-8 pb-32
              border-l-2 border-zinc-700
              overflow-scroll
            '
        dangerouslySetInnerHTML={{ __html: marked.parse(markdownNote) as string }}
      />
    </div>
  )

  const renderEditor = () => {
    if (isPreview) {
      return (
        <div
          className='
            text-zinc-700 dark:text-zinc-50
            preview prose prose-zinc max-w-none h-full w-full p-8 pb-32
            overflow-scroll
          '
          dangerouslySetInnerHTML={{ __html: marked.parse(markdownNote) as string }}
        />
      )
    }
    return (
      <textarea
        className='
            text-zinc-700 dark:text-zinc-50
            h-full w-full p-8 pb-32
            border-none outline-none resize-none
          '
        value={markdownNote}
        onInput={(e) => setMarkdownNote(e.currentTarget.value)}
      />
    )
  }

  return (
    <div className='overflow-hidden flex flex-col h-full w-full relative'>
      <Helmet title={title || 'New Note'} />
      <div className='overflow-hidden flex grow-1 relative'>
        <div className='absolute top-0 h-8 w-full bg-linear-to-b from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
        {isSplitView ? renderSplitViewEditor() : renderEditor()}
        <div className='absolute bottom-0 h-8 w-full bg-linear-to-t from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 z-1' />
      </div>
    </div>
  );
};

export default MarkdownEditor;