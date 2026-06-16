/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  duration: string; // e.g., "3 Months", "6 Months"
  category: 'Development' | 'Design' | 'Technical' | 'Short Courses' | 'Artificial Intelligence';
  description: string;
  longDescription: string;
  fee: string;
  syllabus: string[];
  skillsGained: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
  imageUrl: string;
  features: string[];
  techStack: string[];
  category: 'agency' | 'local-hub';
}

export interface StudentResult {
  rollNo: string;
  name: string;
  fatherName: string;
  enrollmentNo: string;
  courseName: string;
  duration: string;
  session: string; // e.g., "Jan 2026 - Mar 2026"
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  percentage: number;
  theoryMarks: number;
  practicalMarks: number;
  vivaMarks: number;
  totalMarks: number;
  maxMarks: number;
  issueDate: string;
  certificateNo: string;
  verificationStatus: 'Verified' | 'Pending' | 'Not Found';
  remarks: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  courseOrService: string;
  feedback: string;
  rating: number;
  avatarUrl?: string;
}

export interface BlogPost {
  _id?: string;
  id?: string;
  slug?: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  highlight?: string;
  content: string[];
}

export interface VerificationRecord {
  _id?: string;
  candidateName: string;
  fatherName: string;
  verificationReference: string;
  course?: string;
  courseDuration?: string;
  trainingSession?: string;
  trainerName?: string;
  finalGrade?: string;
  certificateImage?: string;
  certificatePdf?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface StudentActivityAd {
  _id?: string;
  heading: string;
  description: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface HeroSlide {
  _id?: string;
  imageUrl: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}
