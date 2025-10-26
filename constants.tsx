import React from 'react';
import type { GeneralPrinciple, Macrocycle, WeeklyScheduleItem, PerformanceReview } from './types';

export const ATHLETE_NAME = "FANNY DOUTAZ";
export const PLAN_PERIOD = "2025-2026";

export const GENERAL_PRINCIPLES: GeneralPrinciple[] = [
  {
    title: "Cycles de périodisation",
    description: "Le macrocycle (6-12 mois) vise l'objectif final. Les mésocycles (2-6 semaines) ont des objectifs spécifiques (endurance, force). Les microcycles (4-14 jours) détaillent les séances quotidiennes."
  },
  {
    title: "Définition des objectifs",
    description: "Fixer des objectifs clairs (long, moyen, court terme), atteignables et avec des délais, pour guider le plan d'entraînement."
  },
  {
    title: "Connaissance de l'athlète et du sport",
    description: "Prendre en compte les capacités de Fanny, les exigences du tennis de table et ses points forts/faibles (ex: gestion de la 'balle N2' et démarrage notés au WTT Metz 2025)."
  },
  {
    title: "Équilibre charge/récupération",
    description: "Minimiser la fatigue et les blessures avec une récupération planifiée, incluant des mesures actives (cool down, étirements) et passives (massages, sauna, sommeil, nutrition)."
  },
  {
    title: "Spécificité et progressivité",
    description: "L'entraînement doit être spécifique aux exigences du tennis de table et augmenter progressivement en volume, intensité ou fréquence."
  }
];

export const MACROCYCLES: Macrocycle[] = [
  {
    id: 1,
    title: "Macrocycle 1",
    period: "Août 2025 – Mars 2026",
    goal: "Préparation et montée en puissance jusqu'aux championnats suisses élite.",
    mesocycles: [
      {
        id: 'aug25',
        title: "AOÛT 2025",
        phase: "Phase de reprise / Préparation générale",
        centralObjective: "Reconditionnement physique et reprise progressive.",
        technicalPriorities: ["régularité", "placements", "schémas simples"],
        physicalPriorities: ["endurance générale", "gainage", "reprise musculaire"],
        keyEvents: ["Stage de reprise : Stage Espalion (10-16 août)"],
        planLogic: "Reprise en douceur pour reconstruire les bases physiques et techniques."
      },
      {
        id: 'sep-dec25',
        title: "SEPTEMBRE – DÉCEMBRE 2025",
        phase: "Phase A – Montée en puissance",
        centralObjective: "Stabiliser le niveau de jeu, affiner la tactique.",
        technicalPriorities: ["services/remises", "adaptation aux styles adverses", "variations de rythme", "gestion de l'échange", "jeu court", "anticipation"],
        physicalPriorities: ["explosivité des jambes", "vitesse de déplacement", "force spécifique", "puissance", "récupération", "vitesse", "relâchement"],
        keyEvents: ["N1 J1-J6 (sept-déc)", "Tournoi de Bernex (4-5 oct)", "ETTU Open de Belgique (10-13 nov)", "Championnat AGTT (30 nov)"],
        planLogic: "Montée en puissance progressive avec les premières compétitions comme support."
      },
      {
        id: 'jan26',
        title: "JANVIER 2026",
        phase: "Phase de transition / Pré-compétitive",
        centralObjective: "Relancer l'intensité après la coupure de fin d'année.",
        technicalPriorities: ["jeu dirigé", "schémas offensifs"],
        physicalPriorities: ["explosivité courte distance", "vitesse"],
        keyEvents: ["Camp E/T4/T3 (STT) (2-5 janvier)", "N1 J7 (10 janvier)", "WTT Feeder à Lille (27-31 janvier)"],
        planLogic: "\"Reset\" intensif après la coupure pour préparer la phase B."
      },
      {
        id: 'feb-mar26',
        title: "FÉVRIER – MARS 2026",
        phase: "Phase B – Pic 1 (Championnats suisses élite)",
        centralObjective: "Préparer un double enjeu (phase B en France et championnats suisses élite).",
        technicalPriorities: ["points forts tactiques", "gestion de la pression", "gestion du stress"],
        physicalPriorities: ["force spécifique", "décharge progressive", "explosivité maximale (affûtage)"],
        keyEvents: ["N1 J1-J2 Phase B (7 fév et 7 mars)", "Championnats suisses élite (21-22 mars)"],
        planLogic: "Premier pic ciblé sur les championnats suisses élite."
      }
    ]
  },
  {
    id: 2,
    title: "Macrocycle 2",
    period: "Avril – Juin 2026",
    goal: "Maintien et préparation finale pour les titres N1.",
    mesocycles: [
      {
        id: 'apr-may26',
        title: "AVRIL – MAI 2026",
        phase: "Phase de maintien / Ajustements",
        centralObjective: "Continuité de performance, éviter le surmenage.",
        technicalPriorities: ["variations", "lecture du jeu", "consolidation des schémas", "mise en confiance"],
        physicalPriorities: ["maintien de la puissance et de l'endurance spécifique", "maintien de l'explosivité"],
        keyEvents: ["N1 J4-J5 Phase B (11 avril et 9 mai)"],
        planLogic: "Gestion fine des charges et maintien de la forme entre les deux pics."
      },
      {
        id: 'jun26',
        title: "JUIN 2026",
        phase: "Pic 2 (Titres N1 France)",
        centralObjective: "Atteindre la performance maximale.",
        technicalPriorities: ["jeu sous pression", "scénarios décisifs"],
        physicalPriorities: ["décharge puis intensité maximale (affûtage)"],
        keyEvents: ["N1 J6-J7 Phase B (30 mai et 6 juin)", "Titres N1 (19-21 juin)"],
        planLogic: "Deuxième pic de forme pour les titres N1 France."
      },
    ]
  },
  {
      id: 3,
      title: "Bilan et repos",
      period: "Juillet 2026",
      goal: "Repos actif et bilan de la saison.",
      mesocycles: [
        {
            id: 'jul26',
            title: "JUILLET 2026",
            phase: "Repos actif",
            centralObjective: "Récupération, bilan de la saison.",
            technicalPriorities: ["travail léger", "jeu plaisir", "relâchement"],
            physicalPriorities: ["cross-training (autres sports)", "récupération"],
            keyEvents: [],
            planLogic: "Récupération physique et mentale avant la prochaine saison."
        }
      ]
  }
];

export const WEEKLY_SCHEDULE: WeeklyScheduleItem[] = [
  { day: "Lundi", isOptional: true, activities: ["Entraînement spécifique (condition physique, service-remise, technique, visio) de 17h30 à 19h30."] },
  { day: "Mardi", activities: ["Entraînements spécifiques (service) de 14h00 à 14h30 et condition physique (14h30 à 15h00).", "Entraînement ligue nationale au ZZ-Lancy de 15h00 à 17h30."] },
  { day: "Mercredi", activities: ["Entraînement du cadre ITTG de 15h00 à 18h00."] },
  { day: "Jeudi", activities: ["Entraînement individuel avec Michel Martinez de 13h30 à 15h00.", "Entraînement ligue nationale au ZZ-Lancy de 15h00 à 16h30.", "Entraînements spécifiques (condition physique) de 16h30 à 17h00 et (visio) de 17h00 à 17h30."] },
  { day: "Vendredi", activities: ["Entraînement individuel avec Fabien Fournot de 13h30 à 15h30.", "Un entraînement à Annecy peut être prévu la veille des matchs."] },
  { day: "Samedi", activities: ["Championnat de France par équipe – N1 dames de 16h00 à 20h00."] },
  { day: "Dimanche", activities: ["Voyage de retour des compétitions et récupération."] },
];

export const PERFORMANCE_REVIEW_DATA: PerformanceReview = {
  title: "Performances récentes et ajustements (WTT Metz 2025)",
  intro: "Les résultats du WTT Metz 2025 ont révélé plusieurs points pour Fanny:",
  points: [
    { title: "Résultats", description: "Défaite en poule (simples) et au 1er tour (double mixte)." },
    { title: "État mental", description: "Phase moyenne en match, difficulté à trouver le rythme et la confiance malgré un bon entraînement." },
    { title: "Points techniques à améliorer", description: "Difficulté sur la \"balle N2\" (force excessive) et taux de démarrage faible (40-50%)." },
    { title: "Arbitrage et service", description: "Problèmes de service menant à des avertissements et points perdus." },
    { title: "Jeu en double", description: "Le coach note un manque de pratique en double avec Abi. Intégrer des séances spécifiques." },
  ],
  focusAreas: [
    "Gestion de la \"balle N2\" et démarrages en coup droit et revers.",
    "Qualité du service pour éviter les fautes et sanctions.",
    "Régularité et confiance en match.",
  ]
};

export const CONCLUSION_TEXT = "La planification 2025-2026 est une démarche méthodique visant deux pics de forme (mars et juin). Elle intègre les principes de la périodisation et les retours d'expérience (WTT Metz) pour cibler des axes d'amélioration précis (service, 'balle N2', jeu en double). Une surveillance attentive de la récupération (sommeil, nutrition, cycle menstruel) sera cruciale pour prévenir le surentraînement et permettre à Fanny d'exprimer son plein potentiel.";

export const IconTarget = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export const IconBolt = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const IconTrophy = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13.5a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
);
