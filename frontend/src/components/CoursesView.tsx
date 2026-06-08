/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Clock, HelpCircle, CheckCircle2, GraduationCap } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

interface CoursesViewProps {
  setTab: (tab: string) => void;
  setSelectedInquiryCourse: (courseTitle: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ setTab, setSelectedInquiryCourse }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeAccordionCourse, setActiveAccordionCourse] = useState<string | null>(null);

  const categories = ['All', 'Development', 'Design', 'Technical', 'Artificial Intelligence', 'Short Courses'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleApplyClick = (courseTitle: string) => {
    setSelectedInquiryCourse(courseTitle);
    setTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (courseId: string) => {
    if (activeAccordionCourse === courseId) {
      setActiveAccordionCourse(null);
    } else {
      setActiveAccordionCourse(courseId);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Visual Header */}
      <section className="bg-slate-900 text-white py-14 px-4 border-b-2 border-brand-orange text-center relative overflow-hidden">
        {/* Subtle abstract geometric background */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="bubble" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e35e14" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00122a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="10%" cy="30%" r="80" fill="url(#bubble)" />
            <circle cx="90%" cy="80%" r="120" fill="url(#bubble)" />
            <circle cx="50%" cy="50%" r="40" fill="url(#bubble)" />
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto space-y-3">
          <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            FUTURE GATES PROFESSIONAL DIRECTORY
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            COURSES & DIPLOMAS
          </h1>
          <p className="text-slate-400 text-xs max-w-lg mx-auto">
            Practical skill bootcamps, meticulously mapped to industry developer standards to help you earn and build projects.
          </p>
        </div>
      </section>

      {/* Directory filter and searching options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-brand-orange border-brand-blue font-bold text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 font-medium'
                }`}
              >
                {cat} Courses
              </button>
            ))}
          </div>

          {/* Real-time search query box */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search trade or syllabus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
            />
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-3xl p-6 mb-10 text-slate-800">
          <p className="text-[10px] uppercase tracking-wider text-brand-blue font-bold mb-3">Payment Information</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-[12px] leading-relaxed">
            <div>
              <span className="block text-slate-500">Bank Name</span>
              <strong className="block text-slate-900">United Bank Limited (UBL)</strong>
            </div>
            <div>
              <span className="block text-slate-500">Account Title</span>
              <strong className="block text-slate-900">Future Gates I.T Center</strong>
            </div>
            <div>
              <span className="block text-slate-500">Account #</span>
              <strong className="block text-slate-900">374981534</strong>
            </div>
            <div>
              <span className="block text-slate-500">IBAN</span>
              <strong className="block text-slate-900">PK33UNIL0109000374981534</strong>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-4">Use this bank account information to reserve your seat and confirm admission for courses. After payment, please contact us with your transaction details.</p>
        </div>
      </section>

      {/* Primary list of curriculum programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Duration Subheaders */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-400 border border-slate-100">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-xs font-semibold">No official courses match your specific filters.</p>
            <p className="text-[10px] text-slate-400 mt-1">Try resetting the category filter selection or searching another keyword.</p>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Split view: Three-Month vs Six-Month grouped layouts */}
            {['Three Month Courses', 'Six Month Diplomas'].map((groupHeader) => {
              const matchesGroup = (c: Course) => {
                if (groupHeader.startsWith('Three')) return c.duration.includes('2') || c.duration.includes('3') || c.duration.includes('4') || c.duration.includes('Short');
                return c.duration.includes('6') || c.duration.includes('Year');
              };

              const groupItems = filteredCourses.filter(matchesGroup);

              if (groupItems.length === 0) return null;

              return (
                <div key={groupHeader} className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-brand-blue pl-3">
                      {groupHeader}
                    </h2>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 pl-4 font-mono uppercase tracking-wider text-brand-orange leading-none font-bold">
                      {groupHeader.startsWith('Three') 
                        ? 'Accelerated trade courses aiming for swift corporate placement.' 
                        : 'In-depth comprehensive technical specializations with extended portfolio generation.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {groupItems.map((course) => {
                      const isExpanded = activeAccordionCourse === course.id;

                      return (
                        <div
                          key={course.id}
                          className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:border-brand-blue/20 transition-all"
                        >
                          {/* Visible Card Summary */}
                          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            
                            <div className="lg:col-span-8 space-y-4">
                              <div className="flex flex-wrap items-center gap-3">
                                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 text-[9px] font-bold rounded-md uppercase">
                                  {course.category}
                                </span>
                                <span className="text-[11px] font-medium font-mono text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                                  Duration: {course.duration}
                                </span>
                              </div>
                              
                              <h3 className="text-lg md:text-xl font-bold text-slate-950 font-display">
                                {course.title}
                              </h3>
                              
                              <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
                                {course.description}
                              </p>

                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {course.skillsGained.map((skill, index) => (
                                  <span key={index} className="px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100 text-[10px]">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="lg:col-span-4 bg-slate-50/80 p-5 rounded-lg border border-slate-100 flex flex-col justify-between h-full gap-4 text-center lg:text-left">
                              <div>
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold leading-none">Total tuition Investment</span>
                                <span className="text-sm font-bold font-mono text-brand-orange block mt-1.5">{course.fee}</span>
                              </div>
                              
                              <div className="flex gap-2">
                                <button
                                  onClick={() => toggleAccordion(course.id)}
                                  className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  {isExpanded ? 'Hide Details' : 'View Syllabus'}
                                </button>
                                <button
                                  onClick={() => handleApplyClick(course.title)}
                                  className="flex-1 px-3 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  Enroll Now
                                </button>
                              </div>
                            </div>

                          </div>

                          {/* Interactive Syllabus Accordion Expander */}
                          {isExpanded && (
                            <div className="bg-slate-50/50 border-t border-slate-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
                              
                              <div className="space-y-4">
                                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                  <FileText className="w-4 h-4 text-brand-orange" />
                                  Course Curriculum Modules
                                </h4>
                                <ul className="space-y-2.5">
                                  {course.syllabus.map((topic, i) => (
                                    <li key={i} className="text-xs text-slate-500 flex items-start gap-2 leading-relaxed font-sans">
                                      <span className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange-dark text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 font-mono">
                                        {i + 1}
                                      </span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                  <GraduationCap className="w-4.5 h-4.5 text-brand-blue" />
                                  Comprehensive Skill-Outputs
                                </h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                                  {course.longDescription}
                                </p>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                                  <span className="text-[10px] font-bold text-slate-750 text-brand-blue uppercase tracking-wider block">Student Deliverables:</span>
                                  <div className="space-y-1.5">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                                      <span>Printable accredited technical graduation card</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                                      <span>Dedicated GitHub repository & project review</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                                      <span>Direct Upwork & freelance mentorship support sessions</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          </div>
        )}

      </section>

      {/* Advisory section */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs text-slate-400">
          Interested in combining multiple trade programs? Contact our academic department to configure a custom multi-track diploma pathway representing your background.
        </p>
      </section>

    </div>
  );
};
