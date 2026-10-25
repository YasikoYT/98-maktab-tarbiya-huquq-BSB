import React, { createContext, useContext, useState } from 'react';
import {
  TeamMember,
  SurveyQuestion,
  PracticalSolution,
  RoadmapStep,
} from '../types';
import {
  INITIAL_TEAM_MEMBERS,
  INITIAL_SURVEY_QUESTIONS,
  PRACTICAL_SOLUTIONS,
  ROADMAP_STEPS,
} from '../data/initialData';

interface ProjectContextType {
  teamMembers: TeamMember[];
  surveyQuestions: SurveyQuestion[];
  solutions: PracticalSolution[];
  roadmap: RoadmapStep[];
  isPresentationMode: boolean;
  setIsPresentationMode: (val: boolean) => void;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  userStance: 'yes' | 'no' | 'neutral' | null;
  setUserStance: (stance: 'yes' | 'no' | 'neutral' | null) => void;
  isTvMode: boolean;
  toggleTvMode: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teamMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [surveyQuestions] = useState<SurveyQuestion[]>(INITIAL_SURVEY_QUESTIONS);
  const [solutions] = useState<PracticalSolution[]>(PRACTICAL_SOLUTIONS);
  const [roadmap] = useState<RoadmapStep[]>(ROADMAP_STEPS);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [userStance, setUserStance] = useState<'yes' | 'no' | 'neutral' | null>('yes');
  const [isTvMode, setIsTvMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('tv_mode_active') === 'true';
    } catch {
      return false;
    }
  });

  const toggleTvMode = () => {
    setIsTvMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('tv_mode_active', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        teamMembers,
        surveyQuestions,
        solutions,
        roadmap,
        isPresentationMode,
        setIsPresentationMode,
        currentSlide,
        setCurrentSlide,
        userStance,
        setUserStance,
        isTvMode,
        toggleTvMode,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
