import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#F3EEE3] py-24 md:py-32 overflow-hidden border-t border-[#D4CABC]/40">
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
              Recognitions &amp; Milestones
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
            Competitive &amp; Academic Honors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={2}
            className="mt-4 text-[#5C564E] text-base md:text-lg max-w-2xl mx-auto font-normal"
          >
            Demonstrated mastery in competitive problem solving, mathematical reasoning, and national algorithmic examinations.
          </motion.p>
        </div>

        {/* 3 Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={index}
                className="group relative bg-[#F8F5EE] rounded-2xl p-8 border border-[#D4CABC] hover:border-[#D9541E] transition-all duration-300 shadow-sm flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8E0D0] flex items-center justify-center text-[#D9541E] group-hover:bg-[#D9541E] group-hover:text-white transition-colors duration-300 mb-6 flex-shrink-0">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>

                  <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#171412] mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#D9541E] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#5C564E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D4CABC]/60 flex items-center justify-between text-xs font-mono text-[#8A7F72]">
                  <span>HONOR 0{index + 1}</span>
                  <span className="text-[#171412] font-sans font-semibold">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
