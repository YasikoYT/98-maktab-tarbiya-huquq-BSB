import React from 'react';
import { Tv, Award, CheckCircle2 } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { HERO_IMAGE_PATH, HERO_FALLBACK_PATH, SCHOOL_INFO } from '../data/initialData';
import { playChimeSound } from '../utils/soundEffects';

export const HeroSection: React.FC = () => {
  const { setIsPresentationMode, setCurrentSlide } = useProject();

  const startPresentation = () => {
    playChimeSound();
    setCurrentSlide(1);
    setIsPresentationMode(true);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background with School Campus Image - Crisp, Bright and Clear */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_PATH}
          onError={(e) => {
            if (e.currentTarget.src !== HERO_FALLBACK_PATH) {
              e.currentTarget.src = HERO_FALLBACK_PATH;
            }
          }}
          alt="98-maktab o‘quvchilari ekologik tashabbusda"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 hover:scale-105"
        />
        {/* Soft, measured contrast gradient overlay that keeps the students and schoolyard vivid while ensuring high legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/65 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* School & Grade Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs sm:text-sm font-black mb-8 shadow-xl backdrop-blur-md">
          <Award className="w-4 h-4 text-emerald-800" />
          <span>{SCHOOL_INFO.schoolName} · {SCHOOL_INFO.grade} · {SCHOOL_INFO.disciplines}</span>
        </div>

        {/* Main Title - Big, crisp for TV/Screen */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          FAOL FUQARO — O‘ZGARISHLAR TASHABBUSKORI
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-3xl font-extrabold text-amber-300 tracking-wide mb-6 drop-shadow-sm">
          {SCHOOL_INFO.slogan}
        </p>

        {/* Short, plain description for teachers & students */}
        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          Maktabimizdagi chiqindilarni saralash va tozalik madaniyatini yuksaltirishga qaratilgan amaliy, dalillarga asoslangan o‘quvchilar loyihasi.
        </p>

        {/* Big Centered "Taqdimotni boshlash (TV)" Button with Chime Sound */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={startPresentation}
            className="group relative inline-flex items-center gap-3.5 px-8 py-4.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-base sm:text-xl rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-emerald-400 shimmer-effect"
          >
            <Tv className="w-6 h-6 text-amber-300" />
            <span>Taqdimotni boshlash (TV)</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>13 nafar o‘quvchi so‘rovi</span>
          </div>
          <span className="text-slate-500">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Konstitutsiya 49 & 62-moddalar</span>
          </div>
          <span className="text-slate-500">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Amaliy saralash tizimi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
