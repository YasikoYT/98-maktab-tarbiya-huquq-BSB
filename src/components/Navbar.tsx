import React from 'react';
import { Tv } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SCHOOL_INFO } from '../data/initialData';
import { playChimeSound } from '../utils/soundEffects';

export const Navbar: React.FC = () => {
  const { setIsPresentationMode, setCurrentSlide } = useProject();

  const startPresentation = () => {
    playChimeSound();
    setCurrentSlide(1);
    setIsPresentationMode(true);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Left: School & Grade Badge in crisp black & white with emerald accent */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm">
            98
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                98-MAKTAB · 9-“D” SINF
              </span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-800">
              {SCHOOL_INFO.disciplines}
            </span>
          </div>
        </div>

        {/* Right Action: Prominent "Taqdimotni boshlash (TV)" button */}
        <button
          onClick={startPresentation}
          className="group relative flex items-center gap-2.5 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer shimmer-effect"
        >
          <Tv className="w-4 h-4 text-amber-300" />
          <span className="tracking-tight">Taqdimotni boshlash (TV)</span>
        </button>
      </div>
    </header>
  );
};
