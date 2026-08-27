import React, { useState } from 'react';
import { Eye, ZapOff, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

interface AccessibilityToolbarProps {
  onToggleReducedMotion: (enabled: boolean) => void;
  onToggleHighContrast: (enabled: boolean) => void;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  onToggleReducedMotion,
  onToggleHighContrast,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const handleReducedMotionToggle = () => {
    const newState = !reducedMotion;
    setReducedMotion(newState);
    onToggleReducedMotion(newState);
  };

  const handleHighContrastToggle = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    onToggleHighContrast(newState);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-400 rounded-full border border-cyan-500/40 shadow-xl backdrop-blur-md transition-all duration-300 focus:ring-2 focus:ring-cyan-400"
        aria-label="Accessibility & Preferences Panel"
      >
        <SlidersHorizontal className="w-5 h-5" />
      </button>

      {/* Floating Panel Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 glass-card p-5 rounded-2xl border border-white/20 shadow-2xl space-y-4 bg-[#12141d]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Accessibility Preferences</span>
            </h4>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
              WCAG AA
            </span>
          </div>

          <div className="space-y-3">
            {/* Reduced Motion Switch */}
            <button
              onClick={handleReducedMotionToggle}
              className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-colors ${
                reducedMotion
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <ZapOff className="w-4 h-4 text-cyan-400" />
                <span>Reduced Motion</span>
              </div>
              {reducedMotion && <Check className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* High Contrast Mode Switch */}
            <button
              onClick={handleHighContrastToggle}
              className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-colors ${
                highContrast
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>High Contrast Mode</span>
              </div>
              {highContrast && <Check className="w-4 h-4 text-cyan-400" />}
            </button>
          </div>

          <p className="text-[10px] text-slate-500 font-mono">
            Supports screen readers & keyboard navigation (Tab / Shift+Tab).
          </p>
        </div>
      )}
    </div>
  );
};

