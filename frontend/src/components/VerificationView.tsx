/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, RotateCcw, AlertTriangle, Printer, QrCode, ClipboardCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getVerificationByReference } from '../services/verificationService';
import { VerificationRecord } from '../types';

export const VerificationView: React.FC = () => {
  const [reference, setReference] = useState('');
  const [verification, setVerification] = useState<VerificationRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = reference.trim();
    if (!query) return;

    setLoading(true);
    setVerification(null);
    setError(null);

    try {
      const result = await getVerificationByReference(query);
      setVerification(result);
    } catch (fetchError: any) {
      setError(fetchError?.response?.data?.message || 'Verification reference not found.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReference('');
    setVerification(null);
    setError(null);
    setLoading(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-16">
      <section className="bg-slate-900 text-white py-10 px-4 border-b-2 border-brand-orange text-center relative no-print">
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark/30 to-slate-900/45 mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto space-y-3">
          <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            FUTURE GATES STANDARD SKILL TESTING PORTAL
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            ONLINE VERIFICATION SYSTEM
          </h1>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Authorized student certificate check gateway. Confirm course completion grade scorecards and download printable technical diplomas instantly.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 no-print">
          <div className="bg-brand-blue text-white p-5 sm:p-7 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-4 border-brand-orange">
            <div className="flex items-center gap-4">
              <BrandLogo iconOnly={true} />
              <div className="text-center sm:text-left">
                <h3 className="font-display font-black text-sm sm:text-base tracking-wide whitespace-normal leading-tight">
                  Future Gates I.T Center, Pakistan
                </h3>
                <span className="text-[10px] text-brand-orange block font-mono tracking-wide mt-1 uppercase leading-none font-bold">
                  Where Skills Become Your Income
                </span>
                <span className="text-[9px] text-slate-300 block opacity-85 mt-1 leading-tight font-sans">
                  Accredited Technology Bootcamps & Software Services Division
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <form onSubmit={handleSearch} className="space-y-4 max-w-xl mx-auto pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="text-sm font-bold text-slate-700 min-w-[70px] text-left sm:text-right font-display uppercase tracking-wider">
                  Reference
                </label>
                <input
                  type="text"
                  placeholder="Enter verification reference"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white text-xs text-slate-800 uppercase font-mono tracking-wider shadow-inner"
                />
              </div>

              <div className="flex flex-row gap-4 pl-0 sm:pl-[86px]">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  Search
                </button>
              </div>

              {error && (
                <div className="bg-slate-50 p-5 border-2 border-brand-orange rounded-lg text-center max-w-md mx-auto space-y-2">
                  <AlertTriangle className="w-8 h-8 text-brand-orange mx-auto" />
                  <h4 className="text-xs font-bold text-slate-900 block font-display">Reference not found</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    {error}
                  </p>
                </div>
              )}

              {loading && (
                <div className="bg-slate-50 p-5 border border-slate-200 rounded-lg text-center max-w-md mx-auto">
                  <p className="text-sm text-slate-600">Looking up the verification record...</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {verification && (
          <div className="mt-12 space-y-4 animate-slide-up">
            <div className="flex justify-between items-center bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm no-print">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="w-4.5 h-4.5 text-brand-orange" />
                <span className="text-xs font-bold text-slate-800">
                  Registered Certificate Verified Successfully • <span className="text-brand-blue font-mono font-extrabold uppercase">{verification.verificationReference}</span>
                </span>
              </div>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-brand-orange" />
                Print Transcript
              </button>
            </div>

            <div className="print-card bg-white border-[10px] border-double border-brand-blue rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-2 border border-brand-orange/30 rounded-lg opacity-80 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <BrandLogo iconOnly={true} className="w-96 h-96" />
              </div>

              <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b-2 border-brand-blue/30 relative">
                <div className="bg-white flex items-center justify-center">
                  <BrandLogo iconOnly={true} className="w-16 h-16" />
                </div>
                <div className="space-y-1">
                  <h1 className="font-display font-black text-xl sm:text-2xl text-brand-blue uppercase tracking-tight">
                    Future Gates I.T Center
                  </h1>
                  <h2 className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
                    WHERE SKILLS BECOME YOUR INCOME
                  </h2>
                  <p className="text-[9px] text-slate-400 font-sans tracking-wide">
                    Accredited Technology Bootcamps & Software Services Division
                  </p>
                </div>
                <div className="mt-2 text-center bg-brand-blue text-brand-orange text-[10px] tracking-widest font-black uppercase px-6 py-1.5 rounded-sm border border-brand-orange inline-block">
                  ACCREDITED GRADE REPORT & TRANSCRIPT CERTIFICATE
                </div>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-xs relative">
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Candidate Name:</span>
                    <span className="text-slate-900 font-bold uppercase">{verification.candidateName}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Father's Name:</span>
                    <span className="text-slate-900 font-semibold uppercase">{verification.fatherName}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Verification Reference:</span>
                    <span className="text-slate-900 font-mono font-bold text-center">{verification.verificationReference}</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Course:</span>
                    <span className="text-slate-900 font-bold text-right text-[11px]">{verification.course}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Course Duration:</span>
                    <span className="text-slate-900 font-semibold">{verification.courseDuration}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Training Session:</span>
                    <span className="text-slate-900 font-medium font-mono">{verification.trainingSession}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Trainer Name:</span>
                    <span className="text-slate-900 font-semibold">{verification.trainerName}</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs relative">
                <div className="divide-y divide-slate-100 text-slate-700">
                  <div className="py-4 px-4 flex justify-between items-center bg-slate-50/50 border-b border-slate-200">
                    <span className="font-medium text-[9px] uppercase text-slate-600 font-sans">Final Grade</span>
                    <span className="font-display font-black text-brand-orange text-lg bg-brand-blue/5 px-3 py-1 rounded">
                      {verification.finalGrade ?? '—'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-500 leading-normal font-sans">
                <strong>Certification Authority Remarks:</strong> This certificate has been verified and authenticated. The holder has successfully completed the course and is awarded the grade of <strong>{verification.finalGrade ?? 'N/A'}</strong>.
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-end relative font-sans">
                
                <div className="flex flex-col items-center text-center space-y-1 font-sans">
                  <span className="text-[9px] font-bold text-brand-orange uppercase italic border-b border-slate-200 pb-1 font-mono tracking-wider">
                    VALID stamp
                  </span>
                  <span className="text-[8px] uppercase text-slate-400 font-bold block">Future Gates Stamp</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-slate-600 block">{verification.trainerName || 'Trainer Name'}</span>
                  <div className="w-24 border-b border-dashed border-slate-300" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Trainer</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
