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
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-10 sm:pt-16 pb-8 sm:pb-12 overflow-hidden text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- MOBILE MINIMAL FOOTER (sm:hidden) --- */}
        <div className="sm:hidden flex flex-col items-center text-center gap-6 pb-8 border-b border-white/10">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lime-400 text-zinc-950 flex items-center justify-center font-black text-base shadow-md">
              <FaDumbbell />
            </div>
            <span className="text-lg font-black uppercase tracking-wider text-white font-heading">
              APEX <span className="text-lime-400">ATHLETICS</span>
            </span>
          </a>

          {/* Inline Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <a key={link.name} href={link.href} className="hover:text-lime-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all text-xs" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all text-xs" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all text-xs" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-white flex items-center justify-center transition-all text-xs" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>

          {/* Compact Newsletter */}
          <div className="w-full max-w-xs">
            {subscribed ? (
              <p className="text-[10px] text-lime-400 font-bold uppercase">✓ Subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  placeholder="Enter email for drops..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[11px] text-white focus:border-lime-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-lime-400 text-zinc-950 font-bold text-[10px] uppercase hover:bg-lime-300 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="text-[9px]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* --- DESKTOP FULL FOOTER (hidden sm:grid) --- */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
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
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-zinc-500 font-semibold text-center sm:text-left">
          <p>© {new Date().getFullYear()} APEX ATHLETICS. All Rights Reserved.</p>
          <div className="flex gap-4 sm:gap-6">
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
