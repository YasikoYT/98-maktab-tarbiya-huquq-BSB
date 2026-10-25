import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  CheckCircle2,
  Tv,
  Award,
  Sparkles,
  BookOpen,
  Recycle,
  Scale,
  Users,
  TrendingUp,
  FileText
} from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { SCHOOL_INFO, SURVEY_TOTAL_RESPONDENTS, SIX_TASKS, HERO_IMAGE_PATH, SOLUTION_IMAGE_PATH, SOLUTION_FALLBACK_PATH } from '../data/initialData';
import { playSlideSound, playClickSound, playChimeSound } from '../utils/soundEffects';

export const PresentationMode: React.FC = () => {
  const {
    isPresentationMode,
    setIsPresentationMode,
    currentSlide,
    setCurrentSlide,
    teamMembers,
    surveyQuestions,
    solutions,
  } = useProject();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    playSlideSound();
    setCurrentSlide(Math.min(currentSlide + 1, totalSlides));
  }, [currentSlide, setCurrentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    playSlideSound();
    setCurrentSlide(Math.max(currentSlide - 1, 1));
  }, [currentSlide, setCurrentSlide]);

  const toggleFullscreen = () => {
    playClickSound();
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
    playClickSound();
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
      {/* Top Controller Bar - Clean and Crisp */}
      <div className="h-16 px-6 sm:px-8 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-black text-xs">
            98
          </div>
          <span className="text-xs sm:text-base font-black text-slate-900 uppercase tracking-wider">
            98-MAKTAB · 9-“D” SINF · TAQDIMOTNI BOSHLASH (TV)
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
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 16, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center"
          >

          {/* SLIDE 1: Intro Title (Without Creator - Creator is only at the end!) */}
          {currentSlide === 1 && (
            <div className="text-center py-6 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-extrabold mb-5">
                {SCHOOL_INFO.schoolName} · {SCHOOL_INFO.grade} · {SCHOOL_INFO.disciplines}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                FAOL FUQARO — O‘ZGARISHLAR TASHABBUSKORI
              </h1>

              <div className="p-6 bg-emerald-900 text-white border-4 border-amber-400 rounded-3xl max-w-3xl mx-auto mb-6 shadow-2xl">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  Jamoamizning Bosh Shiori:
                </span>
                <p className="text-xl sm:text-3xl lg:text-4xl font-black text-white">
                  {SCHOOL_INFO.slogan}
                </p>
              </div>

              {/* 3 Rich Introductory Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    <span>1. Real muammoni o‘rganish</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Maktab hovlisi va sinflaridagi chiqindilar sabablarini aniqlash va o‘rganish.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>2. 13 nafar o‘quvchi so‘rovi</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Sinfdoshlarimiz fikrini anonim tarzda yig‘ib, matematik foizlarda tahlil qilish.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                    <Recycle className="w-4 h-4 text-emerald-700" />
                    <span>3. Amaliy saralash tizimi</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Qog‘oz va plastik uchun rangli qutilarni joriy etib, maktab tozaligini ta’minlash.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Team Members - 100% Full Frame with Rich Details */}
          {currentSlide === 2 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl">
              <div className="text-center mb-5">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Tashabbuskorlar
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Bizning Jamoamiz va Har Bir A’zoning Vazifasi
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
                  98-maktab 9-“D” sinfining 5 nafar o‘quvchisi o‘rtasida aniq taqsimlangan vazifalar:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 pb-4">
                {teamMembers.map((member, idx) => {
                  const floatClass = [
                    'animate-team-float-1',
                    'animate-team-float-2',
                    'animate-team-float-3',
                    'animate-team-float-4',
                    'animate-team-float-5',
                  ][idx % 5];
                  const shadowClass = idx % 2 === 0 ? 'animate-shadow-wave-1' : 'animate-shadow-wave-2';

                  return (
                    <div key={member.id} className="flex flex-col items-center">
                      <div
                        className={`w-full bg-slate-50 border-2 border-slate-200/90 rounded-2xl p-3 flex flex-col justify-between shadow-md hover:border-emerald-600 transition-all hover:scale-105 ${floatClass}`}
                      >
                        {/* Portrait box with height 240px and object-contain object-center so full body/torso is 100% visible */}
                        <div className="relative w-full h-56 sm:h-60 bg-gradient-to-b from-white to-slate-100/80 rounded-xl overflow-hidden mb-2 border border-slate-200 flex items-center justify-center p-1.5 shadow-inner">
                          <img
                            src={member.photoUrl}
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain object-center filter drop-shadow-sm transition-transform duration-500 hover:scale-108"
                          />
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-emerald-800 text-white font-mono text-[10px] font-black flex items-center justify-center shadow-xs">
                            0{member.order}
                          </div>
                        </div>
                        <div className="text-center px-1">
                          <h3 className="text-sm sm:text-base font-black text-slate-900 mb-0.5 truncate">{member.name}</h3>
                          <span className="inline-block px-2.5 py-0.5 bg-emerald-800 text-white text-[11px] font-bold rounded-lg mb-1 shadow-xs">
                            {member.role}
                          </span>
                          <p className="text-[11px] text-slate-600 leading-tight mb-1 font-medium">{member.task}</p>
                          <p className="text-[10px] text-emerald-900 bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 leading-tight">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                      <div className={`w-3/4 h-2.5 mt-2 bg-emerald-950/20 rounded-full blur-xs ${shadowClass}`} aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SLIDE 3: Problem - Deep & Rich */}
          {currentSlide === 3 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Mavzuning dolzarbligi
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Maktabimizda Aniqlangan 3 ta Ekologik Muammo
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
                  Kuzatuvlarimiz davomida sinfxonalar, yo‘laklar va hovlida quyidagi asosiy kamchiliklar qayd etildi:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                        1-MUAMMO
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-2">Chiqindini noto‘g‘ri tashlash</h3>
                    <div className="text-xs space-y-2 text-slate-600">
                      <p><strong className="text-slate-900">Sababi:</strong> Tanaffusda vaqt ozligi, o‘quvchilar shoshilib chiqindini parta ostiga yoki burchaklarga qoldirishi.</p>
                      <p><strong className="text-rose-700">Zarari:</strong> Maktab ko‘rinishi buziladi, farroshlarga ortiqcha og‘irlik tushadi, sinfda noxush havo paydo bo‘ladi.</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs font-bold text-emerald-800">
                    Amaliy chorasi: Gavjum yo‘laklar va oshxona oldiga qulay qutilar qo‘yish.
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        2-MUAMMO
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-2">Saralash tizimining yo‘qligi</h3>
                    <div className="text-xs space-y-2 text-slate-600">
                      <p><strong className="text-slate-900">Sababi:</strong> Maktabda qog‘oz va plastik uchun alohida idishlar yo‘qligi sababli hammasi bitta axlatga aralashadi.</p>
                      <p><strong className="text-rose-700">Zarari:</strong> Qayta ishlash mumkin bo‘lgan yuzlab daftarlar va plastik idishlar axlatxonaga ketib nobud bo‘ladi.</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs font-bold text-emerald-800">
                    Amaliy chorasi: Ko‘k (qog‘oz) va Sariq (plastik) saralash qutilarini o‘rnatish.
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        3-MUAMMO
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-2">Maktab mulkiga befarqlik</h3>
                    <div className="text-xs space-y-2 text-slate-600">
                      <p><strong className="text-slate-900">Sababi:</strong> Ayrim o‘quvchilarda “tozalik faqat xodimlarning ishi” degan noto‘g‘ri tasavvur borligi.</p>
                      <p><strong className="text-rose-700">Zarari:</strong> Partalar chiziladi, jamoat mulki qadrlanmaydi, fuqarolik mas’uliyati shakllanmaydi.</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs font-bold text-emerald-800">
                    Amaliy chorasi: Shaxsiy o‘rnak bo‘lish va sinflararo haftalik tozalik musobaqasi.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: Goals & 6 Tasks - Detailed */}
          {currentSlide === 4 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl text-center">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                Loyiha dasturi
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 max-w-3xl mx-auto leading-snug">
                “Maktabdagi ekologik muammolarni dalillar bilan o‘rganish va saralash tizimini yo‘lga qo‘yish”
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl mx-auto text-xs text-left">
                {SIX_TASKS.map((item, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-semibold text-slate-800 flex items-start gap-3 shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <div>
                      <p className="leading-snug">{item}</p>
                      <span className="text-[10px] text-emerald-700 font-bold mt-1 inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Amalda bajarildi
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: Active Citizen Concept & 5 Pillars */}
          {currentSlide === 5 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl text-center">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                Tarbiya va huquqiy ong
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4">
                Faol Fuqaro Tushunchasi va 5 ta Asosiy Fazilat
              </h2>
              <div className="p-4 sm:p-5 bg-emerald-50 border-2 border-emerald-600/40 rounded-2xl max-w-3xl mx-auto mb-6">
                <p className="text-base sm:text-lg font-bold text-emerald-950 leading-relaxed">
                  “Faol fuqaro — o‘z huquq va burchlarini to‘liq tushunadigan, tengdoshlarini hurmat qiladigan va maktabini toza saqlashda amaliy tashabbus ko‘rsatadigan o‘quvchidir.”
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-left">
                <div className="p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">1. Mas’uliyat</span>
                  <p className="text-[11px] text-slate-600 leading-tight">O‘zidan keyin sinf va yo‘lakni doimo ozoda qoldirish.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">2. Tashabbus</span>
                  <p className="text-[11px] text-slate-600 leading-tight">Muammoga qarab turmay, amaliy tozalik rejasini taklif qilish.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">3. Hamkorlik</span>
                  <p className="text-[11px] text-slate-600 leading-tight">Sinfdoshlar, ustozlar va xo‘jalik bo‘limi bilan birgalikda ishlash.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">4. Qonunga hurmat</span>
                  <p className="text-[11px] text-slate-600 leading-tight">Konstitutsiya va maktab ichki nizomiga qat’iy rioya etish.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">5. Daxldorlik</span>
                  <p className="text-[11px] text-slate-600 leading-tight">Maktabni o‘z uyi kabi asrash, parta va jihozlarga g‘amxo‘rlik.</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: Survey Overview (13 Students - Rich Breakdown) */}
          {currentSlide === 6 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Akbar olib borgan sotsiologik anketa
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  13 nafar o‘quvchi o‘rtasidagi so‘rovnoma natijalari
                </h2>
                <p className="text-xs text-slate-600 mt-1">9-“D” sinfdoshlarimizning 7 ta asosiy savolga bergan javoblari:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {surveyQuestions.map((q) => (
                  <div key={q.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-emerald-800 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                          {q.id}
                        </span>
                        <h3 className="font-bold text-slate-900 leading-snug line-clamp-1">{q.question}</h3>
                      </div>
                      <div className="space-y-1 mt-2">
                        {q.options?.map((opt, idx) => (
                          <div key={idx} className="flex justify-between text-[11px] text-slate-700">
                            <span className="truncate pr-1">{opt.label.split('(')[0]}</span>
                            <span className="font-mono font-bold text-emerald-900 shrink-0">{opt.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 7: Stats & Findings - In-depth */}
          {currentSlide === 7 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Jaloliddin tahlillari
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Tadqiqotning 3 ta Asosiy Natijasi va Dalillari
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 text-center">
                <div className="p-5 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-800 font-mono block mb-1">84.6%</span>
                  <p className="text-xs sm:text-sm text-slate-800 font-bold mb-1">Saralash qutisi yo‘q</p>
                  <p className="text-[11px] text-slate-500">13 tadan 11 ta o‘quvchi qog‘oz va plastik uchun alohida idish yo‘qligini tasdiqlagan.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-800 font-mono block mb-1">92.3%</span>
                  <p className="text-xs sm:text-sm text-slate-800 font-bold mb-1">Hasharda qatnashishga tayyor</p>
                  <p className="text-[11px] text-slate-500">13 tadan 12 ta o‘quvchi maktab tozaligi va obodonlashtirishda jon deb qatnashadi.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-600 transition-colors">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-800 font-mono block mb-1">69.2%</span>
                  <p className="text-xs sm:text-sm text-slate-800 font-bold mb-1">Rangli qutilar tarafdori</p>
                  <p className="text-[11px] text-slate-500">O‘quvchilar Ko‘k va Sariq qutilar qo‘yilsa, muammo darhol hal bo‘lishini aytgan.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-emerald-900 text-white rounded-2xl">
                  <span className="text-amber-300 font-bold block mb-1">1. Xulosa — Sharoit omili:</span>
                  <p className="text-emerald-50 leading-relaxed">
                    Muammo o‘quvchilarning befarqligida emas, balki saralash sharoiti va rangli qutilar yo‘qligida. Sharoit yaratilsa, tozalik kafolatlanadi.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-2xl">
                  <span className="text-emerald-400 font-bold block mb-1">2. Xulosa — Ishtiyoq omili:</span>
                  <p className="text-slate-100 leading-relaxed">
                    Sinfdoshlarimiz 92.3% tozalikka ko‘maklashishga tayyor. Demak, jazolash emas, qulay tizim va shaxsiy ibrat eng yaxshi samara beradi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 8: Constitutional Laws - Clear & Substantial */}
          {currentSlide === 8 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Ayubxon huquqiy tahlili
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Konstitutsiya va Qonuniy Huquqiy Asoslar
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Maktab tozaligi — bu qonuniy huquq va fuqarolik burchimizning amaliy ifodasi:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 bg-emerald-800 text-white font-black text-xs rounded-md inline-block mb-2">
                      49-modda
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1">Qulay atrof-muhit huquqi</h3>
                    <p className="text-xs text-slate-600 italic mb-3">“Har kim qulay atrof-muhitga, uning holati to‘g‘risidagi ishonchli axborotga ega bo‘lish huquqiga ega.”</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs text-emerald-900 font-bold">
                    Maktabdagi ma’nosi: Har bir o‘quvchi ozoda va sog‘lom sinfda o‘qishga qonuniy haqlidir.
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-md inline-block mb-2">
                      62-modda
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1">Tabiatni asrash burchi</h3>
                    <p className="text-xs text-slate-600 italic mb-3">“Fuqarolar atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdirlar.”</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs text-emerald-900 font-bold">
                    Maktabdagi ma’nosi: Chiqindini yerga tashlamaslik — shaxsiy xohish emas, fuqarolik burchimizdir.
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 bg-slate-900 text-white font-black text-xs rounded-md inline-block mb-2">
                      48-modda
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1">Maktab mulkini asrash</h3>
                    <p className="text-xs text-slate-600 italic mb-3">“Ta’lim oluvchilar mol-mulkka ehtiyotkorona munosabatda bo‘lishi, sanitariya qoidalariga rioya etishi shart.”</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs text-emerald-900 font-bold">
                    Maktabdagi ma’nosi: Partalar va koridorlarni toza tutish barchamizning qat’iy majburiyatimiz.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: Practical Solution with Photo & Metrics */}
          {currentSlide === 9 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1">
                  Amaliy loyiha
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  “Chiqindini Sarala” Tizimi — Amaliy Yechim
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-5 h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-emerald-600 shadow-md">
                  <img
                    src={SOLUTION_IMAGE_PATH}
                    onError={(e) => {
                      if (e.currentTarget.src !== SOLUTION_FALLBACK_PATH) {
                        e.currentTarget.src = SOLUTION_FALLBACK_PATH;
                      }
                    }}
                    alt="Saralash qutilari amaliyoti"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="p-4 bg-emerald-900 text-white border-2 border-amber-400 rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-black text-amber-300 mb-1">
                      Ko‘k (Qog‘oz) va Sariq (Plastik) Qutilar
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                      Oshxona chiqishi va 9-sinflar yo‘lagida alohida saralash qutilari o‘rnatildi. O‘quvchilar dars oralig‘ida qog‘oz va butilkalarni ajratib tashlashmoqda.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="block text-emerald-800 font-mono font-black text-sm">50 kg / oy</strong>
                      <span className="text-[10px] text-slate-600">Qayta ishlanadigan qog‘oz</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="block text-emerald-800 font-mono font-black text-sm">20 kg / oy</strong>
                      <span className="text-[10px] text-slate-600">Qayta ishlanadigan plastik</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="block text-emerald-800 font-mono font-black text-sm">75% kamroq</strong>
                      <span className="text-[10px] text-slate-600">Yo‘lakdagi chiqindi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 10: Conclusion & Creator Akramov Anvar (Prominently displayed at the END!) */}
          {currentSlide === 10 && (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl text-center">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3 border border-emerald-200">
                Yakuniy Xulosa
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6">
                Faol Fuqarolik Maktabni O‘zgartiradi!
              </h2>

              <div className="p-8 sm:p-12 bg-emerald-900 text-white border-4 border-amber-400 rounded-3xl max-w-3xl mx-auto shadow-2xl mb-6">
                <p className="text-2xl sm:text-4xl font-black text-amber-300 mb-6">
                  {SCHOOL_INFO.slogan}
                </p>
                <div className="p-4 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-6">
                  “Toza maktab — bu shunchaki orzu emas. Bu har bir o‘quvchining shaxsiy ibrati, qonuniy mas’uliyati va umumiy uyimizga bo‘lgan hurmatidir!”
                </div>

                {/* Creator strictly at the end */}
                <div className="pt-4 border-t border-emerald-700/80 flex flex-col items-center justify-center">
                  <span className="text-xs uppercase font-mono text-emerald-300 font-bold mb-1">
                    Loyiha muallifi va taqdimotchisi:
                  </span>
                  <div className="text-xl sm:text-3xl font-black text-white bg-emerald-800/80 px-6 py-2 rounded-2xl border border-amber-400/80 shadow-md">
                    Creator: <span className="text-amber-300">{SCHOOL_INFO.creator}</span>
                  </div>
                  <span className="text-xs text-emerald-300 font-semibold mt-2">
                    98-sonli umumiy o‘rta ta’lim maktabi · 9-“D” sinf jamoasi
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
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
              onClick={() => {
                playClickSound();
                setCurrentSlide(num);
              }}
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
