import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Scale, Eye, BookOpen } from 'lucide-react';
import { ScrollStagger, ScrollItem } from './ScrollReveal';

export const ActiveCitizenSection: React.FC = () => {
  const qualities = [
    {
      icon: ShieldCheck,
      title: 'Mas’uliyat',
      desc: 'O‘z xatti-harakatlarining maktabga ta’sirini tushunish va chiqindini hech qachon duch kelgan joyga tashlamaslik.'
    },
    {
      icon: Zap,
      title: 'Tashabbuskorlik',
      desc: 'Muammoga shunchaki qarab turmasdan, uni bartaraf etish bo‘yicha yangi va amaliy takliflar bilan chiqish.'
    },
    {
      icon: HeartHandshake,
      title: 'Hamkorlik',
      desc: 'Tengdoshlar va o‘quvchilar jamoasi bilan birgalikda birdamlikda va faol harakat qilish.'
    },
    {
      icon: Scale,
      title: 'Qonunlarga hurmat',
      desc: 'Konstitutsiya, davlat qonunlari hamda maktabning ichki tartib-qoidalariga so‘zsiz rioya etish.'
    },
    {
      icon: Eye,
      title: 'Daxldorlik',
      desc: 'Maktab mulkini, partalarni, yashil maydonlarni o‘z uyi kabi asrab-avaylash va g‘amxo‘rlik qilish.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider block w-max mx-auto mb-2">
            Fuqarolik burchi va tarbiya
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Faol fuqaro tushunchasi
          </h2>
          <div className="bg-white border-2 border-emerald-600/30 rounded-3xl p-6 shadow-sm">
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              “Faol fuqaro — o‘z huquq va burchlarini biladigan, boshqalarning huquqlarini hurmat qiladigan va maktabini toza saqlashda amaliy tashabbus ko‘rsatadigan o‘quvchidir.”
            </p>
          </div>
        </div>

        {/* 5 Virtues Grid */}
        <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {qualities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollItem key={idx} className="h-full">
                <div
                  className="h-full bg-white border border-slate-200 p-5 rounded-2xl text-center hover:border-emerald-500 hover:shadow-md transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    Fazilat 0{idx + 1}
                  </div>
                </div>
              </ScrollItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
};
