import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does a custom CRM developer do?",
    answer: "A custom CRM developer builds tailored software designed specifically around your business's sales pipeline, lead management workflow, customer tracking rules, role-based team permissions, and automated follow-ups without forced recurring per-user SaaS fees."
  },
  {
    question: "Do you build custom ERP software?",
    answer: "Yes, I develop custom ERP software to unify multi-department business operations, inventory control, purchase orders, customer ledgers, and financial GST accounting into a single secure web platform."
  },
  {
    question: "Can you build business management software?",
    answer: "Yes, I build custom business management software to automate daily operational routines, staff assignments, task tracking, client invoicing, and executive reporting dashboards."
  },
  {
    question: "Do you develop jewellery ERP software?",
    answer: "Yes! I built Shankar Jewellery ERP—a full-stack business management system engineered for jewellery retail and wholesale shops featuring gold, silver, and diamond itemization, purity tracking (22K, 18K, 916), GST-compliant billing, customer ledgers, and payment scheme tracking."
  },
  {
    question: "Do you provide full-stack web development?",
    answer: "Yes, I provide full-stack web development using React.js, Next.js, TypeScript, Node.js, Express, PostgreSQL, Supabase, Prisma, and Tailwind CSS to build fast, scalable web applications."
  },
  {
    question: "Do you work with businesses in Tamil Nadu?",
    answer: "Yes! I am a freelance full-stack developer based in Trichy (Tiruchirappalli), Tamil Nadu, providing software development services for businesses across Trichy, Chennai, Coimbatore, Madurai, Salem, and Tamil Nadu, as well as working with remote international clients."
  },
  {
    question: "Can you build a CRM for my business?",
    answer: "Absolutely. I design custom CRM software built 100% around your specific sales process, lead sources, email/WhatsApp notification triggers, and client management needs."
  },
  {
    question: "Can you build an ERP around my existing workflow?",
    answer: "Yes, I analyze your existing paper ledgers, spreadsheets, or legacy tools and build a custom web-based ERP platform tailored to your exact inventory, billing, and accounting procedures."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Custom Software &amp; <span className="text-gradient">ERP FAQs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Answers to common questions regarding custom CRM development, Jewellery ERP software, full-stack web applications, and local collaboration in Tamil Nadu.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 border-cyan-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-800/80"
                    >
                      <div className="p-6 text-sm text-slate-300 leading-relaxed font-light bg-slate-950/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl glass-card border border-white/10 text-center space-y-4"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>Have a unique project requirement?</span>
          </div>
          <h3 className="text-xl font-bold text-white">Let's Discuss Your Business Software Needs</h3>
          <p className="text-xs text-slate-300">
            Whether you need a custom CRM, Jewellery ERP, business management system, or web application development in Tamil Nadu or worldwide.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-transform active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Sampath Kumar</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
