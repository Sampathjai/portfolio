import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layout, Sparkles, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Box':
        return <Box className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fullstack & 3D Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Custom <span className="text-gradient">Business Software & Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering custom CRMs, smart inventory platforms, and high-impact 3D web applications.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 glass-card-hover flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Optional Highlight Badge */}
              {service.badge && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] uppercase font-mono font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group cursor-pointer"
                >
                  <span>Request Proposal for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
