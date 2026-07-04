import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Emilio J. Harper',
    role: 'Barber',
    img: '/images/img_42.jpg',
    alt: "Portrait of Emilio J. Harper, a lead barber at Salono",
  },
  {
    name: 'Ricardo P. Wins',
    role: 'Hairstylist',
    img: '/images/img_5.jpg',
    alt: "Portrait of Ricardo P. Wins, a senior hairstylist at Salono",
  },
  {
    name: 'Santiago G. Dray',
    role: 'Colorist',
    img: '/images/img_41.jpg',
    alt: "Portrait of Santiago G. Dray, an expert colorist at Salono",
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

const Team: React.FC = () => {
  return (
    <section className="py-section-gap bg-paper-bg overflow-hidden">
      <motion.div
        className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
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
            Meet with Team
          </motion.span>
          <motion.h2
            className="text-headline-xl font-headline-xl uppercase"
            variants={fadeUpVariants}
          >
            Expert Grooming Consultations
          </motion.h2>
        </div>
        <motion.a
          className="bg-ink-black text-paper-bg px-8 py-4 rounded-full text-label-sm font-label-sm uppercase tracking-widest hover:bg-brass-gold transition-all duration-300 whitespace-nowrap"
          href="#"
          variants={fadeUpVariants}
        >
          Join With Us
        </motion.a>
      </motion.div>

      <motion.div
        className="flex gap-gutter px-margin-desktop overflow-x-auto pb-12 no-scrollbar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {teamMembers.map((member, idx) => (
          <motion.div key={idx} className="min-w-[320px] bg-white group" variants={fadeUpVariants}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt={member.alt}
                src={member.img}
              />
            </div>
            <div className="p-8">
              <span className="text-eyebrow font-eyebrow text-brass-gold uppercase">{member.role}</span>
              <h3 className="text-headline-lg font-headline-lg uppercase mt-2">{member.name}</h3>
              <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  className="w-10 h-10 border border-muted-brass rounded-full flex items-center justify-center hover:bg-brass-gold transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">face_nod</span>
                </a>
                <a
                  className="w-10 h-10 border border-muted-brass rounded-full flex items-center justify-center hover:bg-brass-gold transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Giant Marquee */}
      <div className="mt-section-gap py-12 bg-brass-gold text-ink-black overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="text-[100px] font-display-lg uppercase mx-12">
            Expert Grooming Consultations
          </span>
          <span className="text-[100px] font-display-lg uppercase mx-12">
            Expert Grooming Consultations
          </span>
        </div>
        <div className="flex animate-marquee">
          <span className="text-[100px] font-display-lg uppercase mx-12">
            Expert Grooming Consultations
          </span>
          <span className="text-[100px] font-display-lg uppercase mx-12">
            Expert Grooming Consultations
          </span>
        </div>
      </div>
    </section>
  );
};

export default Team;
