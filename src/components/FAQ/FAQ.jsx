import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { faqData } from '../../data/faq';

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
      >
        <span className="text-base sm:text-lg font-bold text-white uppercase font-heading">
          {item.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full bg-white/5 text-lime-400 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-lime-400 text-zinc-950' : ''
          }`}
        >
          <FaChevronDown className="text-xs" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-zinc-300 text-sm leading-relaxed border-t border-white/5 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-zinc-950/90 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="GOT QUESTIONS?"
          title="FREQUENTLY ASKED"
          highlight="QUESTIONS"
          subtitle="Everything you need to know about our memberships, facilities, personal coaching, and operational hours."
        />

        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => toggleFAQ(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
