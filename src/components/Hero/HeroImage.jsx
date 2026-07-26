import { motion } from 'framer-motion';
import { FaHeartbeat, FaBolt, FaTrophy } from 'react-icons/fa';
import { images } from '../../data/images';

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center">
      {/* Radiant Background Blur */}
      <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card group"
      >
        <img
          src={images.heroAthlete}
          alt="Elite Fitness Athlete"
          className="w-full h-[400px] sm:h-[500px] xl:h-[550px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </motion.div>

      {/* Floating Card 1: Heart Rate */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute top-8 left-0 sm:-left-4 lg:left-0 xl:-left-6 z-20 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10"
      >
        <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-lg">
          <FaHeartbeat className="animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-zinc-400">Heart Rate</p>
          <p className="text-sm font-black text-white">164 <span className="text-[10px] text-red-400 font-bold">BPM</span></p>
        </div>
      </motion.div>

      {/* Floating Card 2: Calories Burned */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute bottom-12 right-0 sm:-right-4 lg:right-0 xl:-right-6 z-20 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10"
      >
        <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center text-xl">
          <FaBolt />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-zinc-400">Calories Burned</p>
          <p className="text-base font-black text-white">840 <span className="text-xs text-lime-400 font-bold">KCAL</span></p>
        </div>
      </motion.div>

      {/* Floating Card 3: Award Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute -top-3 right-6 z-20 glass-panel p-3 rounded-full flex items-center justify-center shadow-2xl border border-lime-400/30 text-lime-400"
      >
        <FaTrophy className="text-xl" />
      </motion.div>
    </div>
  );
};

export default HeroImage;
