import React from 'react'

import { renderMarkdown } from 'lib/renderMarkdown'

type MarkdownRendererProps = {
  source: string
}

export function MarkdownRenderer({ source }: MarkdownRendererProps) {
  return (
    <article className='markdown'>
      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(source) }} />
    </article>
  )
}
