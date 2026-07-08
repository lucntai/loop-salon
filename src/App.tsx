import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FunFacts from './components/FunFacts';
import Booking from './components/Booking';
import Team from './components/Team';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add mask reveal class on mount for initial animation
    const elements = document.querySelectorAll('.mask-reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <div className="bg-paper-bg text-ink-black font-body-md overflow-x-hidden selection:bg-brass-gold selection:text-ink-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FunFacts />
      <Booking />
      <Team />
      <News />
      <Footer />
    </div>
  );
}

export default App;
