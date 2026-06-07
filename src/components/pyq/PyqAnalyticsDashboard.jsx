// src/components/pyq/PyqAnalyticsDashboard.jsx
import React from 'react';
import { subjectNames } from '../../data/pyq/analysisData';
import { Brain, Bomb, Folder } from '@phosphor-icons/react';

export default function PyqAnalyticsDashboard({
  cognitiveSkills,
  trapPatternData,
  subTopics,
  selectedTopicSubject,
  onTopicSubjectChange
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      
      {/* 1. Cognitive Skills */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Brain className="w-5 h-5 text-brand-red" />
          <h3 className="font-heading font-semibold text-slate-800">Cognitive Demands</h3>
        </div>
        <div className="space-y-4">
          {cognitiveSkills.slice(0, 4).map((item) => (
            <div key={item.skill} className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">{item.skill}</span>
                <span className="text-brand-red">{item.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-red rounded-full transition-all duration-500" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Trap Patterns */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Bomb className="w-5 h-5 text-slate-800" />
          <h3 className="font-heading font-semibold text-slate-800">Trap Patterns</h3>
        </div>
        <div className="space-y-4">
          {trapPatternData.slice(0, 4).map((item) => (
            <div key={item.type} className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">{item.type}</span>
                <span className="text-slate-800">{item.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-slate-800 rounded-full transition-all duration-500" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Sub-Topics Analysis */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4 md:col-span-2 lg:col-span-1">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-indigo-600" />
            <h3 className="font-heading font-semibold text-slate-800">Sub-Theme Focus</h3>
          </div>
          <select
            value={selectedTopicSubject}
            onChange={(e) => onTopicSubjectChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600 font-semibold focus:outline-hidden cursor-pointer"
          >
            {Object.entries(subjectNames).map(([id, name]) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
          {subTopics.length === 0 ? (
            <div className="text-center py-12 text-xs text-slate-400">
              No questions found for this subject in the selected year.
            </div>
          ) : (
            subTopics.map((item) => {
              const maxCount = subTopics[0]?.count || 1;
              const barWidth = Math.max(15, (item.count / maxCount) * 100);
              return (
                <div key={item.name} className="flex items-center gap-3">
                  <span className="text-[11px] font-medium text-slate-600 w-24 truncate" title={item.name}>
                    {item.name}
                  </span>
                  <div className="flex-1 h-5 bg-slate-50 rounded overflow-hidden flex items-center relative border border-slate-100">
                    <div 
                      className="h-full bg-indigo-50 border-r-2 border-indigo-500 transition-all duration-300"
                      style={{ width: `${barWidth}%` }}
                    />
                    <span className="absolute left-2 text-[10px] font-bold text-indigo-900">
                      {item.count} {item.count === 1 ? 'Q' : 'Qs'}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      
    </div>
  );
}
