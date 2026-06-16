/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { CoursesView } from './components/CoursesView';
import { ServicesView } from './components/ServicesView';
import { VerificationView } from './components/VerificationView';
import { ContactView } from './components/ContactView';
import { BlogsView } from './components/BlogsView';
import { BlogDetailView } from './components/BlogDetailView';
import { AdminLoginView } from './components/AdminLoginView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { AdminBlogsPage } from './components/AdminBlogsPage';
import { AdminVerificationPage } from './components/AdminVerificationPage';
import { AdminStudentActivityAdsPage } from './components/AdminStudentActivityAdsPage';
import { AdminHeroSlidesPage } from './components/AdminHeroSlidesPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Disclaimer } from './components/Disclaimer';
import { setAuthToken } from './services/api';

const pathToTab = (pathname: string, token: string | null) => {
  switch (pathname.toLowerCase()) {
    case '/about':
      return 'about';
    case '/courses':
      return 'courses';
    case '/services':
      return 'services';
    case '/verification':
      return 'verification';
    case '/blogs':
      return 'blogs';
    case '/contact':
      return 'contact';
    case '/admin':
    case '/admin/dashboard':
      return token ? 'admin-dashboard' : 'admin-login';
    case '/admin/blogs':
      return token ? 'admin-blogs' : 'admin-login';
    case '/admin/verification':
      return token ? 'admin-verification' : 'admin-login';
    case '/admin/student-activity-ads':
      return token ? 'admin-student-activity-ads' : 'admin-login';
    case '/admin/hero-slides':
      return token ? 'admin-hero-slides' : 'admin-login';
    case '/privacy':
      return 'privacy';
    case '/terms':
      return 'terms';
    case '/disclaimer':
      return 'disclaimer';
    default:
      return 'home';
  }
};

const tabToPath = (tab: string) => {
  switch (tab) {
    case 'about':
      return '/about';
    case 'courses':
      return '/courses';
    case 'services':
      return '/services';
    case 'verification':
      return '/verification';
    case 'blogs':
      return '/blogs';
    case 'contact':
      return '/contact';
    case 'admin-login':
    case 'admin-dashboard':
      return '/admin';
    case 'admin-blogs':
      return '/admin/blogs';
    case 'admin-verification':
      return '/admin/verification';
    case 'admin-student-activity-ads':
      return '/admin/student-activity-ads';
    case 'admin-hero-slides':
      return '/admin/hero-slides';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case 'disclaimer':
      return '/disclaimer';
    default:
      return '/';
  }
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');
  const [adminToken, setAdminToken] = useState<string | null>(() => localStorage.getItem('adminToken'));
  const [adminEmail, setAdminEmail] = useState<string>(() => localStorage.getItem('adminEmail') || '');

  useEffect(() => {
    setAuthToken(adminToken);
  }, [adminToken]);

  useEffect(() => {
    const current = pathToTab(window.location.pathname, adminToken);
    setCurrentTab(current);

    const handlePopState = () => {
      setCurrentTab(pathToTab(window.location.pathname, adminToken));
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [adminToken]);

  const setTab = (tab: string) => {
    const path = tabToPath(tab);
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentTab(tab);
  };

  const clearPrefilledSubject = () => {
    setPrefilledSubject('');
  };

  const handleAdminLoginSuccess = (token: string, email: string) => {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminEmail', email);
    setAdminToken(token);
    setAdminEmail(email);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    setAdminToken(null);
    setAdminEmail('');
    setTab('home');
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView setTab={setCurrentTab} />;
      case 'about':
        return <AboutView />;
      case 'courses':
        return (
          <CoursesView
            setTab={setCurrentTab}
            setSelectedInquiryCourse={setPrefilledSubject}
          />
        );
      case 'services':
        return (
          <ServicesView
            setTab={setCurrentTab}
            setSelectedInquiryCourse={setPrefilledSubject}
          />
        );
      case 'verification':
        return <VerificationView />;
      case 'blogs':
        return (
          <BlogsView
            setTab={setCurrentTab}
            setSelectedBlogId={setSelectedBlogId}
          />
        );
      case 'blog-detail':
        return (
          <BlogDetailView
            blogId={selectedBlogId}
            onBack={() => setCurrentTab('blogs')}
          />
        );
      case 'contact':
        return (
          <ContactView
            prefilledSubject={prefilledSubject}
            clearPrefilledSubject={clearPrefilledSubject}
          />
        );
      case 'admin-login':
        return <AdminLoginView onLoginSuccess={handleAdminLoginSuccess} setTab={setTab} />;
      case 'admin-dashboard':
        return (
          <AdminDashboardView
            adminEmail={adminEmail}
            onLogout={handleAdminLogout}
            setTab={setTab}
          />
        );
      case 'admin-blogs':
        return (
          <AdminBlogsPage
            adminEmail={adminEmail}
            onBack={() => setTab('admin-dashboard')}
            setTab={setTab}
          />
        );
      case 'admin-verification':
        return (
          <AdminVerificationPage
            onBack={() => setTab('admin-dashboard')}
            setTab={setTab}
          />
        );
      case 'admin-student-activity-ads':
        return (
          <AdminStudentActivityAdsPage
            onBack={() => setTab('admin-dashboard')}
            setTab={setTab}
          />
        );
      case 'admin-hero-slides':
        return (
          <AdminHeroSlidesPage
            onBack={() => setTab('admin-dashboard')}
            setTab={setTab}
          />
        );
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsAndConditions />;
      case 'disclaimer':
        return <Disclaimer />;
      default:
        return <HomeView setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-slate-800 font-sans selection:bg-brand-blue selection:text-brand-orange">
      
      {/* Dynamic Header Component */}
      <Header currentTab={currentTab} setTab={setTab} />

      {/* Main Transitions Workspace Wrapper */}
      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer Component */}
      <Footer setTab={setTab} />

    </div>
  );
}
