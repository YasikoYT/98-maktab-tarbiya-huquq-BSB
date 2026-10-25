import React from 'react';
import { AlertCircle, HelpCircle, CheckCircle2, Trash2, Recycle, Users } from 'lucide-react';
import { ScrollStagger, ScrollItem } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      icon: Trash2,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50 border-rose-200',
      title: 'Chiqindilarni noto‘g‘ri joyga tashlash',
      cause: 'Tanaffus paytida o‘quvchilar shoshilib, qutilar uzoqda bo‘lsa chiqindini parta ostiga yoki yo‘lak burchaklariga qoldirib ketishi.',
      consequence: 'Maktab yo‘laklarida va hovlida qog‘oz, selofan va suv butilkalari to‘planadi, maktab ko‘rinishi buziladi va farroshlarga ortiqcha og‘irlik tushadi.',
      solution: 'O‘quvchilar eng ko‘p o‘tadigan gavjum yo‘laklar, oshxona chiqishi va sport maydoni atrofida qo‘shimcha qulay qutilar o‘rnatish.'
    },
    {
      num: '02',
      icon: Recycle,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-200',
      title: 'Chiqindilarni saralash tizimining yo‘qligi',
      cause: 'Maktabimizda qog‘oz va plastik uchun alohida ajratilgan idishlar yo‘qligi sababli barcha chiqindilar bitta axlat chelagiga aralashtirib tashlanadi.',
      consequence: 'Qayta ishlash mumkin bo‘lgan yuzlab qimmatbaho daftarlar, qoralama qog‘ozlar va plastik idishlar nobud bo‘ladi va umumiy chiqindixonaga ketadi.',
      solution: 'Sinflar va koridorlarga 2 xil rangli (Ko‘k — Qog‘oz uchun, Sariq — Plastik uchun) saralash qutilarini o‘rnatish va o‘quvchilarga tushuntirish.'
    },
    {
      num: '03',
      icon: Users,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-200',
      title: 'Maktab mulkiga befarqlik va mas’uliyatsizlik',
      cause: 'Ayrim o‘quvchilarda “maktabni tozalash faqat farroshlarning vazifasi” degan noto‘g‘ri tushunchaning shakllanganligi.',
      consequence: 'Maktab barchamizning umumiy uyimiz ekani unutiladi. Jamoat mulkini asramaslik va atrof-muhitga bepisand munosabat paydo bo‘ladi.',
      solution: 'Sinf rahbarlari va o‘quvchilar kengashi orqali shaxsiy ibrat ko‘rsatish hamda sinflar o‘rtasida haftalik tozalik musobaqalarini joriy etish.'
    }
  ];

  return (
    <section id="muammo" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3 border border-emerald-200">
            Muammoning mohiyati
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Maktabimizdagi ekologik muammolar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Kuzatuvlar va tahlillar natijasida maktabimizda hal qilinishi lozim bo‘lgan 3 ta asosiy masala aniqlandi:
          </p>
        </div>

        {/* Driving Question Box */}
        <div className="bg-white border-2 border-emerald-700 p-6 sm:p-8 rounded-3xl mb-12 text-center max-w-3xl mx-auto shadow-md">
          <p className="text-base sm:text-xl font-black text-emerald-950 leading-relaxed">
            “Maktabimizdagi ekologik muammolarni bartaraf etish uchun o‘quvchilar qanday amaliy tashabbus ko‘rsata oladi?”
          </p>
        </div>

        {/* 3 Rich Problem Cards */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollItem key={item.num} className="h-full">
                <div
                  className="h-full bg-white border-2 border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.iconBg}`}>
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <span className="text-xs font-mono font-black text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        MASALA {item.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3 leading-snug group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="font-bold text-slate-900 block mb-1">Keltirib chiqaruvchi sabab:</span>
                        <p className="leading-relaxed text-slate-700">{item.cause}</p>
                      </div>
                      <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-100">
                        <span className="font-bold text-rose-800 block mb-1">Oqibati va zarari:</span>
                        <p className="leading-relaxed text-slate-700">{item.consequence}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                    <span className="text-emerald-800 font-black block mb-1">Amaliy yechim taklifi:</span>
                    <p className="text-slate-800 font-medium leading-relaxed">{item.solution}</p>
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
