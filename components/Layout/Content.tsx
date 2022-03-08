import type { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

type ContentLayoutProps = {
  children?: ReactNode
}

function ContentLayout({ children }: ContentLayoutProps) {
  const { pathname } = useRouter()

  return (
    <main>
      <nav className="gnb">
        <h1 className="srOnly">Menu</h1>
        <ul className="gnbMenu">
          <li className={cx({ active: pathname === '/' })}>
            <Link href="/">Index</Link>
          </li>
          <li className={cx({ active: pathname === '/works' })}>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <a
              href="https://www.rohwoohyeon.com/resume/"
              target="_blank"
              rel="noreferrer"
            >
              📄 Resume
            </a>
          </li>
        </ul>
      </nav>

      {children}
    </main>
  )
}

export default ContentLayout
