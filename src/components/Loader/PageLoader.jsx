import { motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-16 h-16 rounded-full bg-lime-400/10 border-2 border-lime-400 flex items-center justify-center text-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.3)] mb-6"
      >
        <FaDumbbell className="text-3xl animate-pulse" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-black uppercase tracking-widest text-white font-heading"
      >
        APEX <span className="text-lime-400">ATHLETICS</span>
      </motion.h3>

      <div className="w-48 h-1 bg-zinc-800 rounded-full mt-4 overflow-hidden relative">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-1/2 h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"
        />
      </div>
    </div>
  );
};

export default PageLoader;
