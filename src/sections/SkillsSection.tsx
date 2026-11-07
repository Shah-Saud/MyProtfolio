import React from 'react';
import {
  Bot,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Radio,
  Smartphone,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const androidStackBadges = [
  { name: 'Kotlin', color: 'bg-[#7F52FF]/15 text-[#5B21B6] border-[#7F52FF]/30' },
  { name: 'Java', color: 'bg-[#E76F00]/15 text-[#9A3412] border-[#E76F00]/30' },
  { name: 'Jetpack Compose', color: 'bg-[#3DDC84]/20 text-[#065F46] border-[#3DDC84]/40' },
  { name: 'Android SDK', color: 'bg-[#01875F]/15 text-[#065F46] border-[#01875F]/30' },
  { name: 'MVVM & Clean Arch', color: 'bg-[#0E6BA8]/15 text-[#001C55] border-[#0E6BA8]/30' },
  { name: 'Coroutines & Flow', color: 'bg-[#2563EB]/15 text-[#1E3A8A] border-[#2563EB]/30' },
  { name: 'Room & SQLite', color: 'bg-[#0284C7]/15 text-[#0C4A6E] border-[#0284C7]/30' },
  { name: 'Retrofit & REST', color: 'bg-[#059669]/15 text-[#064E3B] border-[#059669]/30' },
  { name: 'Firebase', color: 'bg-[#D97706]/15 text-[#78350F] border-[#D97706]/30' },
  { name: 'WebRTC (<100ms SDK)', color: 'bg-[#7C3AED]/15 text-[#4C1D95] border-[#7C3AED]/30' },
  { name: 'Bluetooth / BLE', color: 'bg-[#1D4ED8]/15 text-[#1E3A8A] border-[#1D4ED8]/30' },
  { name: 'IPP / AirPrint & OCR', color: 'bg-[#0E6BA8]/15 text-[#001C55] border-[#0E6BA8]/30' },
];

const aiGitCliBadges = [
  { name: 'Git Version Control', icon: GitBranch },
  { name: 'GitFlow & PR Reviews', icon: Code2 },
  { name: 'Android CLI & ADB', icon: Terminal },
  { name: 'Claude AI', icon: Sparkles },
  { name: 'Google Antigravity', icon: Bot },
  { name: 'GitHub Copilot', icon: Cpu },
  { name: 'Gradle & CI/CD', icon: Wrench },
  { name: 'ANR & Crash Optimization', icon: Layers },
];

export const SkillsSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 sm:py-20 ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
      aria-labelledby="what-i-do-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Ashutosh Centered Heading: "What I Do?" */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2
            id="what-i-do-heading"
            className="text-3xl sm:text-5xl font-extrabold text-[#001C55] tracking-tight"
          >
            What I Do?
          </h2>
          <p className="text-base sm:text-lg text-[#4E5D78] font-medium">
            End-to-end production Android engineering powered by modern architecture, disciplined
            Git version control, Android CLI, and AI coding agents.
          </p>
        </div>

        {/* 2 Ashutosh-Style "What I Do" Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Senior Android Engineering & Architecture */}
          <div className="rounded-3xl bg-white/90 border border-[#001C55]/12 p-7 sm:p-9 shadow-sm space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#DFF3FC] border border-[#0E6BA8]/25 flex items-center justify-center text-[#001C55]">
                <Smartphone className="w-6 h-6 text-[#0E6BA8]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#001C55]">
                  Senior Android Engineering
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5D78] font-medium">
                  Kotlin · Jetpack Compose · Clean Architecture · Custom SDKs
                </p>
              </div>
            </div>

            {/* Colorful Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {androidStackBadges.map((item) => (
                <span
                  key={item.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Ashutosh Signature Lightning Bolt Bullets */}
            <ul className="space-y-3 text-sm sm:text-base text-[#4E5D78] font-medium leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Building and maintaining production Android applications in{' '}
                  <strong className="text-[#001C55]">Kotlin &amp; Java</strong> using{' '}
                  <strong className="text-[#001C55]">Jetpack Compose</strong> and Material Design.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Structuring scalable mobile apps with{' '}
                  <strong className="text-[#001C55]">MVVM, Clean Architecture, Coroutines, and Flow</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Engineering real-time <strong className="text-[#001C55]">WebRTC streaming SDKs (&lt;100ms latency)</strong>,
                  wireless <strong className="text-[#001C55]">IPP/AirPrint printing</strong>, OCR scanning, and Bluetooth/BLE connectivity.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Delivering across <strong className="text-[#001C55]">100+ career Android apps</strong>{' '}
                  spanning consumer products (1M+ installs), client apps, and internal solutions.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Git Version Control, Android CLI & AI Agents */}
          <div className="rounded-3xl bg-white/90 border border-[#001C55]/12 p-7 sm:p-9 shadow-sm space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#DFF3FC] border border-[#0E6BA8]/25 flex items-center justify-center text-[#001C55]">
                <Sparkles className="w-6 h-6 text-[#0E6BA8]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#001C55]">
                  Git, Android CLI &amp; AI Workflow
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5D78] font-medium">
                  Claude · Antigravity · GitHub Copilot · Android CLI · Git
                </p>
              </div>
            </div>

            {/* Tool Badges with Icons */}
            <div className="flex flex-wrap gap-2">
              {aiGitCliBadges.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#EDF9FE] text-[#001C55] border border-[#0E6BA8]/25"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0E6BA8]" />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>

            {/* Ashutosh Signature Lightning Bolt Bullets */}
            <ul className="space-y-3 text-sm sm:text-base text-[#4E5D78] font-medium leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Managing production codebases with proper{' '}
                  <strong className="text-[#001C55]">Git version control</strong> — feature branching,
                  clean commit history, pull requests, and peer code reviews.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Accelerating feature implementation, refactoring, and debugging with AI coding
                  agents (<strong className="text-[#001C55]">Claude, Antigravity, and GitHub Copilot</strong>).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Using <strong className="text-[#001C55]">Android CLI, ADB, and Gradle</strong>{' '}
                  command-line workflows for rapid builds, UI hierarchy inspection, and device testing.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">⚡</span>
                <span>
                  Maintaining full engineering ownership over architecture, unit/integration testing,
                  ANR prevention, and production crash debugging (~40% QA bug reduction).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Complete Categorized Stack Reference */}
        <div className="rounded-3xl bg-[#DFF3FC]/70 border border-[#0E6BA8]/20 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="space-y-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#001C55] flex items-center gap-2">
                  {cat.id === 'data-networking' ? (
                    <Database className="w-4 h-4 text-[#0E6BA8]" />
                  ) : cat.id === 'advanced-connectivity' ? (
                    <Radio className="w-4 h-4 text-[#0E6BA8]" />
                  ) : (
                    <Code2 className="w-4 h-4 text-[#0E6BA8]" />
                  )}
                  <span>{cat.title}</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-[#001C55] border border-[#001C55]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
