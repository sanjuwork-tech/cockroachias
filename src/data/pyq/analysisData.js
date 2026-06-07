// UPSC Prelims PYQ Analysis Data Configuration
// Years 2014-2025
// CORRECTED: Statistics now match actual question counts in data files

export const analysisData = [
  {
    year: 2014,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 12,
      economy: 13,
      geography: 14,
      history: 18,
      environment: 18,
      science: 17,
      currentAffairs: 5,
      international: 3
    },
    documentPath: '/analysis/UPSC_2014_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2014 PYQ Pattern Analysis'
  },
  {
    year: 2015,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 13,
      economy: 20,
      geography: 15,
      history: 15,
      environment: 13,
      science: 11,
      currentAffairs: 6,
      international: 7
    },
    documentPath: '/analysis/UPSC_2015_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2015 PYQ Pattern Analysis'
  },
  {
    year: 2016,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 5,
      economy: 23,
      geography: 5,
      history: 16,
      environment: 20,
      science: 10,
      currentAffairs: 7,
      international: 14
    },
    documentPath: '/analysis/UPSC_2016_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2016 PYQ Pattern Analysis'
  },
  {
    year: 2017,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 32,
      economy: 13,
      geography: 7,
      history: 14,
      environment: 15,
      science: 9,
      currentAffairs: 1,
      international: 9
    },
    documentPath: '/analysis/UPSC_2017_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2017 PYQ Pattern Analysis'
  },
  {
    year: 2018,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 16,
      economy: 18,
      geography: 9,
      history: 22,
      environment: 14,
      science: 13,
      currentAffairs: 2,
      international: 6
    },
    documentPath: '/analysis/UPSC_2018_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2018 PYQ Pattern Analysis'
  },
  {
    year: 2019,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 16,
      economy: 22,
      geography: 8,
      history: 15,
      environment: 19,
      science: 12,
      currentAffairs: 8,
      international: 0
    },
    documentPath: '/analysis/UPSC_2019_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2019 PYQ Pattern Analysis'
  },
  {
    year: 2020,
    totalQuestions: 98,
    deletedQuestions: [27, 52],
    statistics: {
      polity: 22,
      economy: 20,
      geography: 11,
      history: 18,
      environment: 13,
      science: 12,
      currentAffairs: 2,
      international: 0
    },
    documentPath: '/analysis/UPSC_2020_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2020 PYQ Pattern Analysis'
  },
  {
    year: 2021,
    totalQuestions: 99,
    deletedQuestions: [80],
    statistics: {
      polity: 19,
      economy: 15,
      geography: 14,
      history: 19,
      environment: 15,
      science: 12,
      currentAffairs: 5,
      international: 0
    },
    documentPath: '/analysis/UPSC_2021_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2021 PYQ Pattern Analysis'
  },
  {
    year: 2022,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 10,
      economy: 20,
      geography: 18,
      history: 16,
      environment: 14,
      science: 13,
      currentAffairs: 1,
      international: 8
    },
    documentPath: '/analysis/UPSC_2022_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2022 PYQ Pattern Analysis'
  },
  {
    year: 2023,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 17,
      economy: 16,
      geography: 23,
      history: 14,
      environment: 11,
      science: 4,
      currentAffairs: 9,
      international: 6
    },
    documentPath: '/analysis/UPSC_2023_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2023 PYQ Pattern Analysis'
  },
  {
    year: 2024,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 25,
      economy: 15,
      geography: 20,
      history: 11,
      environment: 16,
      science: 9,
      currentAffairs: 1,
      international: 3
    },
    documentPath: '/analysis/UPSC_2024_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2024 PYQ Pattern Analysis'
  },
  {
    year: 2025,
    totalQuestions: 100,
    deletedQuestions: [],
    statistics: {
      polity: 19,
      economy: 18,
      geography: 16,
      history: 15,
      environment: 14,
      science: 9,
      currentAffairs: 2,
      international: 7
    },
    documentPath: '/analysis/UPSC_2025_PYQ_Analysis.docx',
    documentTitle: 'UPSC Prelims 2025 PYQ Pattern Analysis'
  }
];

// Total statistics across all years
export const totalStatistics = {
  totalYears: 12,
  totalQuestions: analysisData.reduce((sum, year) => sum + year.totalQuestions, 0),
  yearRange: '2014-2025',
  subjectAggregates: {
    polity: analysisData.reduce((sum, year) => sum + year.statistics.polity, 0),
    economy: analysisData.reduce((sum, year) => sum + year.statistics.economy, 0),
    geography: analysisData.reduce((sum, year) => sum + year.statistics.geography, 0),
    history: analysisData.reduce((sum, year) => sum + year.statistics.history, 0),
    environment: analysisData.reduce((sum, year) => sum + year.statistics.environment, 0),
    science: analysisData.reduce((sum, year) => sum + year.statistics.science, 0),
    currentAffairs: analysisData.reduce((sum, year) => sum + year.statistics.currentAffairs, 0),
    international: analysisData.reduce((sum, year) => sum + year.statistics.international, 0)
  }
};

// Subject colors for charts
export const subjectColors = {
  polity: '#3B82F6',
  economy: '#10B981',
  geography: '#F59E0B',
  history: '#EF4444',
  environment: '#22C55E',
  science: '#8B5CF6',
  currentAffairs: '#EC4899',
  international: '#6366F1'
};

// Subject display names
export const subjectNames = {
  polity: 'Polity & Governance',
  economy: 'Economy',
  geography: 'Geography',
  history: 'History & Culture',
  environment: 'Environment & Ecology',
  science: 'Science & Technology',
  currentAffairs: 'Current Affairs',
  international: 'International Relations'
};
