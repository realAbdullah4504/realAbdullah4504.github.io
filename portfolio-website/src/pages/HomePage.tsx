import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Capabilities } from '../components/Capabilities';
import { CaseStudies } from '../components/CaseStudies';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { ProfessionalProfiles } from '../components/ProfessionalProfiles';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <CaseStudies />
      <Skills />
      <Experience />
      <Contact />
      <ProfessionalProfiles />
    </>
  );
}
