import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <motion.div
          className="col-span-12 lg:col-span-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="aspect-[1/1] overflow-hidden rounded-2xl" variants={fadeUpVariants}>
            <img
              className="w-full h-full object-cover"
              alt="A candid, artistic black and white image of a happy client checking his new haircut in the mirror. The focus is on the client's genuine expression of satisfaction, while the background shows a blurred, high-end salon atmosphere with warm, directional lighting. The overall mood is sophisticated and authentic."
              src="/images/img_21.jpg"
            />
          </motion.div>
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-brass-gold rounded-full flex items-center justify-center text-ink-black"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-8 relative mt-16 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <span className="text-[200px] absolute -top-40 -left-10 font-black text-muted-brass opacity-20 pointer-events-none">
            “
          </span>
          <motion.div className="flex items-center gap-2 mb-6" variants={fadeUpVariants}>
            <span className="px-3 py-1 border border-brass-gold rounded-full text-eyebrow font-eyebrow text-brass-gold uppercase">
              Testimonials
            </span>
          </motion.div>
          <motion.h2 className="text-headline-xl font-headline-xl uppercase mb-10" variants={fadeUpVariants}>
            What Clients Say
          </motion.h2>
          <motion.div className="flex gap-1 mb-6" variants={fadeUpVariants}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="material-symbols-outlined text-brass-gold" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
          </motion.div>
          <motion.p className="text-body-lg italic font-body-lg mb-10 text-ink-black leading-relaxed" variants={fadeUpVariants}>
            "Whether you're here for a classic trim, a modern fade, or a relaxing hot towel shave, our skilled barbers are dedicated to making you look and feel your best. Sit back, relax, and enjoy the experience — because every gentleman deserves to look sharp."
          </motion.p>
          <motion.div className="flex items-center gap-4" variants={fadeUpVariants}>
            <div className="w-16 h-16 rounded-full bg-ink-black flex items-center justify-center text-paper-bg overflow-hidden border-2 border-brass-gold">
              <img
                className="w-full h-full object-cover"
                alt="A professional headshot portrait of a man with styled hair and a neatly trimmed beard, looking directly at the camera with a confident expression. The lighting is soft and flattering, emphasizing grooming detail against a dark, out-of-focus background."
                src="/images/img_42.jpg"
              />
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-ink-black">Alonso D. Dowson</p>
              <p className="text-eyebrow font-eyebrow text-brass-gold">FOUNDER GOOGLE</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
