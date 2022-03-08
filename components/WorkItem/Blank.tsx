import React from 'react'
import cx from 'classnames'

type BlankProps = {
  active: boolean
}

const Blank = ({ active }: BlankProps): JSX.Element => (
  <section className={cx('workBrief', 'muted', { active })}>
    <p className='description'>
      <em>Will be updated soon.</em>
    </p>
  </section>
)

export default Blank
