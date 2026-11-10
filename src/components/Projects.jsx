import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

/* ── Technical Visualizations (Accurate Architectural Blueprints) ── */
const ProjectVisual = ({ index, color }) => {
  // Project 01: Customer Churn Prediction & Business Impact Dashboard
  if (index === 0) {
    return (
      <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between font-mono select-none text-white min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/15 pb-3">
          <span className="flex items-center gap-2 text-white/90 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            CHURN_PIPELINE :: LIGHTGBM + SMOTE
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 flex-shrink-0">
            N=7,043 TELCO
          </span>
        </div>

        <div className="my-auto py-4 space-y-3.5 min-w-0">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3.5 border border-white/15 min-w-0">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-white/70">Retention Strategy ROI</span>
              <span className="text-emerald-300 font-bold font-sans">224% ROI</span>
            </div>
            <div className="w-full bg-white/15 rounded-full h-2 overflow-hidden mt-2">
              <div className="bg-[#D9541E] h-full rounded-full" style={{ width: '84.6%' }} />
            </div>
            <div className="flex flex-wrap justify-between text-[11px] text-white/60 mt-2 gap-1">
              <span>ROC-AUC: 0.8466</span>
              <span>PR-AUC: 0.6623</span>
              <span>Savings: $228K</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px] min-w-0">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
              <span className="block text-[10px] text-white/60">TOP DRIVERS</span>
              <span className="text-orange-200 font-semibold truncate block">Contract &amp; Tenure</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
              <span className="block text-[10px] text-white/60">EXPLAINABILITY</span>
              <span className="text-white font-semibold truncate block">SHAP Explainer</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3 gap-1">
          <span>Streamlit Dashboard</span>
          <span>10 ML Pipelines Benchmarked</span>
        </div>
      </div>
    );
  }

  // Project 02: Self-Critiquing RAG System with LangGraph
  if (index === 1) {
    return (
      <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between font-mono select-none text-white min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/15 pb-3">
          <span className="flex items-center gap-2 text-white/90 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            LANGGRAPH_AGENTIC_WORKFLOW
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 flex-shrink-0">
            FAISS_VECTOR_SPACE
          </span>
        </div>

        <div className="my-auto py-4 space-y-3.5 min-w-0">
          <div className="grid grid-cols-3 gap-2 text-center text-xs min-w-0">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10 min-w-0">
              <span className="block text-[9px] text-white/60">INGESTION</span>
              <span className="font-semibold text-white truncate block">PDF Parse</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10 min-w-0">
              <span className="block text-[9px] text-white/60">AGENT</span>
              <span className="font-semibold text-white truncate block">Critic Node</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 border border-orange-400/40 min-w-0">
              <span className="block text-[9px] text-orange-200">FEEDBACK</span>
              <span className="font-semibold text-white truncate block">Re-Rank</span>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3.5 border border-white/15 space-y-1.5 text-[11px] min-w-0">
            <div className="flex justify-between">
              <span className="text-white/70">Recall@10:</span>
              <span className="text-emerald-300 font-bold font-sans">95.83%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Mean Reciprocal Rank (MRR):</span>
              <span className="text-emerald-300 font-bold font-sans">81.42%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Verification Loop:</span>
              <span className="text-orange-200 truncate">Evidence Sufficiency</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3 gap-1">
          <span>Gemini Embeddings</span>
          <span>Configurable Retries</span>
        </div>
      </div>
    );
  }

  // Project 03: LLM Guardrails Gateway
  if (index === 2) {
    return (
      <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between font-mono select-none text-white min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/15 pb-3">
          <span className="flex items-center gap-2 text-white/90 truncate">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            GUARDRAILS_SECURITY_GATEWAY
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 flex-shrink-0">
            FASTAPI : 8000
          </span>
        </div>

        <div className="my-auto py-4 space-y-3.5 min-w-0">
          <div className="grid grid-cols-2 gap-2 text-[11px] min-w-0">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
              <span className="block text-[10px] text-white/60">PROMPT INJECTION</span>
              <span className="text-emerald-300 font-semibold truncate block">Active Defense</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
              <span className="block text-[10px] text-white/60">PII LEAKAGE AUDIT</span>
              <span className="text-emerald-300 font-semibold truncate block">Redaction Engine</span>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3.5 border border-white/15 space-y-2 min-w-0">
            <div className="flex justify-between text-xs">
              <span className="text-white/70 truncate">500 Labeled Test Cases</span>
              <span className="text-emerald-300 font-bold font-sans flex-shrink-0">94.2% Acc</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/60">
              <span>Macro F1: 88.47%</span>
              <span className="text-emerald-300">47 Tests Passed</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3 gap-1">
          <span>Toxicity &amp; Policy Filters</span>
          <span>Latency &amp; Metrics</span>
        </div>
      </div>
    );
  }

  // Project 04: End-to-End Phishing Detection System (MLOps)
  return (
    <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between font-mono select-none text-white min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/15 pb-3">
        <span className="flex items-center gap-2 text-white/90 truncate">
          <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
          MLOPS_PRODUCTION_PIPELINE
        </span>
        <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 flex-shrink-0">
          AWS EC2 / ECR / S3
        </span>
      </div>

      <div className="my-auto py-4 space-y-3.5 min-w-0">
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-3.5 border border-white/15 space-y-1.5 min-w-0">
          <div className="flex justify-between text-xs">
            <span className="text-white/70">Random Forest Classifier</span>
            <span className="text-emerald-300 font-bold font-sans">97.38% Test Acc</span>
          </div>
          <div className="w-full bg-white/15 rounded-full h-2 overflow-hidden mt-1.5">
            <div className="bg-[#D9541E] h-full rounded-full" style={{ width: '97.38%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-white/60 pt-1">
            <span>ROC-AUC: 99.78%</span>
            <span>Phishing F1: 97.02%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] min-w-0">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
            <span className="block text-[10px] text-white/60">DRIFT DETECTION</span>
            <span className="text-emerald-300 font-semibold truncate block">Continuous Audit</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10 min-w-0">
            <span className="block text-[10px] text-white/60">CI/CD PIPELINE</span>
            <span className="text-white font-semibold truncate block">GitHub Actions</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3 gap-1">
        <span>MLflow &amp; DagsHub Tracking</span>
        <span>Docker Containerized</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onOpenModal }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
      className="group relative w-full min-w-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full min-w-0">
        {/* Visual / Blueprint Container (50%) */}
        <div className={`relative w-full min-w-0 ${isReversed ? 'lg:order-2' : ''}`}>
          {/* Oversized Faded Background Number */}
          <span
            className="absolute -top-10 -left-4 md:-top-14 md:-left-6 text-[110px] md:text-[150px] font-bold leading-none select-none pointer-events-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: project.color || '#D9541E',
              opacity: 0.08,
            }}
          >
            {project.number}
          </span>

          {/* Visual Container */}
          <div
            onClick={() => onOpenModal(project)}
            className="relative w-full min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#171412] via-[#241F1C] to-[#171412] border border-[#D4CABC]/40 shadow-[0_12px_40px_rgba(23,20,18,0.08)] cursor-pointer group-hover:border-[#D9541E]/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Architectural Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #fff 1px, transparent 0), linear-gradient(180deg, #fff 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Visual Telemetry */}
            <ProjectVisual index={index} color={project.color} />

            {/* Interactive Pill */}
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-[#171412] shadow-md group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <span>View Case Study</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>

        {/* Content Container (50%) */}
        <div className={`space-y-5 w-full min-w-0 ${isReversed ? 'lg:order-1' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#D9541E] uppercase tracking-wider">
                Case Study {project.number}
              </span>
            </div>
            <h3
              onClick={() => onOpenModal(project)}
              className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#171412] leading-tight cursor-pointer hover:text-[#D9541E] transition-colors"
            >
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-[#8A7F72] mt-1.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
            {project.description}
          </p>

          {/* Features Checklist */}
          <ul className="space-y-2 pt-1">
            {project.features.slice(0, 4).map((feat, fi) => (
              <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C564E]">
                <Check size={16} className="text-[#D9541E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Metrics Row */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 w-full min-w-0">
              {project.metrics.map((m, mi) => (
                <div key={mi} className="bg-[#E8E0D0]/60 rounded-xl p-3 border border-[#D4CABC] min-w-0">
                  <span className="block text-[10px] uppercase font-semibold text-[#8A7F72] truncate">
                    {m.label}
                  </span>
                  <span className="font-['Playfair_Display'] text-base sm:text-lg font-bold text-[#171412]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#E8E0D0] text-[#171412] border border-[#D4CABC]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions: GitHub & Modal */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#171412] text-[#F3EEE3] text-xs font-medium tracking-wide hover:bg-[#D9541E] transition-all duration-300 shadow-sm"
            >
              <GithubIcon size={14} />
              <span>Source Code (GitHub)</span>
              <ArrowUpRight size={13} className="text-[#D4CABC]" />
            </a>

            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#171412]/30 text-[#171412] text-xs font-medium tracking-wide hover:border-[#D9541E] hover:text-[#D9541E] transition-all duration-300"
            >
              <span>Architecture Deep Dive</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Editorial Case Study Deep Dive Modal ── */
function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-[#F8F5EE] border border-[#D4CABC] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#E8E0D0] text-[#171412] hover:bg-[#D9541E] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#D4CABC] pb-5 mb-6 pr-10">
          <span className="text-xs font-mono font-bold text-[#D9541E] uppercase tracking-wider">
            Case Study {project.number} · Architecture Breakdown
          </span>
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#171412] mt-1">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-[#8A7F72] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-[#5C564E]">
          <div>
            <h4 className="text-xs uppercase font-bold text-[#171412] tracking-wider mb-2">
              System Overview &amp; Objective
            </h4>
            <p className="text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#171412] tracking-wider mb-3">
              Comprehensive Feature Implementation
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C564E]">
                  <Check size={16} className="text-[#D9541E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics Spotlight */}
          {project.metrics && (
            <div>
              <h4 className="text-xs uppercase font-bold text-[#171412] tracking-wider mb-3">
                Key Performance Benchmarks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, mi) => (
                  <div key={mi} className="bg-[#E8E0D0] rounded-xl p-3.5 border border-[#D4CABC] min-w-0">
                    <span className="block text-[10px] uppercase font-semibold text-[#8A7F72] truncate">
                      {m.label}
                    </span>
                    <span className="font-['Playfair_Display'] text-lg font-bold text-[#171412]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#171412] tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#E8E0D0] text-[#171412] border border-[#D4CABC]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#D4CABC] flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171412] text-[#F3EEE3] text-xs font-medium hover:bg-[#D9541E] transition-colors shadow-sm"
          >
            <GithubIcon size={14} />
            <span>View Source on GitHub</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#8A7F72] hover:text-[#171412] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <>
      <section id="projects" className="relative bg-[#F8F5EE] py-24 md:py-32 overflow-hidden border-t border-[#D4CABC]/40">
        <div className="site-container">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="inline-flex items-center justify-center gap-2.5 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#D9541E]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D9541E]">
                Featured Work
              </span>
              <span className="w-8 h-[2px] bg-[#D9541E]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={1}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#171412] leading-[1.15]"
            >
              Selected Projects &amp; Case Studies
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={2}
              className="mt-4 text-[#5C564E] text-base md:text-lg max-w-2xl mx-auto font-normal"
            >
              End-to-end architectures spanning explainable customer intelligence, cyclical agentic RAG,
              LLM safety guardrails, and production MLOps pipelines.
            </motion.p>
          </div>

          {/* 4 Projects List — Consistent Centered Spacing */}
          <div className="space-y-24 md:space-y-32 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenModal={setActiveModalProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <CaseStudyModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
