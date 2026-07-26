import { motion } from 'framer-motion';

const PrimaryButton = ({
  children,
  onClick,
  href,
  variant = 'lime',
  className = '',
  icon: Icon = null,
  type = 'button'
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold uppercase tracking-wider text-xs md:text-sm px-7 py-3.5 rounded-full overflow-hidden transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg';

  const variants = {
    lime: 'bg-lime-400 text-zinc-950 hover:bg-lime-300 btn-glow border border-lime-400',
    outline: 'bg-transparent text-white border border-white/20 hover:border-lime-400 hover:text-lime-400 hover:bg-white/5 backdrop-blur-md',
    glass: 'bg-white/10 text-white backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/30'
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative z-10 flex items-center gap-2"
    >
      {children}
      {Icon && <Icon className="text-lg transition-transform group-hover:translate-x-1" />}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;
