/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, ShieldCheck, ArrowRight, Star, Smartphone, Globe, CodeXml, Flame } from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../data';
import { getStudentActivityAds } from '../services/studentActivityAdService';
import type { StudentActivityAd } from '../types';

interface HomeViewProps {
  setTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setTab }) => {
  const featuredCourses = COURSES.filter((c) => c.featured);
  const [studentActivityAd, setStudentActivityAd] = useState<StudentActivityAd | null>(null);
  const [loadingStudentActivityAd, setLoadingStudentActivityAd] = useState(true);

  useEffect(() => {
    const loadSection = async () => {
      setLoadingStudentActivityAd(true);
      try {
        const items = await getStudentActivityAds();
        setStudentActivityAd(items.length ? items[0] : null);
      } catch (error) {
        setStudentActivityAd(null);
      } finally {
        setLoadingStudentActivityAd(false);
      }
    };
    loadSection();
  }, []);

  return (
    <div className="space-y-16 pb-16">

      {/* Dynamic Chalkboard Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-brand-blue-dark to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
              onClick={() => setTab('courses')}
              className="px-8 py-3.5 bg-white text-slate-900 border-2 border-transparent font-bold rounded-md hover:bg-brand-orange hover:text-white transition-all shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm tracking-wider uppercase cursor-pointer"
            >
              VIEW COURSES
            </button>
            <button
              onClick={() => setTab('verification')}
              className="px-8 py-3.5 bg-transparent text-white border-2 border-white font-bold rounded-md hover:bg-brand-blue hover:border-brand-orange transition-all text-xs sm:text-sm tracking-wider uppercase cursor-pointer"
            >
              VERIFICATION PORTAL
            </button>
          </motion.div>

        </div>
      </section>

      {/* Trust Stats Overview Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { metric: '5,000+', title: 'Students Certified', sub: 'Fully verifiable transcripts', icon: Award, color: 'text-brand-orange' },
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
                  onClick={() => setTab('courses')}
                  className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  Syllabus Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setTab('courses')}
            className="px-5 py-2.5 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            Explore All Diplomas
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

    {/* Header */}
    <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">
        Student Activity & Institution Ads
      </p>

      <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Latest Announcements
          </h2>

          <p className="mt-2 max-w-2xl text-slate-600">
            {studentActivityAd?.description}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setTab('contact')}
            className="rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
          >
            Contact Admissions
          </button>

          <button
            onClick={() => setTab('courses')}
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
          >
            View Programs
          </button>
        </div>
      </div>
    </div>

    {/* Poster */}
    <div className="bg-slate-50 p-4 sm:p-6">
      {loadingStudentActivityAd ? (
        <div className="flex min-h-[600px] items-center justify-center rounded-2xl bg-white">
          Loading image...
        </div>
      ) : (
        <div className="mx-auto max-w-4xl">
          <img
            src={studentActivityAd?.imageUrl}
            alt="Student activity advertisement"
            className="w-full rounded-2xl object-contain shadow-lg"
          />
        </div>
      )}
    </div>

  </div>
</section>

      {/* Embedded Banner of IT Client Services (Web & App dev unit) */}
      <section className="bg-slate-900 text-white py-16 px-4 border-l-4 border-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="px-2.5 py-1 bg-brand-blue/80 text-brand-orange text-[10px] font-extrabold rounded-md uppercase tracking-widest inline-block">
              SERVICES UNIT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Looking for Corporate Web & App Dev Services?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Beyond world-class student training, we serve as a full-service software development agency. We engineer custom content management solutions, secure online payment panels, responsive native applications, and corporate cloud databases for enterprise clients. Our senior engineering instructors lead these high-profile client projects.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
              <div className="flex items-center gap-2">
                <Globe className="w-4.5 h-4.5 text-brand-orange" />
                <span>Modern Web & SaaS Panels</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4.5 h-4.5 text-brand-orange" />
                <span>Responsive Flutter & React Native Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CodeXml className="w-4.5 h-4.5 text-brand-orange" />
                <span>SEO Optimized Clean Architectures</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-orange" />
                <span>Quality Tested & Audited Codebases</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setTab('services')}
                className="px-6 py-3 bg-brand-orange text-white hover:bg-brand-orange-dark rounded-md font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                REQUEST SERVICES Callback
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 shadow-2xl relative">
            <h3 className="text-white text-sm font-semibold mb-3 tracking-wide">Recent Agency Technologies Managed</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Vite', 'React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'Flutter', 'Firebase', 'PostgreSQL', 'Docker'].map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1.5 bg-slate-900 rounded border border-slate-700 font-mono text-slate-300 text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-slate-700 text-xs flex justify-between items-center">
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <Award className="w-4 h-4 text-brand-orange" />
                <span>Proudly serving 20+ businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">SUCCESS STORIES</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
            What Our Verified Graduates & Clients Say
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-500 text-xs">
            Review live endorsements from students who passed our training programs and clients of our software services unit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-slate-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-brand-blue to-slate-200 flex items-center justify-center text-white text-xs font-bold">
                  {testimonial.name.slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{testimonial.name}</h4>
                  <span className="text-[9px] text-brand-blue font-medium block leading-normal">{testimonial.role}</span>
                  <span className="text-[9px] text-slate-400 block leading-normal">({testimonial.courseOrService})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Info Contact Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="bg-linear-to-br from-brand-sand to-slate-100 p-8 rounded-2xl border border-brand-blue/10 shadow-sm space-y-4">
          <BookOpen className="w-8 h-8 text-brand-blue mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 font-display">Need Custom Guidance On Academic Programs?</h3>
          <p className="text-slate-500 text-xs max-w-lg mx-auto">
            Our student advisory body is active from Monday through Saturday (9:00 AM - 6:00 PM) to handle inquiries, curriculum structures, payment terms, and class options.
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-1">
            <button
              onClick={() => setTab('contact')}
              className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-all cursor-pointer"
            >
              Contact Advisory Unit
            </button>
            <a
              href="tel:+923016775690"
              className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold rounded-lg transition-all"
            >
              Direct Dial Support
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
