import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { siteConfig } from '../data/portfolioData';
import { resolveAssetUrl } from '../utils/assetUrl';
import { useInView } from '../hooks/useInView';

interface ContactSectionProps {
  onResumeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onGithubClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  githubConfigNotice: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onResumeClick,
  onGithubClick,
  githubConfigNotice,
}) => {
  const { ref, isInView } = useInView();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const resumeHref = resolveAssetUrl(siteConfig.resume.filePath);
  const portraitSrc = resolveAssetUrl('/assets/shah-saud.png');

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
    <section
      id="contact"
      ref={ref}
      className={`py-16 sm:py-20 ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#DFF3FC] border border-[#0E6BA8]/25 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Head-and-Shoulders Portrait Avatar */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-white to-[#A6E1FA] border-4 border-[#001C55] overflow-hidden shadow-lg relative">
                <img
                  src={portraitSrc}
                  alt={siteConfig.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top pt-2"
                />
              </div>
            </div>

            {/* Right Column: Contact Details & Resume CTA */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-5xl font-extrabold text-[#001C55] tracking-tight"
                >
                  Contact Me
                </h2>
                <p className="text-base sm:text-lg text-[#4E5D78] font-medium leading-relaxed max-w-2xl">
                  I am open to <strong className="text-[#001C55]">Senior Android Engineer, Android Engineer, and Mobile Engineer</strong>{' '}
                  opportunities — Remote, Hybrid, On-site, or International Visa-Sponsored roles.
                  Feel free to reach out directly via email or LinkedIn!
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-bold text-[#001C55]">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#001C55]/15">
                  <MapPin className="w-4 h-4 text-[#0E6BA8]" />
                  {siteConfig.location}
                </span>
                <a
                  href="tel:+923409022243"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#EDF9FE] border border-[#001C55]/15 transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 text-[#01875F]" />
                  <span>+92 340 9022243</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#EDF9FE] border border-[#001C55]/15 transition-colors font-mono"
                >
                  <Mail className="w-4 h-4 text-[#D14836]" />
                  <span>{siteConfig.contact.email}</span>
                  {copiedEmail ? (
                    <span className="inline-flex items-center gap-1 text-xs font-sans font-bold text-[#01875F]">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#4E5D78]" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href={resumeHref}
                  download={siteConfig.resume.downloadFilename}
                  onClick={onResumeClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#001C55] hover:bg-[#0E6BA8] transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>See My Resume</span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-bold text-[#001C55] bg-white hover:bg-[#EDF9FE] border border-[#001C55]/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D14836]" />
                  <span>Email Me</span>
                </a>

                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#0077B5] hover:bg-[#001C55] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={siteConfig.contact.github || '#contact'}
                  target={siteConfig.contact.github ? '_blank' : undefined}
                  rel={siteConfig.contact.github ? 'noopener noreferrer' : undefined}
                  onClick={onGithubClick}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#181717] hover:bg-[#001C55] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              {githubConfigNotice && !siteConfig.contact.github && (
                <p className="text-xs font-semibold text-[#001C55] bg-white/90 border border-[#0E6BA8]/30 rounded-lg px-4 py-2.5 inline-block">
                  Set <code className="font-mono text-[#0E6BA8]">siteConfig.contact.github</code> in{' '}
                  <code className="font-mono text-[#0E6BA8]">src/data/portfolioData.ts</code> to configure your GitHub link.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
