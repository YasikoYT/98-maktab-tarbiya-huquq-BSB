import React, { useEffect, useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  CheckCircle2,
  Tv,
  Award
} from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SCHOOL_INFO, SURVEY_TOTAL_RESPONDENTS, SIX_TASKS, HERO_IMAGE_PATH } from '../data/initialData';

export const PresentationMode: React.FC = () => {
  const {
    isPresentationMode,
    setIsPresentationMode,
    currentSlide,
    setCurrentSlide,
    teamMembers,
    surveyQuestions,
    solutions,
    roadmap,
  } = useProject();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide(Math.min(currentSlide + 1, totalSlides));
  }, [currentSlide, setCurrentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(Math.max(currentSlide - 1, 1));
  }, [currentSlide, setCurrentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const exitPresentation = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsPresentationMode(false);
  };

  useEffect(() => {
    if (!isPresentationMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        exitPresentation();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode, nextSlide, prevSlide]);

  if (!isPresentationMode) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 text-slate-900 flex flex-col select-none overflow-hidden font-sans">
      {/* Top Controller Bar - Clean, Mundarija Removed */}
      <div className="h-16 px-6 sm:px-8 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
          <span className="text-xs sm:text-base font-black text-slate-900 uppercase tracking-wider">
            98-MAKTAB · 9-“D” SINF · SMART TV TAQDIMOTI
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Slide counter */}
          <div className="px-4 py-1.5 bg-slate-100 rounded-xl text-xs sm:text-sm font-mono font-black text-emerald-900 border border-slate-300">
            {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            title="To‘liq ekran (F)"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          {/* Exit Presentation */}
          <button
            onClick={exitPresentation}
            className="px-3.5 py-2 text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-bold cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Chiqish (Esc)</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1.5 shrink-0">
        <div
          className="bg-emerald-600 h-full transition-all duration-300"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide Canvas - Optimized for Big TV Screen with White Backdrop */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 flex items-center justify-center bg-slate-100">
        <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center presentation-slide-enter">
          {/* SLIDE 1: Intro Title */}
          {currentSlide === 1 && (
            <div className="text-center py-8 bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-14 shadow-xl">
              <div className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm sm:text-base font-extrabold mb-8">
                {SCHOOL_INFO.schoolName} · {SCHOOL_INFO.grade} · {SCHOOL_INFO.disciplines}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                FAOL FUQARO — O‘ZGARISHLAR TASHABBUSKORI
              </h1>
              <div className="p-8 sm:p-10 bg-emerald-900 text-white border-4 border-amber-400 rounded-3xl max-w-3xl mx-auto mb-8 shadow-2xl">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
                  Jamoamizning Bosh Shiori:
                </span>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
                  {SCHOOL_INFO.slogan}
                </p>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-slate-700">
                Creator: <span className="text-emerald-800 text-lg sm:text-xl font-black">{SCHOOL_INFO.creator}</span>
              </p>
            </div>
          )}

          {/* SLIDE 2: Team Members - 100% Full Frame (Akbar and Jaloliddin completely visible with no cutoffs) */}
          {currentSlide === 2 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  Bizning jamoamiz
                </h2>
                <p className="text-sm text-slate-500 mt-1">98-maktab 9-“D” sinfining tashabbuskor 5 nafar a’zosi:</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 flex flex-col justify-between shadow-xs hover:border-emerald-600 transition-all hover:scale-105"
                  >
                    {/* Portrait box with height 260px and object-contain object-center so full body/torso is 100% visible */}
                    <div className="relative w-full h-64 sm:h-72 bg-white rounded-xl overflow-hidden mb-3 border border-slate-200 flex items-center justify-center p-1.5">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-black text-slate-900 mb-1 truncate">{member.name}</h3>
                      <span className="inline-block px-3 py-0.5 bg-emerald-800 text-white text-xs font-bold rounded-lg mb-1.5">
                        {member.role}
                      </span>
                      <p className="text-xs text-slate-600 leading-tight line-clamp-2">{member.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: Problem */}
          {currentSlide === 3 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
                  Tadqiqot mavzusi
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  Maktabimizdagi 3 ta Asosiy Muammo
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                  <span className="text-emerald-800 font-mono font-black text-xl block mb-2">01</span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Chiqindini noto‘g‘ri tashlash</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Qutilar kamligi va shoshilish oqibatida yo‘laklar va burchaklarda qadoqlar tushib qolishi.
                  </p>
                  <span className="text-xs font-bold text-emerald-800 block">Yechim: Qulay joylarga quti qo‘yish.</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                  <span className="text-emerald-800 font-mono font-black text-xl block mb-2">02</span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Saralash tizimi yo‘qligi</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Qog‘oz va plastikning bitta idishga tashlanishi sababli qayta ishlash imkoniyati yo‘qolishi.
                  </p>
                  <span className="text-xs font-bold text-emerald-800 block">Yechim: Rangli qutilarni o‘rnatish.</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                  <span className="text-emerald-800 font-mono font-black text-xl block mb-2">03</span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Maktab mulkiga befarqlik</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Maktab barchamizning umumiy uyimiz ekanini unutib, “tozalash faqat farroshning ishi” deb qarash.
                  </p>
                  <span className="text-xs font-bold text-emerald-800 block">Yechim: Shaxsiy ibrat va musobaqa.</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: Goals & 6 Tasks */}
          {currentSlide === 4 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl text-center">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-2">
                Asosiy maqsad
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-8 max-w-3xl mx-auto leading-snug">
                “Maktabdagi ekologik muammolarni dalillar asosida o‘rganish va amaliy saralash tizimini yo‘lga qo‘yish.”
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-xs sm:text-sm text-left">
                {SIX_TASKS.map((item, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-bold text-slate-800 flex items-center gap-3 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-xs shrink-0">
                      0{i + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: Active Citizen Concept */}
          {currentSlide === 5 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6">
                Faol fuqaro tushunchasi
              </h2>
              <div className="p-6 bg-emerald-50 border-2 border-emerald-600/40 rounded-2xl max-w-3xl mx-auto mb-8">
                <p className="text-lg sm:text-2xl font-bold text-emerald-950 leading-relaxed">
                  “Faol fuqaro — o‘z huquq va burchlarini biladigan, boshqalarni hurmat qiladigan va maktabni toza saqlashda amaliy tashabbus ko‘rsatadigan o‘quvchidir.”
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
                {['1. Mas’uliyat', '2. Tashabbus', '3. Hamkorlik', '4. Qonunga hurmat', '5. Daxldorlik'].map((f, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 text-sm sm:text-base font-black text-emerald-900">
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 6: Survey Overview (13 Students) */}
          {currentSlide === 6 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-1">
                  Akbar so‘rovnomasi
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  13 ta o‘quvchi so‘rovnomasi
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {surveyQuestions.slice(0, 6).map((q) => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="font-black text-emerald-800">Savol {q.id}: </span>
                    <span className="text-slate-800 font-semibold">{q.question}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 7: Stats & Findings */}
          {currentSlide === 7 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-1">
                  Jaloliddin hisob-kitoblari
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  Tadqiqot Natijalari (13 o‘quvchi)
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-5xl font-black text-emerald-800 font-mono block mb-2">84.6%</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold">Saralash qutilari yo‘q deb bildirdi</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-5xl font-black text-emerald-800 font-mono block mb-2">92.3%</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold">Hasharlarda qatnashishga to‘liq tayyor</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-5xl font-black text-emerald-800 font-mono block mb-2">69.2%</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold">Rangli saralash qutilari qo‘yish tarafdori</p>
                </div>
              </div>
              <div className="p-5 bg-emerald-900 text-white rounded-2xl text-center text-xs sm:text-sm font-bold">
                Xulosa: O‘quvchilar tozalikka to‘liq tayyor, faqat maktabda rangli saralash qutilari o‘rnatilishi zarur!
              </div>
            </div>
          )}

          {/* SLIDE 8: Constitutional Laws */}
          {currentSlide === 8 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-1">
                  Ayubxon tahlili
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  Konstitutsiyaviy va Qonuniy Asoslar
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200">
                  <span className="px-3 py-1 bg-emerald-800 text-white font-black text-xs rounded-md inline-block mb-3">
                    49-modda
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Qulay atrof-muhit huquqi</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Har bir o‘quvchining toza, ozoda va sog‘lom maktab muhitida o‘qishga qonuniy haqi bor.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-200">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-md inline-block mb-3">
                    62-modda
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Tabiatni asrash burchi</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Chiqindini yerga tashlamaslik va maktab hududini ozoda saqlash — har birimizning qat’iy burchimizdir.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: Practical Solution */}
          {currentSlide === 9 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-1">
                  Amaliy yechim
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
                  “Chiqindini Sarala” Tizimi
                </h2>
              </div>
              <div className="p-8 bg-emerald-900 text-white border-4 border-amber-400 rounded-3xl max-w-3xl mx-auto text-center shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-black text-amber-300 mb-3">
                  Ko‘k (Qog‘oz) va Sariq (Plastik) Qutilar
                </h3>
                <p className="text-sm text-emerald-100 leading-relaxed mb-6">
                  Maktab oshxonasi va yo‘laklarida alohida saralash qutilari o‘rnatildi va xomashyo qayta ishlashga yo‘naltiriladi.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-mono font-bold text-white pt-4 border-t border-emerald-700">
                  <div>Oyiga 50 kg makulatura</div>
                  <div>Oyiga 20 kg plastik qayta ishlanadi</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 10: Conclusion */}
          {currentSlide === 10 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-12 shadow-xl text-center">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest block w-max mx-auto mb-3">
                Xulosa
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6">
                Faol Fuqarolik Maktabni O‘zgartiradi!
              </h2>
              <div className="p-8 sm:p-12 bg-emerald-900 text-white border-4 border-amber-400 rounded-3xl max-w-3xl mx-auto shadow-2xl mb-6">
                <p className="text-2xl sm:text-4xl font-black text-amber-300 mb-4">
                  {SCHOOL_INFO.slogan}
                </p>
                <div className="pt-3 border-t border-emerald-700 text-xs sm:text-sm text-emerald-200 font-medium">
                  98-maktab 9-“D” sinfi · Creator: <strong className="text-white text-base sm:text-lg">{SCHOOL_INFO.creator}</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar - TV Controls: Previous & Next with Giant Buttons */}
      <div className="h-20 px-6 sm:px-12 bg-white border-t border-slate-200 flex items-center justify-between shrink-0 shadow-md">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-900 font-black rounded-2xl text-xs sm:text-base transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Oldingi slayd</span>
        </button>

        <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentSlide(num)}
              className={`w-8 h-8 rounded-xl text-xs sm:text-sm font-mono font-black transition-all cursor-pointer ${
                currentSlide === num
                  ? 'bg-emerald-800 text-white scale-110 shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-700 disabled:opacity-30 text-white font-black rounded-2xl text-xs sm:text-base transition-colors cursor-pointer shadow-md"
        >
          <span>Keyingi slayd</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
