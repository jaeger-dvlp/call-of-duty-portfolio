/* eslint-disable no-unused-expressions */
import {
  useEffect,
  useRef,
  useState
} from 'react'
import CODbutton from './Components/CODbutton'
import {
  GithubIcon,
  DiscordIcon,
  SteamIcon,
  LinkedinIcon
} from './Icons'
import backgroundGif from './Images/noise.gif'
import BannerVideo from './Videos/banner.mp4'

function App() {
  const DescTexts = [
    'Lone rifleman.',
    'Full Stack Dev.',
    'CQB Specialist.',
    'MK-18 CQBR Enjoyer.',
    'Just another day at office.'
  ]

  const [DescReady, setDescReady] = useState(
    'Lone Rifleman.'
  )

  const loadingScreen = useRef()

  useEffect(() => {
    window.onload = () => {
      loadingScreen.current.classList.add(
        'opacity-0',
        'invisible'
      )
      const changeDesc = () => {
        DescTexts.map((desc, i) =>
          setTimeout(
            () => setDescReady(desc),
            i * 1500
          )
        )
      }
      changeDesc()
      setInterval(() => {
        changeDesc()
      }, DescTexts.length * 1500)
    }
  })

  return (
    <div className="w-full h-screen bg-black">
      <div
        className="z-40 w-screen fixed flex flex-wrap justify-center content-center text-center text-md uppercase text-zinc-400 visible opacity-100 h-screen transition-all duration-1000 bg-black"
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

      <div className="w-full relative h-1/2 p-0 m-0 flex flex-wrap justify-center content-center">
        <video
          className="z-0 fit-video"
          autoPlay={true}
          muted
          loop
          playsInline
        >
          <source
            src={BannerVideo}
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
        <div className="absolute w-full bottom-0 left-0 flex flex-wrap justify-center content-center z-20">
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-wrap justify-start content-center p-5">
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
              {DescReady}
            </span>
            <div className="w-full mt-5">
              <CODbutton
                ButtonText="EXPLORE JOBS"
                Link="#"
              />
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-wrap xl:justify-end lg:justify-end md:justify-end justify-start content-center p-5">
            <div className="flex flex-wrap justify-center content-center gap-5 text-zinc-400 fill-current self-center">
              <button className="hover:text-white transform hover:-translate-y-0.5 transition-all duration-150">
                <a href="">{GithubIcon}</a>
              </button>
              <button className="hover:text-white transform hover:-translate-y-0.5 transition-all duration-150">
                <a href="">{LinkedinIcon}</a>
              </button>
              <button className="hover:text-white transform hover:-translate-y-0.5 transition-all duration-150">
                <a href="">{DiscordIcon}</a>
              </button>
              <button className="hover:text-white transform hover:-translate-y-0.5 transition-all duration-150">
                <a href="">{SteamIcon}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
