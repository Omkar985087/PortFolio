import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, FileDown, Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#F3EEE3]/90 backdrop-blur-md border-b border-[#D4CABC]/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container flex items-center justify-between py-4 md:py-5">
        {/* Name / Brand */}
        <a
          href="#"
          className="font-['Playfair_Display'] text-xl md:text-2xl font-bold tracking-tight text-[#171412] hover:text-[#D9541E] transition-colors"
        >
          {personalInfo.name}
          <span className="text-[#D9541E] ml-0.5">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#5C564E] hover:text-[#171412] tracking-wide transition-colors relative py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D9541E] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#171412] hover:text-[#D9541E] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F3EEE3] border-b border-[#D4CABC] px-6 py-5 shadow-lg"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-base font-medium text-[#171412] hover:text-[#D9541E] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen bg-[#F3EEE3] flex flex-col justify-between pt-28 md:pt-36 pb-8 overflow-hidden"
      >
        {/* Main Centered Content Container */}
        <div className="site-container flex-1 flex items-center justify-center my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full min-w-0">
            {/* Left Column (50%): Headline + Bio + Actions */}
            <div className="space-y-6 md:space-y-8 min-w-0">
              {/* Overline badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8E0D0] text-[#171412] text-xs font-semibold uppercase tracking-[0.18em]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D9541E]" />
                {personalInfo.title}
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#171412] leading-[1.05] tracking-tight"
              >
                Building Intelligence.
                <span className="block text-[#D9541E] mt-1.5">Beyond Boundaries.</span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-base sm:text-lg md:text-xl text-[#5C564E] leading-relaxed max-w-xl font-normal"
              >
                I'm Omkar Kadam, an AI researcher and engineer passionate about building intelligent
                systems through Generative AI, Large Language Models, Computer Vision, and Agentic AI.
              </motion.p>

              {/* Call-To-Action Buttons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#171412] text-[#F3EEE3] rounded-full text-sm font-medium tracking-wide hover:bg-[#D9541E] transition-all duration-300 shadow-md group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={personalInfo.resume}
                  download="Omkar_Kadam_AI_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border-1.5 border-[#171412]/30 text-[#171412] rounded-full text-sm font-medium tracking-wide hover:border-[#D9541E] hover:text-[#D9541E] transition-all duration-300"
                >
                  <FileDown size={16} />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column (50%): Sophisticated Editorial Abstract Composition */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex justify-center lg:justify-end min-w-0"
            >
              <div className="relative w-full max-w-[480px]">
                {/* Editorial Visual Card */}
                <div className="relative w-full aspect-[4/5] min-h-[420px] rounded-2xl bg-gradient-to-br from-[#E8E0D0] via-[#F8F5EE] to-[#D4CABC] p-8 sm:p-10 flex flex-col justify-between border border-[#D4CABC] shadow-[0_16px_50px_rgba(23,20,18,0.08)] overflow-hidden">
                  {/* Subtle Geometric Background */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="200" cy="220" r="140" stroke="#D9541E" strokeWidth="1" opacity="0.2" />
                    <circle cx="200" cy="220" r="90" stroke="#171412" strokeWidth="0.7" opacity="0.12" />
                    <line x1="40" y1="460" x2="360" y2="60" stroke="#D9541E" strokeWidth="0.5" opacity="0.2" />
                    <line x1="40" y1="60" x2="360" y2="460" stroke="#8A7F72" strokeWidth="0.5" opacity="0.12" />
                    {[...Array(5)].map((_, r) =>
                      [...Array(5)].map((_, c) => (
                        <circle
                          key={`dot-${r}-${c}`}
                          cx={100 + c * 50}
                          cy={120 + r * 50}
                          r="1.5"
                          fill="#171412"
                          opacity="0.12"
                        />
                      ))
                    )}
                  </svg>

                  {/* Top Editorial Monogram Tag */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#5C564E] border-b border-[#171412]/10 pb-3">
                    <span>M.TECH AI</span>
                    <span className="text-[#D9541E] font-semibold">IIT PATNA</span>
                  </div>

                  {/* Center Monogram / Typography Statement */}
                  <div className="relative z-10 my-auto text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#171412] text-[#F3EEE3] flex items-center justify-center font-['Playfair_Display'] text-3xl font-bold shadow-lg border-2 border-[#F3EEE3]">
                      OK
                    </div>
                    <div>
                      <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#171412]">
                        Omkar Kadam
                      </h2>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#D9541E] font-semibold mt-1">
                        AI Researcher &amp; Engineer
                      </p>
                    </div>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="relative z-10 pt-4 border-t border-[#171412]/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="block text-[#8A7F72] text-[10px] uppercase tracking-wider">Focus</span>
                      <span className="font-semibold text-[#171412]">LLMs &amp; Agentic AI</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[#8A7F72] text-[10px] uppercase tracking-wider">GATE '25</span>
                      <span className="font-semibold text-[#D9541E]">AIR 1603 (Top 1%)</span>
                    </div>
                  </div>
                </div>

                {/* Subtle Offset Architectural Frame */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#D9541E]/30 -z-10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Centered Bottom Status Bar */}
        <div className="site-container pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4CABC] pt-6 text-xs sm:text-sm text-[#5C564E]">
            {/* Location */}
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-[#D9541E]" />
              Based in {personalInfo.location}
            </span>

            {/* Scroll Indicator */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-[#5C564E] hover:text-[#D9541E] transition-colors order-last sm:order-none"
            >
              <span>Scroll to Explore</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </a>

            {/* Availability Status */}
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              {personalInfo.availability}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
