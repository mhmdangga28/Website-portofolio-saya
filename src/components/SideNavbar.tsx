import { useEffect, useRef, useState } from 'react';

export default function SideNavbar() {
  const smoothScroll = (selector: string) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [activeSection, setActiveSection] = useState<string>('');
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const observer = new IntersectionObserver(
      (entries) => {
        // update ratio untuk section yang berubah
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          ratiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        // pilih yang ratio-nya paling besar
        let bestId = '';
        let bestRatio = 0;

        for (const [id, ratio] of Object.entries(ratiosRef.current)) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) setActiveSection(bestId);
      },
      {
        // ini bikin "bagian tengah layar" jadi acuan aktif
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapper">
      <nav>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#home');
          }}
          className={activeSection === 'home' ? 'active' : ''}
        >
          <i className="fa-solid fa-house"></i>
        </a>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#about');
          }}
          className={activeSection === 'about' ? 'active' : ''}
        >
          <i className="fa-solid fa-address-card"></i>
        </a>

        <a
          href="#resume"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#resume');
          }}
          className={activeSection === 'resume' ? 'active' : ''}
        >
          <i className="fa-solid fa-file"></i>
        </a>

        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#skills');
          }}
          className={activeSection === 'skills' ? 'active' : ''}
        >
          <i className="fa-solid fa-screwdriver-wrench"></i>
        </a>

        <a
          href="#project"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#project');
          }}
          className={activeSection === 'project' ? 'active' : ''}
        >
          <i className="fa-solid fa-folder"></i>
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll('#contact');
          }}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          <i className="fa-solid fa-phone glow-icon"></i>
        </a>
      </nav>
    </div>
  );
}
