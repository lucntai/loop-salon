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

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest">
    <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
    {children}
  </span>
);

const marqueeLogos = [
  '/images/brand-1.png',
  '/images/brand-2.png',
  '/images/brand-3.png',
  '/images/brand-4.png',
  '/images/brand-5.png',
];

const About: React.FC = () => {
  const bullets = [
    "Founded by a former L'Oréal Professionnel Technical Executive",
    "Official L'Oréal Professionnel VIP Salon partner",
    'Personalized consultations for every color & cut',
  ];

  return (
    <section id="about" className="py-section-gap bg-paper-bg overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="mb-6" variants={fadeUpVariants}>
            <Eyebrow>About Loop Salon</Eyebrow>
          </motion.div>
          <motion.h2
            className="text-headline-xl-mobile font-headline-xl-mobile md:text-headline-xl md:font-headline-xl uppercase max-w-2xl leading-tight"
            variants={fadeUpVariants}
          >
            Bhat, Ahmedabad's L'Oréal Professionnel VIP Salon.
          </motion.h2>
        </motion.div>

        {/* Two-column: large image left, small image + white card right */}
        <div className="grid grid-cols-12 gap-gutter items-start">
          <motion.div
            className="col-span-12 lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
          >
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                alt="A skilled stylist gives a client a precise, hands-on grooming service in the warmly lit Loop Salon, conveying trusted craftsmanship."
                src="/images/about-main.png"
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              className="w-full aspect-[16/9] overflow-hidden mb-8"
              variants={fadeUpVariants}
            >
              <img
                className="w-full h-full object-cover"
                alt="A client seated in a salon chair draped with a cape while a stylist works, viewed across Loop Salon's dark cabinetry and mirrors."
                src="/images/about-small.png"
              />
            </motion.div>

            <motion.div className="bg-white p-10 lg:p-12" variants={fadeUpVariants}>
              <h3 className="text-headline-lg font-headline-lg uppercase mb-4">
                Meet Dippak Totlaanii
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-md">
                Founder of Loop Salon — Hair Education, and former Technical
                Executive at L'Oréal Professionnel and Technical Advisor at
                Schwarzkopf Professional. That trained eye shapes every cut and
                color that leaves our chair.
              </p>
              <ul className="space-y-5 mb-10">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-brass-gold flex items-center justify-center text-white">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'wght' 500" }}
                      >
                        check
                      </span>
                    </span>
                    <span className="text-body-md font-body-md text-ink-black">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="block w-full text-center border border-brass-gold text-ink-black font-label-sm text-label-sm px-8 py-4 uppercase tracking-widest hover:bg-brass-gold hover:text-white transition-colors duration-300"
                href="#services"
              >
                Our Expertise
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="mt-section-gap overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
          {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((src, i) => (
            <img
              key={i}
              alt="L'Oréal Professionnel partner product line logo"
              className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all shrink-0"
              src={src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
