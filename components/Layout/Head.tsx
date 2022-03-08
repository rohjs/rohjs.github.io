import React from 'react'
import Head from 'next/head'

type TCustomHead = {
  title?: string
}

const CustomHead = ({ title }: TCustomHead): JSX.Element => {
  const pageTitle = title ? `${title} / roh woohyeon®` : `roh woohyeon®`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
    </Head>
  )
}

export default CustomHead
