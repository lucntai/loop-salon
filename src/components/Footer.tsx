import React from 'react';

const columns = [
  {
    title: 'Essential Pages',
    links: ['About', 'Our Services', 'Expert Barbers', 'Gallery', 'FAQ', 'Get In Touch'],
  },
  {
    title: 'Social Follow',
    links: ['Facebook', 'Youtube', 'Linkedin', 'Behance', 'X'],
  },
  {
    title: 'Other Branch',
    links: ['New York', 'Berlin', 'Mumbai', 'London', 'Castelhin', 'Melvin'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-black text-white relative w-full pt-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Top: CTA + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          <div className="lg:col-span-4">
            <h2 className="text-headline-xl font-headline-xl uppercase leading-tight mb-10">
              Transform your hair today.
            </h2>
            <a
              className="inline-block border border-brass-gold text-white px-12 py-5 text-label-sm font-label-sm uppercase tracking-widest hover:bg-brass-gold hover:text-ink-black transition-colors duration-300"
              href="#"
            >
              Book An Appointment
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-12 lg:border-l border-white/10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-body-md font-body-md text-white/50 mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        className="text-label-sm font-label-sm uppercase tracking-widest text-white/90 hover:text-brass-gold transition-colors"
                        href="#"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant brass wordmark */}
        <div className="border-t border-white/10 pt-10">
          <img
            src="/images/ref/footer-wordmark.png"
            alt="SALONO"
            className="w-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8 text-center">
          <p className="text-body-md font-body-md text-white/50">
            Copyright and design by{' '}
            <span className="text-brass-gold">@Mezario</span> 1990 - 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
