/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-slate-800 font-sans selection:bg-brand-blue selection:text-brand-orange">
      
      {/* Header Component */}
      <Header currentTab="home" setTab={() => {}} />

      {/* Main Content */}
      <main className="grow w-full">
        <HomeView setTab={() => {}} />
      </main>

      {/* Footer Component */}
      <Footer setTab={() => {}} />

    </div>
  );
}
