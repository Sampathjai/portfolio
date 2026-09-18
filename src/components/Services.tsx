import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layout, Sparkles, Zap, CheckCircle2, ArrowRight, Database, MessageSquare } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-400" />;
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

  const getCtaText = (serviceId: string) => {
    switch (serviceId) {
      case 'custom-crm':
        return 'Build My CRM';
      case 'custom-erp':
        return 'Build My ERP';
      case 'jewellery-software':
        return 'Build My Jewellery ERP';
      case 'business-management':
        return 'Build My Business Software';
      case 'web-app-development':
        return 'Build My Web App';
      default:
        return 'Discuss Your Project';
    }
  };

  const ctaBlocks = [
    { title: "Custom CRM Development in Tamil Nadu", desc: "Build a custom CRM system to manage leads, sales follow-ups, and customer workflows in one place.", linkText: "Build My CRM" },
    { title: "Custom ERP Development in Trichy", desc: "Get a custom ERP tailored to your business operations, inventory, GST billing, and customer ledgers.", linkText: "Build My ERP" },
    { title: "Jewellery ERP Software", desc: "Specialized ERP for gold, silver, and diamond shops with purity tracking (22K, 18K, 916) and retail billing.", linkText: "Build My Jewellery ERP" },
    { title: "Business Management Software", desc: "Automate daily operational routines, staff assignments, task tracking, and automated client billing.", linkText: "Build My Business Software" }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Stack &amp; Software Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Custom <span className="text-gradient">CRM, ERP &amp; Software Development Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sampath Kumar provides custom CRM development, ERP software, and web application development for businesses in Trichy, Tamil Nadu, and worldwide.
          </p>
        </motion.div>

        {/* Services Grid (7 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 glass-card-hover flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
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

                <p className="text-slate-300 text-sm leading-relaxed">
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
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold text-xs border border-cyan-500/30 transition-all cursor-pointer"
                >
                  <span>{getCtaText(service.id)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Conversion CTA Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {ctaBlocks.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                <span>{item.linkText}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
