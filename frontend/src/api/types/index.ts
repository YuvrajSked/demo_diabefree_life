// Base API response type
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// FAQ Types
export interface Faq {
  id: number;
  question: string;
  answer: string;
  position: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  content: string;
  hba1c_before: number;
  hba1c_after: number;
  weight_lost: number;
  program_duration: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Program Types
export interface Program {
  id: number;
  title: string;
  description: string;
  features: string;
  price: number;
  duration: number;
  program_type: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}
