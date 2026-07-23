import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Technologies } from '@/components/sections/technologies';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Process } from '@/components/sections/process';
import { WhyWorkWithMe } from '@/components/sections/why-work-with-me';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Process />
      <WhyWorkWithMe />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
