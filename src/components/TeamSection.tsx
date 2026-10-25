import React, { useState } from 'react';
import { X, Sparkles, User, Info } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { TeamMember } from '../types';
import { playClickSound, playPopSound } from '../utils/soundEffects';

export const TeamSection: React.FC = () => {
  const { teamMembers } = useProject();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    playPopSound();
    setSelectedMember(member);
  };

  const handleClose = () => {
    playClickSound();
    setSelectedMember(null);
  };

  return (
    <section id="jamoamiz" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>98-maktab · 9-“D” sinf loyiha tashabbuskorlari</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Bizning jamoamiz
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-xl mx-auto font-medium">
            Jamoamiz a’zolari haqida bilish uchun fotosurat ustiga bosing:
          </p>
        </div>

        {/* 5 Animated Floating Portrait Cards with Levitation and Full Visibility (No cuts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 sm:gap-6 pt-4 pb-10">
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
                {/* Floating Card Container */}
                <div
                  onClick={() => handleMemberClick(member)}
                  className={`w-full group relative bg-white border-2 border-slate-200/90 hover:border-emerald-500 rounded-3xl p-3.5 cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between shimmer-effect ${floatClass}`}
                >
                  {/* Glowing Ambient Halo behind the Card */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-400/15 to-emerald-600/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500 -z-10" />

                  {/* Photo Frame - Height 320px with object-contain object-center so all members are 100% visible with zero cuts */}
                  <div className="relative w-full h-80 bg-gradient-to-b from-slate-50 via-slate-100/70 to-emerald-50/40 rounded-2xl overflow-hidden mb-3.5 p-2 flex items-center justify-center border border-slate-200/80 group-hover:border-emerald-300 transition-all duration-500">
                    {/* Spinning Soft Aurora behind character */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18)_0%,transparent_70%)] animate-aurora pointer-events-none" />

                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-110 filter drop-shadow-md z-10"
                    />

                    {/* Order Number badge */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md text-emerald-950 font-mono text-xs font-black flex items-center justify-center shadow-xs border border-emerald-200 z-20">
                      0{member.order}
                    </div>

                    {/* Info status badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 backdrop-blur-md text-slate-800 rounded-md text-[10px] font-bold flex items-center gap-1.5 shadow-xs border border-slate-200 z-20">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>9-“D”</span>
                    </div>

                    {/* Floating Hover Button */}
                    <div className="absolute bottom-2.5 inset-x-3 text-center py-2 bg-emerald-700/95 backdrop-blur-md text-xs font-black text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg z-20 flex items-center justify-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>Batafsil ma’lumot</span>
                    </div>
                  </div>

                  {/* Details BELOW Photo */}
                  <div className="px-1 text-center">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors truncate mb-1">
                      {member.name}
                    </h3>

                    <span className="inline-block px-3 py-1 bg-emerald-100/90 text-emerald-950 font-black text-xs rounded-lg mb-2 shadow-xs border border-emerald-200/60">
                      {member.role}
                    </span>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                      {member.task}
                    </p>
                  </div>
                </div>

                {/* Dynamic Ground Shadow that breathes and pulsates as the card floats up and down */}
                <div
                  className={`w-3/4 h-3.5 mt-2 bg-emerald-950/25 rounded-full blur-md ${shadowClass}`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Member Interactive Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-emerald-500 rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Full height portrait inside modal */}
              <div className="w-48 h-60 bg-gradient-to-b from-slate-50 to-emerald-50/50 rounded-2xl overflow-hidden border-2 border-emerald-600 p-2 mb-4 shadow-lg flex items-center justify-center">
                <img
                  src={selectedMember.photoUrl}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain object-center filter drop-shadow-md"
                />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                {selectedMember.name}
              </h3>
              <span className="px-4 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-full mb-4 shadow-sm">
                {selectedMember.role}
              </span>

              {/* Task and Bio */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 text-left w-full space-y-3 mb-6">
                <div>
                  <strong className="text-emerald-900 block mb-0.5 font-bold">Asosiy vazifasi:</strong>
                  <p className="leading-relaxed text-slate-800">{selectedMember.task}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Loyiha doirasidagi hissasi:</strong>
                  <p className="leading-relaxed text-slate-700">{selectedMember.bio}</p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm rounded-xl transition-all cursor-pointer shadow-md"
              >
                Tushunarli, yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
