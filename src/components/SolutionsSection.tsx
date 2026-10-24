import React, { useState } from 'react';
import { useProject } from '../context/ProjectContext';

export const SolutionsSection: React.FC = () => {
  const { solutions } = useProject();
  const [selectedId, setSelectedId] = useState<string>('chiqindini-sarala');

  const activeSol = solutions.find(s => s.id === selectedId) || solutions[1];

  return (
    <section id="yechimlar" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
            Amaliy tashabbuslar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            3 ta Yechim va Asosiy Tanlangan Reja
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Jamoamiz ishlab chiqqan takliflar orasidan <strong>“Chiqindini sarala”</strong> loyihasi eng yuqori samaradorlikka ega deb topildi:
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
                onClick={() => setSelectedId(sol.id)}
                className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-800 bg-white shadow-xl scale-[1.02] ring-2 ring-emerald-800/20'
                    : 'border-slate-200 bg-white/70 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-800">
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
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
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

        {/* Selected Solution Full Passport */}
        <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-3xl mb-10 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-emerald-950 block mb-1 font-bold text-sm">Hal qiladigan muammo:</strong>
              <p className="text-slate-600 leading-relaxed">{activeSol.targetProblem}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-emerald-950 block mb-1 font-bold text-sm">Kerakli resurslar:</strong>
              <p className="text-slate-600 leading-relaxed">{activeSol.requiredResources}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-emerald-950 block mb-1 font-bold text-sm">Kutilgan natija:</strong>
              <p className="text-slate-600 leading-relaxed">{activeSol.expectedResult}</p>
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
