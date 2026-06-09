/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, Send, ClipboardCheck, Building } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactViewProps {
  prefilledSubject: string;
  clearPrefilledSubject: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ prefilledSubject, clearPrefilledSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState<ContactInquiry | null>(null);



  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledSubject,
        message: `Hello Future Gates I.T Center. I am interested in initiating inquiry or enrollment details for: ${prefilledSubject}. Please send the core registration criteria and schedule bounds.`,
      }));
    }
  }, [prefilledSubject]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();

      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append(
        'subject',
        formData.subject || 'General Admission Inquiry'
      );
      formPayload.append('message', formData.message);

      // FormSubmit settings
      formPayload.append('_captcha', 'false');
      formPayload.append(
        '_subject',
        'New Future Gates Contact Form Submission'
      );

      await fetch(
        'https://formsubmit.co/futuregatesitcenter@gmail.com',
        {
          method: 'POST',
          body: formPayload,
        }
      );

      const newInquiry: ContactInquiry = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'General Admission Inquiry',
        message: formData.message,
        submittedAt: new Date().toLocaleString('en-PK'),
      };

      setInquirySubmitted(newInquiry);

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });

      clearPrefilledSubject();
    } catch (error) {
      console.error(error);
      alert('Unable to send message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismissSuccess = () => {
    setInquirySubmitted(null);
  };

  return (
    <div className="space-y-12 pb-16">

      {/* Visual Header */}
      <section className="bg-slate-900 text-white py-14 px-4 border-b-2 border-brand-orange text-center relative">
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark/20 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto space-y-2">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-2 tracking-wide leading-none">
            Contact Us
          </h1>
          <p className="text-slate-400 text-xs max-w-xl mx-auto pt-2">
            Have queries regarding technical courses, freelance training, student verifications, or outsourcing app and web projects? Send a ticket directly to the Future Gates administrative office.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Get in Touch & Office coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <div className="w-12 h-1 bg-brand-orange rounded-full" />
              <p className="text-slate-500 text-xs leading-relaxed font-sans">
                We maintain active admission desks and service consultation teams. Contact us directly via phone, WhatsApp, or email, and our coordinates will guide you inside 24 hours.
              </p>
            </div>

            {/* Address Grouping */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs space-y-6">

              <h3 className="font-display font-bold text-base text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Building className="w-5 h-5 text-brand-blue" />
                Office Location
              </h3>

              <div className="space-y-4 text-xs text-slate-600 font-sans">

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">Address:</span>
                    <span className="text-slate-500 leading-normal block mt-1">Girot Road Khushab</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">Email Support:</span>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=futuregatesitcenter@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline font-mono block mt-1 font-semibold"
                    >
                      futuregatesitcenter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">Admission Hotline:</span>
                    <a href="tel:+923016775690" className="text-slate-600 font-mono font-bold hover:text-brand-blue block mt-1">
                      +92301-6775690
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Available on standard GSM calling and WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-50">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">Operation Hours:</span>
                    <span className="text-slate-500 block mt-0.5 leading-normal">Monday - Saturday (09:00 AM - 06:00 PM PST)</span>
                    <span className="text-[10px] text-brand-orange font-bold block mt-1">Sunday: Closed</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Send Us a Message */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-100 shadow-md space-y-6">

              <div className="space-y-2">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-[11px] text-slate-400 font-sans">
                  Submit this official form to route priorities directly to admission counselor desks or outsourcing project executives.
                </p>
              </div>



              {/* Inquiry form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2 font-sans">

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Candidate / Organization Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="Primary Contact Number (+92-3XX-XXXXXXX)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all shadow-inner font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Active Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all shadow-inner font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Inquiry Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Graphic design, Web & App Development, etc."
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Message</label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    placeholder="Draft detailed specifications, enrollment help request, or business ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all shadow-inner resize-y leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Ticket...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-orange" />
                        Transmit Inquiry
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Success Modal */}
      {inquirySubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl text-center space-y-4 animate-scale-up">
            <div className="w-12 h-12 rounded-full bg-blue-105 bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
              <ClipboardCheck className="w-6 h-6 text-brand-orange" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-slate-900 text-sm tracking-wide uppercase">
                INQUIRY RECIEVED SUCCESSFULLY
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Thank you, <strong>{inquirySubmitted.name}</strong>. Your ticket regarding <span className="text-brand-blue font-mono font-bold leading-none">"{inquirySubmitted.subject}"</span> has been logged securely under our registrar on {inquirySubmitted.submittedAt}.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-left text-[10px] space-y-1 font-mono">
              <span className="font-bold text-slate-400 block uppercase">Recorded:</span>
              <p className="text-slate-600"><span className="text-slate-400">Phone:</span> {inquirySubmitted.phone}</p>
              <p className="text-slate-600"><span className="text-slate-400">Email:</span> {inquirySubmitted.email}</p>
            </div>

            <p className="text-[9px] text-slate-400 leading-relaxed font-sans">
              An academic counselor or services director from Future Gates Rawalpindi will coordinate with you via phone shortly.
            </p>

            <button
              onClick={handleDismissSuccess}
              className="w-full py-2.5 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-all cursor-pointer font-sans shadow-md"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
