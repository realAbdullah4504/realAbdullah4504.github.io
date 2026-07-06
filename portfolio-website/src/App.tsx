import { Hero } from './components/Hero'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { CaseStudies } from './components/CaseStudies'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { ProfessionalProfiles } from './components/ProfessionalProfiles'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'

function App() {
  return (
    <div className="bg-background min-h-screen antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Capabilities />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
        <ProfessionalProfiles />
      </main>
      <Footer />
    </div>
  )
}

export default App
