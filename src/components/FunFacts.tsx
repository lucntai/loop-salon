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

const StatOverlay: React.FC<{ label: string }> = ({ label }) => (
  <div className="absolute inset-0 p-8 flex flex-col justify-start">
    <h3 className="text-[56px] leading-none font-display-lg text-white">1200+</h3>
    <p className="text-body-md font-body-md text-white/80 mt-1">{label}</p>
  </div>
);

const FunFacts: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg text-ink-black overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest mb-6"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
            Fun Facts
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase max-w-4xl mx-auto leading-tight"
            variants={fadeUpVariants}
          >
            Being better informed means making a good and better decisions
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Top-left: image stat card */}
          <motion.div className="relative aspect-[16/9] overflow-hidden" variants={fadeUpVariants}>
            <img
              className="w-full h-full object-cover"
              alt="A close-up of a barber trimming a client's hairline with clippers."
              src="/images/fact-1.png"
            />
            <div className="absolute inset-0 bg-black/40" />
            <StatOverlay label="Serving daily haircut" />
          </motion.div>

          {/* Top-right: white stat card with soap image */}
          <motion.div className="relative aspect-[16/9] overflow-hidden bg-white" variants={fadeUpVariants}>
            <img
              className="absolute right-0 top-0 h-full w-1/2 object-contain object-right"
              alt="A stack of folded warm towels in a wooden bowl."
              src="/images/fact-soap.png"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-start">
              <h3 className="text-[56px] leading-none font-display-lg text-ink-black">1200+</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">Serving daily haircut</p>
            </div>
          </motion.div>

          {/* Bottom-left: brass card */}
          <motion.div className="relative aspect-[16/9] overflow-hidden bg-brass-gold text-ink-black p-8 flex flex-col justify-between" variants={fadeUpVariants}>
            <p className="text-headline-lg font-headline-lg uppercase max-w-[16rem] leading-tight">
              Clean, Relaxing, and Welcoming Environment
            </p>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-[56px] leading-none font-display-lg">1200+</h3>
                <p className="text-body-md font-body-md opacity-80 mt-1">Serving daily haircut</p>
              </div>
              <img
                src="/images/fact-logo.png"
                alt="Gentlemen's barber shop emblem"
                className="w-28 h-28 object-contain"
              />
            </div>
          </motion.div>

          {/* Bottom-right: rewards image card with badges */}
          <motion.div className="relative aspect-[16/9] overflow-hidden" variants={fadeUpVariants}>
            <img
              className="w-full h-full object-cover"
              alt="An elderly master barber grooms a heavily tattooed client's beard in an atmospheric vintage shop."
              src="/images/fact-2.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <p className="text-headline-lg font-headline-lg uppercase text-white">
                Meet with Rewards
              </p>
              <div className="flex items-center gap-4">
                <img src="/images/award-1.png" alt="Award badge" className="h-10 w-auto object-contain" />
                <img src="/images/award-2.png" alt="Award badge" className="h-10 w-auto object-contain" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFacts;
