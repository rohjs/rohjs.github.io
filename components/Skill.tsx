import React, { useState, MouseEvent } from 'react'
import cx from 'classnames'

type SkillProps = {
  skill: string
  details: string[]
}

export const Skill = ({ skill, details }: SkillProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setActive(!active)
  }

  return (
    <li className='skill'>
      <h1>
        <button type='button' onClick={handleClick}>
          {skill}
        </button>
      </h1>

      <ul className={cx({ active })}>
        {details.map((detail: string) => (
          <li key={`${skill}-${detail}`}>{detail}</li>
        ))}
      </ul>
    </li>
  )
}
