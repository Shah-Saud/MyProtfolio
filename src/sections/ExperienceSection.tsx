import React from 'react';
import { Award, Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export const ExperienceSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 sm:py-20 ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Centered Ashutosh Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2
            id="experience-heading"
            className="text-3xl sm:text-5xl font-extrabold text-[#001C55] tracking-tight"
          >
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[#4E5D78] font-medium">
            5+ years of progressive full-time Android development experience across product and client companies.
          </p>
        </div>

        {/* Ashutosh-Style Experience Cards with Navy Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {experienceTimeline.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white border border-[#0E6BA8]/25 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Top Navy Header Bar (Ashutosh Experience Card Style) */}
                <div className="bg-[#001C55] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#A6E1FA] text-[#001C55] flex items-center justify-center font-extrabold text-sm shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-snug">{item.company}</h3>
                      <p className="text-xs text-[#A6E1FA] font-medium">{item.role}</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#A6E1FA] flex flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-white/80 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm sm:text-base font-semibold text-[#001C55] leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-2 text-sm text-[#4E5D78] font-medium">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#0E6BA8] font-bold shrink-0">⚡</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tech Tags */}
              {item.technologies && (
                <div className="px-6 py-3.5 bg-[#EDF9FE] border-t border-[#0E6BA8]/15 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white text-[#001C55] border border-[#001C55]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Education & Certifications Block (from Resume) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-4">
          <div className="rounded-2xl bg-white border border-[#0E6BA8]/25 p-6 sm:p-7 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#001C55] text-[#A6E1FA] flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#001C55]">
                  Bachelor of Software Engineering — Grade A
                </h3>
                <span className="text-xs font-mono font-bold text-[#0E6BA8]">
                  Aug 2018 – Jun 2022
                </span>
              </div>
              <p className="text-sm font-semibold text-[#4E5D78]">
                NUML (National University of Modern Languages) · Islamabad, Pakistan
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#0E6BA8]/25 p-6 sm:p-7 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#001C55] text-[#A6E1FA] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#001C55]">
                Certifications
              </h3>
              <ul className="space-y-1 text-sm font-semibold text-[#4E5D78]">
                <li>⚡ Artificial Intelligence Developer — PIAIC (2023)</li>
                <li>⚡ Data Science &amp; ML Training — CyberVision International (2021)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
