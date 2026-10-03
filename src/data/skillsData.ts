import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  {
    name: 'SQL',
    category: 'Core Tools',
    level: 'Core Competency',
    description:
      'Writing performant queries, multi-table JOINs, CTEs, Window functions (ROW_NUMBER, RANK), and cohort aggregations to extract clean analytical datasets.',
    highlightSyntax: `SELECT \n  Category,\n  COUNT(DISTINCT Order_ID) AS total_orders,\n  ROUND(SUM(Revenue), 2) AS revenue,\n  ROUND(SUM(Profit), 2) AS profit\nFROM orders\nWHERE Order_Status = 'Delivered'\nGROUP BY Category\nORDER BY revenue DESC;`,
    tags: ['PostgreSQL', 'MySQL', 'CTEs', 'Window Functions', 'Data Aggregation'],
  },
  {
    name: 'Python',
    category: 'Core Tools',
    level: 'Analytical Core',
    description:
      'Utilizing Pandas, NumPy, Scikit-Learn, Matplotlib, and Seaborn for data manipulation, statistical EDA, feature engineering, and predictive modeling.',
    highlightSyntax: `import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('ecommerce_orders.csv')\ncohort = df.groupby(['CohortGroup', 'OrderMonth'])\ncohort_size = cohort['CustomerID'].nunique()\nretention_matrix = cohort_size.unstack(0)`,
    tags: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit'],
  },
  {
    name: 'Excel & Advanced Formulas',
    category: 'Core Tools',
    level: 'Analytical Core',
    description:
      'Data preparation, XLOOKUP, INDEX/MATCH, nested IFs, dynamic pivot tables, scenario modeling, and quick data profiling for preliminary checks.',
    highlightSyntax: `=LET(\n  clean_rev, FILTER(Orders[Revenue], Orders[Status]="Delivered"),\n  SUM(clean_rev)\n)`,
    tags: ['Pivot Tables', 'XLOOKUP', 'Power Query', 'Data Cleaning', 'Conditional Logic'],
  },
  {
    name: 'Power BI',
    category: 'BI & Analytics',
    level: 'Dashboard Specialist',
    description:
      'Building dynamic reporting dashboards, STAR schema data modeling, calculated DAX measures, KPI cards, and cross-filtering interactive visuals.',
    highlightSyntax: `Repeat_Customer_Rate = \nDIVIDE(\n    CALCULATE(DISTINCTCOUNT(Orders[CustomerID]), FILTER(Orders, Orders[OrderCount] > 1)),\n    DISTINCTCOUNT(Orders[CustomerID]),\n    0\n)`,
    tags: ['DAX', 'Star Schema', 'Interactive Dashboards', 'Power Query', 'KPI Cards'],
  },
  {
    name: 'Tableau',
    category: 'BI & Analytics',
    level: 'Visual Reporting',
    description:
      'Designing publication-ready dashboards, dual-axis charts, level of detail (LOD) expressions, heatmaps, and geospatial customer mapping.',
    highlightSyntax: `{ FIXED [Customer ID] : MIN([Order Date]) }`,
    tags: ['LOD Expressions', 'Heatmaps', 'Geospatial Visuals', 'Storyboards'],
  },
  {
    name: 'Data Cleaning & Preprocessing',
    category: 'Data Methodologies',
    level: 'Practical Rigor',
    description:
      'Handling missing values, outlier treatment, standardizing inconsistent date formats, categorical encoding, and ensuring high-fidelity data integrity.',
    highlightSyntax: `df.dropna(subset=['CustomerID'], inplace=True)\ndf['Order_Date'] = pd.to_datetime(df['Order_Date'])\ndf = df[df['Quantity'] > 0]`,
    tags: ['Missing Value Imputation', 'Outlier Treatment', 'Data Integrity', 'Type Casting'],
  },
  {
    name: 'Exploratory Data Analysis (EDA)',
    category: 'Data Methodologies',
    level: 'Investigative Core',
    description:
      'Uncovering patterns, testing hypotheses, correlation matrix analysis, distribution profiling, and identifying business bottlenecks prior to modeling.',
    highlightSyntax: `corr_matrix = df.corr(numeric_only=True)\nsns.heatmap(corr_matrix, annot=True, cmap='coolwarm')`,
    tags: ['Distribution Analysis', 'Correlation', 'Hypothesis Testing', 'Statistical Profiling'],
  },
  {
    name: 'Data Visualization & Storytelling',
    category: 'Data Methodologies',
    level: 'Executive Clarity',
    description:
      'Translating dense numbers into intuitive executive-facing charts with high data-to-ink ratio, accessible color palettes, and clear callouts.',
    highlightSyntax: `fig, ax = plt.subplots(figsize=(10, 5))\nax.bar(categories, revenue, color='#10b981')\nax.set_title('Delivered Revenue by Product Line')`,
    tags: ['Visual Hierarchy', 'Data-to-Ink Ratio', 'Executive Storytelling', 'Accessibility'],
  },
  {
    name: 'Dashboard Development',
    category: 'BI & Analytics',
    level: 'Full Lifecycle',
    description:
      'End-to-end delivery: understanding stakeholder requirements, architecting SQL views, crafting intuitive UI layouts, and documenting metrics.',
    highlightSyntax: `[Stakeholder Requirement] -> [SQL Aggregation] -> [Semantic Model] -> [Interactive BI Views]`,
    tags: ['Wireframing', 'Metric Dictionaries', 'Filter Hierarchies', 'Responsive BI'],
  },
  {
    name: 'Business Analytics & Decision Support',
    category: 'BI & Analytics',
    level: 'Strategic Thinking',
    description:
      'Connecting analytical findings directly to business levers: customer retention strategies, sales funnel optimization, and revenue leak diagnosis.',
    highlightSyntax: `Metric: Month-to-Month Contract Attrition (+34% risk)\nRecommendation: Introduce annual incentive tier with target 15% retention uplift`,
    tags: ['Customer Retention', 'AOV Optimization', 'Funnel Analysis', 'Root Cause Analysis'],
  },
];
