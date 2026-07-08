import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    category: 'Salon',
    title: "Establishments such as Baan Thai and Men's Planet now offer enhanced services.",
    date: 'July 29, 2025',
  },
  {
    category: 'Salon',
    title: "Baan Thai and Men's Planet elevate your experience",
    date: 'July 28, 2025',
  },
  {
    category: 'Salon',
    title: 'Discover upgraded services at your favorite spots',
    date: 'July 27, 2025',
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
          className="mb-16"
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
            News &amp; Insights
          </motion.span>
          <motion.h2 className="text-headline-xl font-headline-xl uppercase" variants={fadeUpVariants}>
            Get every updates from here
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-gutter items-center">
          {/* Featured image */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
          >
            <div className="aspect-[4/3] overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A stylist works on a client's cropped platinum haircut in a bright, plant-filled modern salon."
                src="/images/news-feature.jpg"
              />
            </div>
          </motion.div>

          {/* Article list */}
          <motion.div
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {articles.map((article) => (
              <motion.article
                key={article.title}
                className="group py-8 border-b border-muted-brass first:pt-0"
                variants={fadeUpVariants}
              >
                <span className="text-eyebrow font-eyebrow text-brass-gold uppercase tracking-widest">
                  {article.category}
                </span>
                <h4 className="text-headline-lg font-headline-lg uppercase mt-3 mb-3 group-hover:text-brass-gold transition-colors cursor-pointer">
                  {article.title}
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant">{article.date}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
