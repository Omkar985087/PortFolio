import {
  Brain,
  Sparkles,
  Eye,
  Database,
  Bot,
  Layers,
  Award,
  GraduationCap,
  Code2,
  TrendingUp,
} from 'lucide-react';

export const personalInfo = {
  name: 'Omkar Kadam',
  title: 'AI Researcher & Engineer',
  location: 'India',
  availability: 'Open to AI/ML & Research Roles',
  email: 'mailto:omkarkadam9422@gmail.com',
  emailDisplay: 'omkarkadam9422@gmail.com',
  phone: 'tel:+919422561412',
  phoneDisplay: '+91-9422561412',
  linkedin: 'https://linkedin.com/in/omkar9850',
  github: 'https://github.com/Omkar985087',
  resume: '/Omkar_Kadam_AI_Resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const aboutContent = {
  overline: 'About',
  headline: 'Bridging Foundational AI Research & Production Engineering',
  description: [
    "I'm currently pursuing my M.Tech in Artificial Intelligence at the Indian Institute of Technology, Patna. I previously completed my B.E. in Computer Engineering at Marathwada Mitra Mandal College of Engineering, Pune.",
    "My interests lie in building intelligent systems using Machine Learning, Deep Learning, Large Language Models, Generative AI, and Agentic AI.",
    "I enjoy working on practical AI systems, from retrieval-augmented generation and LLM safety to production-ready machine learning pipelines.",
  ],
  stats: [
    { label: 'Current Education', value: 'M.Tech AI @ IIT Patna', sub: 'CPI: 7.51 / 10 · 2025–2027' },
    { label: 'Undergraduate', value: 'B.E. Computer Engineering', sub: 'MMCOE, Pune · CPI: 7.69 / 10' },
    { label: 'National Rank', value: 'GATE 2025 · AIR 1603', sub: 'Top ~1% (170,000+ candidates)' },
  ],
};

export const educationJourney = [
  {
    institution: 'Indian Institute of Technology, Patna',
    degree: 'M.Tech in Artificial Intelligence',
    period: '2025 – 2027',
    score: 'CPI: 7.51 / 10',
    location: 'Patna, Bihar',
    description:
      'Pursuing advanced coursework and research in Artificial Intelligence, focusing on Large Language Models, Generative AI, Neural Networks, and Autonomous Agent Architectures.',
    highlights: [
      'Advanced Machine Learning & Deep Learning',
      'Large Language Models & Generative AI',
      'Agentic Systems & Multi-Agent Planning',
      'Statistical Learning & Optimization',
    ],
    status: 'Current Program',
  },
  {
    institution: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
    degree: 'B.E. in Computer Engineering',
    period: '2021 – 2025',
    score: 'CPI: 7.69 / 10',
    location: 'Pune, Maharashtra',
    description:
      'Completed a comprehensive four-year engineering program with strong foundations in computer systems, algorithms, distributed architecture, and data science.',
    highlights: [
      'Data Structures & Algorithms',
      'Operating Systems & Computer Networks',
      'Database Management & Distributed Systems',
      'Machine Learning Foundations',
    ],
    status: 'Graduated',
  },
];

export const projects = [
  {
    title: 'Customer Churn Prediction & Business Impact Dashboard',
    subtitle: 'Explainable ML Pipeline & ROI-Driven Retention Strategy',
    description:
      'Developed an end-to-end customer churn prediction pipeline using 7,043 Telco customer records, combining machine learning, explainable AI, and business impact analysis to identify customers at risk of leaving.',
    tags: ['Python', 'Scikit-learn', 'LightGBM', 'SHAP', 'SMOTE', 'Pandas', 'Streamlit'],
    features: [
      'End-to-end customer churn prediction pipeline',
      'Exploratory data analysis and feature engineering',
      'Benchmarking of 10 machine learning pipelines',
      'LightGBM and SMOTE for predictive modeling',
      'Achieved 0.8466 ROC-AUC, 0.6623 PR-AUC, and 0.5863 F1-score',
      'SHAP-based explainable AI for customer-level churn predictions',
      'Identified contract type and tenure as major churn drivers',
      'Interactive Streamlit business-impact dashboard',
      'Estimated $228K revenue savings and 224% ROI by targeting the top 20% of customers',
    ],
    metrics: [
      { label: 'ROC-AUC', value: '0.8466' },
      { label: 'Est. Revenue Savings', value: '$228K' },
      { label: 'Targeted ROI', value: '224%' },
    ],
    github: 'https://github.com/Omkar985087',
    color: '#D9541E',
    number: '01',
  },
  {
    title: 'Self-Critiquing RAG System with LangGraph',
    subtitle: 'Cyclical Agentic Retrieval with Verification & Self-Correction',
    description:
      'An end-to-end agentic RAG pipeline that ingests research PDFs into structure-aware chunks for semantic retrieval using Gemini embeddings and FAISS.',
    tags: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'FastAPI', 'Pydantic'],
    features: [
      'Cyclical LangGraph workflow with autonomous feedback loops',
      'Retrieval critic and query reformulator agents',
      'Answer generator and answer critic components',
      'Iterative retrieval with configurable retry limits',
      'Evidence sufficiency checks and hallucination auditing',
      'Source and page-level citation tracing',
      'Retrieval evaluation: 95.83% Recall@10 and 81.42% MRR',
    ],
    metrics: [
      { label: 'Recall@10', value: '95.83%' },
      { label: 'MRR', value: '81.42%' },
      { label: 'Orchestration', value: 'LangGraph' },
    ],
    github: 'https://github.com/Omkar985087',
    color: '#171412',
    number: '02',
  },
  {
    title: 'LLM Guardrails Gateway',
    subtitle: 'Real-time Security, Toxicity & Policy Enforcement Framework',
    description:
      'An LLM guardrails framework built using Python and FastAPI to identify unsafe or policy-violating LLM inputs and outputs.',
    tags: ['Python', 'FastAPI', 'Google Gemini', 'PyYAML', 'Pydantic', 'jsonschema'],
    features: [
      'Prompt injection detection and mitigation',
      'PII leakage identification and redaction',
      'Toxicity and hate speech detection',
      'Organizational policy violation detection',
      'Benchmark of 500 labeled test cases across 9 categories',
      '94.2% classification accuracy and 88.47% macro F1-score',
      'Interactive evaluation dashboard with confusion matrix and latency metrics',
      '47 passing unit and integration tests',
    ],
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Macro F1', value: '88.47%' },
      { label: 'Unit Tests', value: '47 Passing' },
    ],
    github: 'https://github.com/Omkar985087',
    color: '#8A7F72',
    number: '03',
  },
  {
    title: 'End-to-End Phishing Detection System (MLOps)',
    subtitle: 'Production Pipeline with Data Drift Monitoring & Cloud CI/CD',
    description:
      'An end-to-end machine learning pipeline for phishing detection with automated data processing, model training, monitoring, and deployment.',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'MLflow', 'DagsHub', 'MongoDB', 'Docker', 'GitHub Actions', 'AWS'],
    features: [
      'Automated data ingestion and schema validation',
      'Data drift detection and monitoring in production',
      'Automated feature engineering and preprocessing pipelines',
      'Machine learning model benchmarking and evaluation',
      'Random Forest with 97.38% test accuracy and 97.02% phishing F1-score',
      '99.78% ROC-AUC on holdout validation data',
      'MLflow and DagsHub experiment tracking and artifact registry',
      'Docker containerization with GitHub Actions CI/CD',
      'AWS EC2, ECR, and S3 integration',
    ],
    metrics: [
      { label: 'Test Accuracy', value: '97.38%' },
      { label: 'ROC-AUC', value: '99.78%' },
      { label: 'Phishing F1', value: '97.02%' },
    ],
    github: 'https://github.com/Omkar985087',
    color: '#B8441A',
    number: '04',
  },
];

export const researchInterests = [
  {
    title: 'Large Language Models',
    description: 'Foundation model architectures, efficient fine-tuning (PEFT/LoRA), alignment techniques, and inference acceleration.',
    icon: Brain,
  },
  {
    title: 'Generative AI',
    description: 'Diffusion models, controllable synthesis, latent representations, and text-to-multimodal generation.',
    icon: Sparkles,
  },
  {
    title: 'Retrieval-Augmented Generation',
    description: 'Structure-aware chunking, dense semantic embeddings, hybrid retrieval, and self-critiquing evaluation loops.',
    icon: Database,
  },
  {
    title: 'Agentic AI Systems',
    description: 'Autonomous multi-agent workflows, tool utilization, reflection cycles, and robust task planning.',
    icon: Bot,
  },
  {
    title: 'Deep Learning',
    description: 'Neural optimization dynamics, representation learning, transformer architectures, and loss landscape geometry.',
    icon: Layers,
  },
  {
    title: 'Computer Vision',
    description: 'Vision Transformers (ViTs), object detection, visual semantic representations, and multimodal vision-language models.',
    icon: Eye,
  },
];

export const skills = {
  'Programming & Web': ['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  'Machine Learning & NLP': [
    'Scikit-learn',
    'PyTorch',
    'TensorFlow',
    'CNNs',
    'Transformers',
    'TF-IDF',
    'Feature Engineering',
    'Cross-Validation',
  ],
  'LLM & Agentic AI': [
    'LangGraph',
    'LangChain',
    'Google Gemini',
    'RAG Pipelines',
    'Prompt Engineering',
    'Guardrails',
  ],
  'MLOps & Tools': [
    'MLflow',
    'DagsHub',
    'FastAPI',
    'Docker',
    'GitHub Actions',
    'AWS EC2',
    'AWS ECR',
    'AWS S3',
    'Git',
    'Linux',
    'MongoDB',
    'Pydantic',
    'PyYAML',
  ],
};

export const achievements = [
  {
    icon: Award,
    title: 'GATE 2025',
    subtitle: 'All India Rank 1603',
    description: 'Ranked in the top ~1% nationwide among 170,000+ candidates in the Graduate Aptitude Test in Engineering.',
  },
  {
    icon: Code2,
    title: 'Competitive Programming',
    subtitle: '400+ Problems Solved',
    description: 'Solved over 400 algorithmic problems on LeetCode spanning Dynamic Programming, Graphs, and Trees.',
  },
  {
    icon: TrendingUp,
    title: 'CodeChef 3-Star Coder',
    subtitle: 'Ranked 438 / 8,000+',
    description: 'Achieved 3-Star rating on CodeChef (Rating 1600+); placed rank 438 out of 8,000 participants in Starters 245.',
  },
];
