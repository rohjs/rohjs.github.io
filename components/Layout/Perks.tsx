import { useState, useEffect, useRef } from 'react'

const PERKS = [
  'A Seoul based user interface & frontend developer',
  'I build digital products with 🔥',
  'Hit me up with email 🚀',
]

const Perks = (): JSX.Element => {
  const [perk, setPerk] = useState(0)
  const savedCallback = useRef<() => void>()

  const tick = () => {
    setPerk((prev) => (prev === PERKS.length - 1 ? 0 : perk + 1))
  }

  useEffect(() => {
    savedCallback.current = tick
  }, [tick])

  useEffect(() => {
    const executeTick = () => savedCallback.current()
    const timerId = setInterval(executeTick, 3000)
    return () => clearInterval(timerId)
  }, [])

  return <p className="perks">{PERKS[perk]}</p>
}

export default Perks
