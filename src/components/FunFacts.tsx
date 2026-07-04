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

const FunFacts: React.FC = () => {
  return (
    <section className="py-section-gap bg-ink-black text-paper-bg">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <motion.div
          className="flex items-center justify-between mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="max-w-2xl">
            <motion.span
              className="px-3 py-1 border border-brass-gold rounded-full text-eyebrow font-eyebrow text-brass-gold uppercase mb-4 inline-block"
              variants={fadeUpVariants}
            >
              Fun Facts
            </motion.span>
            <motion.h2
              className="text-headline-xl font-headline-xl uppercase"
              variants={fadeUpVariants}
            >
              Being better informed means making a good and better decisions
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="bg-paper-bg/5 p-12 border border-paper-bg/10 flex flex-col justify-between aspect-square hover:bg-brass-gold hover:text-ink-black transition-all duration-500 group"
            variants={fadeUpVariants}
          >
            <h2 className="text-[80px] font-display-lg leading-none">1200+</h2>
            <div>
              <p className="text-label-sm font-label-sm uppercase tracking-widest mb-2">
                Serving daily haircut
              </p>
              <p className="text-eyebrow font-eyebrow opacity-60 group-hover:opacity-100 uppercase">
                CLEAN, RELAXING, AND WELCOMING ENVIRONMENT
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 overflow-hidden aspect-[2/1] relative"
            variants={fadeUpVariants}
          >
            <img
              className="w-full h-full object-cover"
              alt="A wide cinematic interior shot of the luxury barbershop during a busy afternoon, with barbers at work and soft golden light filtering through. The composition highlights the premium service atmosphere and elegant design details of the heritage-inspired space."
              src="/images/img_28.jpg"
            />
          </motion.div>

          <motion.div
            className="md:col-span-2 overflow-hidden aspect-[2/1] relative"
            variants={fadeUpVariants}
          >
            <img
              className="w-full h-full object-cover"
              alt="A close-up artistic photograph focusing on the intricate details of a master barber's tools and a perfectly executed fade haircut. The lighting is focused and warm, showcasing the high-level craftsmanship and modern style of the salon's offerings."
              src="/images/img_13.jpg"
            />
          </motion.div>

          <motion.div
            className="bg-brass-gold p-12 flex flex-col justify-between aspect-square text-ink-black"
            variants={fadeUpVariants}
          >
            <h2 className="text-[80px] font-display-lg leading-none">1200+</h2>
            <div>
              <p className="text-label-sm font-label-sm uppercase tracking-widest mb-2">
                Meet with rewards
              </p>
              <p className="text-eyebrow font-eyebrow opacity-70 uppercase">
                Join our premium loyalty program for exclusive grooming benefits.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFacts;
