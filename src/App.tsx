import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { siteConfig } from './data/portfolioData';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [githubConfigNotice, setGithubConfigNotice] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canonicalLink = document.getElementById('canonical-link') as HTMLLinkElement | null;
    const ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const effectiveUrl =
      siteConfig.seo.canonicalUrl ||
      (typeof window !== 'undefined' ? window.location.href.split('#')[0] : '');

    if (canonicalLink && effectiveUrl) {
      canonicalLink.href = effectiveUrl;
    }
    if (ogUrlMeta && effectiveUrl) {
      ogUrlMeta.content = effectiveUrl;
    }
  }, []);

  const handleResumeClick = () => {
    // Real PDF is present at public/assets/Shah-Saud-Resume.pdf; allow native browser download
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!siteConfig.contact.github) {
      e.preventDefault();
      setGithubConfigNotice(true);
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#EDF9FE] text-[#001C55] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#001C55] focus:text-white focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar onResumeClick={handleResumeClick} />

      <main id="main-content" className="flex-grow">
        <HeroSection
          onResumeClick={handleResumeClick}
          onGithubClick={handleGithubClick}
        />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection
          onResumeClick={handleResumeClick}
          onGithubClick={handleGithubClick}
          githubConfigNotice={githubConfigNotice}
        />
      </main>

      <footer className="py-8 text-center border-t border-[#001C55]/10 text-sm font-semibold text-[#4E5D78]">
        <p>
          Made with ❤️ by <span className="text-[#001C55] font-bold">{siteConfig.name}</span> · Senior Android Engineer
        </p>
      </footer>

      {/* Ashutosh Signature Scroll-To-Top Floating Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#001C55] hover:bg-[#0E6BA8] text-white flex items-center justify-center shadow-lg transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
