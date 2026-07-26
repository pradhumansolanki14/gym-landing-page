import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaUndo } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import PrimaryButton from '../Button/PrimaryButton';
import { calculateBMI } from '../../utils/helpers';
import { images } from '../../data/images';

const BMICalculator = () => {
  const [height, setHeight] = useState('178');
  const [weight, setWeight] = useState('75');
  const [age, setAge] = useState('26');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const res = calculateBMI(Number(height), Number(weight));
    setResult(res);
  };

  const handleReset = () => {
    setHeight('178');
    setWeight('75');
    setAge('26');
    setGender('male');
    setResult(null);
  };

  return (
    <section id="bmi" className="relative py-20 sm:py-28 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="HEALTH METRICS"
          title="CALCULATE YOUR"
          highlight="BODY MASS INDEX"
          subtitle="Gain immediate insight into your physique baseline to determine caloric & training goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Gender Selector */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${
                    gender === 'male'
                      ? 'bg-lime-400 text-zinc-950 border-lime-400 shadow-md'
                      : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${
                    gender === 'female'
                      ? 'bg-lime-400 text-zinc-950 border-lime-400 shadow-md'
                      : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  Female
                </button>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs uppercase font-bold text-zinc-400 mb-2">Height (CM)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    placeholder="178"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:border-lime-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-zinc-400 mb-2">Weight (KG)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    placeholder="75"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:border-lime-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-zinc-400 mb-2">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    placeholder="26"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:border-lime-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton type="submit" variant="lime" icon={FaCalculator}>
                  Calculate BMI
                </PrimaryButton>
                {result && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <FaUndo /> Reset
                  </button>
                )}
              </div>
            </form>

            {/* Result Box */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 rounded-2xl bg-zinc-900 border border-white/15"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold text-zinc-400">Your Score</span>
                  <span className={`text-xs uppercase font-bold ${result.color}`}>{result.category}</span>
                </div>
                <div className="text-4xl font-black text-white font-heading mb-3">
                  {result.score} <span className="text-sm font-semibold text-zinc-400">BMI</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">{result.advice}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden glass-card border border-white/10 h-[450px]"
          >
            <img src={images.bmiBg} alt="Athlete Training" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl">
              <p className="text-xs font-bold uppercase text-lime-400">Biological Diagnostic</p>
              <h4 className="text-lg font-black text-white uppercase font-heading">Data-Driven Transformation</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
