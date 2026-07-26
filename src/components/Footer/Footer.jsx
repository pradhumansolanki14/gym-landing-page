import { useState } from 'react';
import { FaDumbbell, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPaperPlane } from 'react-icons/fa';
import { NAV_LINKS, GYM_INFO } from '../../utils/constants';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-zinc-950 flex items-center justify-center font-black text-xl shadow-lg">
                <FaDumbbell />
              </div>
              <span className="text-2xl font-black uppercase tracking-wider text-white">
                APEX <span className="text-lime-400">ATHLETICS</span>
              </span>
            </a>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              The premier athletic sanctuary designed for elite muscular strength, VO2 max endurance, and total physical evolution.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black uppercase tracking-widest text-sm font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-lime-400 transition-colors uppercase font-bold tracking-wider">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-black uppercase tracking-widest text-sm font-heading">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs">
              {GYM_INFO.workingHours.map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-zinc-200 font-bold uppercase">{item.days}</span>
                  <span className="text-lime-400">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black uppercase tracking-widest text-sm font-heading">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-400">
              Subscribe to receive weekly nutrition blueprints, workout splits, and event drops.
            </p>

            {subscribed ? (
              <p className="text-xs text-lime-400 font-bold uppercase py-2">
                ✓ Subscribed to Apex Athletics Wire!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="Enter email address..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <FaPaperPlane className="text-xs" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-semibold">
          <p>© {new Date().getFullYear()} APEX ATHLETICS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-zinc-300 transition-colors">Member Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
