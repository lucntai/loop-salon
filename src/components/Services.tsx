import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Blade & Brush', icon: '/images/svc-1.png', price: '$49', desc: 'Styles we craft looks that suit your personality and lifestyle.' },
  { title: 'The Gents’ Den', icon: '/images/svc-2.png', price: '$55', desc: 'We design styles tailored to your personality and lifestyle.' },
  { title: 'Fade Theory', icon: '/images/svc-3.png', price: '$39', desc: 'Crafting looks that reflect who you are and how you live.' },
  { title: 'Snip Society', icon: '/images/svc-4.png', price: '$45', desc: 'Personalized styles created to match your unique lifestyle.' },
  { title: 'Crafted Cuts', icon: '/images/svc-5.png', price: '$60', desc: 'Our styles complement your personality and everyday life.' },
  { title: 'The Razor Room', icon: '/images/svc-6.png', price: '$35', desc: 'Tailoring looks that perfectly fit your individuality.' },
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
    <section id="services" className="pb-section-gap bg-paper-bg px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
            Our Services
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase mt-6"
            variants={fadeUpVariants}
          >
            Your Trusted Local Barber Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariants}
              className="service-card-group group relative flex flex-col justify-between aspect-square bg-white p-10 hover:bg-ink-black transition-colors duration-500 overflow-hidden"
            >
              <h3 className="text-headline-lg font-headline-lg uppercase group-hover:text-paper-bg transition-colors duration-300 relative z-20">
                {service.title}
              </h3>

              {/* Icon — fades out on hover */}
              <img
                src={service.icon}
                alt={`${service.title} service icon`}
                className="service-icon w-20 h-20 object-contain transition-opacity duration-300 relative z-10 self-center"
              />

              <p className="text-body-md font-body-md text-on-surface-variant group-hover:text-surface-variant transition-colors duration-300 max-w-[16rem] relative z-20">
                {service.desc}
              </p>

              {/* Price marquee — full-bleed, fades in on hover, scrolls edge to edge */}
              <div className="marquee-container absolute inset-0 flex items-center opacity-0 transition-opacity duration-500 pointer-events-none">
                <div className="flex animate-marquee whitespace-nowrap">
                  {Array.from({ length: 2 }).map((_, track) => (
                    <div key={track} className="flex shrink-0" aria-hidden={track === 1}>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span
                          key={i}
                          className="text-[44px] leading-none font-display-lg text-brass-gold px-5"
                        >
                          {service.price}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
