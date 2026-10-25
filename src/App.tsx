/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProjectProvider } from './context/ProjectContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { ProblemSection } from './components/ProblemSection';
import { GoalsSection } from './components/GoalsSection';
import { ActiveCitizenSection } from './components/ActiveCitizenSection';
import { SurveySection } from './components/SurveySection';
import { AnalysisSection } from './components/AnalysisSection';
import { LegalSection } from './components/LegalSection';
import { SolutionsSection } from './components/SolutionsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ConclusionSection } from './components/ConclusionSection';
import { SourcesSection } from './components/SourcesSection';
import { Footer } from './components/Footer';
import { PresentationMode } from './components/PresentationMode';
import { useProject } from './context/ProjectContext';

import { ScrollReveal } from './components/ScrollReveal';

const AppContent: React.FC = () => {
  const { isTvMode } = useProject();

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-900 transition-all duration-300 ${
        isTvMode ? 'tv-mode' : ''
      }`}
    >
      <Navbar />
      <main className="overflow-x-hidden">
        <ScrollReveal direction="none" duration={0.8} delay={0.05} amount={0.08}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <TeamSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <GoalsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <ActiveCitizenSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <SurveySection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <AnalysisSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <LegalSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <SolutionsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <RoadmapSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <ConclusionSection />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.8} delay={0.05} amount={0.1}>
          <SourcesSection />
        </ScrollReveal>
      </main>
      <Footer />
      <PresentationMode />
    </div>
  );
};

export default function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

