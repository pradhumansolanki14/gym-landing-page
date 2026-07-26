import { motion } from 'framer-motion';
import { FaCheck, FaCrown } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import PrimaryButton from '../Button/PrimaryButton';
import { pricingData } from '../../data/pricing';

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="MEMBERSHIP PLANS"
          title="INVEST IN YOUR"
          highlight="PHYSICAL LEGACY"
          subtitle="Choose the membership package tailored to your performance goals. No long-term lock-in contracts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-zinc-900 border-2 border-lime-400 shadow-[0_0_40px_rgba(163,230,53,0.2)] lg:-translate-y-4'
                  : 'glass-card border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Highlighted Ribbon */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <FaCrown />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase text-white font-heading">
                    {plan.name}
                  </h3>
                  <p className="text-zinc-400 text-xs font-normal mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-lime-400">$</span>
                  <span className="text-5xl font-black text-white font-heading tracking-tight">{plan.price}</span>
                  <span className="text-zinc-400 text-sm font-semibold">/ {plan.period}</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8" />

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-lime-400/10 text-lime-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <FaCheck />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA */}
              <div>
                <PrimaryButton
                  href="#contact"
                  variant={plan.highlighted ? 'lime' : 'outline'}
                  className="w-full"
                >
                  {plan.buttonText}
                </PrimaryButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
