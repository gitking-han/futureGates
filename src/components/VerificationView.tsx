/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Search, RotateCcw, AlertTriangle, Printer, QrCode, ClipboardCheck, Sparkles, Plus } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STUDENT_RESULTS } from '../data';
import { StudentResult } from '../types';

export const VerificationView: React.FC = () => {
  const [rollNoQuery, setRollNoQuery] = useState('');
  const [searchedRoll, setSearchedRoll] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<StudentResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [resultsList, setResultsList] = useState<StudentResult[]>(STUDENT_RESULTS);

  // Demo creator state
  const [isCreatingDemo, setIsCreatingDemo] = useState(false);
  const [demoName, setDemoName] = useState('');
  const [demoFatherName, setDemoFatherName] = useState('');
  const [demoCourse, setDemoCourse] = useState('Full-Stack Web Development');
  const [demoGrade, setDemoGrade] = useState<'A+' | 'A' | 'B' | 'C'>('A+');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNoQuery.trim()) return;

    const query = rollNoQuery.trim().toUpperCase();
    const result = resultsList.find((item) => item.rollNo.toUpperCase() === query);

    setSearchedRoll(query);
    if (result) {
      setSearchResult(result);
      setNotFound(false);
    } else {
      setSearchResult(null);
      setNotFound(true);
    }
  };

  const handleReset = () => {
    setRollNoQuery('');
    setSearchResult(null);
    setSearchedRoll(null);
    setNotFound(false);
  };

  const selectTestRoll = (rollNo: string) => {
    setRollNoQuery(rollNo);
    const result = resultsList.find((item) => item.rollNo === rollNo);
    setSearchedRoll(rollNo);
    if (result) {
      setSearchResult(result);
      setNotFound(false);
    }
  };

  const handleCreateDemoCredential = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoFatherName.trim()) return;

    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newRoll = `FG-2026-${randomSuffix}`;
    const newCert = `CER-2026-${Math.floor(40000 + Math.random() * 59999)}`;
    const newEnr = `ENR-2101-09${Math.floor(20 + Math.random() * 79)}`;

    const customDemo: StudentResult = {
      rollNo: newRoll,
      name: demoName.trim(),
      fatherName: demoFatherName.trim(),
      enrollmentNo: newEnr,
      courseName: demoCourse,
      duration: demoCourse.includes('Web') || demoCourse.includes('App') ? '6 Months' : '3 Months',
      session: demoCourse.includes('Web') || demoCourse.includes('App') ? 'Jan 2026 - Jun 2026' : 'Jan 2026 - Mar 2026',
      grade: demoGrade,
      percentage: demoGrade === 'A+' ? 94 : demoGrade === 'A' ? 86 : demoGrade === 'B' ? 76 : 64,
      theoryMarks: demoGrade === 'A+' ? 188 : demoGrade === 'A' ? 170 : demoGrade === 'B' ? 150 : 130,
      practicalMarks: demoGrade === 'A+' ? 246 : demoGrade === 'A' ? 220 : demoGrade === 'B' ? 190 : 160,
      vivaMarks: demoGrade === 'A+' ? 36 : demoGrade === 'A' ? 40 : demoGrade === 'B' ? 35 : 30,
      totalMarks: demoGrade === 'A+' ? 470 : demoGrade === 'A' ? 430 : demoGrade === 'B' ? 375 : 320,
      maxMarks: 500,
      issueDate: '2026-06-03',
      certificateNo: newCert,
      verificationStatus: 'Verified',
      remarks: 'Validated from student workspace. Achieved expert trade credentials.',
    };

    setResultsList([customDemo, ...resultsList]);
    setRollNoQuery(newRoll);
    setSearchResult(customDemo);
    setSearchedRoll(newRoll);
    setNotFound(false);
    setIsCreatingDemo(false);
    setDemoName('');
    setDemoFatherName('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Title Header with accreditation compliance */}
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

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Verification Engine Box */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 no-print">
          
          {/* Header block with Deep Navy background and Orange Accent */}
          <div className="bg-brand-blue text-white p-5 sm:p-7 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-4 border-brand-orange">
            <div className="flex items-center gap-4">
              <div className="p-1 bg-white rounded-full flex-shrink-0">
                <BrandLogo iconOnly={true} className="w-12 h-12" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display font-black text-sm sm:text-base tracking-wide whitespace-normal leading-tight">
                  Future Gates I.T Center, Pakistan
                </h3>
                <span className="text-[10px] text-brand-orange block font-mono tracking-wide mt-1 uppercase leading-none font-bold">
                  Where Skills Become Your Income
                </span>
                <span className="text-[9px] text-slate-300 block opacity-85 mt-1 leading-tight font-sans">
                  Certified Technical Training, Course Valitations, and Professional Credential Auditing
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Embedded Instruction & Roll List */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-semibold">Verified Database Student Roster</span>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                To test the online verification pipeline, select an existing student roll number from our database, or click the custom creator button to add new students:
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {resultsList.slice(0, 4).map((res) => (
                    <button
                      key={res.rollNo}
                      onClick={() => selectTestRoll(res.rollNo)}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md border transition-all cursor-pointer ${
                        rollNoQuery === res.rollNo
                          ? 'bg-brand-blue text-brand-orange border-brand-blue font-bold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {res.rollNo} ({res.name.split(' ')[0]})
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsCreatingDemo(!isCreatingDemo)}
                  className="px-3 py-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white border border-transparent font-bold text-[10px] rounded-lg flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  Custom Cert Creator
                </button>
              </div>
            </div>

            {/* Custom Demo Generator Panel */}
            {isCreatingDemo && (
              <form onSubmit={handleCreateDemoCredential} className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-4 animate-slide-up">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-brand-blue flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    CREATE CUSTOM STUDENT RECORD
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCreatingDemo(false)}
                    className="text-[10px] text-slate-400 hover:text-slate-600 block uppercase cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase block">Candidate Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farhan Ali"
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase block">Father's Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Siddique"
                      value={demoFatherName}
                      onChange={(e) => setDemoFatherName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase block">Course studied</label>
                    <select
                      value={demoCourse}
                      onChange={(e) => setDemoCourse(e.target.value)}
                      className="w-full bg-white border border-slate-200 px-3 py-1.5 rounded text-xs focus:ring-2 focus:ring-brand-blue text-slate-800"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development (6m)</option>
                      <option value="Mobile App Development (React Native & Flutter)">Mobile App Dev (6m)</option>
                      <option value="Professional Graphic Design & UI/UX Expert">Graphic Design Expert (3m)</option>
                      <option value="Computer Information Technology (CIT)">CIT Office IT (3m)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase block">Final Grade Achievement</label>
                    <select
                      value={demoGrade}
                      onChange={(e) => setDemoGrade(e.target.value as any)}
                      className="w-full bg-white border border-slate-200 px-3 py-1.5 rounded text-xs focus:ring-2 focus:ring-brand-blue text-slate-800"
                    >
                      <option value="A+">Grade A+ (Distinction 90%+)</option>
                      <option value="A">Grade A (Excellent 80%+)</option>
                      <option value="B">Grade B (Good 70%+)</option>
                      <option value="C">Grade C (Satisfactory 60%+)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Generate Cert record & verify rollno
                </button>
              </form>
            )}

            {/* Verification Form */}
            <form onSubmit={handleSearch} className="space-y-4 max-w-xl mx-auto pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                <label className="text-sm font-bold text-slate-700 min-w-[70px] text-left sm:text-right font-display uppercase tracking-wider">
                  Roll No :
                </label>
                
                <input
                  type="text"
                  placeholder="Enter Roll Number (e.g., FG-2026-101)"
                  value={rollNoQuery}
                  onChange={(e) => setRollNoQuery(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white text-xs text-slate-800 uppercase font-mono tracking-wider shadow-inner"
                />
              </div>

              {/* Reset + Search Buttons block */}
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
            </form>

            {/* Output error if student not found */}
            {notFound && searchedRoll && (
              <div className="bg-slate-50 p-5 border-2 border-brand-orange rounded-lg text-center max-w-md mx-auto space-y-2 animate-shake">
                <AlertTriangle className="w-8 h-8 text-brand-orange mx-auto" />
                <h4 className="text-xs font-bold text-slate-900 block font-display">ROSTER RECORD NOT FOUND</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  The roll number <code className="font-mono text-xs text-brand-orange font-bold uppercase">"{searchedRoll}"</code> does not match any authenticated certification records. Please verify spellings or generate a new custom certificate.
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Digital verification outcome result */}
        {searchResult && (
          <div className="mt-12 space-y-4 animate-slide-up">
            
            {/* Document Controls */}
            <div className="flex justify-between items-center bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm no-print">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="w-4.5 h-4.5 text-brand-orange" />
                <span className="text-xs font-bold text-slate-800">
                  Registered Certificate Verified Successfully • <span className="text-brand-blue font-mono font-extrabold uppercase">{searchResult.rollNo}</span>
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

            {/* Official grade sheet / training cert framework inside the screen */}
            <div className="print-card bg-white border-[10px] border-double border-brand-blue rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              
              {/* Aesthetic golden star borders inside cert backing */}
              <div className="absolute inset-2 border border-brand-orange/30 rounded-lg opacity-80 pointer-events-none" />
              
              {/* Background translucent watermarked seal */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <BrandLogo iconOnly={true} className="w-96 h-96" />
              </div>

              {/* Upper cert identity layout */}
              <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b-2 border-brand-blue/30 relative">
                
                <div className="p-1 bg-white rounded-full border-2 border-brand-orange">
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
                    Accredited Technology Bootcamps & Software Services Division • Pakistan
                  </p>
                </div>

                <div className="mt-2 text-center bg-brand-blue text-brand-orange text-[10px] tracking-widest font-black uppercase px-6 py-1.5 rounded-sm border border-brand-orange inline-block">
                  ACCREDITED GRADE REPORT & TRANSCRIPT CERTIFICATE
                </div>
              </div>

              {/* Content matrix */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-xs relative">
                
                {/* Details left column */}
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Candidate Name:</span>
                    <span className="text-slate-900 font-bold uppercase">{searchResult.name}</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Father's Name:</span>
                    <span className="text-slate-900 font-semibold uppercase">{searchResult.fatherName}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Enrollment Number:</span>
                    <span className="text-slate-900 font-mono font-bold text-center">{searchResult.enrollmentNo}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Verification Reference:</span>
                    <span className="text-slate-900 font-mono font-bold text-center">{searchResult.certificateNo}</span>
                  </div>
                </div>

                {/* Details right column */}
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Trade/Syllabus:</span>
                    <span className="text-slate-900 font-bold text-right text-[11px]">{searchResult.courseName}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Course Duration:</span>
                    <span className="text-slate-900 font-semibold">{searchResult.duration}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Training Session:</span>
                    <span className="text-slate-900 font-medium font-mono">{searchResult.session}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 font-sans">
                    <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wide">Roster Status:</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[9px] font-bold rounded-sm uppercase tracking-wider">
                      {searchResult.verificationStatus}
                    </span>
                  </div>
                </div>

              </div>

              {/* Exact Marks Grade Distribution Matrix Table */}
              <div className="mt-2 border border-slate-250 rounded-lg overflow-hidden bg-white shadow-xs relative">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 text-[9px] uppercase tracking-wider border-b border-slate-200">
                      <th className="py-2.5 px-3">Subject Mode</th>
                      <th className="py-2.5 px-3 text-center">Theoretical (200)</th>
                      <th className="py-2.5 px-3 text-center">Practical (250)</th>
                      <th className="py-2.5 px-3 text-center">viva/freelance (50)</th>
                      <th className="py-2.5 px-3 text-center bg-brand-blue/5 font-bold">Obtained Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-800">{searchResult.courseName}</td>
                      <td className="py-3 px-3 text-center font-mono">{searchResult.theoryMarks}</td>
                      <td className="py-3 px-3 text-center font-mono">{searchResult.practicalMarks}</td>
                      <td className="py-3 px-3 text-center font-mono">{searchResult.vivaMarks}</td>
                      <td className="py-3 px-3 text-center font-mono font-bold text-brand-blue bg-brand-blue/5">
                        {searchResult.totalMarks} / {searchResult.maxMarks}
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td colSpan={4} className="py-2.5 px-3 text-right font-medium text-[9px] uppercase text-slate-450 font-sans">Total Score Percentage:</td>
                      <td className="py-2.5 px-3 text-center font-mono font-extrabold text-brand-blue bg-brand-blue/5">
                        {searchResult.percentage}%
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="py-2.5 px-3 text-right font-medium text-[9px] uppercase text-slate-450 font-sans">Accredited Final Grade:</td>
                      <td className="py-2.5 px-3 text-center font-display font-black text-brand-orange text-sm bg-brand-blue/5">
                        {searchResult.grade}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Remarks block */}
              <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-500 leading-normal font-sans">
                <strong>Board Assessment Council Remarks:</strong> {searchResult.remarks}
              </div>

              {/* Lower seals and stamps */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 items-end relative font-sans">
                
                {/* QR system validator */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                  <div className="w-16 h-16 bg-white p-1 border border-slate-200 rounded flex items-center justify-center">
                    <QrCode className="w-14 h-14 text-slate-800" />
                  </div>
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-1 block">Scan to verify</span>
                </div>

                {/* Status signature */}
                <div className="flex flex-col items-center text-center space-y-1 font-sans">
                  <span className="text-[9px] font-bold text-brand-orange uppercase italic border-b border-slate-200 pb-1 font-mono tracking-wider">
                    VALID stamp
                  </span>
                  <span className="text-[8px] uppercase text-slate-400 font-bold block">Future Gates Stamp</span>
                </div>

                {/* Examiner Signature line */}
                <div className="flex flex-col items-center text-center space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-slate-600 block">Muhammad Tariq</span>
                  <div className="w-24 border-b border-dashed border-slate-300" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Conroller of Exams</span>
                </div>

                {/* Chairman signature */}
                <div className="flex flex-col items-center text-center space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-slate-600 block">Amjad Rafique</span>
                  <div className="w-24 border-b border-dashed border-slate-300" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block mt-1">Executive Director</span>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};
