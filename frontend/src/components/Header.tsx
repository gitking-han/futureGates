/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Phone, ShieldCheck, AlertCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuspensionAlert, setShowSuspensionAlert] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },    
    { id: 'courses', label: 'COURSES' },
    { id: 'verification', label: 'VERIFICATION' },
    { id: 'services', label: 'SERVICES' },
    { id: 'blogs', label: 'BLOGS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (tabId: string) => {
    setTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-brand-blue-dark to-slate-900 shadow-xl border-b border-brand-blue/30 no-print">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand Title */}
          <div className="cursor-pointer flex items-center" onClick={() => handleNavClick('home')}>
            <BrandLogo variant="light" />
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 rounded-md cursor-pointer ${active
                    ? 'bg-brand-blue text-white border-b-2 border-brand-orange'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Call */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowSuspensionAlert(true)}
              className="group flex items-center gap-2 px-4 py-2 bg-white text-slate-800 border-2 border-brand-orange rounded-md shadow-md hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:bg-brand-orange">
                <Phone className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold leading-none">Chat on Whatsapp</span>
                <span className="text-xs font-bold font-mono tracking-tight text-brand-blue leading-none mt-1">
                  +92301-6775690
                </span>
              </div>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('verification')}
              className="px-3 py-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold rounded-md flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Verify Card
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg justify-center focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in bg-slate-900/95 backdrop-blur-md border-t border-brand-blue/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${active
                    ? 'bg-brand-blue text-brand-orange border-l-4 border-brand-orange'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick numbers section in mobile view */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setShowSuspensionAlert(true);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/80 rounded-lg border border-slate-700/80 text-white hover:bg-brand-blue transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400">Chat on Whatsapp</span>
                <span className="text-sm font-mono font-medium">+92301-6775690</span>
              </div>
            </button>
          </div>
        </div>
      )}

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
    </header>
  );
};
