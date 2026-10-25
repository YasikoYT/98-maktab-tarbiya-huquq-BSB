import React, { useState } from 'react';
import { BarChart3, PieChart, Lightbulb, TrendingUp, Info } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SURVEY_TOTAL_RESPONDENTS } from '../data/initialData';
import { playClickSound } from '../utils/soundEffects';
import { ScrollStagger, ScrollItem } from './ScrollReveal';

export const AnalysisSection: React.FC = () => {
  const { surveyQuestions } = useProject();
  const [activeQuestionId, setActiveQuestionId] = useState<number>(3);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const activeQ = surveyQuestions.find(q => q.id === activeQuestionId) || surveyQuestions[2];
  const options = activeQ.options || [];

  const keyFacts = [
    {
      pct: '84.6%',
      title: 'Saralash qutilari yo‘qligi',
      desc: '13 tadan 11 ta o‘quvchi maktabda alohida qutilar yo‘qligi sababli qog‘oz va plastikni bitta umumiy axlatga aralashtirib tashlashga majbur bo‘lmoqda.',
      insight: 'Asosiy to‘siq — sharoit va infratuzilmaning yo‘qligi.'
    },
    {
      pct: '92.3%',
      title: 'Hasharlarda qatnashish tayyorligi',
      desc: '13 tadan 12 ta o‘quvchi maktab tozaligini yaxshilash va ko‘kalamzorlashtirish aksiyalarida jon deb ixtiyoriy qatnashishini bildirdi.',
      insight: 'O‘quvchilarda ekologik mas’uliyat va ishtiyoq juda yuqori.'
    },
    {
      pct: '69.2%',
      title: 'Rangli saralash qutilari taklifi',
      desc: 'O‘quvchilarning asosiy qismi maktabimizda rangli konteynerlar o‘rnatilsa, tozalik darajasi kamida 2 barobarga oshishini ta’kidladi.',
      insight: 'Eng maqbul va o‘quvchilar qo‘llab-quvvatlagan yechim.'
    }
  ];

  const sliceColors = ['#047857', '#d97706', '#2563eb', '#64748b'];

  let cumulativeAngle = 0;
  const slices = options.map((opt, i) => {
    const angle = (opt.percentage / 100) * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;
    const endAngle = cumulativeAngle;

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = 100 + 70 * Math.cos(startRad);
    const y1 = 100 + 70 * Math.sin(startRad);
    const x2 = 100 + 70 * Math.cos(endRad);
    const y2 = 100 + 70 * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;
    const d = opt.percentage > 0
      ? `M 100 100 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`
      : '';

    return {
      label: opt.label,
      count: opt.count,
      pct: opt.percentage,
      d,
      color: sliceColors[i % sliceColors.length]
    };
  });

  return (
    <section id="tahlil" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
            Jaloliddin tahlili va matematik hisoblari
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Interaktiv Diagrammalar va Statistik Tahlil
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            13 ta anketadagi ma’lumotlarni matematik tahlil qilganda quyidagi aniq natijalar chiqdi:
          </p>
        </div>

        {/* 3 Rich Highlight Cards */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {keyFacts.map((fact, idx) => (
            <ScrollItem key={idx} className="h-full">
              <div
                className="h-full bg-white border-2 border-slate-200 p-6 rounded-3xl text-left hover:border-emerald-600 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-emerald-800 font-mono block mb-2">
                    {fact.pct}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mb-2 leading-snug">
                    {fact.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {fact.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-900 bg-emerald-50 p-2.5 rounded-xl">
                  {fact.insight}
                </div>
              </div>
            </ScrollItem>
          ))}
        </ScrollStagger>

        {/* Custom Animated Interactive Donut and Bars Canvas */}
        <div className="bg-white border-2 border-slate-200 p-6 sm:p-10 rounded-3xl mb-12 shadow-md">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
            <span className="text-xs font-bold text-slate-700 uppercase">
              Savollar bo‘yicha grafikni ko‘rish:
            </span>
            <div className="flex flex-wrap gap-2">
              {surveyQuestions.map(q => (
                <button
                  key={q.id}
                  onClick={() => {
                    playClickSound();
                    setActiveQuestionId(q.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    activeQuestionId === q.id
                      ? 'bg-emerald-800 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {q.id}-savol
                </button>
              ))}
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-black text-slate-900 mb-8">
            {activeQ.id}. {activeQ.question}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Animated Donut SVG */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 group">
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {slices.map((slice, i) => (
                    <path
                      key={i}
                      d={slice.d}
                      fill={slice.color}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="transition-all duration-300 cursor-pointer hover:opacity-90"
                      style={{
                        transformOrigin: '100px 100px',
                        transform: hoveredIdx === i ? 'scale(1.08)' : 'scale(1)'
                      }}
                    />
                  ))}
                  <circle cx="100" cy="100" r="44" fill="#ffffff" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Jami so‘ralgan</span>
                  <span className="text-3xl font-black text-slate-900 font-mono">{SURVEY_TOTAL_RESPONDENTS}</span>
                  <span className="text-[11px] text-emerald-800 font-bold">o‘quvchi</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-5">
                {slices.map((slice, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-opacity ${
                      hoveredIdx !== null && hoveredIdx !== i ? 'opacity-40' : 'opacity-100'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-md shrink-0" style={{ backgroundColor: slice.color }} />
                    <span className="text-slate-700">{slice.label.split(' ')[0]} ({slice.pct}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Bars */}
            <div className="lg:col-span-7 space-y-4">
              {options.map((opt, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`p-4 rounded-2xl bg-slate-50 border-2 transition-all duration-300 ${
                    hoveredIdx === i ? 'border-emerald-600 bg-white scale-[1.02] shadow-md' : 'border-slate-200'
                  }`}
                >
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-slate-900">{opt.label}</span>
                    <span className="font-mono font-black text-emerald-800 text-sm">
                      {opt.percentage}% <span className="text-slate-400 font-normal">({opt.count} ta)</span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 transition-all duration-1000 ease-out"
                      style={{ width: `${Math.max(opt.percentage, 5)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2 Deep Evidence-based Conclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-900 text-white p-7 rounded-3xl shadow-lg border border-emerald-800">
            <span className="text-amber-300 font-extrabold text-xs uppercase tracking-wider block mb-2">
              1-dalilli xulosa (Infratuzilma omili)
            </span>
            <p className="text-sm font-semibold leading-relaxed text-emerald-50">
              “Chiqindilarning yerda yoki bitta idishda aralashib ketishi o‘quvchilarning madaniyatsizligidan emas, balki maktabda saralash qutilari yo‘qligidan kelib chiqmoqda. Qutilar qo‘yilsa, muammo darhol hal bo‘ladi.”
            </p>
          </div>

          <div className="bg-slate-900 text-white p-7 rounded-3xl shadow-lg border border-slate-800">
            <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider block mb-2">
              2-dalilli xulosa (O‘quvchilar tayyorligi)
            </span>
            <p className="text-sm font-semibold leading-relaxed text-slate-100">
              “Sinfdoshlarimizning 92.3% hasharlarda qatnashishga tayyor. Demak, o‘quvchilarni jazolash emas, ularga qulay saralash tizimi va shaxsiy ibrat ko‘rsatish eng yuqori natijani beradi.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
