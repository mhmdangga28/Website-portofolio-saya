import AboutSection from './components/AboutSection';
import AsideProfile from './components/AsideProfile';
import ContactSection from './components/ContactSection';
import HomeSection from './components/HomeSection';
import PortofolioSection from './components/PortofolioSection';
import ResumeSection from './components/ResumeSection';
import SideNavbar from './components/SideNavbar';
import SkillSection from './components/SkillsSection';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

// import { useState } from 'react';

import './App.css';

export default function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container">
      <AsideProfile />
      <SideNavbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <SkillSection />
        <PortofolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
