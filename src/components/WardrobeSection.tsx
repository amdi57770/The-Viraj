import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const WardrobeSection = () => (
  <section id="wardrobes" className="flex flex-col">
    {/* Block 1: Header */}
    <div className="bg-white py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
      <FadeUp>
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Our Craftsmanship — Delhi NCR</span>
        <h2 className="font-serif text-4xl lg:text-6xl leading-[1.1] text-charcoal mb-6">
          Wardrobes Built to Last.<br />Designed to Impress.
        </h2>
        <p className="font-sans text-sm text-gray-500 max-w-2xl">
          Premium wardrobe design in Delhi NCR, engineered with waterproof, termite-proof materials for homes — starting ₹1 Lakh onwards.
        </p>
      </FadeUp>
    </div>

    {/* Block 2: Materials */}
    <div className="bg-alabaster py-[120px] px-8 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto">
        <FadeUp>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-12 block">What We Build With</span>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeUp delay={0.1} className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[320px] rounded-none">
            <div>
              <span className="text-xs font-sans text-gray-400 mb-2 block">IS 303 / IS 710 Certified</span>
              <h3 className="font-serif text-2xl mb-4 text-charcoal">BWR / BWP Plywood</h3>
              <p className="font-sans text-[13px] text-gray-500 leading-relaxed">
                Boiling Water Resistant plywood — the industry gold standard for a waterproof wardrobe Delhi and termite-proof wardrobe carcasses in high-humidity conditions.
              </p>
            </div>
            <div className="mt-8 bg-charcoal text-white text-[10px] tracking-[0.1em] uppercase py-2 px-3 w-fit rounded-none">
              Waterproof + Termite-Proof
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[320px] rounded-none">
            <div>
              <span className="text-xs font-sans text-gray-400 mb-2 block">High Density, High Moisture Resistant</span>
              <h3 className="font-serif text-2xl mb-4 text-charcoal">HDHMR Board</h3>
              <p className="font-sans text-[13px] text-gray-500 leading-relaxed">
                Denser than standard MDF with zero swelling — ideal for smooth painted finishes and long-term structural integrity.
              </p>
            </div>
            <div className="mt-8 bg-charcoal text-white text-[10px] tracking-[0.1em] uppercase py-2 px-3 w-fit rounded-none">
              Premium Core
            </div>
          </FadeUp>
          <FadeUp delay={0.3} className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[320px] rounded-none">
            <div>
              <span className="text-xs font-sans text-gray-400 mb-2 block">100% Water Immune</span>
              <h3 className="font-serif text-2xl mb-4 text-charcoal">PVC Foam Board</h3>
              <p className="font-sans text-[13px] text-gray-500 leading-relaxed">
                Zero wood content means zero risk from moisture or pests. Perfect for bathrooms, modular kitchens, and utility areas.
              </p>
            </div>
            <div className="mt-8 bg-charcoal text-white text-[10px] tracking-[0.1em] uppercase py-2 px-3 w-fit rounded-none">
              Best For Wet Areas
            </div>
          </FadeUp>
          <FadeUp delay={0.4} className="bg-white border border-gray-200 p-8 flex flex-col justify-between min-h-[320px] rounded-none">
            <div>
              <span className="text-xs font-sans text-gray-400 mb-2 block">Natural & Timeless</span>
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Solid Wood</h3>
              <p className="font-sans text-[13px] text-gray-500 leading-relaxed">
                Teak and Sheesham for clients who want authentic grain, heirloom durability, and an irreplaceable warm character.
              </p>
            </div>
            <div className="mt-8 bg-charcoal text-white text-[10px] tracking-[0.1em] uppercase py-2 px-3 w-fit rounded-none">
              Luxury Range
            </div>
          </FadeUp>
        </div>
      </div>
    </div>

    {/* Block 3: Wardrobe Types */}
    <div className="bg-white py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
      <FadeUp>
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Choose Your Style</span>
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-16">
          Five Forms, One Standard of Excellence
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {[
          { num: '01', title: 'Sliding Door Wardrobe', desc: 'Space-saving, smooth German-track gliding — ideal for compact Delhi apartments.' },
          { num: '02', title: 'Hinged Door Wardrobe', desc: 'Classic, full-access design with maximum interior organisation.' },
          { num: '03', title: 'Walk-In Wardrobe', desc: 'A dedicated dressing space — designed as a room, not just storage.' },
          { num: '04', title: 'Floor-to-Ceiling', desc: 'Utilises full wall height — visually expansive, zero wasted space.' },
          { num: '05', title: 'Corner / L-Shape', desc: 'Engineered for awkward corners — turning dead space into elegant storage.' }
        ].map((type, i) => (
          <FadeUp key={i} delay={i * 0.1} className="border-t border-gray-200 pt-6 relative overflow-hidden">
            <span className="absolute -top-4 -left-2 text-[80px] font-serif text-charcoal opacity-[0.08] select-none pointer-events-none z-0">{type.num}</span>
            <div className="relative z-10">
              <h3 className="font-serif text-xl text-charcoal mb-3">{type.title}</h3>
              <p className="font-sans text-[13px] text-gray-500 leading-relaxed">{type.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>

    {/* Block 4: Color Options */}
    <div className="bg-alabaster py-[120px] px-8 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto">
        <FadeUp>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Colour & Finish Options</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">From Subtle to Statement — PG 0 to PG 5</h2>
          <p className="font-sans text-sm text-gray-500 max-w-3xl mb-16 leading-relaxed">
            We offer the complete PG laminate wardrobe range across Merino, Greenlam, Century, Virgo, and Royale Touche — 1000+ finishes from matte solids to wood grains, metallics, and high-gloss lacquers.
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-t border-gray-200 mb-8">
          {[
            { pg: 'PG 0', desc: 'Entry / Budget Solids' },
            { pg: 'PG 1', desc: 'Textured Mattes' },
            { pg: 'PG 2', desc: 'Wood Grains & Naturals' },
            { pg: 'PG 3', desc: 'Premium Patterns' },
            { pg: 'PG 4', desc: 'High-Gloss & Lacquer' },
            { pg: 'PG 5', desc: 'Metallic & Luxury Bespoke' }
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1} className="border-r border-b border-gray-200 p-6 flex flex-col items-center text-center">
              <span className="font-serif text-2xl text-charcoal font-bold mb-2">{item.pg}</span>
              <span className="font-sans text-xs text-gray-500">{item.desc}</span>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.6}>
          <p className="text-center font-sans text-xs text-gray-400">
            Available in: Merino · Greenlam · Century · Virgo · Royale Touche
          </p>
        </FadeUp>
      </div>
    </div>

    {/* Block 5: Hardware */}
    <div className="bg-white py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
      <FadeUp>
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">The Fittings Inside</span>
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">Hardware That Works as Hard as the Wood</h2>
        <p className="font-sans text-sm text-gray-500 max-w-2xl mb-16 leading-relaxed">
          Every fitting is sourced from the world's most trusted brands — because smooth motion and silent closing are not luxuries, they are standards. Featuring premium Hettich wardrobe fittings.
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
        <div className="md:pr-16 md:border-r border-gray-200">
          <FadeUp delay={0.1}>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal mb-8 block">German Precision</span>
            <ul className="space-y-6">
              {[
                { brand: 'Hettich', desc: 'Hinges, drawer systems, sliding mechanisms' },
                { brand: 'Häfele', desc: 'Architectural hardware, handles, locks' },
                { brand: 'Blum', desc: 'Soft-close lift systems and tandem drawer boxes' },
                { brand: 'Grass', desc: 'Silent glide drawer runners and flap systems' },
                { brand: 'Siegenia', desc: 'Window & door hardware integration' }
              ].map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-serif text-lg text-charcoal">{item.brand}</span>
                  <span className="font-sans text-sm text-gray-500">{item.desc}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
        <div className="md:pl-16">
          <FadeUp delay={0.2}>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal mb-2 block">Indian Excellence</span>
            <span className="text-xs font-sans text-gray-400 mb-8 block">Budget-conscious options without compromise</span>
            <ul className="space-y-6">
              {[
                { brand: 'Ebco', desc: 'Wardrobe channels, baskets, and accessories' },
                { brand: 'Dorset', desc: 'Door handles, knobs, and cabinet fittings' },
                { brand: 'Godrej', desc: 'Locking systems and security hardware' }
              ].map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-serif text-lg text-charcoal">{item.brand}</span>
                  <span className="font-sans text-sm text-gray-500">{item.desc}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </div>

    {/* Block 6: USP Strip */}
    <div className="bg-charcoal py-16 px-8 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {[
          { title: '10-Year Warranty', desc: 'On all structural woodwork' },
          { title: '100% Waterproof', desc: '& Termite-Proof core options' },
          { title: 'PG 0–5 Range', desc: '1000+ laminate finishes' },
          { title: 'Pan Delhi-NCR', desc: 'End-to-end service & installation' }
        ].map((stat, i) => (
          <FadeUp key={i} delay={i * 0.1} className={`flex flex-col items-center text-center ${i !== 3 ? 'lg:border-r border-white/15' : ''} lg:px-8`}>
            <span className="font-serif text-2xl text-white mb-2">{stat.title}</span>
            <span className="font-sans text-sm text-white/70">{stat.desc}</span>
          </FadeUp>
        ))}
      </div>
    </div>

    {/* Block 7: CTA Footer */}
    <div className="bg-alabaster py-[120px] px-8 lg:px-16 w-full text-center">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="font-serif italic text-3xl lg:text-4xl text-charcoal mb-4">
            "Every wardrobe we build is a promise — not just a product."
          </h2>
          <p className="font-sans text-sm text-gray-500 mb-10 mt-2">
            As a modular wardrobe manufacturer Delhi, we provide custom wardrobe Delhi Noida Gurgaon quotes within 48 hours. No upper budget limit. Serving Delhi, Noida, Gurgaon & Faridabad.
          </p>
          <Link to="/contact" className="inline-block bg-charcoal text-white font-sans text-xs tracking-[0.15em] uppercase py-[14px] px-[36px] hover:bg-gray-800 transition-colors rounded-none mt-6">
            Request a Free Quote
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default WardrobeSection;
