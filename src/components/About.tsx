import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const About: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <motion.div
          className="col-span-12 lg:col-span-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="w-full aspect-[4/5] bg-ink-black overflow-hidden relative"
            variants={fadeUpVariants}
          >
            <img
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
              alt="A wide-angle interior shot of a luxury barbershop featuring vintage leather chairs, dark wood cabinetry, and polished brass fixtures. The scene is bathed in natural light streaming through large windows, creating a welcoming and clean environment that reflects a modern take on heritage grooming."
              src="/images/img_28.jpg"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-12 -right-12 w-64 h-48 hidden lg:block bg-ink-black p-4"
            variants={fadeUpVariants}
          >
            <img
              className="w-full h-full object-cover"
              alt="A detailed shot of a barber's workstation with organized shaving brushes, straight razors, and luxury grooming products on a marble countertop. The composition is clean and minimalist, reinforcing the theme of skilled professionalism and a relaxing environment."
              src="/images/img_13.jpg"
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-8 mt-16 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div className="flex items-center gap-2 mb-6" variants={fadeUpVariants}>
            <span className="px-3 py-1 border border-brass-gold rounded-full text-eyebrow font-eyebrow text-brass-gold uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-[10px]">content_cut</span> About Salon
            </span>
          </motion.div>
          <motion.h2 className="text-headline-xl font-headline-xl uppercase mb-8" variants={fadeUpVariants}>
            Your Trusted Salon &amp; Barber Shop.
          </motion.h2>
          <motion.h5 className="text-label-sm font-label-sm text-brass-gold uppercase tracking-widest mb-4" variants={fadeUpVariants}>
            Why Choose Us?
          </motion.h5>
          <motion.p className="text-body-md font-body-md mb-8 text-on-surface-variant" variants={fadeUpVariants}>
            From classic cuts to modern styles, we craft looks that suit your personality and lifestyle.
          </motion.p>
          <motion.ul className="space-y-4 mb-12" variants={fadeUpVariants}>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-brass-gold flex items-center justify-center text-brass-gold group-hover:bg-brass-gold group-hover:text-ink-black transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <span className="text-body-md font-body-md font-semibold">Skilled &amp; certified professionals</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-brass-gold flex items-center justify-center text-brass-gold group-hover:bg-brass-gold group-hover:text-ink-black transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              <span className="text-body-md font-body-md font-semibold">Clean, relaxing, and welcoming environment</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-brass-gold flex items-center justify-center text-brass-gold group-hover:bg-brass-gold group-hover:text-ink-black transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span>
              </div>
              <span className="text-body-md font-body-md font-semibold">Personalized grooming consultations</span>
            </li>
          </motion.ul>
          <motion.a
            className="inline-block border-b-2 border-ink-black pb-1 font-label-sm text-label-sm uppercase tracking-widest hover:text-brass-gold hover:border-brass-gold transition-all duration-300"
            href="#"
            variants={fadeUpVariants}
          >
            Our Expertise
          </motion.a>
        </motion.div>
      </div>

      {/* Logo Marquee */}
      <div className="mt-section-gap overflow-hidden border-y border-muted-brass py-8">
        <div className="flex animate-marquee whitespace-nowrap gap-24">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <img
              key={i}
              alt="Logo Marquee"
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="/images/img_23.jpg"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {[1, 2, 3, 4, 5].map((_, i) => (
            <img
              key={`dup-${i}`}
              alt="Logo Marquee"
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="/images/img_23.jpg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
