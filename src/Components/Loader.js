import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Loader() {
  const pathname = useLocation()
  const [loaderStatus, setLoaderStatus] = useState(
    '!visible !opacity-100 !transition-all !duration-[0ms]'
  )
  useEffect(() => {
    setLoaderStatus(
      '!visible !pointer-events-auto !opacity-100 !transition-all !duration-[0ms]'
    )
    setTimeout(() => {
      setLoaderStatus(
        '!invisible !pointer-events-none !opacity-0 !transition-all !duration-1000'
      )
    }, 700)
  }, [pathname])

  return (
    <div
      className={`${loaderStatus} z-40 w-screen fixed flex flex-wrap justify-center content-center text-center text-md uppercase text-zinc-400 h-screen bg-black`}
    >
      Loading..
    </div>
  )
}
