import React, { useMemo, useState } from 'react'
import type { NextPage } from 'next'

import { getWorks } from 'lib/works'

import { Layout, WorkItem } from 'components'

type Work = {
  id: string
  title: string
  status: boolean
  time: number
  categories: string[]
  description: string
}

type WorksProps = {
  works: Work[]
}

const Works: NextPage<WorksProps> = ({ works }) => {
  const [active, setActive] = useState<string>('')
  const sortedWorks = useMemo(
    () =>
      works.sort((a, b) => {
        if (a.time > b.time) return -1
        if (a.time < b.time) return 1
        return 0
      }),
    []
  )

  return (
    <Layout title='works'>
      <section className='sectionWide'>
        <h1 className='srOnly'>Works</h1>
        <ul className='works'>
          {sortedWorks.map((work: Work) => {
            const { id, title, status, time, categories, description } = work
            return (
              <WorkItem
                key={`work-${id}`}
                id={id}
                title={title}
                status={status}
                time={time}
                categories={categories}
                description={description}
                active={id === active}
                setActive={setActive}
              />
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Works

export async function getStaticProps() {
  const works = await getWorks()

  return {
    props: {
      works
    }
  }
}
