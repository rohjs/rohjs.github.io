import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

type WorkBriefProps = {
  id: string
  time: number
  categories: string[]
  description: string
  active: boolean
}

const WorkBrief = ({
  active,
  id,
  time,
  categories,
  description
}: WorkBriefProps): JSX.Element => (
  <section className={cx('workBrief', { active })}>
    <Link href='/works/[id]' as={`/works/${id}`}>
      <a>
        <dl>
          <dt className='srOnly'>Production year</dt>
          <dd>{time}</dd>
        </dl>

        <dl className='categories'>
          <dt className='srOnly'>Category</dt>
          {categories.map((category: string) => (
            <dd key={`${id}-${category}`}>{category}</dd>
          ))}
        </dl>

        <p className='description'>{description}</p>
      </a>
    </Link>
  </section>
)

export default WorkBrief
