export type SkillCategory = {
  name: string;
  tools: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming & Data Analysis',
    tools: ['Python', 'SQL', 'R', 'pandas', 'NumPy'],
  },
  {
    name: 'Statistics & Machine Learning',
    tools: ['scikit-learn', 'TensorFlow', 'LightGBM', 'Hypothesis Testing', 'Regression', 'Forecasting', 'Simulation'],
  },
  {
    name: 'Data Engineering & Cloud',
    tools: ['AWS', 'BigQuery', 'PostgreSQL', 'Redshift', 'Git', 'Jenkins'],
  },
  {
    name: 'AI-Assisted Development',
    tools: ['Claude Code', 'Google Antigravity'],
  },
];
