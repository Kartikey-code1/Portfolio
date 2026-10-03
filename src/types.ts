export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Business Intelligence' | 'Predictive Analytics' | 'Machine Learning' | 'AI Systems';
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  sqlSnippet?: string;
  dataHighlights?: string[];
  chartType: 'bar' | 'line' | 'pie' | 'anomaly';
}

export interface SkillItem {
  name: string;
  category: 'Core Tools' | 'Data Methodologies' | 'BI & Analytics';
  level: string; // e.g. "Proficient", "Working Knowledge", "Strong Foundation"
  description: string;
  highlightSyntax?: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface SectionInfo {
  id: string;
  label: string;
  title: string;
}
