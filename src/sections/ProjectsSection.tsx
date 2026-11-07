import React, { useState } from 'react';
import {
  ArrowUpRight,
  Cast,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  Info,
  PenTool,
  Printer,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const projectIcons = {
  printer: <Printer className="w-6 h-6 text-[#0E6BA8]" />,
  webrtc: <Cast className="w-6 h-6 text-[#0E6BA8]" />,
  deepsearch: <Sparkles className="w-6 h-6 text-[#0E6BA8]" />,
  logomaker: <PenTool className="w-6 h-6 text-[#0E6BA8]" />,
};

export const ProjectsSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const [showMoreApps, setShowMoreApps] = useState(false);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 sm:py-20 ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Centered Ashutosh Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-5xl font-extrabold text-[#001C55] tracking-tight"
          >
            Selected Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-[#4E5D78] font-medium">
            A curated showcase of 4 recent public Google Play releases out of{' '}
            <strong className="text-[#001C55]">100+ Android applications</strong> built across my career.
          </p>
        </div>

        {/* Clear Recruiter Scope Note */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border-2 border-[#0E6BA8]/25 p-5 flex items-start gap-3.5 shadow-sm">
          <Info className="w-6 h-6 text-[#0E6BA8] shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-[#4E5D78] font-medium leading-relaxed">
            <strong className="text-[#001C55] font-bold">Note for Recruiters:</strong> The apps
            shown below are{' '}
            <strong className="text-[#0E6BA8] underline underline-offset-4">
              only a small selection of recent public projects
            </strong>{' '}
            — not all the apps I have worked on. Over the past 5+ years, I have built, maintained,
            and contributed to <strong className="text-[#001C55]">100+ Android applications</strong>{' '}
            including client-specific solutions, internal company products, custom SDKs, and NDA apps.
          </p>
        </div>

        {/* 4 Ashutosh Sky-Blue Project Cards (#DFF3FC / #A6E1FA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#DFF3FC] hover:bg-[#A6E1FA]/65 border border-[#0E6BA8]/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#0E6BA8]/20 flex items-center justify-center shrink-0 shadow-sm">
                      {projectIcons[project.visualTheme]}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#001C55] leading-snug">
                        {project.shortTitle}
                      </h3>
                      {(project.company || project.dates) && (
                        <p className="text-xs font-semibold text-[#4E5D78]">
                          {project.company}
                          {project.company && project.dates ? ' · ' : ''}
                          {project.dates}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#001C55] text-white shrink-0">
                    {project.impactMetric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#4E5D78] font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-white/90 text-[#001C55] border border-[#001C55]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#001C55]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0E6BA8] uppercase tracking-wider">
                  {project.badge}
                </span>
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#001C55] hover:bg-[#0E6BA8] transition-colors"
                >
                  <span>View on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Expandable Section for 10 More Recent Google Play Releases */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => setShowMoreApps((prev) => !prev)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#001C55] hover:bg-[#0E6BA8] transition-colors shadow-md"
            aria-expanded={showMoreApps}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>
              {showMoreApps
                ? 'Hide Additional Recent Releases'
                : 'More Recent Projects (10 More Play Store Releases)'}
            </span>
            {showMoreApps ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showMoreApps && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 text-left">
              {moreProjects.map((app) => (
                <a
                  key={app.playStoreUrl}
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-[#DFF3FC] hover:bg-[#A6E1FA]/70 border border-[#0E6BA8]/25 flex items-center justify-between gap-3 transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#0E6BA8] flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#001C55] truncate">{app.title}</h4>
                      <p className="text-xs font-medium text-[#4E5D78] truncate">{app.category}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#001C55] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
