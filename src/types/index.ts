export interface TeamMember {
  id: string;
  order: number;
  name: string;
  role: string;
  task: string;
  photoUrl: string;
  bio: string;
  skills: string[];
}

export interface ContributionItem {
  id: string;
  memberId: string;
  memberName: string;
  role: string;
  completedWork: string;
  usedSource: string;
  conclusion: string;
  proposedSolution: string;
  projectLesson: string;
  futureCivicAction: string;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  type: 'rating' | 'choice' | 'text';
  options?: { label: string; count: number; percentage: number }[];
  averageRating?: number;
  sampleOptions?: { label: string; count: number; percentage: number }[];
  sampleAverageRating?: number;
}

export interface PracticalSolution {
  id: string;
  title: string;
  shortDesc: string;
  targetProblem: string;
  participants: string;
  requiredResources: string;
  necessaryPermissions: string;
  expectedResult: string;
  evaluationMethod: string;
  legalityScore: number; // 1-10
  utilityScore: number;  // 1-10
  feasibilityScore: number; // 1-10
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  responsible: string;
  deadline: string;
  tasks: string[];
  expectedOutput: string;
  status: 'Rejalashtirilgan' | 'Jarayonda' | 'Bajarildi';
}

export interface LegalArticle {
  title: string;
  source: string;
  article: string;
  description: string;
  relevanceToSchool: string;
  url: string;
}

export interface ProjectState {
  isPresentationMode: boolean;
  currentSlide: number;
  useSampleData: boolean;
  totalSurveyRespondents: number;
  isSurveySubmitted: boolean;
}
