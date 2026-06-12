/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Trophy,
  ShieldCheck,
  BookOpen,
  Quote,
  Sparkles,
  Target,
  Eye,
  Briefcase,
  GraduationCap,
  CheckCircle
} from 'lucide-react';

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

          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">
                ABOUT FUTURE GATES IT CENTER
              </span>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Empowering Digital Skills for a Brighter Future
              </h2>

              <div className="w-16 h-1 bg-brand-orange rounded-full" />
            </div>

            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Welcome to <strong>Future Gates IT Center (FGIT Center)</strong>.
                We believe that digital skills are the gateway to a brighter future.
                Founded with a passion for education and technology, our mission is to
                empower students, freelancers, and businesses with practical IT and
                digital skills that create real career and income opportunities.
              </p>

              <p>
                I am <strong>Javed Hattar</strong>, Founder and Lead Trainer of
                FUTURE GATES IT Center, with over <strong>17 years of professional
                  experience</strong> in the IT and digital industry. My expertise
                includes Graphic Designing, Video Editing, WordPress Website
                Development, Digital Marketing, AI Tools, and Freelancing guidance.
              </p>

              <p>
                Throughout my career, I have worked on numerous projects, trained
                learners from diverse backgrounds, and helped individuals and
                businesses grow in the digital world.
              </p>

              <p>
                FUTURE GATES IT Center was created to bridge the gap between
                traditional learning and modern industry demands through practical,
                hands-on training that prepares students for freelancing, jobs,
                entrepreneurship, and online earning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  title: '17+ Years Experience',
                  description:
                    'Professional expertise across IT, digital marketing, website development, AI tools, and freelancing.',
                  icon: Trophy
                },
                {
                  title: 'Project-Based Learning',
                  description:
                    'Practical training focused on real-world projects and industry requirements.',
                  icon: GraduationCap
                },
                {
                  title: 'Career Growth Support',
                  description:
                    'Guidance for freelancing, jobs, entrepreneurship, and online earning opportunities.',
                  icon: Briefcase
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs"
                >
                  <item.icon className="w-5 h-5 text-brand-blue mb-3" />
                  <h3 className="font-bold text-xs text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border-t-4 border-brand-blue rounded-xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Quote className="w-4 h-4 text-brand-orange" />
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-800">
                Message from the Desk
              </h3>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed space-y-3">
              <p>
                Welcome to Future Gates IT Center (FGIT Center).
              </p>

              <p>
                It is my pleasure to welcome you to a learning environment where
                knowledge, technology, and practical skills come together to create
                opportunities for success.
              </p>

              <p>
                With over 17 years of experience in the IT and digital industry,
                I have witnessed how technology continues to transform the way we
                learn, work, and grow.
              </p>

              <p>
                At FGIT Center, we focus on hands-on learning, real-world projects,
                and professional guidance in Graphic Designing, Video Editing,
                Website Development, Digital Marketing, Artificial Intelligence,
                and Freelancing.
              </p>

              <p>
                We believe that education should lead to growth, confidence, and
                opportunity. Every student is encouraged to learn, create, innovate,
                and work towards a brighter future.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm">
                Javed Hattar
              </h4>
              <p className="text-xs text-brand-blue">
                Founder & Lead Trainer
              </p>
              <p className="text-[10px] text-slate-500">
                IT & AI Expert | 17+ Years Experience
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Accreditations / Registrations Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-brand-blue" />
                <h3 className="font-bold text-lg">Our Vision</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                To become a leading IT training and digital solutions center in
                Pakistan, recognized for transforming skills into successful careers
                and sustainable income opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-brand-orange" />
                <h3 className="font-bold text-lg">Our Mission</h3>
              </div>

              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  'Provide practical IT & digital skills training',
                  'Deliver industry-relevant knowledge',
                  'Support freelancers and entrepreneurs',
                  'Offer professional digital services',
                  'Promote innovation through AI and modern technologies'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                IT & Digital Skills Training
              </h3>

              <ul className="space-y-2 text-sm text-slate-600">
                <li>• MS Office Automation</li>
                <li>• Graphic Designing</li>
                <li>• Video Editing & Animation</li>
                <li>• WordPress Website Development</li>
                <li>• E-Commerce Store Development</li>
                <li>• AI Tools & Productivity Training</li>
                <li>• Digital Marketing</li>
                <li>• Freelancing & Online Earning Guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Professional Digital Services
              </h3>

              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Graphic Design & Branding</li>
                <li>• Video Editing</li>
                <li>• Website Development</li>
                <li>• Social Media Management</li>
                <li>• Digital Marketing Campaigns</li>
                <li>• AI-Based Solutions & Content Creation</li>
              </ul>
            </div>

          </div>

          <div className="bg-linear-to-b from-slate-900 to-brand-blue-dark text-white rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">
              Why Choose FUTURE GATES IT Center?
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div>✓ 17+ Years Industry Experience</div>
              <div>✓ Practical Project-Based Learning</div>
              <div>✓ Affordable Career-Focused Courses</div>
              <div>✓ Freelancing & Online Earning Support</div>
              <div>✓ AI & Modern Technology Integration</div>
              <div>✓ Professional Learning Environment</div>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-lg font-semibold text-brand-orange">
                "Where Skills Become Your Income"
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
