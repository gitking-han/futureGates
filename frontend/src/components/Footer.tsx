/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Youtube, Mail, Phone, MapPin, Shield, Milestone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  setTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setTab }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-linear-to-b from-slate-900 to-brand-blue-dark border-t border-brand-blue/30 no-print">
      {/* Upper footer widget section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Main info container */}
          <div className="space-y-6">
            <BrandLogo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2">
              Future Gates I.T Center is a premier, certified technology bootcamp and professional skills development institute situated in Rawalpindi, Pakistan. Built on the core ethos <strong>"Where Skills Become Your Income"</strong>, we empower students with job-ready technical masteries, recognized certifications, and full-stack software development competencies.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2 font-bold text-brand-orange">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-brand-orange pl-2">
              Institute Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  About Future Gates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('courses')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Technical Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Software Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('blogs')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Blog Resources
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('verification')} className="hover:text-brand-orange hover:underline transition-all font-semibold cursor-pointer text-slate-400">
                  Student Verification
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Inquiries & Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-brand-orange pl-2">
              Legal Pages
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('privacy')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('terms')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('disclaimer')} className="hover:text-brand-orange hover:underline transition-all cursor-pointer text-slate-400">
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Course list */}
          {/* <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-brand-orange pl-2">
              Our IT Programs
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Full-Stack Web Development (6m)</li>
              <li>• Mobile App Dev (React Native/Flutter)</li>
              <li>• Graphic Design & UI/UX Specialist</li>
              <li>• Cyber Security & Networking Essentials</li>
              <li>• Diploma in Information Technology (DIT)</li>
              <li>• Computer Information Technology (CIT)</li>
            </ul>
          </div> */}

          {/* Contacts info */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase border-l-2 border-brand-orange pl-2">
              Head Office Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Khushab, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+923016775690" className="text-slate-300 hover:text-brand-orange transition-colors font-mono">
                  +92301-6775690
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:futuregatesitcenter@gmail.com" className="text-slate-300 hover:text-brand-orange transition-colors font-mono">
                  futuregatesitcenter@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <Shield className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-[10px] text-brand-orange font-semibold">
                  ISO 9001:2015 Quality Certified
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Under footer copyright statement and legal terms */}
      <div className="bg-slate-950/80 py-6 border-t border-white/5 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <div className="space-y-1">
            <p>© {currentYear} Future Gates I.T Center, Pakistan. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600">
              Disclaimer: Verification values offered on this site represent official records sanctioned under certification program guidelines of Future Gates I.T Center Punjab.
            </p>
          </div>
          <div className="flex gap-4 text-[10px] text-slate-500 whitespace-nowrap">
            <a href="#" className="hover:text-brand-orange">Terms of Registration</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange">Verification Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange">Privacy Regulations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
