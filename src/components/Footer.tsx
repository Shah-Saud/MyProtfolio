import React from 'react';
import { siteConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center text-sm text-[#998F8F]">
      <p>
        <span className="text-white font-medium">{siteConfig.name}</span> ·{' '}
        <span className="text-[#F46C38] font-medium">Senior Android Engineer</span> · © 2026
      </p>
    </footer>
  );
};
