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

export default function App() {
  return (
    <ProjectProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />
        <main>
          <HeroSection />
          <TeamSection />
          <ProblemSection />
          <GoalsSection />
          <ActiveCitizenSection />
          <SurveySection />
          <AnalysisSection />
          <LegalSection />
          <SolutionsSection />
          <RoadmapSection />
          <ConclusionSection />
          <SourcesSection />
        </main>
        <Footer />
        <PresentationMode />
      </div>
    </ProjectProvider>
  );
}
