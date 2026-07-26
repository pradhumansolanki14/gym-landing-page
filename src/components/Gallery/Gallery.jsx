import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import { galleryData } from '../../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FACILITY SHOWCASE"
          title="INSIDE THE APEX"
          highlight="SANCTUARY"
          subtitle="Explore our ultra-modern equipment, Olympic weightlifting floor, combat ring, and hydrotherapy recovery lounges."
        />

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className={`${item.span} relative rounded-3xl overflow-hidden glass-card border border-white/10 group cursor-pointer h-72 md:h-80`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 text-[10px] font-black uppercase tracking-wider backdrop-blur-md border border-lime-400/30">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md group-hover:bg-lime-400 group-hover:text-zinc-950 transition-all duration-300">
                  <FaExpand className="text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-zinc-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-lime-400">{selectedImage.category}</span>
                  <h4 className="text-xl font-black text-white uppercase font-heading">{selectedImage.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-3 rounded-full bg-white/10 hover:bg-lime-400 hover:text-zinc-950 text-white transition-colors cursor-pointer"
                  aria-label="Close image modal"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
