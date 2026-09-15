export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  skills?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Klar',
    role: 'Senior Growth Business Analyst (Team Lead)',
    location: 'Mexico City, Mexico',
    start: 'Oct 2021',
    end: 'Aug 2025',
    highlights: [
      'Led a cross-functional team of 6 analysts owning the referral program, customer engagement, and LTV strategy for a 2.1M MAU base (grown 4× from 500K in 2023).',
      'Scaled biweekly referral campaigns from 3K to 12K referees with only $0.50 CAC uplift, running experiments on a 450K-user cohort.',
      'Grew 3-month post-activation LTV from $15 to $37 by optimizing credit conversion funnels and savings account adoption for non-approved users.',
      'Built Python-based CRM automations and causal inference pipelines to guide growth strategy and KPI decisions.',
      'Integrated Adjust and AppsFlyer attribution data into the company data warehouse, enabling multi-touch marketing measurement across acquisition channels.',
    ],
    skills: ['Python', 'Causal Inference', 'Adjust', 'AppsFlyer'],
  },
  {
    company: 'Ford Motor Company',
    role: 'Data Analyst Engineer',
    location: 'Mexico City, Mexico',
    start: 'Mar 2021',
    end: 'Oct 2021',
    highlights: [
      'Developed and deployed a warranty analytics dashboard in Python (Dash) with Jenkins CI/CD, used daily by a 35-person team in the USA.',
    ],
    skills: ['Python', 'Dash', 'Jenkins', 'CI/CD'],
  },
  {
    company: 'Ben & Frank',
    role: 'Data Engineer / Analyst',
    location: 'Mexico City, Mexico',
    start: 'Sep 2019',
    end: 'Feb 2021',
    highlights: [
      'Supported expansion from 7 to 20 physical stores; grew monthly sales from MXN $5M to MXN $30M within one year.',
      'Automated operational processes using cloud services (AWS: Lambda, EC2); helped define and measure core business KPIs (ARPAC, LTV, recency/frequency).',
      "Supported the company's first international expansion, into Colombia.",
    ],
    skills: ['AWS Lambda', 'AWS EC2'],
  },
];
