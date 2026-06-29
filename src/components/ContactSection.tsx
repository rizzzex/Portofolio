"use client";

import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section className="relative z-10 w-full py-32 px-6 lg:px-12 max-w-[1000px] mx-auto text-white pointer-events-auto">
      <div className="p-8 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4">
              Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Together</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl mx-auto">
              Tertarik untuk berkolaborasi atau memiliki proyek yang ingin didiskusikan? Jangan ragu untuk menghubungi saya.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6"
          >
            <a 
              href="mailto:rizkullahalfriansyah92@gmail.com"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send an Email
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 text-sm text-gray-500 font-medium tracking-widest uppercase flex gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dribbble</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
