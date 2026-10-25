import React from 'react';
import { useProject } from '../context/ProjectContext';
import { SURVEY_TOTAL_RESPONDENTS } from '../data/initialData';
import { playClickSound } from '../utils/soundEffects';
import { ClipboardCheck } from 'lucide-react';
import { ScrollStagger, ScrollItem } from './ScrollReveal';

export const SurveySection: React.FC = () => {
  const { surveyQuestions } = useProject();

  return (
    <section id="tadqiqot" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3 border border-emerald-200">
            Akbar o‘tkazgan so‘rovnoma
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            13 nafar o‘quvchi o‘rtasidagi so‘rovnoma natijalari
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Biz ushbu savollarni 9-“D” sinfdoshlarimizga qog‘oz anketada tarqatdik va har bir varaqni xolis ko‘rib chiqdik:
          </p>
        </div>

        {/* 7 Questions Grid */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {surveyQuestions.map((q) => (
            <ScrollItem key={q.id} className="h-full">
              <div
                onClick={() => playClickSound()}
                className="h-full bg-slate-50 border-2 border-slate-200 p-5 rounded-3xl flex flex-col justify-between hover:border-emerald-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-3">
                    <span className="w-7 h-7 rounded-xl bg-emerald-800 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 transition-colors">
                      {q.id}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-emerald-900 transition-colors">
                      {q.question}
                    </h3>
                  </div>

                  <div className="space-y-3 mt-4">
                    {q.options?.map((opt, oIdx) => (
                      <div key={oIdx} className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-700">
                          <span className="font-medium pr-2 leading-tight">{opt.label}</span>
                          <span className="font-mono font-bold text-emerald-900 shrink-0">
                            {opt.percentage}% <span className="text-slate-400 font-normal">({opt.count} ta)</span>
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-600 h-full rounded-full transition-all duration-700 group-hover:bg-emerald-500"
                            style={{ width: `${opt.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200 flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>Qatnashganlar:</span>
                  <span className="font-bold text-slate-800">{SURVEY_TOTAL_RESPONDENTS} nafar o‘quvchi</span>
                </div>
              </div>
            </ScrollItem>
          ))}
        </ScrollStagger>

        {/* Handcrafted Sincere Note Box */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 text-center max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 text-amber-900 font-black text-xs sm:text-sm mb-1.5 uppercase tracking-wide">
            <ClipboardCheck className="w-4 h-4 text-amber-700" />
            <span>Sinfdoshlarimiz xulosasi:</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed">
            “So‘rovnoma shuni isbotladiki, sinfdoshlarimiz maktab tozaligiga aslo befarq emas. Faqat hamma axlat bitta chelakka tashlangani uchun saralash imkoni bo‘lmagan. Rangli qutilar o‘rnatilsa, deyarli hamma unga amal qiladi!”
          </p>
        </div>
      </div>
    </section>
  );
};
