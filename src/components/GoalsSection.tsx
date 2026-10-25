import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { SIX_TASKS } from '../data/initialData';
import { ScrollStagger, ScrollItem } from './ScrollReveal';

export const GoalsSection: React.FC = () => {
  const detailedTasks = [
    {
      num: '01',
      title: 'Chiqindi nuqtalarini xaritalash',
      desc: 'Maktabimizning barcha qavatlari, yo‘laklari va oshxona oldi kuzatilib, eng ko‘p axlat to‘planadigan 3 ta asosiy joy aniqlandi.'
    },
    {
      num: '02',
      title: '13 ta o‘quvchi so‘rovnomasi',
      desc: 'Sinfdoshlarimizning haqiqiy fikrini bilish uchun 7 ta muhim savoldan iborat anonim anketa o‘tkazildi va natijalar xolis hisoblandi.'
    },
    {
      num: '03',
      title: 'Qonunlar va me’yorlarni o‘rganish',
      desc: 'O‘zbekiston Respublikasi Konstitutsiyasining 49- va 62-moddalari hamda maktab nizomidagi tozalik qoidalari tahlil qilindi.'
    },
    {
      num: '04',
      title: 'Statistik diagrammalar tuzish',
      desc: 'Olingan ma’lumotlar asosida Smart TV ekranida yaqqol ko‘rinadigan aniq foizlar, doiraviy va ustunli grafiklar tayyorlandi.'
    },
    {
      num: '05',
      title: '“Chiqindini sarala” rejasini tanlash',
      desc: '3 ta taklif solishtirilib, qog‘oz va plastikni alohida yig‘ish maktabimiz uchun eng foydali va qulay loyiha deb topildi.'
    },
    {
      num: '06',
      title: 'Qutilarni o‘rnatish va amalda qo‘llash',
      desc: 'Belgilangan qulay nuqtalarda rangli saralash qutilari o‘rnatildi va barcha o‘quvchilarga qoidalar tushuntirildi.'
    }
  ];

  return (
    <section id="loyiha" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Goal Card in crisp white with emerald borders */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 mb-12 text-center shadow-lg">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-800/80 px-3.5 py-1 rounded-full inline-block mb-3">
            Loyihaning asosiy maqsadi
          </span>
          <h2 className="text-xl sm:text-3xl font-black max-w-3xl mx-auto leading-snug">
            “Maktabdagi ekologik muammolarni dalillar asosida o‘rganish, o‘quvchilar mas’uliyatini oshirish va amaliy saralash tizimini yo‘lga qo‘yish.”
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto mt-4 font-medium">
            Loyiha faqat muammoni gapirish emas, balki butun 9-“D” sinf nomidan maktabimiz uchun haqiqiy amaliy natija berishga qaratilgan.
          </p>
        </div>

        {/* 6 Rich Tasks Grid */}
        <div>
          <h3 className="text-center text-2xl font-black text-slate-900 mb-8">
            Bajarilgan 6 ta aniq vazifa
          </h3>
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {detailedTasks.map((task) => (
              <ScrollItem key={task.num} className="h-full">
                <div
                  className="h-full bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-xs mb-3">
                      {task.num}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {task.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {task.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Muvaffaqiyatli bajarildi</span>
                  </div>
                </div>
              </ScrollItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
};
