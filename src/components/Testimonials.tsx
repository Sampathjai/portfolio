import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Endorsements & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Client <span className="text-gradient-cyan">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            What creative directors and startup founders say about working with me.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-lg sm:text-2xl text-slate-200 font-light italic leading-relaxed">
                  "{current.content}"
                </p>

                {/* Author Metadata */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white">{current.name}</h3>
                    <p className="text-xs text-slate-400">
                      {current.role} • <span className="text-cyan-400 font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800/60">
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-cyan-400 w-8' : 'bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

