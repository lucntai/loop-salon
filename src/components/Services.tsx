import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Blade & Brush', icon: '/images/ref/svc-1.png', desc: 'Styles we craft looks that suit your personality and lifestyle.' },
  { title: 'The Gents’ Den', icon: '/images/ref/svc-2.png', desc: 'We design styles tailored to your personality and lifestyle.' },
  { title: 'Fade Theory', icon: '/images/ref/svc-3.png', desc: 'Crafting looks that reflect who you are and how you live.' },
  { title: 'Snip Society', icon: '/images/ref/svc-4.png', desc: 'Personalized styles created to match your unique lifestyle.' },
  { title: 'Crafted Cuts', icon: '/images/ref/svc-5.png', desc: 'Our styles complement your personality and everyday life.' },
  { title: 'The Razor Room', icon: '/images/ref/svc-6.png', desc: 'Tailoring looks that perfectly fit your individuality.' },
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
    <section className="pb-section-gap bg-paper-bg px-margin-desktop">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariants}
              className="group relative flex flex-col bg-white p-10 min-h-[340px] hover:bg-ink-black transition-colors duration-500"
            >
              <h3 className="text-headline-lg font-headline-lg uppercase group-hover:text-paper-bg transition-colors duration-300">
                {service.title}
              </h3>
              <div className="flex-grow flex items-center justify-center py-8">
                <img
                  src={service.icon}
                  alt={`${service.title} service icon`}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant group-hover:text-surface-variant transition-colors duration-300 max-w-[16rem]">
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
