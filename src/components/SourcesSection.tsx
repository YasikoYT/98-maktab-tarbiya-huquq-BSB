import React from 'react';
import { OFFICIAL_SOURCES } from '../data/initialData';

export const SourcesSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Foydalanilgan Rasmiy Manbalar
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Loyiha faqat O‘zbekiston Respublikasining rasmiy me’yorlariga asoslangan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {OFFICIAL_SOURCES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-xs flex items-start gap-3.5 hover:border-emerald-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-xs shrink-0">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                  {item.org}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
