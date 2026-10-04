export type SkillCategory = {
  name: string;
  tools: string[];
  /** Tools known through coursework and projects rather than professional use; listed under a separate label. */
  academic?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming, Analysis & Visualization',
    tools: ['Python', 'SQL', 'R', 'pandas', 'NumPy', 'Power BI', 'Tableau', 'Dash'],
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
      'Simulation',
    ],
    academic: ['TensorFlow', 'PyTorch', 'Keras'],
  },
  {
    name: 'Data & Analytics Engineering',
    tools: [
      'dbt',
      'AWS Glue',
      'AWS Lambda',
      'Apache Airflow',
      'Apache Spark / PySpark',
      'Redshift',
      'PostgreSQL',
      'BigQuery',
      'Amazon S3',
      'Apache Iceberg',
      'Git',
      'Jenkins',
    ],
  },
  {
    name: 'AI-Assisted Development',
    tools: ['Claude Code', 'Codex', 'Google Antigravity', 'LLM-Assisted Workflows'],
  },
];
