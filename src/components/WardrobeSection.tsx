import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeUp: React.FC<{ children?: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface WardrobeSectionProps {
  isCompact?: boolean;
  showCtaButton?: boolean;
}

const WardrobeSection: React.FC<WardrobeSectionProps> = ({ isCompact = false, showCtaButton = false }) => {
  return (
    <section className={`${isCompact ? 'py-[120px]' : 'py-[160px]'} px-8 lg:px-16 max-w-[1440px] mx-auto`}>
      <FadeUp className="mb-16">
        <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-3 block">Custom Wardrobe Delhi NCR</span>
        <h2 className="font-serif text-4xl lg:text-5xl">Bespoke Storage Solutions</h2>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[300px]">
        {/* Block 1: Intro & Hero Image */}
        <FadeUp delay={0.1} className="lg:col-span-8 relative group overflow-hidden bg-charcoal">
          <img src="https://picsum.photos/seed/wardrobe-main/1000/600" alt="Luxury wardrobe Faridabad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white font-serif text-3xl mb-2">Walk-in Wardrobe Designers Gurgaon</h3>
            <p className="text-gray-200 text-sm max-w-md">Tailored to your lifestyle, engineered for longevity.</p>
          </div>
        </FadeUp>

        {/* Block 2: Waterproof & Termite-proof */}
        <FadeUp delay={0.2} className="lg:col-span-4 bg-gradient-light p-8 flex flex-col justify-between border border-gray-100">
          <span className="text-xs tracking-widest uppercase text-accent">01</span>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-charcoal">Waterproof &<br/>Termite-Proof</h3>
            <p className="text-sm text-gray-500">Built with marine-grade materials to withstand the Delhi climate.</p>
          </div>
        </FadeUp>

        {/* Block 3: Hettich Hardware */}
        <FadeUp delay={0.3} className="lg:col-span-4 bg-gradient-dark text-alabaster p-8 flex flex-col justify-between">
          <span className="text-xs tracking-widest uppercase text-accent opacity-80">02</span>
          <div>
            <h3 className="font-serif text-2xl mb-4">Hettich Wardrobe Fittings</h3>
            <p className="text-sm opacity-70">German-engineered soft-close mechanisms for silent, seamless operation.</p>
          </div>
        </FadeUp>

        {/* Block 4: PG Laminates */}
        <FadeUp delay={0.4} className="lg:col-span-4 relative group overflow-hidden">
          <img src="https://picsum.photos/seed/laminate/600/600" alt="PG laminate wardrobe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <h3 className="text-white font-serif text-2xl mb-2">PG Laminates</h3>
            <p className="text-gray-200 text-sm">Premium finishes that resist scratches and fading over time.</p>
          </div>
        </FadeUp>

        {/* Block 5: 10-Year Warranty */}
        <FadeUp delay={0.5} className="lg:col-span-4 bg-gradient-light p-8 flex flex-col justify-between border border-gray-100">
          <span className="text-xs tracking-widest uppercase text-accent">03</span>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-charcoal">10-Year Warranty</h3>
            <p className="text-sm text-gray-500">Uncompromising quality backed by a decade of assurance.</p>
          </div>
        </FadeUp>

        {/* Block 6: Sliding Door Wardrobe Noida */}
        <FadeUp delay={0.6} className="lg:col-span-8 relative group overflow-hidden">
          <img src="https://picsum.photos/seed/sliding-door/1000/600" alt="Sliding door wardrobe Noida" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <h3 className="text-white font-serif text-3xl mb-2">Sliding Door Wardrobe Noida</h3>
            <p className="text-gray-200 text-sm max-w-md">Space-saving elegance with ultra-smooth gliding tracks.</p>
          </div>
        </FadeUp>

        {/* Block 7: CTA Area */}
        <FadeUp delay={0.7} className="lg:col-span-12 bg-gradient-dark text-alabaster p-12 flex flex-col md:flex-row items-center justify-between mt-8">
          <div>
            <h3 className="font-serif text-3xl mb-2">Modular Wardrobe Manufacturer Delhi</h3>
            <p className="text-sm opacity-70 max-w-xl">From concept to installation in 45 days. Waterproof, termite-proof, and perfectly tailored to your space.</p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-end gap-4">
            {showCtaButton && (
              <Link to="/contact" className="bg-white text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gray-200 transition-colors">
                Get Free Quote
              </Link>
            )}
            <Link to="/wardrobe" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium border-b border-white/30 pb-1 hover:text-white/70 hover:border-white/70 transition-colors">
              Explore Complete Wardrobe Collection <ArrowRight size={16} className="text-accent" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default WardrobeSection;
