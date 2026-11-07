import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FeaturedProject } from '../data/portfolioData';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';

interface ProjectCardProps {
  project: FeaturedProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group rounded-3xl bento-card overflow-hidden flex flex-col justify-between">
      <div>
        <ProjectPreviewVisual project={project} />

        <div className="p-7 sm:p-8 space-y-4">
          <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono">
            <span>{project.company || 'Production Release'}</span>
            {project.dates && <span>{project.dates}</span>}
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
            {project.shortTitle}
          </h3>

          <p className="text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-7 sm:px-8 py-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-400">Google Play Store</span>
        <a
          href={project.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>View App</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
};
