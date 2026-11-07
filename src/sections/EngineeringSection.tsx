import React from 'react';
import {
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { aiWorkflowContent, engineeringApproach } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const pillarIcons = {
  code: <Code2 className="w-5 h-5 text-blue-400" aria-hidden="true" />,
  layers: <Layers className="w-5 h-5 text-indigo-400" aria-hidden="true" />,
  zap: <Zap className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
  compass: <Compass className="w-5 h-5 text-violet-400" aria-hidden="true" />,
};

export const EngineeringSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="approach"
      className="py-20 sm:py-24 border-t border-slate-900 bg-surface-900/40"
      aria-labelledby="engineering-approach-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 ${
          isInView ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Engineering Approach — 4 Compact Cards */}
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              Engineering Philosophy
            </span>
            <h2
              id="engineering-approach-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Engineering Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {engineeringApproach.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl card-surface card-surface-hover p-6 space-y-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-950 border border-slate-800 flex items-center justify-center">
                  {pillarIcons[pillar.iconName]}
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 16: Modern Engineering Workflow (AI-Assisted, Engineer-Led Development) */}
        <div className="rounded-2xl card-surface p-6 sm:p-8 lg:p-10 border border-indigo-500/25 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{aiWorkflowContent.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {aiWorkflowContent.heading}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {aiWorkflowContent.description}
              </p>

              {/* Tooling Badges: Git, Android CLI, Claude, Antigravity, GitHub Copilot */}
              <div className="pt-2 flex flex-wrap gap-2">
                {aiWorkflowContent.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-950 text-indigo-200 border border-indigo-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-surface-950/90 border border-slate-800 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
                  <Cpu className="w-4 h-4" aria-hidden="true" />
                  <span>Engineer-Led Standards</span>
                </div>
                <ul className="space-y-2.5">
                  {aiWorkflowContent.pillars.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
