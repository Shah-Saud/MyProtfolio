import React from 'react';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { heroMetrics, siteConfig } from '../data/portfolioData';
import { resolveAssetUrl } from '../utils/assetUrl';

interface HeroSectionProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onGithubClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onResumeClick,
  onGithubClick,
}) => {
  const resumeHref = resolveAssetUrl(siteConfig.resume.filePath);
  const portraitSrc = resolveAssetUrl('/assets/shah-saud.png');

  return (
    <section id="home" className="py-10 sm:py-16 lg:py-20" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Ashutosh Greeting Style */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A6E1FA]/70 border border-[#0E6BA8]/25 text-xs sm:text-sm font-semibold text-[#001C55]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#01875F]" />
              <span>Available for Senior Android Roles · Remote / Hybrid / On-site</span>
            </div>

            <div className="space-y-2">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-6xl font-extrabold text-[#001C55] tracking-tight leading-tight"
              >
                {siteConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0E6BA8]">
                {siteConfig.title} (Kotlin · Jetpack Compose · Clean Architecture)
              </p>
            </div>

            <p className="text-lg sm:text-xl text-[#4E5D78] leading-relaxed font-medium">
              A Senior Android Engineer with <strong className="text-[#001C55]">5+ years of experience</strong>{' '}
              building and shipping <strong className="text-[#001C55]">100+ production Android applications</strong>{' '}
              (including a <strong className="text-[#001C55]">1M+ installs flagship app</strong> and a{' '}
              <strong className="text-[#001C55]">sub-100ms WebRTC SDK</strong>). I combine clean architecture,{' '}
              <strong className="text-[#001C55]">Git version control</strong>,{' '}
              <strong className="text-[#001C55]">Android CLI</strong>, and AI coding agents (
              <strong className="text-[#0E6BA8]">Claude, Antigravity, Copilot</strong>) for fast, high-quality product delivery.
            </p>

            {/* Location */}
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E5D78]">
              <MapPin className="w-4 h-4 text-[#0E6BA8]" />
              <span>{siteConfig.location} · Open to International &amp; Visa-Sponsored Opportunities</span>
            </p>

            {/* Ashutosh Signature Colorful Social Circle Buttons */}
            <div className="flex items-center gap-3.5 pt-1">
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#0077B5] hover:bg-[#001C55] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email Shah Saud"
                title={siteConfig.contact.email}
                className="w-11 h-11 rounded-full bg-[#D14836] hover:bg-[#001C55] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.contact.github || '#contact'}
                target={siteConfig.contact.github ? '_blank' : undefined}
                rel={siteConfig.contact.github ? 'noopener noreferrer' : undefined}
                onClick={onGithubClick}
                aria-label="GitHub"
                title="GitHub"
                className="w-11 h-11 rounded-full bg-[#181717] hover:bg-[#001C55] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.go.smart.printer.mobile.printshare.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flagship App on Google Play"
                title="Google Play Store (1M+ Installs App)"
                className="w-11 h-11 rounded-full bg-[#01875F] hover:bg-[#001C55] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Smartphone className="w-5 h-5" />
              </a>
            </div>

            {/* Ashutosh Primary Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={resumeHref}
                download={siteConfig.resume.downloadFilename}
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-white bg-[#001C55] hover:bg-[#0E6BA8] transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>See My Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-[#001C55] bg-[#A6E1FA] hover:bg-[#8CD6F7] border border-[#001C55]/20 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Shah Saud's Head-and-Shoulders Portrait Crop */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer Decorative Ring */}
              <div
                className="w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-tr from-[#001C55] via-[#0E6BA8] to-[#A6E1FA] p-1.5 shadow-xl"
              >
                {/* Inner Circular Headshot Frame (Crops to head & shoulders only) */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#EDF9FE] via-[#DFF3FC] to-[#A6E1FA] overflow-hidden relative">
                  <img
                    src={portraitSrc}
                    alt="Shah Saud — Senior Android Engineer"
                    className="w-full h-full object-cover object-top pt-2 drop-shadow-md"
                  />
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="hidden sm:flex items-center gap-2 absolute -left-6 top-8 z-20 px-3.5 py-2 rounded-xl bg-white border border-[#001C55]/15 shadow-md text-xs font-bold text-[#001C55]">
                <Smartphone className="w-4 h-4 text-[#0E6BA8]" />
                <span>100+ Apps · 1M+ Installs</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="hidden sm:flex items-center gap-2 absolute -right-4 bottom-6 z-20 px-3.5 py-2 rounded-xl bg-[#001C55] text-white shadow-md text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#A6E1FA]" />
                <span>AI-Augmented Android Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Senior Android Engineer Metric Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-white/85 border border-[#001C55]/12 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#001C55] whitespace-nowrap">
                {metric.value}
              </p>
              <p className="text-sm sm:text-base font-bold text-[#0E6BA8] mt-1">
                {metric.label}
              </p>
              <p className="text-xs sm:text-sm text-[#4E5D78] mt-0.5">{metric.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
