export type ExperienceRole = {
  title: string;
  start: string;
  end: string;
  /** Supports **bold** markers. */
  highlights: string[];
  tags: string[];
};

export type ExperienceCompany = {
  company: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  /** Company-level highlights shown while the card is collapsed (up to three). Supports **bold** markers. */
  highlights?: string[];
  /** Newest first. Companies with more than one role render as an expandable card. */
  roles: ExperienceRole[];
};

export const experience: ExperienceCompany[] = [
  {
    company: 'Klar',
    location: 'Mexico City, Mexico',
    start: 'Oct 2021',
    end: 'Aug 2025',
    summary:
      'Progressed through four roles across Growth and Marketing, from customer engagement analytics into team leadership, product ownership, experimentation, and data infrastructure.',
    highlights: [
      'Averaged **31.5K monthly referral-sourced account activations** at approximately **25% of paid-channel CAC**.',
      'Helped **more than double three-month LTV** per acquired user through funnel and Savings-adoption optimization.',
      '**Led analysts and Analytics Engineers** supporting Referral, Customer Engagement, LTV, and Savings.',
    ],
    roles: [
      {
        title: 'Growth Analytics Senior Manager',
        start: 'Jan 2025',
        end: 'Aug 2025',
        highlights: [
          '**Reported directly to the CMO** and led analysts and Analytics Engineers supporting Customer Engagement, Referral, LTV, and Savings analytics.',
          'Continued as business owner of the Savings product, a responsibility held since September 2024, maintaining its data models and dashboards and informing rate-policy decisions with Finance for approximately **115K active users** and **MXN 8.0B in balances**.',
          'Deployed a referral-propensity model using **scikit-learn logistic regression**, combined with causal analysis to personalize cash incentives by elasticity band. Initial tests showed a **2–3 percentage-point uplift** in referral conversion among newly acquired users.',
          'Designed and built a scalable ETL framework using **AWS Glue, PySpark, and dbt** to ingest and transform AppsFlyer and Xpend data from S3 into Redshift, processing **10M+ new records daily**. The framework improved attribution quality, CAC measurement, campaign auditing, and reporting reliability.',
        ],
        tags: ['Growth Analytics', 'Causal Inference', 'Machine Learning', 'dbt', 'PySpark'],
      },
      {
        title: 'Growth Analytics Manager',
        start: 'Apr 2023',
        end: 'Jan 2025',
        highlights: [
          'Led Growth Analytics across Referral, Customer Engagement, and LTV, growing the team from one analyst to **two analysts and two Analytics Engineers**.',
          'Took ownership of Referral and **automated campaign operations** by integrating funnel data, Customer.io API data, and campaign-spend data in the warehouse.',
          'Built CRM data infrastructure processing **Customer.io data three times daily** across millions of records, with **dbt models and S3/Iceberg workflows** supporting reporting and campaign measurement.',
          'Built a daily user-level LTV framework in dbt and Redshift integrating revenue and cost data, **reconciled with Finance** and used in Growth accountability reporting; its insights informed funnel and Savings-adoption changes that helped **more than double three-month LTV** per acquired user.',
          'Analyzed BigQuery app-event data to identify onboarding drop-off points; recommended earlier phone-number collection and follow-up messages, contributing to an **approximately 10% increase** in acquisition-funnel conversion.',
        ],
        tags: ['Growth Analytics', 'Experiment Design', 'Customer Lifetime Value', 'dbt', 'BigQuery'],
      },
      {
        title: 'Customer Engagement Senior Analyst',
        start: 'Jul 2022',
        end: 'Apr 2023',
        highlights: [
          'Expanded customer-engagement analytics across activation, retention, and campaign experimentation while **mentoring junior analysts**.',
          'Partnered with the Head of Credit to add **credit-card funnel milestones** to the central dbt model, improving measurement for a core acquisition KPI.',
          'Defined and automated **Customer Engagement Monthly Business Review** metrics and reporting workflows, connecting Python, SQL, Google Sheets, and presentation materials.',
          'Supported the **Savings launch** with data models, monitoring dashboards, and Finance metrics for cost of balance and balances by investment term.',
        ],
        tags: ['Customer Analytics', 'Product Analytics', 'dbt', 'SQL', 'Data Visualization'],
      },
      {
        title: 'Customer Engagement Analyst',
        start: 'Oct 2021',
        end: 'Jun 2022',
        highlights: [
          'Served as the **first and only analyst** supporting the Head of Customer Engagement, building foundational measurement for acquisition, activation, and retention.',
          'Automated **acquisition-attribution reporting** using Adjust data, Python, SQL, and Tableau, connecting acquisition channels to user-level funnel milestones for more reliable CAC measurement.',
          'Identified a **35 percentage-point difference in six-month retention** between users making 6+ versus fewer than 3 first-month purchases, establishing early purchase frequency as a leading retention indicator.',
          'Conducted exploratory demographic and behavioral analysis, including early **RFM segmentation**, to improve understanding of activation patterns and customer groups.',
        ],
        tags: ['Python', 'SQL', 'Tableau', 'Marketing Attribution', 'Retention Analysis'],
      },
    ],
  },
  {
    company: 'Ford Motor Company',
    location: 'Mexico City, Mexico',
    start: 'Mar 2021',
    end: 'Oct 2021',
    roles: [
      {
        title: 'Data Analyst Engineer',
        start: 'Mar 2021',
        end: 'Oct 2021',
        highlights: [
          'Supported a US-based warranty analytics team by producing **8–12 weekly analyses** from Hadoop data, typically processing reports with approximately 500K rows and 20 variables.',
          'Performed **analytics engineering** duties through Hadoop and Alteryx reporting workflows and Python transformations, standardizing warranty reporting by vehicle model and warranty type to support identification of recurring issues and potential preventive-warranty opportunities.',
          'Designed a Python and Dash dashboard, deployed with **Jenkins CI/CD**, and standardized Excel outputs for manager review, improving the accessibility and consistency of warranty reporting; the dashboard was **adopted by a 35-person US team**.',
        ],
        tags: ['Python', 'Alteryx', 'Hadoop', 'Dash', 'Jenkins'],
      },
    ],
  },
  {
    company: 'Ben & Frank',
    location: 'Mexico City, Mexico',
    start: 'Sep 2019',
    end: 'Jan 2021',
    summary:
      'Two roles spanning commercial analytics, data infrastructure, and retail expansion from approximately 12 to 24 physical stores.',
    highlights: [
      'Built **Power BI dashboards** and automated commercial reporting, customer metrics, and data workflows.',
      'Helped establish a company-wide **Redshift data warehouse** and supported the first international e-commerce expansion into Chile.',
    ],
    roles: [
      {
        title: 'Data Engineer / Analyst',
        start: 'Sep 2020',
        end: 'Jan 2021',
        highlights: [
          'Helped build and maintain an **AWS Redshift data warehouse** consolidating sales, customer, finance, e-commerce, and operational-system data for company-wide analytics.',
          'Built **Apache Airflow** pipelines to orchestrate recurring data workflows supporting analytics and reporting.',
          'Automated recurring commercial reporting with **Python and AWS Lambda**, including sales performance, customer cohorts, repeat-purchase behavior, LTV, recency, and product-level analysis.',
          'Led data consolidation during the transition from separate Shopify and internal systems to Odoo, using Python-based record matching and text processing to **reconcile historical customer data** across platforms.',
        ],
        tags: ['Data Engineering', 'AWS Redshift', 'Apache Airflow', 'AWS Lambda', 'Python'],
      },
      {
        title: 'Business Intelligence Analyst',
        start: 'Sep 2019',
        end: 'Aug 2020',
        highlights: [
          'Delivered sales, customer-cohort, and repeat-purchase analytics through **Power BI dashboards** during expansion from **approximately 12 to 24 physical stores**, supporting commercial performance reviews and customer-behavior analysis.',
          'Defined and monitored **business metrics** including LTV, recency, purchase frequency, customer cohorts, and product performance through monthly sales reporting.',
          'Conducted **NLP-based analysis of NPS comments** to identify recurring customer pain points, sentiment themes, and the product and service attributes customers valued most.',
          'Supported the company’s **first international e-commerce expansion** into Chile through commercial and customer-data analysis.',
        ],
        tags: ['Business Intelligence', 'Power BI', 'Customer Analytics', 'Natural Language Processing', 'SQL'],
      },
    ],
  },
];
