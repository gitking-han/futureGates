/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, ShieldCheck, ArrowRight, Star, Flame, Globe, AlertCircle } from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../data';

interface HomeViewProps {
  setTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setTab }) => {
  const [showSuspensionAlert, setShowSuspensionAlert] = useState(false);
  const featuredCourses = COURSES.filter((c) => c.featured);

  return (
    <div className="pb-16">
      {/* Notification Banner */}
      <div className="bg-red-600 text-white py-2 px-4 sm:px-6 lg:px-8 text-center border-b-2 border-red-700">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          ⚠️ Site restricted to landing page only due to delayed payment
        </p>
      </div>

      <div className="space-y-16">
        <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-brand-blue-dark to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
          {/* Subtle Decorative Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px]" />

          {/* Decorative backdrop blobs */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-blend-multiply bg-brand-blue opacity-25 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blend-multiply bg-brand-orange opacity-15 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center space-y-8">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white backdrop-blur-md rounded-full border border-white/20 text-brand-orange text-xs font-semibold tracking-wider uppercase"
            >
              <Flame className="w-4 h-4 text-brand-orange animate-bounce" />
              Empowering Pakistan's Technical Workforce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              <span className="block text-white font-sans font-black drop-shadow-md leading-tight text-center">
                TAKE THE FIRST STEP
              </span>
              <span className="block text-brand-orange text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
                To Knowledge With Us
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Acquire real, job-ready programming and design skills at <strong>Future Gates I.T Center</strong>. Start your career with masterclass skill bootcamps, and verify your certification validation live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans font-bold text-brand-orange text-base sm:text-lg tracking-wide uppercase"
            >
              Where Skills Become Your Income
            </motion.div>

            {/* Core Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              <button
                onClick={() => setShowSuspensionAlert(true)}
                className="px-8 py-3.5 bg-white text-slate-900 border-2 border-transparent font-bold rounded-md hover:bg-brand-orange hover:text-white transition-all shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm tracking-wider uppercase cursor-pointer"
              >
                CALL NOW
              </button>
            </motion.div>

          </div>
        </section>

        {/* Trust Stats Overview Dashboard */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { metric: '1,000+', title: 'Students Certified', sub: 'Fully verifiable transcripts', icon: Award, color: 'text-brand-orange' },
              { metric: '100%', tone: 'Practical Labs', title: 'Hands-on Outcomes', sub: 'Figma & Coding compliance', icon: ShieldCheck, color: 'text-brand-orange' },
              { metric: '20+', title: 'Corporate Clients', sub: 'Client web & app dev projects', icon: Globe, color: 'text-brand-blue-light' },
              { metric: '15+', title: 'Experienced Faculty', sub: 'Real industry practitioners', icon: BookOpen, color: 'text-brand-orange' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-xl border border-slate-100 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-800 leading-none">
                    {stat.metric || stat.tone}
                  </span>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-slate-700 tracking-wide">{stat.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Double Offer Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">Master High-Demand Trades</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Professional Skill Development Programs
            </h2>
            <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full" />
            <p className="text-slate-500 text-xs">
              We deliver state-of-the-art classroom frameworks and online boot camps designed for global job market competency.
            </p>
          </div>

          {/* Featured Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:border-brand-blue/20 transition-all flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-md uppercase border border-slate-200">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-brand-blue font-mono">
                      Duration: {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue font-display">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold text-slate-600 block uppercase tracking-wide">Key Topics Gained:</span>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {course.skillsGained.slice(0, 4).map((skill, index) => (
                        <span key={index} className="text-[10px] text-slate-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-brand-orange" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-orange font-mono">{course.fee}</span>
                  <button
                    onClick={() => setShowSuspensionAlert(true)}
                    className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    Call For Info
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Info Contact Banner */}
        <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="bg-linear-to-br from-brand-sand to-slate-100 p-8 rounded-2xl border border-brand-blue/10 shadow-sm space-y-4">
            <BookOpen className="w-8 h-8 text-brand-blue mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 font-display">Need Guidance On Programs?</h3>
            <p className="text-slate-500 text-xs max-w-lg mx-auto">
              Our advisory team is available Monday through Saturday (9:00 AM - 6:00 PM) to help with program information, curriculum details, and enrollment.
            </p>
            <div className="flex justify-center flex-wrap gap-4 pt-1">
              <button
                onClick={() => setShowSuspensionAlert(true)}
                className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-all cursor-pointer"
              >
                Call Us Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Suspension Alert Modal */}
      {showSuspensionAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full animate-fade-in">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Service Suspended</h3>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                This service has been temporarily suspended due to the website owner's outstanding payment balance.
              </p>

              <p className="text-xs text-slate-500 italic">
                Please contact the administrator to resolve this issue.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowSuspensionAlert(false)}
                  className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg transition-colors cursor-pointer text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};