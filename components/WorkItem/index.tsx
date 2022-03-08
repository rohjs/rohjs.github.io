import React, { SetStateAction, Dispatch } from 'react'
import WorkBrief from './WorkBrief'
import Blank from './Blank'

interface WorkItemProps {
  id: string
  title: string
  status: boolean
  time: number
  categories: string[]
  description: string
  active: boolean
  setActive: Dispatch<SetStateAction<string>>
}

export const WorkItem = ({
  id,
  title,
  status,
  time,
  categories,
  description,
  active,
  setActive
}: WorkItemProps) => {
  const handleClick = () => setActive(id)

  return (
    <li className='skill'>
      <h1>
        <button type='button' onClick={handleClick}>
          {title}
        </button>
        {!status && <em className='wip'>⚡</em>}
      </h1>

      {status ? (
        <WorkBrief
          id={id}
          time={time}
          categories={categories}
          description={description}
          active={active}
        />
      ) : (
        <Blank active={active} />
      )}
    </li>
  )
}
