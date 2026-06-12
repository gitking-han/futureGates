import React from 'react';
import {
    FileText,
    GraduationCap,
    UserCheck,
    Award,
    Briefcase,
    CreditCard,
    Shield,
    Globe,
    AlertTriangle,
    ExternalLink,
    RefreshCw,
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
                    {/* Header */}
                    <div className="bg-white p-8 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-8 h-8 text-brand-blue" />
                            <h1 className="text-3xl font-bold text-slate-900">
                                Terms & Conditions
                            </h1>
                        </div>

                        <p className="text-sm text-slate-500">
                            Last Updated: May 10, 2026
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Welcome to <strong>Future Gates IT Center (FGIT Center)</strong>.
                            By accessing and using our website, courses, and services, you
                            agree to comply with the following Terms & Conditions. If you do
                            not agree with any part of these terms, please discontinue the use
                            of our website and services.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* About Us */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                1. About Us
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                Future Gates IT Center (FGIT Center) provides IT training,
                                digital skills education, and professional digital services
                                including Graphic Design, Video Editing, Website Development,
                                Digital Marketing, AI-related solutions, and related services.
                            </p>

                            <div className="mt-4 bg-slate-50 rounded-lg p-4">
                                <p className="font-semibold text-brand-blue">
                                    Where Skills Become Your Income
                                </p>
                            </div>
                        </section>

                        {/* Acceptance */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <UserCheck className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    2. Acceptance of Terms
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                By using our website, registering for a course, or requesting
                                our services, you acknowledge that you have read, understood,
                                and agreed to these Terms & Conditions.
                            </p>
                        </section>

                        {/* Course Enrollment */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <GraduationCap className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    3. Course Enrollment
                                </h2>
                            </div>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Students must provide accurate registration information.</li>
                                <li>• Course fees must be paid according to the agreed payment schedule.</li>
                                <li>• Admission is confirmed only after successful registration and payment.</li>
                                <li>
                                    • FUTURE GATES IT Center reserves the right to modify course
                                    schedules, timings, or training methods when necessary.
                                </li>
                            </ul>
                        </section>

                        {/* Student Responsibilities */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                4. Student Responsibilities
                            </h2>

                            <p className="text-slate-600 mb-4">
                                Students are expected to:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Attend classes regularly.</li>
                                <li>• Maintain professional and respectful behavior.</li>
                                <li>• Follow classroom and online learning guidelines.</li>
                                <li>• Refrain from activities that may disrupt training sessions.</li>
                            </ul>

                            <p className="text-slate-600 mt-4">
                                FUTURE GATES IT Center reserves the right to suspend or terminate
                                enrollment in cases of misconduct.
                            </p>
                        </section>

                        {/* Certificates */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    5. Certificates
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Certificates may be awarded upon successful completion of course
                                requirements, attendance criteria, and assessments where
                                applicable.
                            </p>
                        </section>

                        {/* Digital Services */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Briefcase className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    6. Digital Services
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                For digital service projects:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Clients must provide complete project requirements.</li>
                                <li>• Project timelines may vary depending on scope and complexity.</li>
                                <li>• Revisions will be handled according to agreed project terms.</li>
                                <li>• Final project files may be delivered after full payment is received.</li>
                            </ul>
                        </section>

                        {/* Payments */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <CreditCard className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    7. Payments
                                </h2>
                            </div>

                            <ul className="space-y-2 text-slate-600">
                                <li>• All payments must be made through approved payment methods.</li>
                                <li>• Fees and service charges may change without prior notice.</li>
                                <li>
                                    • Payments for completed services or consumed training sessions
                                    may not be refundable unless otherwise agreed.
                                </li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    8. Intellectual Property
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                All website content, course materials, training resources,
                                graphics, videos, documents, and branding elements belong to
                                Future Gates IT Center unless otherwise stated.
                            </p>

                            <p className="text-slate-600 mb-3">
                                Users may not:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Copy</li>
                                <li>• Reproduce</li>
                                <li>• Distribute</li>
                                <li>• Sell</li>
                                <li>• Modify</li>
                            </ul>

                            <p className="text-slate-600 mt-4">
                                without written permission.
                            </p>
                        </section>

                        {/* Website Usage */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    9. Website Usage
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                Users agree not to:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Use the website for unlawful purposes.</li>
                                <li>• Attempt unauthorized access to website systems.</li>
                                <li>• Upload malware or malicious content.</li>
                                <li>• Misuse contact forms or communication channels.</li>
                            </ul>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    10. Limitation of Liability
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                FUTURE GATES IT Center provides educational and professional
                                services in good faith. However:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• We do not guarantee specific job placements.</li>
                                <li>• We do not guarantee freelancing income or business success.</li>
                                <li>
                                    • Individual results depend on effort, skill application,
                                    market conditions, and personal commitment.
                                </li>
                            </ul>
                        </section>

                        {/* Third Party Links */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <ExternalLink className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    11. Third-Party Links
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Our website may contain links to third-party websites and
                                services. We are not responsible for their content, privacy
                                practices, or policies.
                            </p>
                        </section>

                        {/* Changes */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <RefreshCw className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    12. Changes to Terms
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                FUTURE GATES IT Center reserves the right to update or modify
                                these Terms & Conditions at any time. Updated versions will be
                                posted on this page.
                            </p>
                        </section>
                    </div>
                </div>
                {/* Contact Section */}
                <section className="bg-linear-to-b from-slate-900 to-brand-blue-dark text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-3">
                        13. Contact Information
                    </h2>

                    <p className="text-white/90 mb-6">
                        For questions regarding these Terms & Conditions, please contact:
                    </p>

                    <div className="space-y-4">

                        <div>
                            <h3 className="font-semibold text-lg">
                                Future Gates IT Center (FGIT Center)
                            </h3>
                            <p className="text-white/80">
                                Where Skills Become Your Income
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span>Khushab, Punjab, Pakistan</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 shrink-0" />
                            <span>futuregatesitcenter@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 shrink-0" />
                            <span>0301-6775690</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 shrink-0" />
                            <span>futuregatesitcenter.com</span>
                        </div>

                    </div>
                </section>


            </div>
        </div>
    );
};

export default TermsAndConditions;