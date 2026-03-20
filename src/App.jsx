import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <div className="divider max-w-6xl mx-auto px-6" />
}

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#07090f' }}>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <TechStack />
        <Divider />
        <CaseStudies />
        <Divider />
        <Services />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
