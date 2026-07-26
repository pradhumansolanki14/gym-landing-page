import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import PrimaryButton from '../Button/PrimaryButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-zinc-950/40 backdrop-blur-lg border border-white/10 shadow-lg'
        }`}
      >
        {/* Brand Logo with Custom SVG */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src="/favicon.svg"
            alt="APEX Athletics Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 drop-shadow-[0_0_12px_rgba(163,230,53,0.4)]"
          />
          <span className="text-lg sm:text-xl font-black uppercase tracking-wider text-white font-heading">
            APEX <span className="text-lime-400">ATHLETICS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                  isActive ? 'text-lime-400 font-extrabold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-lime-400/15 border border-lime-400/30 rounded-full shadow-[0_0_12px_rgba(163,230,53,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:block">
          <PrimaryButton href="#pricing" variant="lime" className="!py-2.5 !px-6 text-xs">
            Join VIP
          </PrimaryButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:text-lime-400 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle mobile navigation"
        >
          {mobileMenuOpen ? <FaTimes className="text-base text-lime-400" /> : <FaBars className="text-base" />}
        </button>
      </div>

      {/* Mobile Glass Navigation Drawer (Scrollable) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 sm:gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-lime-400/10 border border-white/5 hover:border-lime-400/30 text-xs sm:text-sm uppercase font-bold text-zinc-200 hover:text-lime-400 transition-all"
                >
                  <span>{link.name}</span>
                  <FaChevronRight className="text-xs text-lime-400" />
                </a>
              ))}
              <div className="pt-2">
                <PrimaryButton
                  href="#pricing"
                  variant="lime"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join VIP Club
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
