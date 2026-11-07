import React from 'react';
import { Award } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export const AchievementsSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="achievements"
      className="py-20 sm:py-24 border-t border-slate-900 bg-surface-950"
      aria-labelledby="achievements-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 ${
          isInView ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Measurable Engineering Impact
          </span>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Key Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Concrete outcomes delivered across product scale, real-time systems performance,
            team mentorship, and production stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl card-surface card-surface-hover p-6 sm:p-7 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    {item.tag}
                  </span>
                  <Award className="w-4 h-4 text-slate-500" aria-hidden="true" />
                </div>

                <p className="text-2xl sm:text-3xl font-extrabold text-gradient-brand tracking-tight">
                  {item.metric}
                </p>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
