import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-black text-paper-bg relative w-full pt-section-gap pb-12 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div>
          <h3 className="text-headline-lg font-headline-lg uppercase mb-6 text-paper-bg">SALONO</h3>
          <p className="text-body-md font-body-md opacity-70 max-w-xs mb-8">
            The definitive premium barbershop experience. We combine heritage techniques with modern styling to deliver unparalleled grooming services.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-muted-brass rounded-full flex items-center justify-center hover:bg-brass-gold hover:text-ink-black transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">facebook</span>
            </a>
            <a className="w-10 h-10 border border-muted-brass rounded-full flex items-center justify-center hover:bg-brass-gold hover:text-ink-black transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">camera_alt</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm uppercase tracking-widest text-brass-gold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Blade &amp; Brush</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">The Gents' Den</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Fade Theory</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Crafted Cuts</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm uppercase tracking-widest text-brass-gold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">About Us</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Our Craftsmen</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Testimonials</a></li>
            <li><a className="text-body-md font-body-md opacity-70 hover:opacity-100 hover:text-brass-gold transition-colors" href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm uppercase tracking-widest text-brass-gold mb-6">Newsletter</h4>
          <p className="text-body-md font-body-md opacity-70 mb-4">Subscribe for exclusive grooming tips and offers.</p>
          <div className="relative">
            <input
              className="w-full bg-transparent border-b border-muted-brass py-3 text-paper-bg font-body-md focus:outline-none focus:border-brass-gold transition-colors"
              placeholder="Your email address"
              type="email"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brass-gold hover:text-white transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop mt-24 pt-8 border-t border-muted-brass flex flex-col md:flex-row justify-between items-center relative z-10">
        <p className="text-body-md font-body-md opacity-50">© 2026 Salono. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="text-body-md font-body-md opacity-50 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
          <a className="text-body-md font-body-md opacity-50 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
        </div>
      </div>

      {/* Giant Watermark */}
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden pointer-events-none z-0">
        <div className="flex whitespace-nowrap opacity-[0.03]">
          <span className="text-[300px] font-display-lg uppercase text-brass-gold tracking-tighter leading-none mx-12">SALONO</span>
          <span className="text-[300px] font-display-lg uppercase text-brass-gold tracking-tighter leading-none mx-12">SALONO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
