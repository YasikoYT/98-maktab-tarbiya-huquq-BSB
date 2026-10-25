import React from 'react';
import { SCHOOL_INFO } from '../data/initialData';
import confetti from 'canvas-confetti';
import { playChimeSound } from '../utils/soundEffects';

export const ConclusionSection: React.FC = () => {
  const triggerConfetti = () => {
    playChimeSound();
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-slate-900 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-3">
          Yakuniy xulosa
        </span>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          “Faol fuqarolik maktabimizda ijobiy o‘zgarishlarga yordam beradimi?”
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Bizning javobimiz qat’iy: <strong>Albatta, ha!</strong> O‘quvchilar maktabimizni o‘z uyi kabi asrasa, qoidalarga amal qilsa va chiqindini saralashni odatga aylantirsa, maktabimiz butun tuman bo‘yicha eng toza va namunali ta’lim maskaniga aylanadi.
        </p>

        {/* Grand Banner in White with Emerald border */}
        <div
          onClick={triggerConfetti}
          className="p-8 sm:p-12 rounded-3xl bg-emerald-900 text-white border-4 border-amber-400 max-w-2xl mx-auto cursor-pointer shadow-2xl transition-all transform hover:scale-105"
          title="Nishonlash uchun bosing!"
        >
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            98-maktab 9-“D” sinf jamoasi shiori
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {SCHOOL_INFO.slogan}
          </h3>
          <p className="text-xs font-bold text-emerald-200">
            Creator: <span className="text-amber-300 font-extrabold text-sm">{SCHOOL_INFO.creator}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
