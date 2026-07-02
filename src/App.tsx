import Hero from './components/Hero.tsx'
import Stats from './components/Stats.tsx'
import BentoGrid from './components/BentoGrid.tsx'
import Collection from './components/Collection.tsx'
import BespokeService from './components/BespokeService.tsx'
import CtaBanner from './components/CtaBanner.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <main className="relative min-h-screen bg-[#f0f0f0] overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col items-center">
      {/* Background Decorative Blur Blobs for Subtle Glassmorphism */}
      <div className="absolute top-[60vh] left-[-5vw] sm:left-[5vw] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-gradient-to-tr from-purple-400/45 to-pink-400/45 blur-[120px] md:blur-[160px] pointer-events-none z-0 animate-pulse duration-1000" />
      <div className="absolute top-[130vh] right-[-10vw] sm:right-[2vw] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-gradient-to-tr from-blue-400/40 to-indigo-400/50 blur-[130px] md:blur-[170px] pointer-events-none z-0" />
      <div className="absolute top-[210vh] left-[-5vw] sm:left-[10vw] w-[40vw] h-[40vw] max-w-[550px] rounded-full bg-gradient-to-tr from-orange-400/35 to-amber-400/45 blur-[100px] md:blur-[140px] pointer-events-none z-0" />
      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />

        <div className="w-full flex flex-col items-center gap-6 md:gap-10 p-3 md:p-5 pt-0 max-w-[1536px]">
          <Stats />
          <BentoGrid />
          <Collection id="collection" />
          <BespokeService id="bespoke" />
          <CtaBanner />
          <Footer id="footer" />
        </div>
      </div>
    </main>
  )
}

export default App

