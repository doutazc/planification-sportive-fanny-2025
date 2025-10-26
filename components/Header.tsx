import React from 'react';
import { Link } from 'react-router-dom';
import { ATHLETE_NAME, PLAN_PERIOD } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-teko uppercase">{ATHLETE_NAME}</h1>
        <p className="mt-1 text-xl text-teal-600 font-semibold">PLANIFICATION SPORTIVE {PLAN_PERIOD}</p>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Cette planification vise à optimiser les performances lors des compétitions clés tout en assurant une gestion rigoureuse de la charge d'entraînement et de la récupération.
        </p>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 mt-4">
        <div className="flex items-center justify-start space-x-2 sm:space-x-4 overflow-x-auto">
            <Link to="/#planification" className="text-slate-600 hover:text-teal-700 transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap">Planification</Link>
            <Link to="/#principes-generaux" className="text-slate-600 hover:text-teal-700 transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap">Principes généraux</Link>
            <Link to="/#revue-performance" className="text-slate-600 hover:text-teal-700 transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap">Revue de performance</Link>
            <Link to="/#programme-hebdomadaire" className="text-slate-600 hover:text-teal-700 transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap">Programme hebdo</Link>
            <Link to="/#conclusion" className="text-slate-600 hover:text-teal-700 transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap">Conclusion</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
