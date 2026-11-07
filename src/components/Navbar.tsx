import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';
import { resolveAssetUrl } from '../utils/assetUrl';

interface NavbarProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What I Do', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Me', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeHref = resolveAssetUrl(siteConfig.resume.filePath);

  return (
    <header className="sticky top-0 z-50 bg-[#EDF9FE]/95 backdrop-blur-md border-b border-[#001C55]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Primary Navigation"
        >
          {/* Clean Logo: Shah Saud */}
          <a
            href="#home"
            className="flex items-center text-[#001C55] hover:opacity-85 transition-opacity"
            aria-label={siteConfig.name}
          >
            <span className="font-signature text-3xl sm:text-4xl font-bold tracking-wide">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-[#001C55] hover:bg-[#A6E1FA]/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeHref}
              download={siteConfig.resume.downloadFilename}
              onClick={onResumeClick}
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#001C55] hover:bg-[#0E6BA8] transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>See My Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 rounded-lg text-[#001C55] hover:bg-[#A6E1FA]/50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-[#001C55]/10 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-semibold text-[#001C55] hover:bg-[#A6E1FA]/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <a
                href={resumeHref}
                download={siteConfig.resume.downloadFilename}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onResumeClick(e);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-[#001C55]"
              >
                <Download className="w-4 h-4" />
                <span>See My Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
