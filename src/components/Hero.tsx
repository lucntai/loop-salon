import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <header className="bg-black p-2 md:p-4">
      <div className="bg-black text-white rounded-2xl min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] flex items-end md:items-center relative overflow-hidden">
        {/* Full-bleed background portrait — the man is composed at the right of
            the source image with pure black baked into the left, so a single
            object-cover layer fills the hero edge-to-edge with no dead gap.
            On mobile the portrait is pushed further right and down so the crop
            still favors the face instead of centering on the beard. */}
        <motion.div
          className="absolute inset-0 pointer-events-none select-none"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <img
            className="w-full h-full object-cover object-[65%_20%] md:object-center scale-110 translate-x-[7%] translate-y-[7%]"
            alt="A moody, cinematic portrait of a gentleman with a full, meticulously groomed beard set against a deep black background, embodying the refined heritage aesthetic of the salon."
            src="/images/hero-portrait.png"
          />
        </motion.div>

        {/* Scrim so headline/body text stays legible over the portrait on small screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent md:hidden" />

        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-12 gap-gutter relative z-10 pb-10 md:pb-0">
        <motion.div
          className="col-span-12 md:col-span-8 lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-[15vw] leading-[0.95] sm:text-headline-xl-mobile sm:leading-[0.95] sm:font-headline-xl-mobile md:text-display-lg md:leading-[0.95] font-display-lg uppercase">
            <motion.span className="block" variants={textRevealVariants}>
              Style
            </motion.span>
            <motion.span
              className="flex items-center gap-3 md:gap-4"
              variants={textRevealVariants}
            >
              <span className="inline-block align-middle w-12 h-8 md:w-28 md:h-14 rounded-full overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="A relaxed client reclining at the wash basin while a stylist shampoos his hair, capturing the pampering, spa-like experience of the salon."
                  src="/images/hero-pill.png"
                />
              </span>
              Meets
            </motion.span>
            <motion.span className="block" variants={textRevealVariants}>
              Precision
            </motion.span>
          </h1>
          <motion.p
            className="mt-6 md:mt-8 text-base md:text-body-lg font-body-lg max-w-md text-white/70"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            Ahmedabad's L'Oréal Professionnel VIP Salon — led by founder Dippak
            Totlaanii, a former L'Oréal Professionnel Technical Executive, bringing
            expert cuts, color, and hair care to Bhat.
          </motion.p>
          <motion.div
            className="mt-8 md:mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' as const },
              },
            }}
          >
            <a
              className="inline-block border border-brass-gold text-white font-label-sm text-label-sm px-8 py-4 md:px-12 md:py-5 uppercase tracking-widest hover:bg-brass-gold hover:text-black transition-colors duration-500"
              href="#contact"
            >
              Book Appointment
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
