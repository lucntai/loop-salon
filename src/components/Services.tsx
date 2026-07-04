import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Blade & Brush',
    icon: 'brush',
    price: '$49',
    desc: 'Styles we craft looks that suit your personality and lifestyle.',
  },
  {
    title: 'The Gents’ Den',
    icon: 'chair',
    price: '$55',
    desc: 'We design styles tailored to your personality and lifestyle.',
  },
  {
    title: 'Fade Theory',
    icon: 'straighten',
    price: '$39',
    desc: 'Crafting looks that reflect who you are and how you live.',
  },
  {
    title: 'Snip Society',
    icon: 'content_cut',
    price: '$45',
    desc: 'Personalized styles created to match your unique lifestyle.',
  },
  {
    title: 'Crafted Cuts',
    icon: 'design_services',
    price: '$60',
    desc: 'Our styles complement your personality and everyday life.',
  },
  {
    title: 'The Razor Room',
    icon: 'hearing_aid',
    price: '$35',
    desc: 'Tailoring looks that perfectly fit your individuality.',
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const Services: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span
            className="px-3 py-1 border border-brass-gold rounded-full text-eyebrow font-eyebrow text-brass-gold uppercase inline-block"
            variants={fadeUpVariants}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase mt-4"
            variants={fadeUpVariants}
          >
            Your Trusted Local Barber Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="service-card-group group relative flex flex-col items-center justify-between bg-surface-container-low p-12 min-h-[400px] text-center hover:bg-ink-black transition-all duration-500 overflow-hidden"
            >
              <h3 className="text-headline-lg font-headline-lg uppercase group-hover:text-paper-bg transition-colors duration-300 relative z-20">
                {service.title}
              </h3>
              <div className="flex-grow flex items-center justify-center relative w-full h-full">
                <span className="material-symbols-outlined text-[100px] text-brass-gold transition-opacity duration-300 service-icon relative z-20">
                  {service.icon}
                </span>
                <div className="marquee-container absolute inset-0 flex items-center opacity-0 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-6xl font-black text-brass-gold opacity-40 px-3"
                      >
                        {service.price}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant group-hover:text-paper-bg transition-colors duration-300 relative z-20">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
