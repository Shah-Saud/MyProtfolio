import React from 'react';
import { CheckCircle2, Cpu, GitBranch, Sparkles, Terminal } from 'lucide-react';

export const HeroAndroidVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[440px] select-none">
      {/* Soft Ambient Glow Orbs */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-72 h-72 rounded-full bg-emerald-500/15 blur-[90px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-cyan-500/15 blur-[90px] animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Sleek Floating Engineering Card */}
      <div className="relative rounded-3xl bento-card p-6 sm:p-8 animate-float-slow">
        {/* Top Window Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="w-3 h-3 rounded-full bg-cyan-400/80" />
            <span className="w-3 h-3 rounded-full bg-indigo-400/80" />
          </div>
          <span className="text-xs font-mono text-slate-400">
            android-architecture.kt
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Production
          </span>
        </div>

        {/* Clean Code + Architecture Preview */}
        <div className="py-6 space-y-5">
          <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1.5 bg-surface-950/90 p-4 rounded-2xl border border-white/5">
            <div className="text-slate-500">// Clean Architecture · Jetpack Compose</div>
            <div>
              <span className="text-emerald-400">@Composable</span>
            </div>
            <div>
              <span className="text-cyan-400">fun</span>{' '}
              <span className="text-white font-semibold">ProductionAppScreen</span>(
            </div>
            <div className="pl-4 text-slate-300">
              state: <span className="text-indigo-300">StateFlow</span>&lt;UiState&gt;
            </div>
            <div>) &#123;</div>
            <div className="pl-4 text-slate-400">
              collectAsStateWithLifecycle()
            </div>
            <div>&#125;</div>
          </div>

          {/* 3 Clean Engineering Rows */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Modern Android Stack</p>
                  <p className="text-xs text-slate-400">Kotlin · Compose · MVVM · Coroutines</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI-Augmented Velocity</p>
                  <p className="text-xs text-slate-400">Claude · Antigravity · GitHub Copilot</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Git &amp; Android CLI</p>
                  <p className="text-xs text-slate-400">Clean PR workflows · ADB · CI/CD</p>
                </div>
              </div>
              <Terminal className="w-4 h-4 text-slate-500" />
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>100+ Career Android Apps</span>
          <span className="text-emerald-400 font-mono font-semibold">1M+ Play Installs</span>
        </div>
      </div>
    </div>
  );
};
