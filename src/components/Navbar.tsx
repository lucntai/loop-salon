import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-container-max mx-auto px-margin-desktop pt-6">
        <div className="flex justify-between items-center bg-white rounded-xl shadow-lg pl-8 pr-3 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-headline-lg font-bold text-ink-black tracking-tight">
              SALONO
            </span>
          </a>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              className="flex items-center gap-1 text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#"
            >
              HOME <span className="text-base leading-none">+</span>
            </a>
            <a
              className="flex items-center gap-1 text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#"
            >
              PAGES <span className="text-base leading-none">+</span>
            </a>
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#"
            >
              NEWS
            </a>
            <a
              className="text-label-sm font-label-sm text-ink-black tracking-wide hover:text-brass-gold transition-colors duration-300"
              href="#"
            >
              CONTACT
            </a>
          </div>

          {/* Right: phone + CTA */}
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-label-sm font-label-sm text-ink-black tracking-wide">
              +123 (456) 789 00
            </span>
            <a
              className="bg-brass-gold text-ink-black font-label-sm text-label-sm px-7 py-4 rounded-lg uppercase tracking-widest hover:bg-ink-black hover:text-white transition-colors duration-300"
              href="#"
            >
              Book Your Slot
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
