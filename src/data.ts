import { TeamMember, SurvivalTrait } from "./types";

export const SURVIVAL_TRAITS: SurvivalTrait[] = [
  {
    id: "resilience",
    title: "Unrivaled Resilience",
    tagline: "The 300-Million-Year Test",
    biologyFact: "Cockroaches survived the Chicxulub asteroid that wiped out the dinosaurs. They can endure extreme radiation up to 15 times what is lethal to humans, and live for a week without a head.",
    aspirantLesson: "UPSC preparation is a grueling saga of repeated failures, isolation, and mental exhaustion. True selection doesn't require genielike brilliance; it requires a mental toughness that refuses to die, regardless of how many times you fall short of the cut-off.",
    iconName: "ShieldCheck"
  },
  {
    id: "adaptability",
    title: "Deep Adaptability",
    tagline: "Pattern Agnosticism",
    biologyFact: "They possess an exceptionally fluid genetic structure, allowing them to rapidly evolve immunity to man-made chemical poisons within a single generation.",
    aspirantLesson: "The UPSC examiner will throw unexpected pattern changes, tricky current affairs questions, or completely revamp the CSAT paper. Do not build stiff, fragile study routines. Remain fluid. Adapt instantly to any shift in the terrain.",
    iconName: "Compass"
  },
  {
    id: "frugality",
    title: "Extreme Efficiency",
    tagline: "Resource Optimization",
    biologyFact: "A survivor requires remarkably little to survive. They can stay active for over a month with absolute zero food, thriving in the quietest, darkest corners of the earth.",
    aspirantLesson: "Living in a congested 8x8 foot room, breathing humid air, and eating simple mess food is not a sign of your defeat. It is your active training in resourcefulness. He who can govern his desires in a tiny cubicle can govern a district with absolute integrity.",
    iconName: "Flame"
  },
  {
    id: "pressure-resistance",
    title: "Exoskeletal Elasticity",
    tagline: "Thriving Under Heavy Load",
    biologyFact: "Their bodies can compress by over 50% to slip through tiny crevices, resisting compressive forces up to 900 times their own body weight without getting hurt.",
    aspirantLesson: "You are constantly crushed under the weight of family expectations, societal comparisons, and heavy syllabi. Instead of breaking under the weight, compress your fears, absorb the stress, slip through the cracks of adversity, and emerge undamaged.",
    iconName: "Award"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Prashanth N",
    role: "Founder & CEO",
    bio: "Visionary behind the academys' student-first approach to UPSC preparation. An oracle in Ethics, Essay, and Mains Answer Writing, he is known for helping aspirants transform ideas into tech enabled impactful answers and develop the clarity, integrity, and analytical depth expected of future civil servants.",
    yearsOfStruggle: 6,
    specialization: "Ethics & Essay Oracle | Mains Answer Writing Coach",
    image: "prashanth.jpg"
  },
  {
    name: "Anusha PC",
    role: "Managing Director",
    bio: "A trusted UPSC mentor known for simplifying Anthropology and mastering Prelims strategy. Beyond academics, she serves as a constant companion, emotional anchor, and unwavering supporter throughout the preparation journey. Her mission is to help aspirants build knowledge, confidence, resilience, and the determination needed for success.",
    yearsOfStruggle: 4,
    specialization: "Anthropology Expert | Prelims Wizard | Constant Companion",
    image: "anusha.jpg"
  },
  {
    name: "Varun Amidal",
    role: "Vice President",
    bio: "A dedicated UPSC mentor specializing in Political Science & International Relations (PSIR) and CSAT. Known for his approachable nature, patient listening, and long-term mentorship, he helps aspirants navigate challenges with clarity and confidence. His guidance combines academic excellence, strategic preparation, and genuine care for every student's growth.",
    yearsOfStruggle: 5,
    specialization: "PSIR Expert | CSAT Strategist | Smiling Mentor",
    image: "varun.png"
  },
  {
    name: "Sanjeeva Reddy",
    role: "CTO",
    bio: "A tech lead dedicated to engineering seamless learning workspaces and resilient cognitive tools. Sanju ensures that the platform delivers high-speed, interactive syllabus mapping and analytical workspaces for aspirants.",
    yearsOfStruggle: 3,
    specialization: "Tech Architecture | Platform Operations",
    image: "sanjeeva.png"
  },
  {
    name: "Riya P Kabadi",
    role: "CFO and HR",
    bio: "Manages the academy's fiscal operations and builds supportive mentor networks. Riya ensures that our trial companion cohorts remain highly affordable while selecting top-tier, empathetic mentors for handholding.",
    yearsOfStruggle: 3,
    specialization: "Finance Operations | Talent Acquisition",
    image: "riya.png"
  }
];

export const CONTROVERSY_DETAILS = {
  quote: "In 2026, the term \"cockroach\" entered public discourse after remarks made by Chief Justice of India Justice Surya Kant during a court hearing, triggering a nationwide debate. What was intended as criticism was subsequently embraced by many as a symbol of resilience and dissent.",
  source: "CJI Justice Surya Kant, 2026",
  analysis: "At COCKROACH IAS, we choose to focus on the positive symbolism. A cockroach survives where others give up. It adapts. It endures. It persists against overwhelming odds. Many aspirants are told they are not good enough. Many fail Prelims, Mains, or Interviews. Many are underestimated because of their background, language, or financial condition. Yet they continue. Like the cockroach, they survive every setback and return stronger.",
  ourStand: "COCKROACH IAS is therefore not about an insect. It is about the human capacity to persist when the world expects you to quit. Indian civilisation celebrates not those who never fall, but those who rise repeatedly."
};

export const SURVIVOR_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "You have spent 8 hours in a dark, windowless study cubicle. The air-conditioning breaks, and the air becomes humid. What is your survival response?",
    options: [
      {
        text: "I pack my bag in frustration, tell myself I can't study under these conditions, and feel a wave of anxiety.",
        point: "Fragile State (We will help build your stamina step-by-step.)"
      },
      {
        text: "I step out to drink black water, take 5 deep breaths, compress my fatigue like a resilient exoskeleton, and move to a well-ventilated terrace to finish my daily targets.",
        point: "Survivor Class (Excellent adaptability! You possess real survivor instincts.)"
      },
      {
        text: "I ignore the physical heat completely, telling myself pain is an illusion, but end up with severe burnout and brain-fog the next day.",
        point: "Rigid State (Stiffness breaks. Remember, we must survive safely to serve the state.)"
      }
    ]
  },
  {
    id: 2,
    question: "UPSC changes the Prelims pattern completely, removing standard historical chronology MCQs and replacing them with complex philosophical linkages. How do you respond?",
    options: [
      {
        text: "I go online, read 5 articles criticizing the Commission, and join the fear-mongering forums.",
        point: "Reacting State (Draining your fuel. Power comes from focus, not worry.)"
      },
      {
        text: "I accept that the change is identical for all 10 Lakh aspirants, scrap my rigid study logs, adapt my syllabus linkages, and master the new game of critical thinking.",
        point: "Adaptable Survivor (Brilliant! Real cockroaches adapt to the new temperature in seconds.)"
      },
      {
        text: "I rely on the same notes and short-cuts, hoping that this year was just an anomaly.",
        point: "Inertial State (Inertia is dangerous in a dynamic exam. Let us help you shift gears.)"
      }
    ]
  },
  {
    id: 3,
    question: "You check your mock test results. You scored 68, while the average classmate scored 110. Your heart sinks. What is the immediate survival philosophy?",
    options: [
      {
        text: "My score doesn't define my final rank. A mock test is a research environment, not a court of final verdict. I will dissect each of my 32 incorrect answers with a calm head.",
        point: "Indestructible Mindset (Superb. This deep wisdom is what transforms students into administrators.)"
      },
      {
        text: "I spiral into self-doubt, thinking I shouldn't have named Cockroachias my home, and waste the entire evening browsing success stories.",
        point: "Vulnerable State (Let us hold your hands. This is why we are here—to catch you when you fall.)"
      },
      {
        text: "I burn the result sheet, pretend it never happened, and continue reading more books without correcting my structural errors.",
        point: "Avoidant State (Avoidance prolongs the struggle. Face the errors; they are your actual targets.)"
      }
    ]
  }
];
