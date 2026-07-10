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

const avatars = [
  '/images/testi-av1.png',
  '/images/testi-av2.png',
  '/images/testi-av3.png',
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Heading */}
        <motion.div
          className="relative mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest mb-6"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
            Testimonials
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase"
            variants={fadeUpVariants}
          >
            What Clients Say
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-gutter items-stretch relative">
          {/* Left: large barber image */}
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
          >
            <div className="w-full h-full min-h-[420px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="A client admires their fresh cut and styled hair as the stylist finishes at Loop Salon."
                src="/images/testi-main.png"
              />
            </div>
          </motion.div>

          {/* Right: quote card */}
          <motion.div
            className="col-span-12 lg:col-span-6 relative bg-white/60 p-10 lg:p-14 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Razor image overlapping top-right */}
            <img
              src="/images/testi-razor.png"
              alt="An open straight razor with a wooden handle and polished steel blade."
              className="hidden lg:block absolute -top-24 right-6 w-24 rotate-[35deg] pointer-events-none select-none drop-shadow-xl"
            />

            {/* Avatars + name */}
            <motion.div className="flex items-center gap-5 mb-10" variants={fadeUpVariants}>
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Satisfied Loop Salon client"
                    className="w-11 h-11 rounded-md object-cover border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold uppercase tracking-wide text-ink-black text-sm">
                  Alonso D. Dowson
                </p>
                <p className="text-eyebrow font-eyebrow text-brass-gold uppercase">
                  Founder Google
                </p>
              </div>
            </motion.div>

            {/* Big quote watermark */}
            <img
              src="/images/testi-quote.png"
              alt=""
              aria-hidden="true"
              className="absolute right-10 top-1/3 w-40 opacity-[0.06] pointer-events-none select-none"
            />

            <motion.div className="flex gap-1 mb-6" variants={fadeUpVariants}>
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-brass-gold text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </motion.div>

            <motion.p
              className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed relative z-10"
              variants={fadeUpVariants}
            >
              "Whether you're here for a classic trim, a modern fade, or a relaxing hot
              towel shave, our skilled barbers are dedicated to making you look and feel
              your best. Sit back, relax, and enjoy the experience — because every
              gentleman deserves to look sharp."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
