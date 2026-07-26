import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const TrainerCard = ({ trainer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-lime-400/40 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        {/* Image Showcase */}
        <div className="relative h-44 sm:h-80 w-full overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

          {/* Experience Pill */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-lime-400 text-[8px] sm:text-[10px] font-black uppercase tracking-wider border border-white/10">
            {trainer.experience}
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-3.5 sm:p-6">
          <h3 className="text-xs sm:text-xl font-black text-white uppercase font-heading group-hover:text-lime-400 transition-colors leading-tight">
            {trainer.name}
          </h3>
          <p className="text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
            {trainer.role}
          </p>
          <p className="text-zinc-400 text-[10px] sm:text-xs mt-1.5 sm:mt-3 leading-tight">
            Specialty: <span className="text-zinc-200 font-semibold">{trainer.specialty}</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-white/10">
            <a
              href={trainer.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-all duration-300 text-xs sm:text-base cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={trainer.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-all duration-300 text-xs sm:text-base cursor-pointer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={trainer.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-all duration-300 text-xs sm:text-base cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
