import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'customer-analytics-dashboard',
    number: '01',
    title: 'Customer Analytics Dashboard',
    subtitle: 'End-to-End E-Commerce & Retail Intelligence',
    description:
      'Comprehensive customer analytics system built using SQL, Excel, and Power BI to evaluate customer purchasing behaviors, sales performance, revenue trends, and retention KPIs.',
    fullOverview:
      'Designed to help e-commerce stakeholders translate raw transactional records into actionable decisions. Uses Excel for initial data cleansing and validation, structured SQL queries for aggregated cohort metrics, and an interactive multi-view Power BI dashboard tracking revenue, repeat purchase rates, and customer segmentation.',
    techStack: ['SQL', 'Excel', 'Power BI', 'Data Modeling', 'Cohort Analysis'],
    githubUrl: 'https://github.com/Kartikey-code1/Customer-Analytics-Dashboard',
    category: 'Business Intelligence',
    chartType: 'bar',
    metrics: [
      { label: 'Key KPIs Tracked', value: '8 Core Metrics' },
      { label: 'Data Processing', value: 'Multi-table Relational Schema' },
      { label: 'Analysis Layers', value: 'Cohort & Retention' },
      { label: 'BI Platform', value: 'Power BI Interactive' },
    ],
    keyFeatures: [
      'Customer lifetime purchasing analysis & repeat vs. one-time buyer ratios',
      'Category-level profitability matrix and monthly sales trend tracking',
      'Cohort segmentation based on order frequency and average order value (AOV)',
      'Dynamic filtering by customer demographic, order status, and regional cities',
    ],
    sqlSnippet: `-- Customer Analytics SQL Analysis: Retention & Lifetime Segmentation
WITH customer_orders AS (
    SELECT 
        Customer_ID, 
        COUNT(DISTINCT Order_ID) AS total_orders,
        ROUND(SUM(Revenue), 2) AS lifetime_spend
    FROM orders
    WHERE Order_Status = 'Delivered'
    GROUP BY Customer_ID
)
SELECT
    CASE 
        WHEN total_orders >= 2 THEN 'Repeat Customer' 
        ELSE 'One-time Customer' 
    END AS customer_cohort,
    COUNT(*) AS total_customers,
    ROUND(AVG(lifetime_spend), 2) AS avg_cohort_spend
FROM customer_orders
GROUP BY CASE WHEN total_orders >= 2 THEN 'Repeat Customer' ELSE 'One-time Customer' END;`,
    dataHighlights: [
      'Customers & Orders datasets cleaned and normalized',
      'SQL views created for rapid Power BI DAX ingestion',
      'Identified top revenue drivers across product catalog tiers',
    ],
  },
  {
    id: 'stay-sure-churn-predictor',
    number: '02',
    title: 'Stay Sure — Customer Churn Predictor',
    subtitle: 'Intelligent Retention & Churn Risk Analytics',
    description:
      'An intelligent customer churn prediction dashboard built with Python, Streamlit & Machine Learning to help subscription businesses identify at-risk customers and reduce attrition.',
    fullOverview:
      'Built upon the Telco Customer Churn dataset, this application integrates exploratory data analysis with a trained Random Forest classification model. Offers customer service teams a real-time risk score calculator with intuitive feature importance visuals highlighting contract length, monthly charges, and tenure.',
    techStack: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'EDA', 'Matplotlib'],
    githubUrl: 'https://github.com/Kartikey-code1/Stay-Sure--Customer-Churn-Predictor',
    category: 'Predictive Analytics',
    chartType: 'pie',
    metrics: [
      { label: 'Model Algorithm', value: 'Random Forest Classifier' },
      { label: 'Frontend Interface', value: 'Streamlit Web UI' },
      { label: 'Analysis Focus', value: 'Tenure & Contract Risk' },
      { label: 'Application', value: 'Proactive Retention' },
    ],
    keyFeatures: [
      'Exploratory data analysis identifying primary drivers of customer attrition',
      'Interactive risk calculator predicting individual subscriber churn likelihood',
      'Visual feature weight rankings demonstrating high-risk service bundles',
      'Exportable retention priority lists for proactive customer support outreach',
    ],
    sqlSnippet: `# Telco Churn Analysis with Pandas & Scikit-Learn
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# Compute churn rates by contract category
df = pd.read_csv('data/Telco-Customer-Churn.csv')
churn_by_contract = df.groupby('Contract')['Churn'].value_counts(normalize=True).unstack()

# Train feature-weighted model for real-time risk inference
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)`,
    dataHighlights: [
      'Identified month-to-month contracts as the leading churn factor',
      'Streamlit interface for zero-friction non-technical stakeholder use',
      'Modular code separating data ingestion, training, and UI presentation',
    ],
  },
  {
    id: 'stock-price-prediction',
    number: '03',
    title: 'Stock Price Prediction & Technical Analytics',
    subtitle: 'Quantitative Indicators & Time-Series Modeling',
    description:
      'Full-stack machine learning workflow for market analysis. Ingests historical pricing, computes technical indicators (MA20, Bollinger Bands, RSI, MACD), and visualizes trend forecasts.',
    fullOverview:
      'Built for quantitative data investigation. Features automated pipelines to calculate rolling volatility bands, relative strength indices, and moving average convergences. Couples algorithmic time-series modeling (LSTM) with an interactive dashboard for financial trend evaluation.',
    techStack: ['Python', 'Time-Series', 'LSTM', 'Pandas', 'NumPy', 'Technical Indicators'],
    githubUrl: 'https://github.com/Kartikey-code1/Stock-price-prediction',
    category: 'Machine Learning',
    chartType: 'line',
    metrics: [
      { label: 'Core Indicators', value: 'RSI, MACD, MA20, BB' },
      { label: 'Model Architecture', value: 'Sequential LSTM' },
      { label: 'Data Source', value: 'Historical Market Data' },
      { label: 'Evaluation', value: 'RMSE & MAE Benchmarks' },
    ],
    keyFeatures: [
      'Automated technical indicators calculation pipeline (20-day MA, RSI, MACD)',
      'Bollinger Band volatility channels with dynamic standard deviation overlays',
      'LSTM recurrent neural network pipeline trained on sequential historical closes',
      'Interactive visual dashboard comparing forecasted trajectories vs historical trend',
    ],
    sqlSnippet: `# Technical Indicator Computation Engine
import pandas as pd
import numpy as np

def compute_indicators(df, window=20):
    # Rolling 20-day simple moving average & volatility bands
    df['MA20'] = df['Close'].rolling(window=window).mean()
    df['STD20'] = df['Close'].rolling(window=window).std()
    df['Upper_Band'] = df['MA20'] + (df['STD20'] * 2)
    df['Lower_Band'] = df['MA20'] - (df['STD20'] * 2)
    
    # Relative Strength Index (RSI 14)
    delta = df['Close'].diff()
    gain = (delta.where(delta > 0, 0)).rolling(14).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(14).mean()
    rs = gain / (loss + 1e-9)
    df['RSI'] = 100 - (100 / (1 + rs))
    return df`,
    dataHighlights: [
      'Standardized time-series preprocessing and lookback sliding window',
      'Visualized multi-indicator charts for quantitative analysis',
      'Robust metrics comparing actual vs predicted market movements',
    ],
  },
  {
    id: 'fraudflux-detection',
    number: '04',
    title: 'Fraudlux — Real-Time Transaction Fraud Detection',
    subtitle: 'Imbalanced Classification & Risk Scoring',
    description:
      'Smart fraud detection app utilizing machine learning algorithms to identify suspicious transactional anomalies and flagged patterns with precision in imbalanced environments.',
    fullOverview:
      'Financial transaction fraud datasets present extreme class imbalances. This project explores data cleansing, correlation matrices, outlier handling, and anomaly classification algorithms to flag irregular payment behaviors before processing authorization.',
    techStack: ['Python', 'Machine Learning', 'Scikit-Learn', 'EDA', 'Data Preprocessing'],
    githubUrl: 'https://github.com/Kartikey-code1/Fraudlux-Detection',
    category: 'Machine Learning',
    chartType: 'anomaly',
    metrics: [
      { label: 'Task Focus', value: 'Anomaly & Fraud Classification' },
      { label: 'Data Challenge', value: 'Extreme Class Imbalance' },
      { label: 'Validation', value: 'Precision-Recall AUC' },
      { label: 'Execution', value: 'Scalable Python Script' },
    ],
    keyFeatures: [
      'Rigorous exploratory data analysis on transactional velocity and amount anomalies',
      'Synthetic sampling & threshold tuning to minimize costly false negatives',
      'Feature correlation heatmaps filtering out uninformative transactional noise',
      'High-speed inference design suitable for simulated transaction gateways',
    ],
    sqlSnippet: `# Fraud Detection Anomaly Scoring Pipeline
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.ensemble import IsolationForest

# Train anomaly detector on transaction distribution
detector = IsolationForest(contamination=0.015, random_state=42)
predictions = detector.fit_predict(scaled_features)

# Flag transactions: -1 indicates anomaly
flagged_transactions = test_df[predictions == -1]
print(f"Flagged {len(flagged_transactions)} suspicious transactions")`,
    dataHighlights: [
      'Comprehensive EDA isolating high-risk spending velocity windows',
      'Engineered risk metrics to safeguard against transactional drift',
      'Evaluated precision and recall tradeoffs for minimal friction',
    ],
  },
  {
    id: 'voxita-ai',
    number: '05',
    title: 'Voxita AI — Conversational Voice Assistant',
    subtitle: 'Natural Language & Intelligent Automation',
    description:
      'Machine learning powered conversational AI assistant featuring real-time voice interaction, intelligent query resolution, and a modern responsive interface.',
    fullOverview:
      'Showcases technical versatility across modern AI workflows and automated speech interfaces. Integrates natural language understanding, real-time auditory processing, and interactive UI feedback loops for hands-free information retrieval.',
    techStack: ['Python', 'NLP', 'Voice Recognition', 'Conversational AI', 'Modern UI'],
    githubUrl: 'https://github.com/Kartikey-code1/Voxita-Ai',
    category: 'AI Systems',
    chartType: 'bar',
    metrics: [
      { label: 'Domain', value: 'Voice AI & Speech Recognition' },
      { label: 'Language', value: 'Python 3.x' },
      { label: 'Interactions', value: 'Real-time Audio Streams' },
      { label: 'UI Architecture', value: 'Responsive Modern GUI' },
    ],
    keyFeatures: [
      'Speech-to-text pipeline with responsive intent classification',
      'Context-aware conversational loops answering complex inquiries',
      'Clean modern interface reflecting active audio stream status',
      'Demonstrates breadth across modern Python intelligence ecosystems',
    ],
    sqlSnippet: `# Voice AI Loop Integration
import speech_recognition as sr
import pyttsx3

def listen_and_respond():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for analytical query...")
        audio = recognizer.listen(source, phrase_time_limit=5)
        text = recognizer.recognize_google(audio)
        return text`,
    dataHighlights: [
      'Real-time voice processing and intent routing',
      'Seamless multi-threaded background audio capture',
      'Demonstrates versatility in software engineering & AI tooling',
    ],
  },
];
