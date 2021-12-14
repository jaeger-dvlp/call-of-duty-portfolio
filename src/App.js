import backgroundGif from './Images/noise.gif'
import BannerVideo from './Videos/banner.mp4'

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <div
        className="fixed top-0 left-0 w-full opacity-25 z-50 pointer-events-none h-full"
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
        >
          <source
            src={BannerVideo}
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 flex flex-wrap z-20 p-5">
          <h1 className="text-3xl font-pop font-medium text-gray-300">
            JAEGER
          </h1>
        </div>
      </div>
    </div>
  )
}

export default App
