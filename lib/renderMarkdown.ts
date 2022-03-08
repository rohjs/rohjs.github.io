import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'

export const processor = unified()
  .use(remarkParse)
  .use(frontmatter, ['yaml'])
  .use(remarkRehype, {
    allowDangerousHtml: true
  })
  .use(rehypeRaw)
  .use(rehypeHighlight)
  .use(rehypeStringify)

export function renderMarkdown(source: string) {
  return processor.processSync(source).toString()
}
