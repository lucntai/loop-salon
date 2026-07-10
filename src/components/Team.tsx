import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Emilio J. Harper', role: 'Barber', img: '/images/team-1.png' },
  { name: 'Ricardo P. Wins', role: 'Hairstylist', img: '/images/team-2.png' },
  { name: 'Santiago G. Dray', role: 'Colorist', img: '/images/team-3.png' },
  { name: 'Marcello D. Vance', role: 'Stylist', img: '/images/team-4.png' },
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
        className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div>
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-brass-gold text-eyebrow font-eyebrow text-ink-black uppercase tracking-widest mb-6"
            variants={fadeUpVariants}
          >
            <span className="material-symbols-outlined text-brass-gold text-[12px]">content_cut</span>
            Meet with Team
          </motion.span>
          <motion.h2 className="text-headline-xl font-headline-xl uppercase" variants={fadeUpVariants}>
            Expert Grooming Consultations
          </motion.h2>
        </div>
        <motion.a
          className="border border-brass-gold text-ink-black px-10 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-brass-gold hover:text-white transition-colors duration-300 whitespace-nowrap"
          href="#contact"
          variants={fadeUpVariants}
        >
          Join With Us
        </motion.a>
      </motion.div>

      <motion.div
        className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.name} className="relative group overflow-hidden" variants={fadeUpVariants}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={`Portrait of ${member.name}, ${member.role} at Loop Salon`}
                src={member.img}
              />
            </div>
            {/* Overlaid white info card at bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-eyebrow font-eyebrow text-brass-gold uppercase block mb-1">
                  {member.role}
                </span>
                <h3 className="text-lg font-headline-lg font-bold uppercase text-ink-black">
                  {member.name}
                </h3>
              </div>
              <div className="flex gap-3 text-on-surface-variant">
                <a href="#" aria-label="Facebook" className="hover:text-brass-gold transition-colors">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                </a>
                <a href="#" aria-label="X" className="hover:text-brass-gold transition-colors">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Giant brass marquee band */}
      <div className="mt-section-gap py-10 bg-brass-gold text-ink-black overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[0, 1].map((k) => (
            <span key={k} className="text-[90px] font-display-lg uppercase mx-8 leading-none">
              Expert Grooming Consultations
            </span>
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {[0, 1].map((k) => (
            <span key={k} className="text-[90px] font-display-lg uppercase mx-8 leading-none">
              Expert Grooming Consultations
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
