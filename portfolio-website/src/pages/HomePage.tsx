import { Hero } from '../components/Hero';
import { CaseStudies } from '../components/CaseStudies';
import { About } from '../components/About';
import { Capabilities } from '../components/Capabilities';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { ProfessionalProfiles } from '../components/ProfessionalProfiles';

export function HomePage() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <About />
      <Capabilities />
      <Skills />
      <Experience />
      <Contact />
      <ProfessionalProfiles />
    </>
  );
}
