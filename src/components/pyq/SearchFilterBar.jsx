// src/components/pyq/SearchFilterBar.jsx
import React from 'react';
import { MagnifyingGlass, ArrowCounterClockwise } from '@phosphor-icons/react';
import { subjectNames } from '../../data/pyq/analysisData';

export default function SearchFilterBar({
  searchQuery,
  onSearchChange,
  selectedSubject,
  onSubjectChange,
  onReset,
  isCrossYearSearch
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative flex-1 w-full">
        <MagnifyingGlass className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by theme, trap pattern, or logical diagnosis..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red"
        />
      </div>
      
      <div className="flex items-center gap-3 w-full md:w-auto">
        <select
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="flex-1 md:flex-initial bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-brand-red focus:outline-none cursor-pointer"
        >
          <option value="all">All Subjects</option>
          {Object.entries(subjectNames).map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
        
        {(searchQuery || selectedSubject !== 'all') && (
          <button
            onClick={onReset}
            className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            title="Reset filters"
          >
            <ArrowCounterClockwise className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>
    </div>
  );
}
