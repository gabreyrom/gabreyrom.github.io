export type ExperienceRole = {
  title: string;
  start: string;
  end: string;
  highlights: string[];
  tags: string[];
};

export type ExperienceCompany = {
  company: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  /** Company-level highlights shown while the card is collapsed (up to three). */
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
      'Four promotions across Growth and Marketing, progressing from customer engagement analytics into team leadership, product ownership, experimentation, and data infrastructure.',
    highlights: [
      'Averaged 31.5K monthly referral-sourced account activations at approximately 25% of paid-channel CAC.',
      'Helped increase three-month LTV per acquired user by 144% through funnel and Savings-adoption optimization.',
      'Led analysts and Analytics Engineers supporting Referral, Customer Engagement, LTV, and Savings.',
    ],
    roles: [
      {
        title: 'Senior Growth Business Analyst (Team Lead)',
        start: 'Jan 2025',
        end: 'Aug 2025',
        highlights: [
          'Reported directly to the CMO and led analysts and Analytics Engineers supporting Customer Engagement, Referral, LTV, and Savings analytics.',
          'Became business owner for the Savings product, building its initial data models and dashboards and informing rate-policy decisions with Finance for approximately 115K active users and MXN 8.0B in balances.',
          'Deployed a referral-policy model combining machine-learning propensity scores and causal analysis to personalize cash incentives; initial tests showed a 2 to 3 percentage-point uplift in referral conversion among newly acquired users.',
          'Designed and built a scalable ETL framework using AWS Glue, PySpark, and dbt to ingest and transform AppsFlyer and Xpend data from S3 into Redshift, processing more than 10M new records daily. The framework improved attribution quality, CAC measurement, campaign auditing, and reporting reliability.',
        ],
        tags: ['Growth Analytics', 'Causal Inference', 'Machine Learning', 'dbt', 'PySpark'],
      },
      {
        title: 'Growth Business Analyst (Team Lead)',
        start: 'Apr 2023',
        end: 'Jan 2025',
        highlights: [
          'Led Growth Analytics across Referral, Customer Engagement, and LTV, growing the team from one analyst to two analysts and two Analytics Engineers.',
          'Took ownership of Referral and automated campaign operations by integrating funnel data, Customer.io API data, and campaign-spend data in the warehouse.',
          'Built a daily user-level LTV framework integrating revenue and cost data, validated with Finance and used in Growth accountability reporting.',
          'Analyzed app-event data to identify onboarding drop-off points; recommended earlier phone-number collection and follow-up messages, contributing to an approximately 10% increase in acquisition-funnel conversion.',
        ],
        tags: ['Growth Analytics', 'Experiment Design', 'Customer Lifetime Value', 'dbt', 'Data Modeling'],
      },
      {
        title: 'Senior Customer Engagement Analyst',
        start: 'Jul 2022',
        end: 'Apr 2023',
        highlights: [
          'Expanded customer-engagement analytics across activation, retention, and campaign experimentation while mentoring junior analysts.',
          'Partnered with the Head of Credit to add credit-card funnel milestones to the central dbt model, improving measurement for a core acquisition KPI.',
          'Defined and automated Customer Engagement Monthly Business Review metrics and reporting workflows, connecting Python, SQL, Google Sheets, and presentation materials.',
          'Supported the Savings launch with data models, monitoring dashboards, and Finance metrics for cost of balance and balances by investment term.',
        ],
        tags: ['Customer Analytics', 'Product Analytics', 'dbt', 'SQL', 'Data Visualization'],
      },
      {
        title: 'Customer Engagement Analyst',
        start: 'Oct 2021',
        end: 'Jun 2022',
        highlights: [
          'Served as the first and only analyst supporting the Head of Customer Engagement, building foundational measurement for acquisition, activation, and retention.',
          'Automated channel-attribution reporting by connecting Adjust mobile-measurement data with user-level funnel data in Python and SQL, improving CAC measurement across paid, organic, and referral channels.',
          'Identified six or more first-month purchases as a leading retention indicator: these users were 35 percentage points more likely to remain active after six months than users with fewer than three purchases.',
          'Conducted exploratory demographic and behavioral analysis, including early RFM segmentation, to improve understanding of activation patterns and customer groups.',
        ],
        tags: ['Python', 'SQL', 'Marketing Attribution', 'Retention Analysis', 'Customer Analytics'],
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
          'Supported a US-based warranty analytics team by producing 8 to 12 weekly analyses from Hadoop data, typically processing reports with approximately 500K rows and 20 variables.',
          'Built repeatable Alteryx and Python workflows to analyze warranty patterns by vehicle model and warranty type, supporting identification of recurring issues and potential preventive-warranty opportunities.',
          'Designed a Python and Dash dashboard and standardized Excel outputs for manager review, improving the accessibility and consistency of warranty reporting for a 35-person US team.',
        ],
        tags: ['Python', 'Alteryx', 'Dash', 'Hadoop', 'Data Visualization'],
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
      'Built and automated commercial reporting, customer metrics, and data workflows.',
      'Helped establish a company-wide data warehouse and supported the first international e-commerce expansion into Chile.',
    ],
    roles: [
      {
        title: 'Data Engineer / Analyst',
        start: 'Sep 2020',
        end: 'Jan 2021',
        highlights: [
          'Helped build and maintain an AWS Redshift data warehouse consolidating sales, customer, finance, e-commerce, and operational-system data for company-wide analytics.',
          'Built Apache Airflow pipelines to orchestrate recurring data workflows supporting analytics and reporting.',
          'Automated recurring commercial reporting with Python and AWS Lambda, including sales performance, customer cohorts, repeat-purchase behavior, LTV, recency, and product-level analysis.',
          'Led data consolidation during the transition from separate Shopify and internal systems to Odoo, using Python-based record matching and text processing to reconcile historical customer data across platforms.',
        ],
        tags: ['Data Engineering', 'AWS Redshift', 'Apache Airflow', 'AWS Lambda', 'Python'],
      },
      {
        title: 'Business Intelligence Analyst',
        start: 'Sep 2019',
        end: 'Aug 2020',
        highlights: [
          'Supported commercial analytics during expansion from approximately 12 to 24 physical stores, evaluating store performance, sales trends, customer cohorts, and repeat-purchase behavior.',
          'Defined and monitored business metrics including LTV, recency, purchase frequency, customer cohorts, and product performance through monthly sales reporting.',
          'Conducted NLP-based analysis of NPS comments to identify recurring customer pain points, sentiment themes, and the product and service attributes customers valued most.',
          'Supported the company’s first international e-commerce expansion into Chile through commercial and customer-data analysis.',
        ],
        tags: ['Business Intelligence', 'Customer Analytics', 'Natural Language Processing', 'SQL', 'Data Visualization'],
      },
    ],
  },
];
