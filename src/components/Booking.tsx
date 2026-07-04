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

const Booking: React.FC = () => {
  return (
    <section className="bg-paper-bg relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-30 grayscale bg-surface-dim flex items-center justify-center">
          <span className="text-on-surface-variant font-label-sm uppercase tracking-widest">
            [Google Maps Integration Placeholder]
          </span>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop w-full relative z-10 flex justify-center lg:justify-start">
        <motion.div
          className="bg-white p-12 max-w-md w-full shadow-2xl border-t-4 border-brass-gold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.span
            className="text-eyebrow font-eyebrow text-brass-gold uppercase tracking-widest block mb-4"
            variants={fadeUpVariants}
          >
            Opening Hours
          </motion.span>
          <motion.h2
            className="text-headline-lg font-headline-lg uppercase mb-8"
            variants={fadeUpVariants}
          >
            Schedule Your Visit
          </motion.h2>

          <motion.div className="space-y-6 mb-10" variants={fadeUpVariants}>
            <div className="flex justify-between border-b border-muted-brass pb-2">
              <span className="font-body-md">Monday - Friday</span>
              <span className="font-bold text-brass-gold">8:0AM - 7:00PM</span>
            </div>
            <div className="flex justify-between border-b border-muted-brass pb-2">
              <span className="font-body-md">Saturday</span>
              <span className="font-bold text-brass-gold">9:0AM - 9:00PM</span>
            </div>
            <div className="flex justify-between border-b border-muted-brass pb-2">
              <span className="font-body-md">Sunday</span>
              <span className="font-bold text-error">Holiday</span>
            </div>
          </motion.div>

          <motion.div className="space-y-4 mb-10" variants={fadeUpVariants}>
            <a
              className="flex items-center gap-3 text-on-surface-variant hover:text-brass-gold transition-colors"
              href="tel:+384900292637"
            >
              <span className="material-symbols-outlined text-brass-gold">call</span>{' '}
              +3849 0029 2637
            </a>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-brass-gold">mail</span>{' '}
              booking@example.com
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-brass-gold">location_on</span>{' '}
              758 5th Avenue, New York, NY 10057
            </div>
          </motion.div>

          <motion.a
            className="block w-full bg-brass-gold text-center py-4 text-ink-black font-label-sm text-label-sm uppercase tracking-widest hover:bg-ink-black hover:text-paper-bg transition-colors duration-300"
            href="#"
            variants={fadeUpVariants}
          >
            Book An Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
