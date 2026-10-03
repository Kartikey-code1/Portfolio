import React, { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LiveAnalyticsSandbox } from './components/LiveAnalyticsSandbox';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CharacterCompanion } from './components/CharacterCompanion';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'skills',
      'sandbox',
      'projects',
      'experience',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = sectionId;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 76;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050608] text-[#f4f4f1] antialiased">
      {/* Global cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[120px]" />

        <div className="absolute right-[-15rem] top-[35%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-18rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-emerald-500/[0.025] blur-[120px]" />
      </div>

      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      <main>
        <section id="hero" className="relative">
          <Hero
            onExploreClick={() => scrollTo('projects')}
            onConnectClick={() => scrollTo('contact')}
          />
        </section>

        <section id="about" className="relative">
          <About />
        </section>

        <section id="skills" className="relative">
          <Skills />
        </section>

        <section id="sandbox" className="relative">
          <LiveAnalyticsSandbox />
        </section>

        <section id="projects" className="relative">
          <Projects />
        </section>

        <section id="experience" className="relative">
          <Experience />
        </section>

        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>

      <Footer />

      <CharacterCompanion activeSection={activeSection} />
    </div>
  );
}