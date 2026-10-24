import React from 'react';
import { useProject } from '../context/ProjectContext';
import { SURVEY_TOTAL_RESPONDENTS } from '../data/initialData';

export const SurveySection: React.FC = () => {
  const { surveyQuestions } = useProject();

  return (
    <section id="tadqiqot" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
            Akbar o‘tkazgan sotsiologik so‘rovnoma
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            13 ta o‘quvchi o‘rtasidagi so‘rovnoma natijalari
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            9-“D” sinfdagi {SURVEY_TOTAL_RESPONDENTS} nafar o‘quvchining har biri xolis javob bergan 7 ta muhim savol natijalari:
          </p>
        </div>

        {/* 7 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {surveyQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-slate-50 border border-slate-200 p-5 rounded-3xl flex flex-col justify-between hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-xl bg-emerald-800 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {q.id}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
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
                          className="bg-emerald-600 h-full rounded-full transition-all duration-700"
                          style={{ width: `${opt.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 flex justify-between text-[11px] text-slate-500 font-mono">
                <span>Qatnashganlar soni:</span>
                <span className="font-bold text-slate-800">{SURVEY_TOTAL_RESPONDENTS} nafar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
