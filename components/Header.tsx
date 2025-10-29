
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ATHLETE_NAME, PLAN_PERIOD } from '../constants';

const Header: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (hash: string) => {
    const isActive = location.hash === hash || (hash === '#planification' && location.hash === '');
    return `relative transition-colors duration-200 font-medium px-3 py-3 text-sm whitespace-nowrap 
            ${isActive ? 'text-orange-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-400' : 'text-slate-600 hover:text-orange-500'}`;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-teko uppercase">PLANIFICATION SPORTIVE {PLAN_PERIOD}</h1>
        <p className="mt-1 text-xl text-orange-400 font-semibold">{ATHLETE_NAME}</p>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Cette planification vise à optimiser les performances lors des compétitions clés tout en assurant une gestion rigoureuse de la charge d'entraînement et de la récupération.
        </p>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 mt-4">
        <div className="flex items-center justify-start space-x-2 sm:space-x-4 overflow-x-auto">
            <Link to="/#planification" className={getLinkClass('#planification')}>Planification</Link>
            <Link to="/#principes-generaux" className={getLinkClass('#principes-generaux')}>Principes généraux</Link>
            <Link to="/#revue-performance" className={getLinkClass('#revue-performance')}>Revue de performance</Link>
            <Link to="/#programme-hebdomadaire" className={getLinkClass('#programme-hebdomadaire')}>Programme hebdo</Link>
            <Link to="/#conclusion" className={getLinkClass('#conclusion')}>Conclusion</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
