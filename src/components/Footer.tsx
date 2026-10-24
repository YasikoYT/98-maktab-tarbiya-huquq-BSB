import React from 'react';
import { Tv, ArrowUp, School } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SCHOOL_INFO } from '../data/initialData';

export const Footer: React.FC = () => {
  const { setIsPresentationMode, setCurrentSlide } = useProject();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startPresentation = () => {
    setCurrentSlide(1);
    setIsPresentationMode(true);
  };

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight block">
              98-MAKTAB · 9-“D” SINF EKOLOGIK LOYIHASI
            </span>
            <span className="text-xs text-slate-500 font-semibold mt-0.5 block">
              Creator: <span className="text-emerald-800 font-extrabold">{SCHOOL_INFO.creator}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startPresentation}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-black text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              <Tv className="w-4 h-4 text-amber-300" />
              <span>Smart TV Taqdimot</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            {SCHOOL_INFO.disciplines}
          </p>
          <p className="font-bold text-emerald-800">
            {SCHOOL_INFO.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
};
