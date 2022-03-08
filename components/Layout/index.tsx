import React from 'react'
import Content from './Content'
import Head from './Head'
import Sidebar from './Sidebar'

type DefaultLayoutProps = {
  title?: string
  children: JSX.Element | JSX.Element[]
}

export const DefaultLayout = ({
  title,
  children
}: DefaultLayoutProps): JSX.Element => {
  return (
    <div className='app'>
      <Head title={title} />
      <Sidebar />
      <Content>{children}</Content>
    </div>
  )
}
