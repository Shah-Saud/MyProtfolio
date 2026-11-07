import React, { useEffect } from 'react';
import { FileText, Mail, Linkedin, X, CheckCircle2, FolderOpen } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mailtoResumeRequest = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    'Resume Request — Senior Android Engineer Opportunity'
  )}&body=${encodeURIComponent(
    'Hi Shah,\n\nI reviewed your portfolio and would love to receive a copy of your latest resume.\n\nBest regards,'
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
                {siteConfig.name} — Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {siteConfig.title} · {siteConfig.experienceYears} Experience
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Quick Summary
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>5+ years building production Android apps (Kotlin, Java, Compose)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>100+ career Android apps built · 1M+ downloads on Smart Printer</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Git version control, Android CLI, Claude, Antigravity &amp; GitHub Copilot</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Request the PDF directly via email or view my full profile on LinkedIn:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={mailtoResumeRequest}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Request PDF via Email</span>
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Open LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
          <FolderOpen className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>Site Owner Note:</strong> Place your PDF at{' '}
            <code className="font-mono text-slate-800 dark:text-slate-200">
              public/assets/Shah-Saud-Resume.pdf
            </code>{' '}
            so this button downloads the file directly.
          </span>
        </div>
      </div>
    </div>
  );
};
