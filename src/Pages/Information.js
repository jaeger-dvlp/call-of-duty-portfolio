/* eslint-disable no-unused-expressions */
import {
  useEffect,
  useRef,
  useState
} from 'react'
import backgroundGif from '../Images/noise.gif'

export default function Information() {
  const [LoadingStatus, setLoadingStatus] =
    useState('visible opacity-100')
  const loadingScreen = useRef()

  useEffect(() => {
    setLoadingStatus('invisible opacity-0')
  }, [])
  return (
    <>
      <div
        className={`z-40 w-screen fixed flex flex-wrap justify-center content-center text-center text-md uppercase text-zinc-400 ${LoadingStatus} h-screen bg-black`}
        style={{ transition: 'all 1s' }}
        ref={loadingScreen}
      >
        Loading..
      </div>
      <div
        className="fixed top-0 left-0 w-full opacity-30 z-50 pointer-events-none h-full"
        style={{
          backgroundImage: `url(${backgroundGif})`
        }}
      />
      <div className="container h-screen mx-auto bg-black">
        <div className="w-full flex flex-wrap justify-start content-start p-5">
          <h1
            className="text-3xl w-full font-pop font-medium text-gray-300 p-0 m-0"
            style={{ letterSpacing: '5px' }}
          >
            JAEGER
          </h1>
          <span
            className="desc overflow-hidden transition-all duration-300 text-sm uppercase text-zinc-400"
            style={{
              letterSpacing: '10px'
            }}
          >
            OPERATOR INFORMATION
          </span>
        </div>
      </div>
    </>
  )
}
