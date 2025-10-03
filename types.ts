
export interface GeneralPrinciple {
  title: string;
  description: string;
}

export interface Mesocycle {
  id: string;
  title: string;
  phase: string;
  centralObjective: string;
  technicalPriorities: string[];
  physicalPriorities: string[];
  keyEvents: string[];
  planLogic: string;
}

export interface Macrocycle {
  id: number;
  title: string;
  period: string;
  goal: string;
  mesocycles: Mesocycle[];
}

export interface WeeklyScheduleItem {
  day: string;
  isOptional?: boolean;
  activities: string[];
}

export interface PerformanceReviewPoint {
  title: string;
  description: string;
}

export interface PerformanceReview {
  title: string;
  intro: string;
  points: PerformanceReviewPoint[];
  focusAreas: string[];
}
