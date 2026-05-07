import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import CaseStudies from './sections/CaseStudies'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <CaseStudies />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Amar Gupta. All rights reserved.
        </p>
      </footer>
    </>
  )
}
