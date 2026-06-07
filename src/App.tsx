/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
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

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');

  const clearPrefilledSubject = () => {
    setPrefilledSubject('');
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
      default:
        return <HomeView setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-slate-800 font-sans selection:bg-brand-blue selection:text-brand-orange">
      
      {/* Dynamic Header Component */}
      <Header currentTab={currentTab} setTab={setCurrentTab} />

      {/* Main Transitions Workspace Wrapper */}
      <main className="flex-grow">
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
      <Footer setTab={setCurrentTab} />

    </div>
  );
}
