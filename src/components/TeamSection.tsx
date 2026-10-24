import React, { useState } from 'react';
import { X, Award, CheckCircle2, Sparkles, User } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { TeamMember } from '../types';

export const TeamSection: React.FC = () => {
  const { teamMembers } = useProject();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="jamoamiz" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>98-maktab 9-“D” sinf</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Bizning jamoamiz
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Har bir o‘quvchi haqida batafsil ma’lumot olish uchun fotosurat ustiga bosing:
          </p>
        </div>

        {/* 5 Animated Portrait Cards with Full Frame (No Cutoffs!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative bg-white border-2 border-slate-200 hover:border-emerald-600 rounded-3xl p-3.5 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl shadow-sm flex flex-col justify-between"
              style={{
                animation: `floatGentle 4.5s ease-in-out infinite ${idx * 0.4}s`
              }}
            >
              {/* Photo Frame - Height 320px with object-contain object-center so Akbar & Jaloliddin are 100% visible with no cuts */}
              <div className="relative w-full h-76 bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl overflow-hidden mb-4 p-2 flex items-center justify-center border border-slate-100 group-hover:bg-emerald-50/40 transition-colors">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number marker */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-md text-slate-800 font-mono text-xs font-black flex items-center justify-center shadow-xs border border-slate-200">
                  0{member.order}
                </div>

                {/* Hover Click Hint */}
                <div className="absolute bottom-2.5 inset-x-3 text-center py-1.5 bg-slate-900/85 backdrop-blur-md text-[11px] font-bold text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ma’lumotni ko‘rish
                </div>
              </div>

              {/* Details BELOW Photo */}
              <div className="px-1 text-center">
                <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-800 transition-colors truncate mb-1">
                  {member.name}
                </h3>

                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-xs rounded-lg mb-2">
                  {member.role}
                </span>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {member.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Interactive Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Full height portrait inside modal */}
              <div className="w-44 h-56 bg-slate-100 rounded-2xl overflow-hidden border-2 border-emerald-600 p-2 mb-4 shadow-md flex items-center justify-center">
                <img
                  src={selectedMember.photoUrl}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                {selectedMember.name}
              </h3>
              <span className="px-3.5 py-1 bg-emerald-800 text-white font-extrabold text-xs rounded-full mb-4">
                {selectedMember.role}
              </span>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 text-left w-full space-y-3 mb-6">
                <div>
                  <strong className="text-emerald-900 block mb-0.5 font-bold">Asosiy vazifasi:</strong>
                  <p className="leading-relaxed">{selectedMember.task}</p>
                </div>
                <div>
                  <strong className="text-amber-800 block mb-0.5 font-bold">Loyiha doirasidagi hissasi:</strong>
                  <p className="leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
