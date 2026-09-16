export type EducationEntry = {
  degree: string;
  institution: string;
  start: string;
  end?: string;
  gpa?: string;
  distinction?: string;
  description: string;
  coursework: string[];
};

export type AdditionalLearningEntry = {
  title: string;
  provider: string;
  description: string;
  url: string;
  linkLabel: string;
};

export const additionalLearning: AdditionalLearningEntry[] = [
  {
    title: '5-Day AI Agents: Intensive Vibe Coding Course',
    provider: 'Google & Kaggle',
    description:
      'Completed all hands-on coding exercises and read all five course whitepapers, using Google Antigravity for the practical work.',
    url: 'https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google',
    linkLabel: 'View Course',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'Stevens Institute of Technology',
    start: 'Sep 2025',
    end: 'Expected Dec 2026',
    gpa: '4.0 / 4.0',
    description:
      'Graduate study focused on machine learning, statistical methods, optimization, and the mathematical foundations of data science.',
    coursework: [
      'Applied Machine Learning',
      'Deep Learning',
      'Augmented Intelligence & Generative AI',
      'Statistical Methods',
      'Probability Theory',
      'Numerical Linear Algebra',
      'Python Programming',
      'Foundational Mathematics for Data Science',
    ],
  },
  {
    degree: 'B.S. in Mechatronics Engineering',
    institution: 'Instituto Tecnológico Autónomo de México (ITAM)',
    start: '2020',
    gpa: '9.53 / 10',
    distinction: 'Honorary Mention · Top 0.78% of entering cohort',
    description:
      'An engineering foundation spanning intelligent systems, robotics, control, computation, and applied mathematics.',
    coursework: [
      'Artificial Intelligence',
      'Robotics',
      'Control Theory',
      'Digital Signal Processing',
      'Dynamical Systems',
      'Numerical Methods',
      'Modeling & Optimization',
      'Computer Networks',
    ],
  },
  {
    degree: 'B.S. in Industrial Engineering',
    institution: 'Instituto Tecnológico Autónomo de México (ITAM)',
    start: '2020',
    gpa: '9.49 / 10',
    distinction: 'Special Mention · Top 0.91% of entering cohort',
    description:
      'Training in analytical decision-making, optimization, operations, and the design of business and production systems.',
    coursework: [
      'Probability',
      'Statistical Inference',
      'Systems Simulation',
      'Modeling & Optimization',
      'Production Planning & Control',
      'Quality Engineering',
      'Logistics & Distribution',
      'Financial Management',
    ],
  },
];
