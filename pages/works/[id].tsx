import React from 'react'
import type { NextPage } from 'next'

import { getWorkList, getWork } from 'lib/works'

import { Layout, Loading, MarkdownRenderer } from 'components'

type WorkProps = {
  source: string
}

const Work: NextPage<WorkProps> = ({ source }) => {
  return (
    <Layout title='works'>
      <section className='section'>
        {source ? <MarkdownRenderer source={source} /> : <Loading />}
      </section>
    </Layout>
  )
}

export default Work

export async function getStaticPaths() {
  const workList = await getWorkList()
  const paths = workList.map((work) => {
    return {
      params: {
        id: work.replace(/\.md$/, '')
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const work = await getWork(params.id)

  return {
    props: {
      source: work
    }
  }
}
