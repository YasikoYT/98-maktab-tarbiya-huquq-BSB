import React from 'react';
import { CheckCircle2, User } from 'lucide-react';
import { useProject } from '../context/ProjectContext';

export const RoadmapSection: React.FC = () => {
  const { roadmap } = useProject();

  return (
    <section id="tashabbus" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
            Amaliy yo‘l xaritasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            “Toza maktab — umumiy mas’uliyat”
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            98-maktab 9-“D” sinf jamoasi amalga oshirgan 5 ta bosqich:
          </p>
        </div>

        {/* 5 Rich Filled Steps */}
        <div className="space-y-4">
          {roadmap.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-slate-50 border-2 border-slate-200 p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                  0{step.stepNumber}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {step.title}
                    </h3>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                      Mas’ul: {step.responsible}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
                    {step.tasks[0]}
                  </p>
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    Kutilgan natija: {step.expectedOutput}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Bajarildi</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
