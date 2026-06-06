/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  duration: string; // e.g., "3 Months", "6 Months"
  category: 'Development' | 'Design' | 'Technical' | 'Short Courses';
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

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}
