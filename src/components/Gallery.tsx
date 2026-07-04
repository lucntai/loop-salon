import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/img_28.jpg',
    alt: 'A panoramic gallery image showcasing a variety of high-end haircuts',
  },
  {
    src: '/images/img_13.jpg',
    alt: 'A series of editorial-style before and after shots of gentleman transformations',
  },
  {
    src: '/images/img_21.jpg',
    alt: "A wide-angle artistic shot of the salon's main grooming floor",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop mb-16">
        <motion.h2
          className="text-headline-xl font-headline-xl uppercase max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Browse our latest haircuts, styles, and transformations.
        </motion.h2>
      </div>

      <div className="w-full h-[600px] overflow-hidden relative group">
        <div className="flex h-full animate-marquee gap-4">
          {images.map((img, idx) => (
            <img
              key={`img1-${idx}`}
              className="h-full min-w-[800px] object-cover"
              alt={img.alt}
              src={img.src}
            />
          ))}
          {/* Duplicate images for seamless infinite marquee scroll */}
          {images.map((img, idx) => (
            <img
              key={`img2-${idx}`}
              className="h-full min-w-[800px] object-cover"
              alt={img.alt}
              src={img.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
