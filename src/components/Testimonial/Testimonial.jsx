import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { testimonialsData } from '../../data/testimonials';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-zinc-950/90 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="ATHLETE REVIEWS"
          title="TRANSFORMATION"
          highlight="SUCCESS STORIES"
          subtitle="Real results from real members who committed to the process and elevated their strength, physique, and mindset."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative"
            >
              <FaQuoteLeft className="text-4xl sm:text-6xl text-lime-400/20 absolute top-8 left-8" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-lime-400 shrink-0 shadow-lg">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="text-center sm:text-left flex-1">
                  {/* Rating Stars */}
                  <div className="flex justify-center sm:justify-start gap-1 text-amber-400 mb-4 text-sm">
                    {[...Array(current.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-200 text-base sm:text-lg italic font-normal leading-relaxed mb-6">
                    "{current.quote}"
                  </p>

                  {/* Author Meta */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 border-t border-white/10 pt-4">
                    <div>
                      <h4 className="text-lg font-black uppercase text-white font-heading">{current.name}</h4>
                      <p className="text-xs text-lime-400 font-bold uppercase tracking-wider">{current.role}</p>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/20">
                      {current.transformation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full glass-panel hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'bg-lime-400 w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full glass-panel hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
