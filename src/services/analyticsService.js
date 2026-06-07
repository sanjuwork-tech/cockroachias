// src/services/analyticsService.js
export const analyticsService = {
  track: (eventName, data) => {
    console.log(`[Analytics] Tracked event: ${eventName}`, data);
  },
  saveSkillEvidence: async (evidenceData, type) => {
    console.log(`[Analytics] Saved skill evidence (${type}):`, evidenceData);
    alert(`Evidence Added: "${evidenceData.evidence}" has been successfully logged.`);
    return { success: true, error: null };
  },
  saveSamvadSignal: async (signalData) => {
    console.log(`[Analytics] Saved Samvad Signal:`, signalData);
    return { success: true, error: null };
  }
};
