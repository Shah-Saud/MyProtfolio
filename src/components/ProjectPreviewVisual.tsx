import React, { useState } from 'react';
import { Cast, PenTool, Printer, Sparkles } from 'lucide-react';
import { FeaturedProject } from '../data/portfolioData';
import { resolveAssetUrl } from '../utils/assetUrl';

interface ProjectPreviewVisualProps {
  project: FeaturedProject;
}

export const ProjectPreviewVisual: React.FC<ProjectPreviewVisualProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  if (project.screenshot && !imageError) {
    return (
      <div className="relative w-full h-52 overflow-hidden bg-surface-900 border-b border-white/5">
        <img
          src={resolveAssetUrl(project.screenshot)}
          alt={project.screenshotAlt || `${project.shortTitle} screenshot`}
          loading="lazy"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  const themeConfig = {
    printer: {
      gradient: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
      iconBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      icon: <Printer className="w-6 h-6" />,
      subtitle: 'IPP · AirPrint · OCR · Bluetooth Printing',
    },
    webrtc: {
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      iconBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      icon: <Cast className="w-6 h-6" />,
      subtitle: 'Custom WebRTC SDK · Real-Time Smart TV Cast',
    },
    deepsearch: {
      gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      iconBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      icon: <Sparkles className="w-6 h-6" />,
      subtitle: 'AI Search Synthesis · Intelligent Workflows',
    },
    logomaker: {
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      iconBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      icon: <PenTool className="w-6 h-6" />,
      subtitle: 'Interactive Vector Canvas · Custom SVG Engine',
    },
  }[project.visualTheme];

  return (
    <div
      className={`relative w-full h-44 overflow-hidden bg-gradient-to-br ${themeConfig.gradient} border-b border-white/5 p-7 flex flex-col justify-between`}
      role="img"
      aria-label={project.screenshotAlt || project.shortTitle}
    >
      <div className="flex items-center justify-between">
        <div
          className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${themeConfig.iconBg} group-hover:scale-105 transition-transform duration-300`}
        >
          {themeConfig.icon}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${themeConfig.badgeBg}`}
        >
          {project.impactMetric}
        </span>
      </div>

      <div>
        <p className="text-xs font-mono text-slate-400">{themeConfig.subtitle}</p>
      </div>
    </div>
  );
};
