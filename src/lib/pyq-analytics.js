// src/lib/pyq-analytics.js
import { questions2014 } from '../data/pyq/questions2014';
import { questions2015 } from '../data/pyq/questions2015';
import { questions2016 } from '../data/pyq/questions2016';
import { questions2017 } from '../data/pyq/questions2017';
import { questions2018 } from '../data/pyq/questions2018';
import { questions2019 } from '../data/pyq/questions2019';
import { questions2020 } from '../data/pyq/questions2020';
import { questions2021 } from '../data/pyq/questions2021';
import { questions2022 } from '../data/pyq/questions2022';
import { questions2023 } from '../data/pyq/questions2023';
import { questions2024 } from '../data/pyq/questions2024';
import { questions2025 } from '../data/pyq/questions2025';

export const yearQuestions = {
  2014: questions2014,
  2015: questions2015,
  2016: questions2016,
  2017: questions2017,
  2018: questions2018,
  2019: questions2019,
  2020: questions2020,
  2021: questions2021,
  2022: questions2022,
  2023: questions2023,
  2024: questions2024,
  2025: questions2025
};

export const yearSubjectCounts = {};
Object.entries(yearQuestions).forEach(([year, qs]) => {
  const counts = {
    polity: 0,
    economy: 0,
    geography: 0,
    history: 0,
    environment: 0,
    science: 0,
    currentAffairs: 0,
    international: 0
  };
  qs.forEach(q => {
    const sub = q.subject;
    if (counts.hasOwnProperty(sub)) {
      counts[sub]++;
    }
  });
  yearSubjectCounts[year] = counts;
});

export const yearsReverse = Array.from({ length: 12 }, (_, i) => ({ year: 2025 - i }));

export const droppedQuestionNotes = {
  2020: "2 Questions Dropped by UPSC",
  2021: "1 Question Dropped by UPSC"
};

export function classifyCognitiveSkills(questions) {
  const skills = [
    { skill: "Applied Reasoning", count: 0, description: "Requires multi-statement logical deduction and elimination strategies." },
    { skill: "Conceptual Clarity", count: 0, description: "Tests deep understanding of constitutional articles, economic principles, or ecological concepts." },
    { skill: "Fact Recall", count: 0, description: "Probes specific institutional affiliations, geographical features, or historical events." },
    { skill: "Elimination Skill", count: 0, description: "Demands identifying extreme keywords, trap phrases, and structural anomalies." }
  ];
  
  questions.forEach((q) => {
    const text = (q.language || "").toLowerCase();
    const diag = (q.diagnosis || "").toLowerCase();
    if (text.includes("trap") || text.includes("extreme") || text.includes("only")) {
      skills[3].count++;
    } else if (diag.includes("step")) {
      skills[0].count++;
    } else if (q.subject === 'polity' || q.subject === 'economy') {
      skills[1].count++;
    } else {
      skills[2].count++;
    }
  });

  const total = questions.length || 1;
  return skills
    .map(s => ({ ...s, percentage: Math.round((s.count / total) * 100) }))
    .sort((a, b) => b.count - a.count);
}

export function classifyTrapPatterns(questions) {
  const traps = [
    { type: "Extreme Words", count: 0, description: "Using 'all', 'never', 'only' to make statements false." },
    { type: "Ministry/Agency Swaps", count: 0, description: "Swapping governing ministries or departments to test institutional precision." },
    { type: "Factual Distortion", count: 0, description: "Distorting numbers, percentages, or chronological sequences." },
    { type: "Conceptual Misdirection", count: 0, description: "Confusing related concepts (e.g., bonds vs stocks, AIFs vs traditional)." }
  ];
  
  questions.forEach(q => {
    const text = (q.language || "").toLowerCase();
    if (text.includes("only") || text.includes("all") || text.includes("never")) {
      traps[0].count++;
    } else if (text.includes("ministry") || text.includes("department") || text.includes("under")) {
      traps[1].count++;
    } else if (text.includes("vs") || text.includes("opposite") || text.includes("instead")) {
      traps[3].count++;
    } else {
      traps[2].count++;
    }
  });

  const total = questions.length || 1;
  return traps
    .map(t => ({ ...t, percentage: Math.round((t.count / total) * 100) }))
    .sort((a, b) => b.count - a.count);
}

export function extractSubTopics(questions, subject) {
  const subTopicsMap = {};
  questions.forEach(q => {
    if (q.subject === subject) {
      let sub = q.theme || "General";
      if (sub.includes("-")) {
        sub = sub.split("-")[1].trim();
      }
      subTopicsMap[sub] = (subTopicsMap[sub] || 0) + 1;
    }
  });

  return Object.entries(subTopicsMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
