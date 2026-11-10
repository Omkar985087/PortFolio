import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#171412] text-[#8A7F72] border-t border-[#2D2926] py-10">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-center md:text-left">
          <p>© {new Date().getFullYear()} Omkar Kadam. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>IIT Patna</span>
            <span className="hidden sm:inline">·</span>
            <span>M.Tech Artificial Intelligence</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#D9541E]">Editorial AI Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
