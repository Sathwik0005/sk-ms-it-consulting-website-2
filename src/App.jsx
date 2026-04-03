import TopBanner from './components/TopBanner/TopBanner'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ServicesSection from './components/ServicesSection/Servicessection'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs
import ITSolutions from './components/ITSolutions/ITSolutions'
import CyberSecurity from './components/CyberSecurity/CyberSecurity'
import Sectors from './components/Sectors/Sectors'
import Testimonials from './components/Testimonials/Testimonials'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ITSolutions />
        <CyberSecurity />
        <Sectors />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App