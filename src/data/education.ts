export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  inProgress: boolean;
  gpa?: string;
  honors?: string;
  detail?: string;
  coursework?: string[];
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
    location: 'Hoboken, New Jersey',
    start: 'Aug 2025',
    end: 'Expected Dec 2026',
    inProgress: true,
    gpa: '4.0/4.0',
    coursework: [
      'Deep Learning',
      'Generative AI',
      'Applied Machine Learning',
      'Time Series Analysis',
      'Optimization for Data Science',
      'Statistical Methods',
    ],
  },
  {
    degree: 'B.S. in Mechatronics Engineering',
    institution: 'Instituto Tecnológico Autónomo de México (ITAM)',
    location: 'Mexico City, Mexico',
    start: 'Aug 2014',
    end: 'Jun 2019',
    inProgress: false,
    gpa: '9.53/10',
    honors: 'Graduated with honors',
  },
  {
    degree: 'B.S. in Industrial Engineering',
    institution: 'Instituto Tecnológico Autónomo de México (ITAM)',
    location: 'Mexico City, Mexico',
    start: 'Aug 2014',
    end: 'Jun 2019',
    inProgress: false,
    gpa: '9.49/10',
    honors: 'Graduated with honors',
  },
];
