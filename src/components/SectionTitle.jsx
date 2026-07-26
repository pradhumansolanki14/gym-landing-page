import { motion } from 'framer-motion';

const SectionTitle = ({
  badge = 'APEX FITNESS',
  title = 'Section Title',
  highlight = '',
  subtitle = '',
  center = true
}) => {
  return (
    <div className={`mb-8 sm:mb-16 ${center ? 'text-center' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[16px] min-[340px]:text-lg min-[400px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter sm:tracking-tight text-white leading-[1.15] max-w-full font-heading"
      >
        {title} {highlight && <span className="text-gradient inline-block">{highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2.5 sm:mt-4 text-zinc-400 text-xs sm:text-base font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
