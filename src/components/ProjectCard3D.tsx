import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectCard3DProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenDetail }) => {
  const handleCardClick = () => {
    onOpenDetail(project);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-between h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 shadow-xl cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-mono text-cyan-400 border border-slate-700/80">
          {project.category.toUpperCase()}
        </div>

        {/* Highlight metric badge if available */}
        {project.metrics && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-500/20 backdrop-blur-md rounded-lg text-xs font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{project.metrics}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-slate-900/90 text-slate-300 rounded-lg text-xs font-mono border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Action Bar - Clear Primary Actions (Fixes Issue 12) */}
      <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={(e) => handleLinkClick(e, project.liveUrl)}
          className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </button>

        <button
          onClick={(e) => handleLinkClick(e, project.githubUrl)}
          className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors cursor-pointer"
          title="View GitHub Code"
        >
          <Github className="w-3.5 h-3.5" />
          <span>Code</span>
        </button>

        <button
          onClick={handleCardClick}
          className="py-2 px-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold text-xs rounded-xl border border-cyan-500/30 transition-colors cursor-pointer"
        >
          Inspect
        </button>
      </div>
    </div>
  );
};
