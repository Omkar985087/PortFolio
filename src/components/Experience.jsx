import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationJourney } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#F3EEE3] py-24 md:py-32 overflow-hidden border-t border-[#D4CABC]/40"
    >
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
              Academic Journey
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
            Education &amp; Foundations
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={2}
            className="mt-4 text-[#5C564E] text-base md:text-lg max-w-2xl mx-auto font-normal"
          >
            Rigorous training in foundational computer engineering and advanced artificial intelligence
            at premier Indian technical institutions.
          </motion.p>
        </div>

        {/* Education Cards Grid (Equal 50/50 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">
          {educationJourney.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index + 1}
              className="group relative bg-[#F8F5EE] rounded-2xl p-8 sm:p-10 border border-[#D4CABC] hover:border-[#D9541E] transition-all duration-300 shadow-sm flex flex-col justify-between min-w-0"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D4CABC] pb-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D9541E]">
                    <GraduationCap size={16} />
                    <span>{edu.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8A7F72]">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#171412] leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-[#D9541E] mt-1.5">
                  {edu.institution}
                </p>

                {/* Score & Location Meta */}
                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-medium text-[#5C564E]">
                  <span className="inline-flex items-center gap-1.5 bg-[#E8E0D0] px-3 py-1 rounded-full text-[#171412] font-semibold">
                    <Award size={13} className="text-[#D9541E]" />
                    {edu.score}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#E8E0D0]/50 px-3 py-1 rounded-full">
                    <MapPin size={13} className="text-[#8A7F72]" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-[#5C564E] text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Coursework / Highlight Pills */}
              <div className="mt-8 pt-6 border-t border-[#D4CABC]">
                <p className="text-xs uppercase tracking-wider text-[#8A7F72] font-semibold mb-3">
                  Key Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#E8E0D0]/80 text-[#171412] border border-[#D4CABC]"
                    >
                      {item}
                    </span>
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
