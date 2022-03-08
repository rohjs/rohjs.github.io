import React from 'react'
import type { NextPage } from 'next'

import { Layout } from 'components'

const NotFound: NextPage = () => {
  return (
    <Layout title='404'>
      <section>
        <h1>404</h1>
      </section>
    </Layout>
  )
}

export default NotFound
