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
    name: 'Experimentation, Causal Inference & ML',
    tools: [
      'Causal Inference',
      'Experiment Design',
      'Hypothesis Testing',
      'Regression',
      'Forecasting',
      'scikit-learn',
      'LightGBM',
      'TensorFlow',
      'Simulation',
    ],
  },
  {
    name: 'Data & Analytics Engineering',
    tools: [
      'dbt',
      'AWS Glue',
      'AWS Lambda',
      'Apache Airflow',
      'Apache Spark',
      'Redshift',
      'BigQuery',
      'Amazon S3',
      'Apache Iceberg',
    ],
  },
  {
    name: 'AI-Assisted Development',
    tools: ['Claude Code', 'Google Antigravity', 'LLM-Assisted Workflows'],
  },
];
