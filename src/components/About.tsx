import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, ExternalLink, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400">
            <Code className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient-cyan">Sampath Kumar</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Engineering custom business software, real-time inventory systems, and high-end 3D graphics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Profile Photo & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card bg-slate-900">
                <img
                  src="./sampath-profile.jpg"
                  alt="Sampath Kumar - Senior Web & 3D Interactive Developer"
                  className="w-full h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
                
                {/* Photo Badge overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sampath-kumar1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg border border-cyan-500/30 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio & Skill Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Web & 3D Engineering: Custom CRMs, Stock Control, & Interactive Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need a full enterprise CRM tailored to your sales process, a multi-warehouse inventory management dashboard with automated stock alerts, or a 60FPS 3D interactive web portal, I deliver clean, typed, and scalable code.
              </p>
            </div>

            {/* Quick Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center"
                >
                  <div className="text-2xl font-bold text-cyan-400 font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Core Tech Competencies - Fixes Issue 5 (Sentence Case) & Issue 9 (Whitespace) */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white font-mono">
                Technical Proficiency Matrix
              </h4>
              <div className="space-y-2.5">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar - Primary & Secondary Button System */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="./Sampath_Resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm flex items-center space-x-2 active:scale-95 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
