import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectCard3DProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenDetail }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div
        onClick={() => onOpenDetail(project)}
        className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full group hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10"
      >
        {/* Project Thumbnail Image */}
        <div className="relative aspect-video overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-slate-950/30 to-transparent" />

          {/* Featured or Category Tag */}
          <div className="absolute top-3 left-3 flex gap-2 z-20">
            {project.featured && (
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 backdrop-blur-md text-black font-extrabold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700 text-[10px] uppercase font-mono">
              {project.category}
            </span>
          </div>

          {/* Stable Hover Action Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-xs z-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail(project);
              }}
              className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-xl text-xs flex items-center space-x-2 shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect Details</span>
            </button>
          </div>
        </div>

        {/* Project Card Body */}
        <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Pill */}
          {project.metrics && (
            <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              ⚡ {project.metrics}
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Card Action Bar with High Clickability */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between z-30 relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail(project);
              }}
              className="text-xs text-slate-300 hover:text-cyan-400 font-semibold flex items-center space-x-1.5 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Case Study</span>
            </button>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-700 transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="GitHub Source Code"
                title="View Source Code on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs rounded-xl transition-all duration-200 shadow-md shadow-cyan-500/20 flex items-center space-x-1.5 cursor-pointer active:scale-95"
                aria-label="Launch Live Demo"
                title="Open Live Project"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
