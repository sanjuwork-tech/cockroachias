import React, { useState, useMemo, useEffect } from "react";
import { ArrowLeft, MagnifyingGlass, Sparkle, Trophy, Tag, ShieldCheck, ListNumbers, X, BookOpen, Copy, Check } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import rawStoriesData from "../data/mythologyEthics.json";

interface MythStory {
  id: number;
  title: string;
  subtitle: string;
  source: string;
  theme: string;
  useIn: string;
  context: string;
  dilemma: string;
  cutsBothWays: string;
  modernParallel: string;
  quoteReady: string;
}

interface MythologyEthicsPageProps {
  setActivePage?: (page: string) => void;
}

export default function MythologyEthicsPage({ setActivePage }: MythologyEthicsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedStory, setSelectedStory] = useState<MythStory | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Mythology for Ethics: Dilemmas & Cases | CockroachIAS";
  }, []);

  // Compute unique sources for filtering
  const sources = useMemo(() => {
    const set = new Set<string>();
    rawStoriesData.forEach(s => {
      // Normalize sources to get parent groups (Mahabharata, Ramayana, Puranas, Upanishads)
      if (s.source.includes("Mahabharata")) set.add("Mahabharata");
      else if (s.source.includes("Ramayana")) set.add("Ramayana");
      else if (s.source.includes("Purana")) set.add("Puranas");
      else if (s.source.includes("Upanishad")) set.add("Upanishads");
      else set.add("Other");
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter stories based on query and selected source
  const filteredStories = useMemo(() => {
    return rawStoriesData.filter(s => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        s.title.toLowerCase().includes(query) ||
        s.subtitle.toLowerCase().includes(query) ||
        s.theme.toLowerCase().includes(query) ||
        s.context.toLowerCase().includes(query) ||
        s.dilemma.toLowerCase().includes(query);

      if (selectedSource === "All") return matchesSearch;
      if (selectedSource === "Mahabharata") return matchesSearch && s.source.includes("Mahabharata");
      if (selectedSource === "Ramayana") return matchesSearch && s.source.includes("Ramayana");
      if (selectedSource === "Puranas") return matchesSearch && s.source.includes("Purana");
      if (selectedSource === "Upanishads") return matchesSearch && s.source.includes("Upanishad");
      return matchesSearch;
    });
  }, [searchQuery, selectedSource]);

  const handleCopyQuote = (quote: string, id: number) => {
    navigator.clipboard.writeText(quote);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8"
      id="mythology-ethics-root"
    >
      {/* Header section with Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2">
          {setActivePage && (
            <button
              onClick={() => setActivePage("resources")}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Resources</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-red-light text-brand-red rounded-lg border border-brand-red/10">
              <BookOpen className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-navy-950">
              Mythology for Ethics
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-4xl">
            An interactive cognitive catalog of 30 classic ethical dilemmas from Indian Epics & Puranas. Use these dilemmas and quote-ready scripts to anchor your GS Paper 4 arguments and Essay introductions.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="w-full md:flex-1 relative flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <MagnifyingGlass className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
            <input
              type="text"
              placeholder="Search by title, themes, dilemma statements, or context..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-0 p-0 text-sm focus:outline-hidden text-slate-800 placeholder-slate-400 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-slate-600 bg-slate-200/50 hover:bg-slate-200/80 px-2 py-0.5 rounded-md font-bold transition-all shrink-0 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Epic Source filter */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 self-stretch md:self-auto overflow-x-auto gap-1">
            {sources.map(source => (
              <button
                key={source}
                onClick={() => setSelectedSource(source)}
                className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap transition-all ${
                  selectedSource === source
                    ? "bg-white text-navy-950 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {source}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 self-stretch md:self-auto justify-center">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-all uppercase tracking-wider ${
                viewMode === "grid"
                  ? "bg-white text-navy-950 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Workspace Grid
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-all uppercase tracking-wider ${
                viewMode === "table"
                  ? "bg-white text-navy-950 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Table View
            </button>
          </div>
        </div>
      </div>

      {/* Case studies list rendering */}
      {viewMode === "grid" ? (
        /* Workspace Card Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedStory(story)}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs cursor-pointer hover:shadow-md hover:border-slate-350 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 uppercase tracking-widest">
                    {story.source}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-brand-red uppercase tracking-wider">
                    {story.useIn.split("·")[0].trim()}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 font-display line-clamp-1">
                    {story.title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 block mt-1">
                    {story.subtitle}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {story.context}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                {story.theme.split("·").map(t => (
                  <span key={t.trim()} className="text-[9px] font-bold bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200/50">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Table View Mode */
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[900px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-4 w-[160px]">Epic Case</th>
                  <th className="p-4 w-[180px]">Theme</th>
                  <th className="p-4 w-[380px]">Context / Dilemma</th>
                  <th className="p-4 w-[180px]">Application Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStories.map((story) => (
                  <tr
                    key={story.id}
                    onClick={() => setSelectedStory(story)}
                    className="hover:bg-slate-50/50 cursor-pointer transition-colors text-xs text-slate-700"
                  >
                    <td className="p-4 align-top leading-relaxed text-navy-950 font-bold font-sans">
                      <div className="space-y-1">
                        <span>{story.title}</span>
                        <span className="block text-[8px] font-mono text-slate-400 uppercase">
                          {story.source}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 align-top leading-relaxed text-slate-900 font-semibold uppercase tracking-wider text-[10px]">
                      {story.theme}
                    </td>
                    <td className="p-4 align-top leading-relaxed text-slate-600 font-sans font-normal">
                      <div className="line-clamp-2">{story.context}</div>
                      <div className="text-[10px] text-brand-red font-medium mt-1">Dilemma: {story.dilemma}</div>
                    </td>
                    <td className="p-4 align-top">
                      <div className="flex flex-wrap gap-1">
                        {story.useIn.split("·").map(u => (
                          <span key={u.trim()} className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {u.trim()}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Slide-over Briefing Drawer */}
      <AnimatePresence>
        {selectedStory && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white border-l border-slate-200 z-50 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Header block */}
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-0.5 rounded-md uppercase border border-brand-red/10">
                      {selectedStory.source} Case
                    </span>
                    <h3 className="text-xl font-display font-bold text-navy-950 pt-2">{selectedStory.title}</h3>
                    <span className="text-xs text-slate-500 italic block mt-1">{selectedStory.subtitle}</span>
                  </div>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content blocks */}
                <div className="space-y-6">
                  {/* Theme Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.theme.split("·").map(t => (
                      <span key={t.trim()} className="text-[9px] font-bold bg-[#171717] text-white px-2.5 py-1 rounded-sm uppercase tracking-wider">
                        {t.trim()}
                      </span>
                    ))}
                    {selectedStory.useIn.split("·").map(u => (
                      <span key={u.trim()} className="text-[9px] font-bold bg-brand-red-light text-brand-red border border-brand-red/10 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                        {u.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Context */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">EPIC CONTEXT</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                      {selectedStory.context}
                    </p>
                  </div>

                  {/* Dilemma */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">THE CENTRAL DILEMMA</span>
                    <p className="text-xs font-semibold text-navy-950 leading-relaxed bg-brand-red-light/10 p-4 rounded-xl border border-brand-red/10 font-sans">
                      {selectedStory.dilemma}
                    </p>
                  </div>

                  {/* Cuts Both Ways */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">CUTS BOTH WAYS (CRITIQUE)</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {selectedStory.cutsBothWays}
                    </p>
                  </div>

                  {/* Modern Parallel */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-brand-red uppercase tracking-widest block">MODERN ADMINISTRATOR PARALLEL</span>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-navy-950 font-semibold leading-relaxed">
                      {selectedStory.modernParallel}
                    </div>
                  </div>

                  {/* Quote Ready */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">QUOTE-READY SCRIPT</span>
                    <div className="relative group bg-navy-950 text-slate-300 p-4 rounded-xl font-mono text-[11px] leading-relaxed flex items-center justify-between gap-4">
                      <span>{selectedStory.quoteReady}</span>
                      <button
                        onClick={() => handleCopyQuote(selectedStory.quoteReady, selectedStory.id)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer shrink-0"
                        title="Copy quote"
                      >
                        {copiedId === selectedStory.id ? (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-8">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-full bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Close Case File
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
