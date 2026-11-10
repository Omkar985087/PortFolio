import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileDown, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('omkarkadam9422@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section relative bg-[#171412] text-[#F3EEE3] overflow-hidden">
      {/* Decorative Large Background Initials */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[18rem] sm:text-[26rem] lg:text-[34rem] font-bold text-[#F3EEE3] opacity-[0.02] leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          OK
        </span>
      </div>

      <div className="contact-inner relative z-10">
        {/* Small INITIATE CONTACT Label — Centered Horizontally */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#241F1C] border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9541E] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#D9541E]" />
          Initiate Contact
        </motion.div>

        {/* Main Headline — Centered Horizontally */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="contact-heading mb-6"
        >
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-[#F3EEE3]">Have an interesting problem?</span>
            <span className="block text-[#D9541E] mt-2 sm:mt-3">Let's build something intelligent.</span>
          </h2>
        </motion.div>

        {/* Supporting Description — Centered Horizontally */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="contact-description text-base sm:text-lg text-[#8A7F72] leading-relaxed mb-10"
        >
          I'm always open to discussing new research opportunities, collaborations, and interesting AI challenges.
        </motion.p>

        {/* Primary Contact Actions (Email, Copy Email, Phone) — Centered Horizontally */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="contact-actions w-full mb-8"
        >
          {/* Email Button */}
          <a
            href={personalInfo.email}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D9541E] text-white text-sm font-medium hover:bg-[#B8441A] transition-all duration-300 shadow-md"
          >
            <Mail size={16} />
            <span className="truncate">{personalInfo.emailDisplay}</span>
          </a>

          {/* Quick Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#241F1C] border border-white/15 text-[#F3EEE3] text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>

          {/* Phone Button (Click-to-call) */}
          <a
            href={personalInfo.phone}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#241F1C] border border-white/15 text-[#F3EEE3] text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            <Phone size={16} />
            <span>{personalInfo.phoneDisplay}</span>
          </a>
        </motion.div>

        {/* Secondary External Links (LinkedIn, GitHub, Resume) — Centered Horizontally */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="contact-actions w-full"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F3EEE3] text-xs font-semibold uppercase tracking-wider hover:border-[#D9541E] hover:text-[#D9541E] transition-all duration-300"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} className="text-[#8A7F72]" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F3EEE3] text-xs font-semibold uppercase tracking-wider hover:border-[#D9541E] hover:text-[#D9541E] transition-all duration-300"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-[#8A7F72]" />
          </a>

          <a
            href={personalInfo.resume}
            download="Omkar_Kadam_AI_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F3EEE3] text-xs font-semibold uppercase tracking-wider hover:border-[#D9541E] hover:text-[#D9541E] transition-all duration-300"
          >
            <FileDown size={15} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
