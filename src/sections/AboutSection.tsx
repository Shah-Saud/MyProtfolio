import React from 'react';
import { heroMetrics } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-base leading-relaxed text-slate-400">
        <p>
          I&apos;m a <span className="font-medium text-slate-200">Senior Android Engineer</span> with{' '}
          <span className="font-medium text-slate-200">5+ years of experience</span> building and
          shipping production Android applications across product companies and client projects. My
          core focus is architecting clean, scalable, and responsive mobile software using{' '}
          <span className="font-medium text-slate-200">
            Kotlin, Java, Jetpack Compose, MVVM, and Clean Architecture
          </span>
          .
        </p>

        <p>
          Throughout my career, I&apos;ve built, maintained, and contributed to{' '}
          <span className="font-medium text-slate-200">100+ Android applications</span> across
          consumer, enterprise, and utility domains. Notable highlights include scaling{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.go.smart.printer.mobile.printshare.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 underline decoration-teal-400/40 underline-offset-4 transition-colors"
          >
            Smart Printer &amp; Scanner to 1M+ installs
          </a>{' '}
          and engineering a custom{' '}
          <span className="font-medium text-slate-200">
            WebRTC screen-mirroring SDK from the ground up with sub-100ms latency
          </span>
          .
        </p>

        <p>
          In my daily workflow, I combine disciplined{' '}
          <span className="font-medium text-slate-200">Git version control</span> (feature
          branching, pull requests, peer code reviews) and{' '}
          <span className="font-medium text-slate-200">Android CLI &amp; ADB tooling</span> with
          modern AI coding agents — including{' '}
          <span className="font-medium text-teal-300">
            Claude, Antigravity, and GitHub Copilot
          </span>{' '}
          — to accelerate implementation, refactoring, and debugging while maintaining strict
          engineering standards.
        </p>
      </div>

      {/* 4 Clean Senior Android Engineer Metric Cards */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {heroMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl bg-slate-800/40 border border-slate-800 p-4 transition-colors hover:border-slate-700"
          >
            <p className="text-xl sm:text-2xl font-bold text-slate-200 whitespace-nowrap">
              {metric.value}
            </p>
            <p className="text-xs font-semibold text-teal-300 mt-1">{metric.label}</p>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{metric.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
