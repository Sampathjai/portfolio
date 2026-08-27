import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, ExternalLink, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Reliable Scroll Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Code className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient-cyan">Sampath Kumar</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering custom business software, real-time inventory systems, and high-end 3D graphics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card bg-slate-900">
                <img
                  src="./sampath-profile.jpg"
                  alt="Sampath Kumar - Senior Fullstack & 3D Web Developer"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
                
                {/* Photo Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sampath-kumar1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg border border-cyan-500/30 transition-colors"
                    aria-label="LinkedIn"
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
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Fullstack Engineering: Custom CRMs, Stock Control, & 3D Web Architecture
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you need a full enterprise CRM tailored to your sales process, a multi-warehouse inventory management dashboard with automated stock alerts, or a 60FPS 3D interactive web portal, I deliver clean, typed, and scalable code.
              </p>
            </div>

            {/* Quick Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center"
                >
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Core Tech Competencies */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Technical Proficiency Matrix
              </h4>
              <div className="space-y-3">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="./Sampath_Resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm flex items-center space-x-2 transition-transform active:scale-95 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Professional CV</span>
              </a>


              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm flex items-center space-x-2 transition-colors cursor-pointer"
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
