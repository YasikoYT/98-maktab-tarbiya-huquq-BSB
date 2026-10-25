import React from 'react';
import { Tv, Monitor } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SCHOOL_INFO } from '../data/initialData';
import { playChimeSound, playPopSound } from '../utils/soundEffects';

export const Navbar: React.FC = () => {
  const { setIsPresentationMode, setCurrentSlide, isTvMode, toggleTvMode } = useProject();

  const startPresentation = () => {
    playChimeSound();
    setCurrentSlide(1);
    setIsPresentationMode(true);
  };

  const handleTvToggle = () => {
    playPopSound();
    toggleTvMode();
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 shadow-xs ${
        isTvMode
          ? 'bg-slate-950/95 border-emerald-400 text-white'
          : 'bg-white/95 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3">
        {/* Left: School & Grade Badge in crisp black & white with emerald accent */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shadow-sm transition-colors ${
              isTvMode ? 'bg-emerald-400 text-slate-950 ring-2 ring-emerald-300' : 'bg-slate-900 text-white'
            }`}
          >
            98
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-sm sm:text-lg tracking-tight transition-colors ${
                isTvMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              98-MAKTAB · 9-“D” SINF
            </span>
            <span
              className={`text-[10px] sm:text-xs font-bold transition-colors ${
                isTvMode ? 'text-emerald-300' : 'text-emerald-800'
              }`}
            >
              {SCHOOL_INFO.disciplines}
            </span>
          </div>
        </div>

        {/* Right Actions: High-Contrast TV Mode Toggle + Presentation Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* High-Contrast TV Mode Toggle Switch */}
          <button
            onClick={handleTvToggle}
            type="button"
            role="switch"
            aria-checked={isTvMode}
            title={
              isTvMode
                ? 'TV Rejimi: Yoqilgan (Katta ekranlar uchun shrift va yuqori kontrast faol)'
                : 'TV Rejimi: O‘chirilgan (Katta Smart TV ekrani uchun shrift va kontrastni oshirish)'
            }
            className={`group relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer border-2 ${
              isTvMode
                ? 'bg-emerald-400 text-slate-950 border-white shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-300 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 hover:border-slate-400 shadow-xs'
            }`}
          >
            <Monitor
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform ${
                isTvMode ? 'text-slate-950 scale-110' : 'text-slate-700 group-hover:scale-105'
              }`}
            />
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline">TV Mode:</span>
              <span
                className={`font-mono font-black px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] uppercase tracking-wider ${
                  isTvMode ? 'bg-slate-950 text-emerald-300' : 'bg-slate-300 text-slate-700'
                }`}
              >
                {isTvMode ? 'YONIQ' : 'O‘CHIQ'}
              </span>
            </div>

            {/* Visual Switch Indicator */}
            <div
              className={`w-7 sm:w-8 h-4 sm:h-4.5 rounded-full p-0.5 transition-colors flex items-center ${
                isTvMode ? 'bg-slate-950' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full transition-transform duration-300 shadow-xs ${
                  isTvMode ? 'translate-x-3 sm:translate-x-3.5 bg-emerald-400' : 'translate-x-0 bg-white'
                }`}
              />
            </div>
          </button>

          {/* Slide Presentation Button */}
          <button
            onClick={startPresentation}
            className="group relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-black text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer shimmer-effect border border-emerald-600"
          >
            <Tv className="w-4 h-4 text-amber-300" />
            <span className="tracking-tight hidden md:inline">Taqdimotni boshlash (TV)</span>
            <span className="tracking-tight md:hidden">Taqdimot (TV)</span>
          </button>
        </div>
      </div>
    </header>
  );
};

