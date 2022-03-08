import { useMemo } from 'react'

import Perks from './Perks'

function Sidebar() {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <header className='sidebar'>
      <h1 className='name'>
        <a href='/'>
          roh woohyeon <sup>TM</sup>
        </a>
      </h1>

      <div className='content'>
        <div className='info'>
          <a href='mailto:roh.woohyeon@gmail.com'>roh.woohyeon@gmail.com</a>
          <p className='text'>Seoul, Korea</p>
        </div>
        <div className='contact'>
          <ul className='links'>
            <li>
              <a
                href='https://github.com/rohjs'
                target='_blank'
                rel='noreferrer'>
                Github →
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/rohwoohyeon/'
                target='_blank'
                rel='noreferrer'>
                LinkedIn →
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCFDbz39kFPvU0AUpgHx4ICw'
                target='_blank'
                rel='noreferrer'>
                Youtube →
              </a>
            </li>
          </ul>
          <Perks />
        </div>
        <p className='year'>
          2017/{currentYear} <sup>®</sup>
        </p>
      </div>
    </header>
  )
}

export default Sidebar
