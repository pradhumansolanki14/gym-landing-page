import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import PrimaryButton from '../Button/PrimaryButton';
import { GYM_INFO } from '../../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Hypertrophy & Strength',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: 'Hypertrophy & Strength', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="GET IN TOUCH"
          title="CLAIM YOUR FREE"
          highlight="7-DAY PASS"
          subtitle="Ready to take action? Drop us a message or visit our state-of-the-art facility for a tour."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Info & Map Side-by-Side on Mobile (1x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-6"
          >
            {/* Info Box */}
            <div className="glass-card p-3 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 space-y-2.5 sm:space-y-6 flex flex-col justify-between overflow-hidden">
              <h3 className="text-[10px] min-[360px]:text-xs sm:text-xl font-black uppercase text-white font-heading leading-tight tracking-tighter truncate">
                HQ CONTACT
              </h3>

              <div className="flex items-start gap-1.5 sm:gap-4 text-zinc-300 text-xs sm:text-sm">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center text-[10px] sm:text-lg shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] sm:text-sm font-bold text-white uppercase leading-tight">Location</p>
                  <p className="text-[8px] sm:text-xs text-zinc-400 mt-0.5 leading-tight line-clamp-2">{GYM_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 sm:gap-4 text-zinc-300 text-xs sm:text-sm">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center text-[10px] sm:text-lg shrink-0 mt-0.5">
                  <FaPhoneAlt />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] sm:text-sm font-bold text-white uppercase leading-tight">Phone</p>
                  <p className="text-[8px] sm:text-xs text-zinc-400 mt-0.5 leading-tight truncate">{GYM_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 sm:gap-4 text-zinc-300 text-xs sm:text-sm">
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center text-[10px] sm:text-lg shrink-0 mt-0.5">
                  <FaEnvelope />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] sm:text-sm font-bold text-white uppercase leading-tight">Email</p>
                  <p className="text-[8px] sm:text-xs text-zinc-400 mt-0.5 leading-tight truncate">{GYM_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-white/10 h-full min-h-[200px] sm:h-64 shadow-xl">
              <iframe
                title="APEX Athletics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157071641014!2d-73.98657968459369!3d40.75548697932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25901a412b70f%3A0x8b3e8e1f5ec1396!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FaCheckCircle className="text-6xl text-lime-400 mb-4 animate-bounce" />
                <h4 className="text-2xl font-black uppercase text-white font-heading">
                  Pass Requested Successfully!
                </h4>
                <p className="text-zinc-400 text-sm mt-2 max-w-md">
                  Thank you, <span className="text-lime-400 font-bold">{formData.name}</span>. One of our VIP coaches will contact you at <span className="text-white font-semibold">{formData.email}</span> within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-lg sm:text-2xl font-black uppercase text-white font-heading mb-4 sm:mb-6">
                  Schedule Your Free Pass
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs uppercase font-bold text-zinc-400 mb-1.5 sm:mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-zinc-400 mb-1.5 sm:mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs uppercase font-bold text-zinc-400 mb-1.5 sm:mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-zinc-400 mb-1.5 sm:mb-2">Target Program</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none transition-colors"
                    >
                      <option value="Hypertrophy & Strength">Hypertrophy & Strength</option>
                      <option value="Metabolic Cardio Burn">Metabolic Cardio Burn</option>
                      <option value="Elite CrossFit Conditioning">Elite CrossFit Conditioning</option>
                      <option value="Pro Combat & Boxing">Pro Combat & Boxing</option>
                      <option value="Mobility & Vinyasa Yoga">Mobility & Vinyasa Yoga</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-zinc-400 mb-1.5 sm:mb-2">Personal Fitness Goals</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current training level and physical goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <PrimaryButton type="submit" variant="lime" className="w-full" icon={FaPaperPlane}>
                    Submit VIP Pass Request
                  </PrimaryButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
