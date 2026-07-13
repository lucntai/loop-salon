import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-4 md:pt-6">
        <div className="flex justify-between items-center bg-white rounded-xl shadow-lg pl-4 pr-2 py-2 md:pl-8 md:pr-3 md:py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="text-lg md:text-2xl font-headline-lg font-bold text-ink-black tracking-tight whitespace-nowrap">
              LOOP SALON
            </span>
          </a>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#"
            >
              HOME
            </a>
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#services"
            >
              SERVICES
            </a>
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#contact"
            >
              CONTACT
            </a>
          </div>

          {/* Right: phone + CTA */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+919909813221"
              className="hidden md:inline text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
            >
              +91 99098 13221
            </a>
            <a
              className="bg-brass-gold text-ink-black font-label-sm text-label-sm px-4 py-3 md:px-7 md:py-4 rounded-lg uppercase tracking-widest hover:bg-ink-black hover:text-white transition-colors duration-300 whitespace-nowrap"
              href="#contact"
            >
              <span className="lg:hidden">Book Now</span>
              <span className="hidden lg:inline">Book Your Slot</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
