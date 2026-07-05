import { Hero } from './components/Hero'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { CaseStudies } from './components/CaseStudies'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="bg-background min-h-screen antialiased">
      <main className="px-6">
        <Hero />
        <About />
        <Capabilities />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
