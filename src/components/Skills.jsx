import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="relative bg-[#F8F5EE] py-24 md:py-32 overflow-hidden border-t border-[#D4CABC]/40">
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
              Technical Arsenal
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
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={2}
            className="mt-4 text-[#5C564E] text-base md:text-lg max-w-2xl mx-auto font-normal"
          >
            A verified toolchain developed through academic research, benchmark implementations, and production MLOps workflows.
          </motion.p>
        </div>

        {/* 2-Column Balanced Grid with Equal Card Widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {skillCategories.map(([categoryName, items], index) => (
            <motion.div
              key={categoryName}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              className="bg-[#F3EEE3] rounded-2xl p-7 sm:p-9 border border-[#D4CABC] hover:border-[#D9541E]/60 transition-all duration-300 shadow-sm min-w-0 flex flex-col justify-between"
            >
              <div>
                {/* Category Name */}
                <div className="flex items-center justify-between border-b border-[#D4CABC] pb-4 mb-6">
                  <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#171412]">
                    {categoryName}
                  </h3>
                  <span className="text-xs font-mono text-[#8A7F72]">
                    {items.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04, backgroundColor: '#D4CABC' }}
                      className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#E8E0D0] text-[#171412] border border-[#D4CABC] cursor-default transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
