import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { programsData } from '../../data/programs';

const Programs = () => {
  return (
    <section id="programs" className="relative py-16 sm:py-28 bg-zinc-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="TRAINING DISCIPLINES"
          title="SPECIALIZED FITNESS"
          highlight="PROGRAMS"
          subtitle="Whether your objective is raw muscular power, functional athletic mobility, or elite fat loss, our targeted tracks deliver results."
        />

        {/* 2-Column Grid on Mobile (1x2, 3x4, 5x6) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-lime-400/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container with Responsive Badges */}
              <div className="relative h-36 sm:h-56 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-lime-400 text-zinc-950 text-[8px] sm:text-[10px] font-black uppercase tracking-wider">
                    {program.tag}
                  </span>
                  <span className="hidden min-[400px]:inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase text-lime-400 tracking-widest mb-1">
                    {program.category}
                  </p>
                  <h3 className="text-xs sm:text-xl font-black text-white uppercase font-heading mb-1.5 sm:mb-3 group-hover:text-lime-400 transition-colors leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] sm:text-sm font-normal leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {program.description}
                  </p>
                </div>

                {/* Footer Action */}
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white hover:text-lime-400 transition-colors group/link"
                >
                  <span>Enroll Now</span>
                  <FaArrowRight className="text-lime-400 transition-transform group-hover/link:translate-x-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
