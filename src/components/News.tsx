import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    date: 'July 29, 2025',
    title: 'Establishments such as Baan Thai and Men\'s Planet now offer enhanced services.',
    img: '/images/img_28.jpg',
    alt: 'A modern editorial image for a blog post about enhanced grooming services',
  },
  {
    date: 'July 28, 2025',
    title: 'Baan Thai and Men\'s Planet elevate your experience',
    img: '/images/img_13.jpg',
    alt: 'An artistic photograph of premium skincare products and barbershop essentials',
  },
  {
    date: 'July 27, 2025',
    title: 'Discover upgraded services at your favorite spots',
    img: '/images/img_21.jpg',
    alt: 'An editorial shot of a gentleman relaxing in a vintage leather barber chair',
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

const News: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg">
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
          <div>
            <motion.span
              className="px-3 py-1 border border-brass-gold rounded-full text-eyebrow font-eyebrow text-brass-gold uppercase mb-4 inline-block"
              variants={fadeUpVariants}
            >
              News &amp; Insights
            </motion.span>
            <motion.h2
              className="text-headline-xl font-headline-xl uppercase"
              variants={fadeUpVariants}
            >
              Get every updates from here
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
          {articles.map((article, idx) => (
            <motion.article key={idx} className="group" variants={fadeUpVariants}>
              <div className="aspect-video bg-ink-black overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-700 group-hover:grayscale-0"
                  alt={article.alt}
                  src={article.img}
                />
              </div>
              <span className="text-eyebrow font-eyebrow text-brass-gold uppercase">
                Salon | {article.date}
              </span>
              <h4 className="text-headline-lg font-headline-lg uppercase mt-4 group-hover:text-brass-gold transition-colors">
                {article.title}
              </h4>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
