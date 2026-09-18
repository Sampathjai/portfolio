import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2, 
  Database, Layout, Zap, Box, ShieldCheck, Cpu, Code, 
  Layers, Terminal, ChevronRight, X, MessageSquare, ArrowRight 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onNavigateContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ 
  project, 
  onBack, 
  onNavigateContact 
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Box': return <Box className="w-5 h-5 text-cyan-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans pb-24 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Breadcrumbs Bar */}
      <nav className="sticky top-0 z-40 bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-mono text-slate-400 overflow-x-auto">
            <button 
              onClick={onBack} 
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <button 
              onClick={onBack} 
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>Projects</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-white font-semibold truncate">{project.title}</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to Projects</span>
          </button>
        </div>
      </nav>

      {/* Main Case Study Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10 space-y-16">
        
        {/* 1. HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category.toUpperCase()} CASE STUDY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-xl sm:text-2xl text-cyan-300 font-light">
                {project.subtitle}
              </p>
            )}

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
              {project.description}
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-900/90 text-cyan-300 rounded-lg text-xs font-mono border border-slate-800 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 aspect-video max-h-[520px] w-full shadow-2xl bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* 2. PROJECT SUMMARY CARD */}
        {project.summary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-2xl glass-card border border-white/10 bg-slate-950/60"
          >
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Client / System</div>
              <div className="text-xs font-bold text-white mt-1">{project.summary.clientOrProject}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Industry</div>
              <div className="text-xs font-bold text-cyan-400 mt-1">{project.summary.industry}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Project Type</div>
              <div className="text-xs font-bold text-white mt-1">{project.summary.projectType}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">My Role</div>
              <div className="text-xs font-bold text-emerald-400 mt-1">{project.summary.role}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Primary Tech</div>
              <div className="text-xs font-bold text-white mt-1">{project.summary.technology}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Status</div>
              <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{project.summary.status}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. CHALLENGE & SOLUTION GRID */}
        {(project.challenge || project.solution) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass-card border border-white/10 space-y-4 bg-slate-950/40"
              >
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>BUSINESS CHALLENGE</span>
                </div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {project.challenge}
                </p>
              </motion.div>
            )}

            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass-card border border-white/10 space-y-4 bg-slate-950/40"
              >
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>ENGINEERED SOLUTION</span>
                </div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {project.solution}
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* 4. KEY FEATURES GRID */}
        {project.featuresList && project.featuresList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>IMPLEMENTED MODULES</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Key System Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.featuresList.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card border border-white/10 space-y-3 glass-card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 5. MODULE WORKFLOW STEPS */}
        {project.modules && project.modules.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-purple-400">
                <Layers className="w-4 h-4" />
                <span>APPLICATION WORKFLOW</span>
              </div>
              <h2 className="text-3xl font-bold text-white">System Architecture & Modules</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.modules.map((mod, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <div className="text-2xl font-mono font-bold text-cyan-400">{mod.step}</div>
                  <h3 className="text-base font-bold text-white">{mod.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 6. SCREENSHOT GALLERY */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <Layout className="w-4 h-4" />
                <span>VISUAL INTERFACE</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Screenshots</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(shot.url)}
                  className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer"
                >
                  <img
                    src={shot.url}
                    alt={shot.caption}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-xs text-white font-mono">{shot.caption} (Click to expand)</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 7. DETAILED TECH STACK & MY ROLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tech Stack Breakdown */}
          {project.techStackDetailed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 p-8 rounded-2xl glass-card border border-white/10 space-y-6 bg-slate-950/40"
            >
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>TECHNICAL DEEP DIVE</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Technology Stack</h2>

              <div className="space-y-4 text-xs font-mono">
                {project.techStackDetailed.frontend && (
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block mb-1">Frontend:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackDetailed.frontend.map((item, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-300 border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStackDetailed.backend && (
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block mb-1">Backend:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackDetailed.backend.map((item, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-300 border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStackDetailed.database && (
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block mb-1">Database &amp; ORM:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackDetailed.database.map((item, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-purple-300 border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStackDetailed.deployment && (
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block mb-1">Deployment:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStackDetailed.deployment.map((item, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 text-amber-300 border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* My Role & Contribution */}
          {project.roleDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 p-8 rounded-2xl glass-card border border-white/10 space-y-6 bg-slate-950/40"
            >
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <Code className="w-4 h-4" />
                <span>DEVELOPER CONTRIBUTION</span>
              </div>
              <h2 className="text-2xl font-bold text-white">My Role &amp; Implementation</h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {project.roleDescription}
              </p>

              {project.implementationHighlights && project.implementationHighlights.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Engineering Tasks:</span>
                  <div className="space-y-2">
                    {project.implementationHighlights.map((task, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

        </div>

        {/* 8. PROJECT OUTCOME */}
        {project.outcome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-card border border-white/10 space-y-4 bg-gradient-to-r from-blue-950/30 to-purple-950/30"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-4 h-4" />
              <span>PROJECT OUTCOME</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Impact &amp; Results</h2>
            <p className="text-slate-200 text-base leading-relaxed font-light italic">
              "{project.outcome}"
            </p>
          </motion.div>
        )}

        {/* 9. ACTION BUTTONS & LINKS */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Project</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm backdrop-blur-md flex items-center space-x-2 transition-all hover:border-slate-500 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Code</span>
            </a>
          </div>

          <button
            onClick={onBack}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-semibold text-sm border border-slate-700/80 flex items-center space-x-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>
        </div>

        {/* 10. BOTTOM CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 text-center space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-950"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have a Similar Project in Mind?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Need a Custom CRM, ERP or Business Application?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            I build custom software solutions tailored around your specific business workflow, inventory control, and customer management requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onNavigateContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateContact}
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
            >
              <span>Contact Sampath Kumar</span>
            </button>
          </div>
        </motion.div>

      </main>

      {/* Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedImage}
                alt="Screenshot Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2.5 bg-slate-900/90 text-white rounded-full border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
