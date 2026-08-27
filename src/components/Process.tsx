import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Check, Compass } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Compass className="w-3.5 h-3.5" />
            <span>Workflow & Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How We <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A transparent, structured 4-step agency workflow engineered for timely delivery.
          </p>
        </motion.div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-cyan-500/40"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black font-mono text-cyan-400/80 group-hover:text-cyan-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
