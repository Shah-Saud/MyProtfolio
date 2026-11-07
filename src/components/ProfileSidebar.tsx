import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '../data/portfolioData';
import { resolveAssetUrl } from '../utils/assetUrl';

interface ProfileSidebarProps {
  activeSection: string;
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onGithubClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Recent Projects' },
  { id: 'skills', label: 'Skills & AI Workflow' },
  { id: 'contact', label: 'Contact' },
];

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  activeSection,
  onResumeClick,
  onGithubClick,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const resumeHref = resolveAssetUrl(siteConfig.resume.filePath);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Ignore
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/20 mb-4">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          <span>Open to Senior Android Roles · Remote / Hybrid / On-site</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="#about">{siteConfig.name}</a>
        </h1>

        {/* Title */}
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {siteConfig.title}
        </h2>

        {/* Concise Pitch */}
        <p className="mt-4 max-w-sm leading-relaxed text-slate-400">
          I build production-grade Android applications with{' '}
          <span className="text-slate-200 font-medium">Kotlin</span>,{' '}
          <span className="text-slate-200 font-medium">Jetpack Compose</span>, and{' '}
          <span className="text-slate-200 font-medium">Clean Architecture</span> — shipping
          100+ apps with AI-augmented velocity.
        </p>

        {/* Location */}
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-teal-300" />
          <span>{siteConfig.location} · Visa Sponsorship &amp; Relocation Ready</span>
        </p>

        {/* Primary CTA Buttons for Instant Recruiter Access */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={resumeHref}
            download={siteConfig.resume.downloadFilename}
            onClick={onResumeClick}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-teal-400/10 px-4 py-2.5 text-sm font-semibold text-teal-300 border border-teal-400/25 hover:bg-teal-400/20 transition-all"
          >
            <span>Download Résumé</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all"
          >
            <Mail className="h-4 w-4 text-teal-300" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Desktop Expanding Line Navigation (Brittany Chiang Signature) */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-12 w-max space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center py-2.5"
                  >
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Social Icons & Direct Email Copy */}
      <div className="mt-8 lg:mt-0 space-y-4">
        <ul className="flex items-center gap-5" aria-label="Social media">
          <li>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={siteConfig.contact.github || '#contact'}
              target={siteConfig.contact.github ? '_blank' : undefined}
              rel={siteConfig.contact.github ? 'noopener noreferrer' : undefined}
              onClick={onGithubClick}
              className="block text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Email Shah Saud"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/60 px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
              title="Copy email address"
            >
              <span>{siteConfig.contact.email}</span>
              {copiedEmail ? (
                <Check className="h-3.5 w-3.5 text-teal-300" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
