import React from 'react';
import {
    ShieldCheck,
    Lock,
    Users,
    Cookie,
    Globe,
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
                    {/* Header */}
                    <div className="bg-white p-8 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-8 h-8 text-brand-blue" />
                            <h1 className="text-3xl font-bold text-slate-900">
                                Privacy Policy
                            </h1>
                        </div>

                        <p className="text-sm text-slate-500">
                            Last Updated: May 10, 2026
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Welcome to <strong>Future Gates IT Center (FGIT Center)</strong>.
                            We value your privacy and are committed to protecting your personal
                            information. This Privacy Policy explains how we collect, use, and
                            safeguard the information you provide when using our website and
                            services.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* Information We Collect */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Information We Collect
                            </h2>

                            <p className="text-slate-600 mb-4">
                                We may collect the following information:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Name</li>
                                <li>• Email Address</li>
                                <li>• Phone Number</li>
                                <li>• WhatsApp Number</li>
                                <li>• Location Information</li>
                                <li>• Course Inquiry Details</li>
                                <li>• Information submitted through contact forms</li>
                            </ul>
                        </section>

                        {/* How We Use Information */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    How We Use Your Information
                                </h2>
                            </div>

                            <p className="text-slate-600 mb-4">
                                We use your information to:
                            </p>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Respond to inquiries and support requests</li>
                                <li>• Provide information about our courses and services</li>
                                <li>• Process registrations and admissions</li>
                                <li>• Improve our website and user experience</li>
                                <li>
                                    • Send updates, announcements, and promotional offers
                                </li>
                            </ul>
                        </section>

                        {/* Information Protection */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Lock className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Information Protection
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                We take reasonable security measures to protect your personal
                                information from unauthorized access, disclosure, alteration,
                                or misuse.
                            </p>
                        </section>

                        {/* Sharing Information */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Sharing of Information
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                Future Gates IT Center does not sell, rent, or trade your
                                personal information to third parties. Information may only be
                                shared when required by law or for legitimate business
                                operations.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Cookie className="w-5 h-5 text-brand-blue" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Cookies
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Our website may use cookies to improve user experience and
                                analyze website traffic. You may choose to disable cookies
                                through your browser settings.
                            </p>
                        </section>

                        {/* Third Party Services */}
                        <section className="bg-white p-8 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-brand-orange" />
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Third-Party Services
                                </h2>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Our website may contain links to third-party websites, social
                                media platforms, or services. We are not responsible for the
                                privacy practices of those external websites.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Children's Privacy
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                Our services are intended for students and learners. We
                                encourage parents and guardians to supervise the online
                                activities of minors.
                            </p>
                        </section>

                        {/* Changes */}
                        <section className="bg-white p-8 mb-6">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Changes to This Policy
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. Any
                                changes will be posted on this page together with the updated
                                revision date.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Contact */}
                <section className="bg-linear-to-b from-slate-900 to-brand-blue-dark text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-3">
                        Contact Us
                    </h2>

                    <p className="text-white/90 mb-6">
                        If you have any questions regarding this Privacy Policy,
                        please contact us:
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

export default PrivacyPolicy;