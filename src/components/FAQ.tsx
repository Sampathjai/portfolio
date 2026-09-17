import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'crm' | 'erp' | 'web' | 'general';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'crm',
    question: "Can you build a custom CRM software tailored specifically to my business workflow?",
    answer: "Yes! Unlike off-the-shelf CRMs (like Salesforce or HubSpot) that charge monthly per-user fees for generic features, I engineer custom CRM platforms designed around your exact sales pipeline, lead management workflow, customer tracking rules, role-based access levels, and automated email/WhatsApp notification triggers."
  },
  {
    category: 'erp',
    question: "What features are included in your Shankar Jewellery ERP software?",
    answer: "The Shankar Jewellery ERP is a full-stack business management platform built for jewellery shop owners. Key modules include Gold, Silver, and Diamond stock itemization with custom purity values (e.g. 22K, 18K, 916), GST-compliant retail & wholesale invoice generation, customer purchase ledgers, credit tracking, and daily financial analytics dashboards."
  },
  {
    category: 'erp',
    question: "Do you build custom ERP & inventory software for other industries?",
    answer: "Absolutely. I design and build multi-warehouse inventory management systems, stock tracking software with barcode/QR code support, supplier purchase order workflows, and real-time automated low-stock webhooks for retail, wholesale, manufacturing, and distribution businesses."
  },
  {
    category: 'general',
    question: "Do you work with business clients in Tamil Nadu (Trichy, Chennai, Coimbatore, Madurai, Salem)?",
    answer: "Yes! I am based in Tamil Nadu, India, and work directly with local businesses across Trichy (Tiruchirappalli), Chennai, Coimbatore, Madurai, Salem, and neighboring regions. I offer remote consultation, virtual walkthroughs, and step-by-step team onboarding."
  },
  {
    category: 'general',
    question: "Do you collaborate with international clients outside of India?",
    answer: "Yes, I regularly collaborate with international companies, startups, and agencies across the USA, UK, Canada, Australia, UAE, and Europe. I communicate fluently in English via async messaging, GitHub, email, and scheduled video calls."
  },
  {
    category: 'web',
    question: "What tech stack do you use for full-stack web applications and 3D web portals?",
    answer: "For frontend & UI, I use React, TypeScript, Next.js, Three.js / React Three Fiber (for 60FPS WebGL graphics), and Tailwind CSS. For backend & data architecture, I build with Node.js, Express, PostgreSQL, Supabase, Prisma ORM, and REST/GraphQL APIs."
  },
  {
    category: 'web',
    question: "Why should my business choose custom software over ready-made SaaS subscriptions?",
    answer: "Custom software is a one-time capital investment that you own 100%. There are no recurring per-user monthly subscription fees. You get a system that matches your business process 100%, without bloated features, security risks of shared multi-tenant SaaS, or forced platform migrations."
  },
  {
    category: 'general',
    question: "How do I initiate a software development contract or get a project quote?",
    answer: "Simply scroll down to the Contact section on this portfolio, select your required service (Custom CRM, Jewellery ERP, Inventory System, 3D Web App, or Web Architecture), select your budget range, and describe your project goals. You will receive a response within 24 business hours."
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
            Custom Software & <span className="text-gradient">ERP FAQs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Answers to common questions regarding custom CRM development, Jewellery ERP software, full-stack web applications, and remote collaboration.
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
            Whether you need a full enterprise Jewellery ERP, a custom sales CRM, or a high-performance web app, I'm available to help.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-transform active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Free Software Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

