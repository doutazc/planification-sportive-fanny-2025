
import React from 'react';
import { ATHLETE_NAME, PLAN_PERIOD } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-teko uppercase">{ATHLETE_NAME}</h1>
        <p className="mt-1 text-xl text-teal-600 font-semibold">PLANIFICATION SPORTIVE {PLAN_PERIOD}</p>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Cette planification vise à optimiser les performances lors des compétitions clés tout en assurant une gestion rigoureuse de la charge d'entraînement et de la récupération.
        </p>
      </div>
    </header>
  );
};

export default Header;
