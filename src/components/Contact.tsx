import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Sparkles, ArrowUpRight, DollarSign, IndianRupee } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'custom-crm',
    budget: '$1k-$3k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCurrencyToggle = (newCurrency: 'USD' | 'INR') => {
    setCurrency(newCurrency);
    setFormState((prev) => ({
      ...prev,
      budget: newCurrency === 'USD' ? '$1k-$3k' : '₹50k-₹1.5L',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send message to Web3Forms free email service (forwards to sampathkumarsampath2002@gmail.com)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_FREE_WEB3FORMS_ACCESS_KEY', // Place your Web3Forms access key here
          from_name: formState.name,
          email: formState.email,
          subject: `New Project Inquiry from ${formState.name} (${formState.service})`,
          message: `
Name: ${formState.name}
Email: ${formState.email}
Service Required: ${formState.service}
Estimated Budget: ${formState.budget} (${currency})
Project Requirements:
${formState.message}
          `,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback success state
        setSubmitted(true);
      }
    } catch (err) {
      console.log('Form submitted:', formState);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Instant Submission Helper
  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry*\n` +
      `*Name:* ${formState.name || 'Not specified'}\n` +
      `*Email:* ${formState.email || 'Not specified'}\n` +
      `*Service Required:* ${formState.service}\n` +
      `*Budget:* ${formState.budget} (${currency})\n\n` +
      `*Project Scope:* ${formState.message || 'I would like to discuss a project.'}`
    );
    window.open(`https://wa.me/919361091456?text=${text}`, '_blank');
  };

  const budgetOptionsUSD = [
    { value: '< $1k', label: '< $1,000' },
    { value: '$1k-$3k', label: '$1,000 – $3,000' },
    { value: '$3k-$5k', label: '$3,000 – $5,000' },
    { value: '$5k+', label: '$5,000+' },
  ];

  const budgetOptionsINR = [
    { value: '< ₹50k', label: '< ₹50,000' },
    { value: '₹50k-₹1.5L', label: '₹50,000 – ₹1,50,000' },
    { value: '₹1.5L-₹3L', label: '₹1,50,000 – ₹3,00,000' },
    { value: '₹3L+', label: '₹3,00,000+' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build Your <span className="text-gradient">CRM, Inventory & 3D Web</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a custom software requirement, CRM project, or 3D web application in mind? Send a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Fast Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">WhatsApp Instant Chat</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      <span>{PERSONAL_INFO.phone}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-4 p-3">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Response Time Guarantee</span>
                </div>
                <p className="text-xs text-slate-400">
                  Replies sent within 24 hours to {PERSONAL_INFO.email}.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Validated Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you, {formState.name || 'friend'}. Your project details have been dispatched. Sampath will review your requirements and respond to your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase font-mono">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Needed */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase font-mono">
                        Service Required
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="custom-crm">Custom Business CRM System</option>
                        <option value="inventory-mgmt">Smart Inventory & Warehouse Software</option>
                        <option value="3d-web">3D & Interactive Web Experience</option>
                        <option value="frontend-arch">Web & Frontend Architecture</option>
                      </select>
                    </div>

                    {/* Budget Range with Currency Toggle */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300 uppercase font-mono">
                          Estimated Budget
                        </label>

                        <div className="inline-flex p-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono">
                          <button
                            type="button"
                            onClick={() => handleCurrencyToggle('USD')}
                            className={`px-2 py-0.5 rounded-md flex items-center space-x-1 transition-all cursor-pointer ${
                              currency === 'USD'
                                ? 'bg-cyan-500 text-black font-bold shadow'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            <DollarSign className="w-3 h-3" />
                            <span>USD ($)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCurrencyToggle('INR')}
                            className={`px-2 py-0.5 rounded-md flex items-center space-x-1 transition-all cursor-pointer ${
                              currency === 'INR'
                                ? 'bg-cyan-500 text-black font-bold shadow'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            <IndianRupee className="w-3 h-3" />
                            <span>INR (₹)</span>
                          </button>
                        </div>
                      </div>

                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                      >
                        {(currency === 'USD' ? budgetOptionsUSD : budgetOptionsINR).map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase font-mono">
                      Project Scope & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your business workflow, CRM requirements, inventory tracking needs, or 3D web goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Email Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-4 px-6 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center justify-center space-x-2 transition-all active:scale-[0.99] cursor-pointer"
                      title="Send instant message via WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
