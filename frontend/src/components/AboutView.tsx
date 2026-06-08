/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trophy, ShieldCheck, BookOpen, Quote, Sparkles } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner / Header Title Column */}
      <section className="bg-slate-900 text-white py-12 px-4 border-b-2 border-brand-orange text-center relative">
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark/30 to-slate-900/45 mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto space-y-3">
          <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            ESTABLISHED SPECIALIST IT BOOTCAMP & OUTSOURCING HUB
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            ABOUT FUTURE GATES
          </h1>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Innovating technical curriculum, training hands-on bootcamps, and providing a gateway to verified, professional credentials since inception.
          </p>
        </div>
      </section>

      {/* Main Narrative Block & Executive Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Welcome message and main body text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">ORGANIZATIONAL CHARTER</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Welcome to Future Gates I.T Center, Pakistan
              </h2>
              <div className="w-16 h-1 bg-brand-orange rounded-full" />
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 font-sans">
              <p>
                <strong>Future Gates I.T Center</strong> is a premier professional IT Training and technical development organization. We specialize in imparting modern, job-ready technology bootcamps and distance education to aspiring programmers, designers, and systems architects.
              </p>
              <p>
                Our core guiding mantra is <strong>"Where Skills Become Your Income"</strong>. Under this focused ideology, we actively transition students from theoretical concepts into practical software creation. At the end of each training cycle, students are subjected to rigorous evaluations, culminating in verified digital certifications and printable transcripts.
              </p>
              <p>
                In addition to educational bootcamps, we operate a production-level software outsourcing team. This unique integration allows us to engage our topper pupils in real client work, bridging the critical divide between classroom training and professional digital employment.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { title: 'Market-Driven Curricula', description: 'Bootcamps constantly synchronized with current global software demands, including coding frameworks and Figma workflows.', icon: BookOpen },
                { title: 'Quality Audited', description: 'Strict testing workflows and structured assessments to ensure genuine, authentic credential verification.', icon: ShieldCheck },
                { title: 'Direct Placement & Work', description: 'Opportunity to get hands-on experience on live outsourced customer software projects within our local development team.', icon: Trophy }
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs flex flex-col justify-between">
                  <val.icon className="w-5 h-5 text-brand-blue mb-3" />
                  <div>
                    <h3 className="font-bold text-xs text-slate-800 tracking-wide">{val.title}</h3>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Managing Director Message block */}
          <div className="lg:col-span-4 bg-white border-t-4 border-brand-blue rounded-xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Quote className="w-4 h-4 text-brand-orange" />
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-800">
                Message from the Desk
              </h3>
            </div>
            
            <div className="text-xs text-slate-600 leading-relaxed italic space-y-3">
              <p>
                "At Future Gates, we believe that education must lead to empowerment. Standard academic sheets value memory, but the technology sector only pays for actual, functional capability."
              </p>
              <p>
                "Our courses are designed around actual workspace requirements. We train students to build responsive websites, manage databases, and design elegant user flows so they can immediately begin earning as freelancers or in-house developers."
              </p>
              <p>
                "Providing a direct digital verification system for student credentials introduces key transparency that builds robust trust with global recruiters looking to hire talented Pakistani youth."
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center font-bold text-xs text-brand-blue border border-brand-blue/20">
                FG
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">Executive Management</h4>
                <p className="text-[9px] text-slate-400 font-mono">Future Gates I.T Center Board</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Accreditations / Registrations Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Our Strategic Operational Framework</h3>
            <p className="text-slate-800 text-sm font-semibold font-display">Authorized Curricula & Trusted Certification Standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { rule: 'Hands-on Syllabus', agency: 'Tech-Oriented', desc: 'No dry rot theory. Courses concentrate 90% on actual execution, building real-world projects.' },
              { rule: 'Digital Verification', agency: 'Secure Roster Database', desc: 'Our online verification tool guarantees transparency for local and foreign software houses.' },
              { rule: 'Freelancing Guidance', agency: 'Upwork & Fiverr Support', desc: 'We directly mentor students to showcase skills and convert student bootcamps to income.' },
              { rule: 'Rawalpindi Headquarters', agency: 'Central Admissions Desk', desc: 'Direct regional classroom labs providing hardware, stable networks, and expert assistance.' }
            ].map((acc, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-slate-100 shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-orange mx-auto mb-2" />
                <h4 className="font-mono text-xs font-bold text-slate-900">{acc.rule}</h4>
                <p className="text-[10px] text-brand-blue font-semibold mt-0.5">{acc.agency}</p>
                <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
