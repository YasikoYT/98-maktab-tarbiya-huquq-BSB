import React from 'react';
import { AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Chiqindilarni noto‘g‘ri joyga tashlash',
      cause: 'Tanaffus paytida o‘quvchilar shoshilib, qutilar uzoqda bo‘lsa chiqindini stol ostiga yoki yo‘lak burchaklariga qoldirib ketishi.',
      consequence: 'Maktab yo‘laklarida va hovlida qog‘oz, selofan va suv butilkalari to‘planadi, maktab ko‘rinishi buziladi va farroshlarga ortiqcha og‘irlik tushadi.',
      solution: 'O‘quvchilar eng ko‘p o‘tadigan gavjum yo‘laklar, oshxona chiqishi va sport maydoni atrofida qo‘shimcha qulay qutilar o‘rnatish.'
    },
    {
      num: '02',
      title: 'Chiqindilarni saralash tizimining yo‘qligi',
      cause: 'Maktabimizda qog‘oz va plastik uchun alohida ajratilgan idishlar yo‘qligi sababli barcha chiqindilar bitta axlat chelagiga aralashtirib tashlanadi.',
      consequence: 'Qayta ishlash mumkin bo‘lgan yuzlab qimmatbaho daftarlar, kitob varaqlari va plastik idishlar nobud bo‘ladi va umumiy chiqindixonaga ketadi.',
      solution: 'Sinflar va koridorlarga 2 xil rangli (Ko‘k — Qog‘oz uchun, Sariq — Plastik uchun) saralash qutilarini o‘rnatish va o‘quvchilarga tushuntirish.'
    },
    {
      num: '03',
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
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider block w-max mx-auto mb-2">
            Muammoning mohiyati
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Maktabimizdagi ekologik muammolar
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Kuzatuvlar va tahlillar natijasida maktabimizda hal qilinishi lozim bo‘lgan 3 ta asosiy masala aniqlandi:
          </p>
        </div>

        {/* Driving Question Box */}
        <div className="bg-white border-2 border-emerald-800 p-6 sm:p-7 rounded-3xl mb-12 text-center max-w-3xl mx-auto shadow-md">
          <p className="text-base sm:text-xl font-bold text-emerald-950 leading-snug">
            “Maktabimizdagi ekologik muammolarni kamaytirish uchun o‘quvchilar qanday qonuniy va amaliy tashabbus ko‘rsata oladi?”
          </p>
        </div>

        {/* 3 Rich Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.num}
              className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-600 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    MASALA 0{item.num}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">Keltirib chiqaruvchi sabab:</span>
                    <p className="leading-relaxed">{item.cause}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-bold text-rose-700 block mb-1">Oqibati va zarari:</span>
                    <p className="leading-relaxed">{item.consequence}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-xs">
                <span className="text-emerald-800 font-bold block mb-1">Amaliy yechim taklifi:</span>
                <p className="text-slate-800 font-medium leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
