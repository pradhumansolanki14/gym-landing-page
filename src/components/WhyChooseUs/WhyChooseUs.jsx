import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHeartbeat, FaClock } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { images } from '../../data/images';

const features = [
  {
    icon: FaDumbbell,
    title: 'Olympic Biomechanics',
    description: 'Custom state-of-the-art Eleiko platforms, Hammer Strength machinery, and iron plates.'
  },
  {
    icon: FaUsers,
    title: 'Master Head Coaches',
    description: 'Certified exercise physiologists with 10+ years coaching athletes and beginners.'
  },
  {
    icon: FaHeartbeat,
    title: 'Cryo & Recovery Spa',
    description: 'Infrared saunas, cold plunge tubs, hyperbaric oxygen, and contrast baths.'
  },
  {
    icon: FaClock,
    title: '24/7 Keycard Access',
    description: 'Unrestricted 365-day round-the-clock access to fit your schedule.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-16 sm:py-28 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="THE APEX ADVANTAGE"
          title="WHY ATHLETES CHOOSE"
          highlight="APEX ATHLETICS"
          subtitle="We combine world-class gym machinery, athletic science, and a high-energy community to guarantee your physical evolution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Feature Cards Column: 2x2 Grid on Mobile */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-lime-400/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center text-lg sm:text-2xl mb-3 sm:mb-5 group-hover:bg-lime-400 group-hover:text-zinc-950 transition-all duration-300">
                      <Icon />
                    </div>
                    <h3 className="text-xs sm:text-xl font-bold uppercase text-white mb-1.5 sm:mb-2 font-heading leading-tight group-hover:text-lime-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-[11px] sm:text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 glass-card shadow-2xl group"
          >
            <img
              src={images.whyChooseUs}
              alt="Gym Floor Action"
              className="w-full h-[350px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 sm:p-5 rounded-2xl border border-white/15">
              <p className="text-xs uppercase font-bold text-lime-400 tracking-wider">Unmatched Standard</p>
              <p className="text-base sm:text-lg font-black text-white uppercase mt-1 font-heading">Built for High Performers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
