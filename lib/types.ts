// Database types for our application
export interface TeamRecord {
  id: string;
  name: string;
  graduation_year?: number;
  major?: string;
  role?: string;
  hobbies?: string;
  instagram?: string;
  email?: string;
  linkedin?: string;
  formal_headshot?: string;
  casual_headshot?: string;
  bio?: string;
  created?: string;
  updated?: string;
}

export interface AlumniRecord {
  id: string;
  name: string;
  graduation_year?: number;
  major?: string;
  role?: string;
  career?: string;
  fun_fact?: string;
  instagram?: string;
  email?: string;
  linkedin?: string;
  formal_headshot?: string;
  casual_headshot?: string;
  created?: string;
  updated?: string;
}

export interface EventRecord {
  id: string;
  title: string;
  description?: string;
  long_description?: string;
  datetime?: string;
  location?: string;
  category?: string;
  isPast?: boolean;
  instagram?: string;
  documentation?: string[];
  created?: string;
  updated?: string;
}
