import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import GeneralPrinciples from './components/GeneralPrinciples';
import PerformanceReview from './components/PerformanceReview';
import MicrocycleSchedule from './components/MicrocycleSchedule';
import Conclusion from './components/Conclusion';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove #
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="planification" className="lg:col-span-2">
            <Timeline />
          </div>
          <div className="space-y-8">
            <div id="principes-generaux">
              <GeneralPrinciples />
            </div>
            <div id="revue-performance">
              <PerformanceReview />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div id="programme-hebdomadaire" className="xl:col-span-2">
                <MicrocycleSchedule />
            </div>
            <div id="conclusion">
                <Conclusion />
            </div>
        </div>
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>Fait à Genève le 02.09.2025 par Cédric Doutaz</p>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;