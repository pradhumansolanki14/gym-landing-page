import { motion } from 'framer-motion';
import { STATS } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCounter } from '../../hooks/useCounter';

const StatCard = ({ value, suffix, label, index, isInView }) => {
  const count = useCounter(value, isInView, 2200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 sm:p-8 rounded-2xl text-center border border-white/10 hover:border-lime-400/40 transition-all group"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-2 flex items-center justify-center">
        <span>{count}</span>
        <span className="text-lime-400">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const { ref, isInView } = useScrollAnimation({ once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-12 bg-zinc-950/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
