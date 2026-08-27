import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { Project } from '../types';
import { X, ExternalLink, Github, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | '3d' | 'frontend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const categories = [
    { key: 'all', label: 'All Works' },
    { key: 'fullstack', label: 'Custom CRMs & Inventory' },
    { key: '3d', label: '3D Web & Canvas' },
    { key: 'frontend', label: 'Agency UI & Web' },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Reliable Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Custom <span className="text-gradient">CRMs, Inventory & 3D Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tailored business management software, real-time stock systems, and immersive WebGL applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          <div className="p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat.key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
            >
              <ProjectCard3D
                project={project}
                onOpenDetail={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Card Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative max-w-3xl w-full glass-card rounded-2xl border border-white/20 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col bg-[#12141d]"
              >
                {/* Modal Header Image */}
                <div className="relative aspect-video bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Details Body */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
                      <span className="uppercase">{selectedProject.category}</span>
                      {selectedProject.metrics && (
                        <span>• {selectedProject.metrics}</span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Technical Overview & Architecture</h4>
                    <p>{selectedProject.longDescription}</p>
                  </div>

                  {/* Tech Stack List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800/90 text-cyan-300 rounded-lg text-xs font-mono border border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Links */}
                  <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm rounded-xl flex items-center space-x-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Live Demo</span>
                    </a>

                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl flex items-center space-x-2 border border-slate-700 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
