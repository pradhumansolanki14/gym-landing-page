import { motion } from 'framer-motion';
import { FaPlay, FaFire } from 'react-icons/fa';
import PrimaryButton from '../Button/PrimaryButton';

const HeroContent = () => {
  return (
    <div className="flex flex-col items-start max-w-xl lg:max-w-2xl">
      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
      >
        <FaFire className="text-lime-400 animate-bounce" />
        <span>Voted #1 Premium Athletic Facility 2026</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.08] tracking-tight"
      >
        FORGE YOUR <br />
        <span className="text-gradient">UNSTOPPABLE</span> <br />
        LEGACY.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 text-zinc-300 text-sm sm:text-base font-normal leading-relaxed max-w-lg"
      >
        Experience elite biomechanics, Olympic-caliber coaching, luxury recovery amenities, and a high-performance community built for absolute transformation.
      </motion.p>

      {/* Call to Action Group */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
      >
        <PrimaryButton href="#pricing" variant="lime">
          Start 7-Day Free Trial
        </PrimaryButton>

        <a
          href="#programs"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-md group"
        >
          <div className="w-8 h-8 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center transition-transform group-hover:scale-110">
            <FaPlay className="text-xs ml-0.5" />
          </div>
          <span>Explore Programs</span>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
