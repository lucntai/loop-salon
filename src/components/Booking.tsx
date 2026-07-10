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
    <section id="contact" className="relative min-h-[640px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          alt="A close-up of a Loop Salon stylist applying a treatment during a service."
          src="/images/hours-bg.png"
        />
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop w-full relative z-10 flex justify-center lg:justify-end">
        <motion.div
          className="bg-white p-10 lg:p-12 max-w-md w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest mb-6"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
            Opening Hours
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase mb-8"
            variants={fadeUpVariants}
          >
            Opening Hours
          </motion.h2>

          <motion.div className="mb-8" variants={fadeUpVariants}>
            <div className="flex justify-between items-center border-b border-muted-brass py-4">
              <span className="font-body-md text-on-surface-variant">Monday - Friday</span>
              <span className="font-body-md text-ink-black">8:0AM - 7:00PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-muted-brass py-4">
              <span className="font-body-md text-on-surface-variant">Saturday</span>
              <span className="font-body-md text-ink-black">9:0AM - 9:00PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-muted-brass py-4">
              <span className="font-body-md text-on-surface-variant">Sunday</span>
              <span className="font-body-md text-brass-gold">Holiday</span>
            </div>
          </motion.div>

          <motion.div className="space-y-4 mb-8" variants={fadeUpVariants}>
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-brass-gold transition-colors" href="tel:+919909813221">
              <span className="material-symbols-outlined text-brass-gold text-[20px]">call</span>
              +91 99098 13221
            </a>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-brass-gold text-[20px]">location_on</span>
              GF-10, ABC Avan Business Park, beside Tea Post Cafe, near Radhe Fortune Complex, Bhat, Ahmedabad – 382428
            </div>
          </motion.div>

          <motion.a
            className="block w-full bg-brass-gold text-center py-4 text-ink-black font-label-sm text-label-sm uppercase tracking-widest hover:bg-ink-black hover:text-white transition-colors duration-300"
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
