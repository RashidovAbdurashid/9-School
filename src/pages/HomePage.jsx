import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import StatsBar from '../components/StatsBar.jsx'
import About from '../components/About.jsx'
import Programs from '../components/Programs.jsx'
import Teachers from '../components/Teachers.jsx'
import Students from '../components/Students.jsx'
import Achievements from '../components/Achievements.jsx'
import News from '../components/News.jsx'
import Events from '../components/Events.jsx'
import Gallery from '../components/Gallery.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Programs />
        <Teachers />
        <Students />
        <Achievements />
        <News />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
