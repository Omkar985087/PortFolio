import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative bg-[#F8F5EE] py-24 md:py-32 overflow-hidden border-t border-[#D4CABC]/40">
      <div className="site-container">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
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
              {aboutContent.overline}
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
            {aboutContent.headline}
          </motion.h2>
        </div>

        {/* Balanced Two-Column Layout (50/50 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full min-w-0 mb-16 md:mb-20">
          {/* Left Column (50%): Profile & Academic Identity Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={2}
            className="flex justify-center min-w-0"
          >
            <div className="relative w-full max-w-[480px]">
              <div className="w-full rounded-2xl bg-[#F3EEE3] border border-[#D4CABC] p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6 min-w-0">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-[#D4CABC] pb-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A7F72]">
                    IIT PATNA AI LAB
                  </span>
                  <span className="text-xs font-bold text-[#D9541E] bg-[#D9541E]/10 px-2.5 py-1 rounded-full">
                    2025 – 2027
                  </span>
                </div>

                {/* Profile Identity */}
                <div className="text-center py-2 space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#171412] text-[#F3EEE3] flex items-center justify-center font-['Playfair_Display'] text-2xl font-bold border-2 border-[#D9541E]/40 shadow-md">
                    OK
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#171412]">
                      Omkar Kadam
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#D9541E] font-semibold mt-1">
                      M.Tech Artificial Intelligence
                    </p>
                    <p className="text-xs text-[#5C564E] mt-1 font-mono">
                      CPI: 7.51 / 10 · Indian Institute of Technology Patna
                    </p>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="pt-4 border-t border-[#D4CABC] space-y-2 text-xs">
                  <div className="flex justify-between text-[#5C564E]">
                    <span className="text-[#8A7F72]">GATE 2025:</span>
                    <span className="font-semibold text-[#171412]">AIR 1603 (Top ~1%)</span>
                  </div>
                  <div className="flex justify-between text-[#5C564E]">
                    <span className="text-[#8A7F72]">Undergrad:</span>
                    <span className="font-semibold text-[#171412]">B.E. Computer Eng. (7.69 CPI)</span>
                  </div>
                  <div className="flex justify-between text-[#5C564E]">
                    <span className="text-[#8A7F72]">Core Interests:</span>
                    <span className="font-semibold text-[#D9541E]">GenAI, RAG &amp; LLM Safety</span>
                  </div>
                </div>
              </div>

              {/* Offset Accent Outline */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl border-2 border-[#D9541E]/30 -z-10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column (50%): Bio Paragraphs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={3}
            className="space-y-6 min-w-0"
          >
            {aboutContent.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-[#5C564E] leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <div className="w-16 h-[2px] bg-[#D9541E]" />
            </div>
          </motion.div>
        </div>

        {/* 3 Metric Cards — Full Width Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {aboutContent.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="group relative bg-[#F3EEE3] rounded-2xl p-6 sm:p-8 border border-[#D4CABC] hover:border-[#D9541E] transition-all duration-300 shadow-sm min-w-0"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8A7F72] mb-2">
                {stat.label}
              </p>
              <p className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#171412] leading-tight">
                {stat.value}
              </p>
              {stat.sub && (
                <p className="text-xs text-[#D9541E] font-medium mt-2">
                  {stat.sub}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
