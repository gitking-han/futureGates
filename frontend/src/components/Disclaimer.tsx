import React from 'react';
import {
    AlertTriangle,
    GraduationCap,
    Briefcase,
    Scale,
    CheckCircle,
    Globe,
    Bot,
    ShieldAlert,
    RefreshCw,
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';

export const Disclaimer: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
                    {/* Header */}
                    <div className="bg-white p-8 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-8 h-8 text-brand-orange" />
                            <h1 className="text-3xl font-bold text-slate-900">
                                Disclaimer
                            </h1>
                        </div>

                        <p className="text-sm text-slate-500">
                            Last Updated: May 10, 2026
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Welcome to <strong>Future Gates IT Center (FGIT Center)</strong>.
                            The information provided on this website is for educational,
                            informational, and business purposes only. By using this website,
                            you acknowledge and agree to the terms outlined in this Disclaimer.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* Educational Purpose */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <GraduationCap className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Educational Purpose
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Future Gates IT Center provides IT training, digital skills
                                education, career guidance, and professional digital services.
                                All information, tutorials, courses, and resources shared on
                                this website are intended to support learning and professional
                                development.
                            </p>
                        </section>

                        {/* No Guarantee */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldAlert className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    No Guarantee of Results
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                While we strive to provide high-quality training and practical
                                knowledge, we do not guarantee:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Employment opportunities</li>
                                <li>• Freelancing success</li>
                                <li>• Online earning results</li>
                                <li>• Business growth outcomes</li>
                                <li>• Specific financial results</li>
                            </ul>

                            <p className="text-slate-600 mt-4">
                                Success depends on individual effort, skills, experience,
                                dedication, market conditions, and other factors beyond our
                                control.
                            </p>
                        </section>

                        {/* Professional Advice */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Scale className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Professional Advice
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                The content available on this website should not be considered
                                legal, financial, tax, investment, or professional business
                                advice.
                            </p>

                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Users should consult qualified professionals before making
                                important business, financial, legal, or career decisions.
                            </p>
                        </section>

                        {/* Accuracy */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Accuracy of Information
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We make every reasonable effort to ensure that information
                                published on this website is accurate and up to date. However,
                                we do not guarantee the completeness, accuracy, reliability,
                                or suitability of any information, products, services, or
                                content provided.
                            </p>
                        </section>

                        {/* External Links */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    External Links
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Our website may contain links to third-party websites, tools,
                                software, or services. These links are provided for convenience
                                only.
                            </p>

                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Future Gates IT Center has no control over and assumes no
                                responsibility for the content, policies, or practices of
                                external websites.
                            </p>
                        </section>

                        {/* Digital Services */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Briefcase className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Digital Services Disclaimer
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                For digital services such as graphic design, website
                                development, digital marketing, video editing, AI-related
                                services, and other project work:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Results may vary depending on project requirements.</li>
                                <li>• Timelines may change based on project complexity.</li>
                                <li>
                                    • Client cooperation and timely communication are essential
                                    for successful project completion.
                                </li>
                            </ul>
                        </section>

                        {/* AI Disclaimer */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Bot className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    AI Tools Disclaimer
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Some courses, content, and services may involve the use of
                                Artificial Intelligence (AI) tools.
                            </p>

                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Users are responsible for reviewing, verifying, and
                                appropriately using AI-generated outputs. FUTURE GATES IT
                                Center is not responsible for decisions made solely based on
                                AI-generated content.
                            </p>
                        </section>

                        {/* Liability */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Limitation of Liability
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Future Gates IT Center shall not be held liable for any direct,
                                indirect, incidental, consequential, or special damages
                                arising from the use of this website, training programs,
                                digital services, or related content.
                            </p>
                        </section>

                        {/* Consent */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Consent
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                By using this website, you hereby consent to this Disclaimer
                                and agree to its terms.
                            </p>
                        </section>

                        {/* Updates */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <RefreshCw className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Updates
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to update, amend, or modify this
                                Disclaimer at any time without prior notice. Any changes will
                                be posted on this page.
                            </p>
                        </section>
                    </div>

                </div>
                {/* Contact */}
                <section className="bg-linear-to-b from-slate-900 to-brand-blue-dark text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-3">
                        Contact Information
                    </h2>

                    <p className="text-white/90 mb-6">
                        If you have questions regarding this Disclaimer, please
                        contact us:
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

export default Disclaimer;