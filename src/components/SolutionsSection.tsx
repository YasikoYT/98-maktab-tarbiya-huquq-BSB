import React, { useState } from 'react';
import { useProject } from '../context/ProjectContext';
import { SOLUTION_IMAGE_PATH } from '../data/initialData';
import { CheckCircle2, Sparkles, Star } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export const SolutionsSection: React.FC = () => {
  const { solutions } = useProject();
  const [selectedId, setSelectedId] = useState<string>('chiqindini-sarala');

  const activeSol = solutions.find(s => s.id === selectedId) || solutions[1];

  return (
    <section id="yechimlar" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3 border border-emerald-200">
            Amaliy tashabbuslar
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            3 ta Yechim va Asosiy Tanlangan Reja
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
            Jamoamiz ishlab chiqqan takliflar orasidan <strong>“Chiqindini sarala”</strong> loyihasi eng yuqori natijaga ega deb topildi:
          </p>
        </div>

        {/* 3 Proposal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {solutions.map((sol) => {
            const isSelected = sol.id === selectedId;
            const isWinner = sol.id === 'chiqindini-sarala';
            return (
              <div
                key={sol.id}
                onClick={() => {
                  playClickSound();
                  setSelectedId(sol.id);
                }}
                className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
                  isSelected
                    ? 'border-emerald-600 bg-white shadow-xl scale-[1.02] ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-emerald-900">
                      {isWinner ? '★ ASOSIY REJA' : 'TAKLIF'}
                    </span>
                    {isWinner && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black">
                        TANLANGAN
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                    {sol.shortDesc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-700 font-bold flex justify-between">
                  <span>Umumiy baho:</span>
                  <span className="text-emerald-800">{((sol.legalityScore + sol.utilityScore + sol.feasibilityScore) / 3).toFixed(1)} / 10</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Solution Full Passport with Real Authentic Generated Photo */}
        <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-3xl mb-10 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                Tanlangan reja pasporti:
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {activeSol.title}
              </h3>
            </div>
            <span className="px-3.5 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl self-start sm:self-auto shadow-xs">
              Amaliyotga to‘liq tayyor
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Photo of Solution */}
            <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 relative group shadow-sm">
              <img
                src={SOLUTION_IMAGE_PATH}
                alt="Maktabda qog‘oz va plastikni saralash amaliyoti"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-bold text-white leading-tight">
                  Ko‘k quti: Qog‘oz va daftarlar · Yashil/Sariq: Plastik idishlar
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <strong className="text-emerald-950 block mb-1 font-bold text-sm">Hal qiladigan muammo:</strong>
                <p className="text-slate-600 leading-relaxed font-medium">{activeSol.targetProblem}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <strong className="text-emerald-950 block mb-1 font-bold text-sm">Kerakli resurslar:</strong>
                <p className="text-slate-600 leading-relaxed font-medium">{activeSol.requiredResources}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 sm:col-span-2">
                <strong className="text-emerald-950 block mb-1 font-bold text-sm">Kutilgan amaliy natija:</strong>
                <p className="text-slate-600 leading-relaxed font-medium">{activeSol.expectedResult}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Comparison Matrix */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 overflow-x-auto shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Takliflarni taqqoslash matritsasi (Baho 1-10)
          </h4>
          <table className="w-full text-left text-xs text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase">
                <th className="py-3 px-4">Tashabbus nomi</th>
                <th className="py-3 px-4 text-center">Qonuniylik</th>
                <th className="py-3 px-4 text-center">Foydalilik</th>
                <th className="py-3 px-4 text-center">Amalga oshirish imkoniyati</th>
                <th className="py-3 px-4 text-right">Xulosa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {solutions.map((sol) => (
                <tr key={sol.id} className={sol.id === 'chiqindini-sarala' ? 'bg-emerald-50/70 font-bold text-slate-900' : ''}>
                  <td className="py-3.5 px-4 font-sans font-bold text-slate-900">{sol.title}</td>
                  <td className="py-3.5 px-4 text-center text-slate-800">{sol.legalityScore}/10</td>
                  <td className="py-3.5 px-4 text-center text-emerald-800 font-bold">{sol.utilityScore}/10</td>
                  <td className="py-3.5 px-4 text-center text-slate-800">{sol.feasibilityScore}/10</td>
                  <td className="py-3.5 px-4 text-right font-sans font-extrabold text-emerald-900">
                    {sol.id === 'chiqindini-sarala' ? '★ Asosiy tanlangan reja' : 'Zaxira tashabbus'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
