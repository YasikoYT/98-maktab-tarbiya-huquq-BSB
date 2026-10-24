import React from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import { LEGAL_ARTICLES } from '../data/initialData';

export const LegalSection: React.FC = () => {
  return (
    <section id="huquq" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
            Ayubxon o‘rgangan huquqiy asoslar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Konstitutsiya va Qonunlar
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Maktab tozaligi va ekologik mas’uliyat qonun hujjatlarida qat’iy belgilangan:
          </p>
        </div>

        {/* 3 Rich Legal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEGAL_ARTICLES.map((article, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border-2 border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-600 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-white bg-emerald-800 px-3 py-1 rounded-md">
                    {article.article}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {article.source}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  {article.title}
                </h3>

                <p className="p-3.5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 italic leading-relaxed mb-4">
                  “{article.description}”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="text-emerald-900 font-extrabold block mb-1">Maktabdagi amaliy ma’nosi:</span>
                <p className="text-slate-700 leading-relaxed">{article.relevanceToSchool}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
