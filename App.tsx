import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import GeneralPrinciples from './components/GeneralPrinciples';
import PerformanceReview from './components/PerformanceReview';
import MicrocycleSchedule from './components/MicrocycleSchedule';
import Conclusion from './components/Conclusion';
import AICoach from './components/AICoach';
import { IconChatBubble } from './constants';

const App: React.FC = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Timeline />
          </div>
          <div className="space-y-8">
            <GeneralPrinciples />
            <PerformanceReview />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
                <MicrocycleSchedule />
            </div>
            <div>
                <Conclusion />
            </div>
        </div>
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>Fait à Genève le 02.09.2025 par Cédric Doutaz</p>
      </footer>
      
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-110 z-40"
        aria-label="Ouvrir le Coach IA"
      >
        <IconChatBubble className="w-8 h-8" />
      </button>

      <AICoach isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default App;