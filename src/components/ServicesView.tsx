/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  GraduationCap, 
  Laptop, 
  HelpCircle, 
  CheckCircle,
  Megaphone,
  Search,
  Users,
  Target,
  TrendingUp,
  Video,
  ShoppingCart,
  Award,
  Heart,
  Receipt,
  FileText,
  CreditCard,
  FileSpreadsheet,
  Type,
  Scale,
  Wallet
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesViewProps {
  setTab: (tab: string) => void;
  setSelectedInquiryCourse: (subject: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setTab, setSelectedInquiryCourse }) => {
  // Category state for services catalog toggle
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All');

  const iconsMap: { [key: string]: any } = {
    Globe: Globe,
    Smartphone: Smartphone,
    Palette: Palette,
    GraduationCap: GraduationCap,
    Laptop: Laptop,
    Megaphone: Megaphone,
    Search: Search,
    Users: Users,
    Target: Target,
    TrendingUp: TrendingUp,
    Video: Video,
    ShoppingCart: ShoppingCart,
    Award: Award,
    Heart: Heart,
    Receipt: Receipt,
    FileText: FileText,
    CreditCard: CreditCard,
    FileSpreadsheet: FileSpreadsheet,
    Type: Type,
    Scale: Scale,
    Wallet: Wallet
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Services Title Column */}
      <section className="bg-slate-900 text-white py-12 px-4 border-b-2 border-brand-orange text-center relative">
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark/20 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto space-y-3">
          <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            FUTURE GATES PROFESSIONAL OUTSOURCING GROUP
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            DEVELOPMENT SOLUTIONS & SERVICES
          </h1>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Our specialized development wing builds robust, enterprise-ready software platforms for corporate entities, mentored and supervised by senior field practitioners.
          </p>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="text-center">
          <span className="text-[10px] font-bold text-brand-orange tracking-wider uppercase font-mono bg-brand-orange/10 px-2 py-1 rounded">Our Complete Service Spectrum</span>
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-900 mt-2">Choose Service Division</h2>
          <p className="text-xs text-slate-500 mt-1">Browse our verified commercial services, ranging from custom physical printing blocks to high-performance agency coding.</p>
        </div>
        
        <div className="inline-flex flex-wrap justify-center p-1 bg-slate-100 rounded-xl gap-1 w-full max-w-2xl">
          <button
            onClick={() => setSelectedServiceCategory('All')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex-1 text-center whitespace-nowrap min-w-[120px] ${
              selectedServiceCategory === 'All' 
                ? 'bg-brand-blue text-white shadow-xs' 
                : 'text-slate-600 hover:text-brand-blue hover:bg-slate-200/60'
            }`}
          >
            All Services (تمام خدمات)
          </button>
          
          <button
            onClick={() => setSelectedServiceCategory('local-hub')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex-1 text-center whitespace-nowrap min-w-[120px] ${
              selectedServiceCategory === 'local-hub' 
                ? 'bg-brand-blue text-white shadow-xs' 
                : 'text-slate-600 hover:text-brand-blue hover:bg-slate-200/60'
            }`}
          >
            Local IT & Printing (ہماری سروسز)
          </button>

          <button
            onClick={() => setSelectedServiceCategory('agency')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex-1 text-center whitespace-nowrap min-w-[120px] ${
              selectedServiceCategory === 'agency' 
                ? 'bg-brand-blue text-white shadow-xs' 
                : 'text-slate-600 hover:text-brand-blue hover:bg-slate-200/60'
            }`}
          >
            Digital Agency & AI (آن لائن سروسز)
          </button>
        </div>
      </div>

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
          <p className="text-[11px] text-slate-500 mt-4">Use this bank account for service payments, project deposits, and professional outsourcing bookings. Share the payment confirmation with our team after transfer.</p>
        </div>
      </section>

      {/* Services detailed catalog list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.filter((service) => selectedServiceCategory === 'All' || service.category === selectedServiceCategory).map((service) => {
          const Icon = iconsMap[service.iconName] || Laptop;
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between hover:border-brand-blue/20"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${service.category === 'local-hub' ? 'bg-orange-50 text-brand-orange-dark border border-orange-100' : 'bg-blue-50 text-brand-blue border border-blue-100'}`}>
                      {service.category === 'local-hub' ? 'Local IT Desk' : 'Agency / Outsourcing'}
                    </span>
                    <h3 className="font-display text-base md:text-lg font-bold text-slate-900 mt-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-1 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Service Deliverables:</span>
                  <div className="space-y-2">
                    {service.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-50 text-[9px] font-mono font-medium text-slate-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setSelectedInquiryCourse(`Outsource Service: ${service.title}`);
                    setTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 bg-brand-blue hover:bg-brand-blue-light text-white text-[10px] font-bold rounded-lg transition-all cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
};
