import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { Project } from '../types';
import { Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | '3d' | 'frontend'>('all');

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

  const handleOpenDetail = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      window.location.hash = `#/projects/${project.id}`;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="text-gradient">Projects &amp; Case Studies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore dedicated case studies for custom ERP systems, sales CRMs, and full-stack web applications.
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

        {/* Projects Grid */}
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
                onOpenDetail={handleOpenDetail}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
