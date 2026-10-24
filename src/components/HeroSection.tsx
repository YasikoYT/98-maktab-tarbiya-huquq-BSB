import React from 'react';
import { Tv, Award } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { HERO_IMAGE_PATH, SCHOOL_INFO } from '../data/initialData';

export const HeroSection: React.FC = () => {
  const { setIsPresentationMode, setCurrentSlide } = useProject();

  const startPresentation = () => {
    setCurrentSlide(1);
    setIsPresentationMode(true);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background with School Campus Image - Crisp, Bright and Clear (Not dim/foggy!) */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_PATH}
          alt="98-maktab yashil ekologik kampusi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-100"
        />
        {/* Soft, measured contrast gradient overlay that keeps the campus vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* School & Grade Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs sm:text-sm font-black mb-8 shadow-lg backdrop-blur-md">
          <Award className="w-4 h-4 text-emerald-700" />
          <span>{SCHOOL_INFO.schoolName} · {SCHOOL_INFO.grade} · {SCHOOL_INFO.disciplines}</span>
        </div>

        {/* Main Title - Big, crisp for TV/Screen */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          FAOL FUQARO — O‘ZGARISHLAR TASHABBUSKORI
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-3xl font-extrabold text-amber-300 tracking-wide mb-10 drop-shadow-sm">
          {SCHOOL_INFO.slogan}
        </p>

        {/* Big Centered "Taqdimotni boshlash" Button */}
        <div className="flex justify-center">
          <button
            onClick={startPresentation}
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-base sm:text-xl rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-emerald-400"
          >
            <Tv className="w-6 h-6 text-amber-300 animate-pulse" />
            <span>Taqdimotni boshlash (Smart TV)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
