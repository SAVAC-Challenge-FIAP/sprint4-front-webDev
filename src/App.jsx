import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import AudienceSection from './components/AudienceSection'
import GallerySection from './components/GallerySection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <AboutSection/>
        <AudienceSection/>
        <GallerySection/>
        <TeamSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
