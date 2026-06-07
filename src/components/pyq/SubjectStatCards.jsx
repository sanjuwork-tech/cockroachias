// src/components/pyq/SubjectStatCards.jsx
import React from 'react';
import { subjectNames, subjectColors } from '../../data/pyq/analysisData';
import { 
  Buildings, Bank, Globe, Hourglass, Leaf, Lightning, Newspaper, GlobeHemisphereWest, Question
} from '@phosphor-icons/react';

const subjectIcons = {
  polity: Buildings,
  economy: Bank,
  geography: Globe,
  history: Hourglass,
  environment: Leaf,
  science: Lightning,
  currentAffairs: Newspaper,
  international: GlobeHemisphereWest
};

export default function SubjectStatCards({ currentStats, selectedSubject, onSelectSubject }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(currentStats).map(([subj, count]) => {
        const Icon = subjectIcons[subj] || Question;
        const isSelected = selectedSubject === subj;
        const name = subjectNames[subj] || subj;
        const color = subjectColors[subj] || '#64748b';
        
        return (
          <button
            key={subj}
            onClick={() => onSelectSubject(isSelected ? 'all' : subj)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
              isSelected 
                ? 'border-brand-red bg-white shadow-md ring-1 ring-brand-red' 
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: color }}>
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-2xl font-bold text-slate-800">{count}</span>
            </div>
            <p className="text-xs font-semibold text-slate-600 mt-3 line-clamp-1">{name}</p>
          </button>
        );
      })}
    </div>
  );
}
