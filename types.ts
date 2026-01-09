
export interface Achievement {
  text: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Reference {
  name: string;
  title: string;
  relation: string;
  quote: string;
  avatar?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  details?: string;
}
