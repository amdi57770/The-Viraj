import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import WardrobeSection from '../components/WardrobeSection';

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

const WardrobeHero = () => (
  <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal flex items-center pt-24">
    <div className="absolute inset-0">
      <img
        src="https://picsum.photos/seed/wardrobe-hero/2000/1000"
        alt="Custom Wardrobes Delhi NCR"
        className="w-full h-full object-cover opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent pointer-events-none" />
    </div>

    <div className="relative z-10 w-full px-8 lg:px-16 max-w-[1440px] mx-auto text-white">
      <FadeUp>
        <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/70 mb-6 block">
          Luxury Wardrobe Faridabad
        </span>
      </FadeUp>
      <FadeUp delay={0.2}>
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-6 max-w-4xl">
          Custom Wardrobes Engineered for Delhi-NCR Homes
        </h1>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className="text-lg font-sans text-white/80 max-w-xl mb-10">
          Waterproof • Termite-Proof • 10-Year Warranty
        </p>
      </FadeUp>
      <FadeUp delay={0.6}>
        <a href="#wardrobe-contact" className="bg-white text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gray-200 transition-colors inline-block">
          Get Free Quote
        </a>
      </FadeUp>
    </div>
  </section>
);

const WardrobeProcess = () => (
  <section className="bg-alabaster py-[120px] px-8 lg:px-16">
    <div className="max-w-[1440px] mx-auto">
      <FadeUp className="mb-16 text-center">
        <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block">Our Process</span>
        <h2 className="font-serif text-4xl lg:text-5xl">From Concept to Installation</h2>
      </FadeUp>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Consultation",
            desc: "We assess your space, storage needs, and aesthetic preferences to draft the initial layout."
          },
          {
            step: "02",
            title: "Design & Material Selection",
            desc: "Choose from PG laminates, Hettich hardware, and waterproof core materials. Review 3D renders."
          },
          {
            step: "03",
            title: "Installation",
            desc: "Precision manufacturing followed by seamless, mess-free installation in your home."
          }
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.2} className="bg-white p-10 border border-gray-100">
            <span className="font-serif text-5xl text-gray-200 block mb-6">{item.step}</span>
            <h3 className="font-serif text-2xl mb-4 text-charcoal">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are the wardrobes completely waterproof and termite-proof?",
      a: "Yes, we use BWP (Boiling Water Proof) grade plywood and HDHMR boards that are inherently resistant to moisture and termites, making them ideal for the Delhi NCR climate."
    },
    {
      q: "What hardware brands do you use?",
      a: "We exclusively use premium Hettich wardrobe fittings for hinges, channels, and sliding mechanisms to ensure a lifetime of smooth operation."
    },
    {
      q: "How long does the process take?",
      a: "From design finalization to installation, our standard timeline is 45 days. We manufacture off-site to minimize disruption in your home."
    },
    {
      q: "What does the 10-year warranty cover?",
      a: "Our warranty covers any manufacturing defects, hardware malfunctions, and issues related to core material integrity under normal usage conditions."
    }
  ];

  return (
    <section className="py-[120px] px-8 lg:px-16 max-w-[800px] mx-auto">
      <FadeUp className="mb-16 text-center">
        <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block">Questions</span>
        <h2 className="font-serif text-4xl lg:text-5xl">Frequently Asked</h2>
      </FadeUp>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FadeUp key={i} delay={i * 0.1} className="border-b border-gray-200 pb-4">
            <button 
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium text-charcoal">{faq.q}</span>
              {openIndex === i ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
            </button>
            <motion.div 
              initial={false}
              animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">{faq.a}</p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

const WardrobeContact = () => (
  <section id="wardrobe-contact" className="bg-charcoal text-alabaster py-[120px] px-8 lg:px-16">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <FadeUp>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block">Modular Wardrobe Manufacturer Delhi</span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-8">Request a Free Quote</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
            Share your requirements with us. Our design experts will get back to you within 48 hours with a preliminary estimate.
          </p>
        </FadeUp>
      </div>
      
      <div className="lg:col-span-7">
        <FadeUp delay={0.2} className="bg-white text-charcoal p-10 lg:p-16">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input type="text" id="w-name" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors peer" placeholder=" " />
                <label htmlFor="w-name" className="absolute left-0 top-3 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Full Name</label>
              </div>
              <div className="relative">
                <input type="tel" id="w-phone" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors peer" placeholder=" " />
                <label htmlFor="w-phone" className="absolute left-0 top-3 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Phone Number</label>
              </div>
            </div>
            
            <div className="relative">
              <input type="email" id="w-email" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors peer" placeholder=" " />
              <label htmlFor="w-email" className="absolute left-0 top-3 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Email Address</label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select id="w-type" defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors text-charcoal appearance-none">
                  <option value="" disabled hidden>Project Type</option>
                  <option value="sliding">Sliding Door Wardrobe</option>
                  <option value="walk-in">Walk-in Wardrobe</option>
                  <option value="hinged">Hinged Door Wardrobe</option>
                  <option value="full-home">Full Home Interiors</option>
                </select>
              </div>
              <div className="relative">
                <select id="w-budget" defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors text-charcoal appearance-none">
                  <option value="" disabled hidden>Budget Range</option>
                  <option value="1-3">₹1L - ₹3L</option>
                  <option value="3-5">₹3L - ₹5L</option>
                  <option value="5+">₹5L+</option>
                </select>
              </div>
            </div>
            
            <button type="button" className="bg-charcoal text-white w-full py-4 text-sm tracking-widest uppercase font-medium hover:bg-gray-800 transition-colors mt-4">
              Request Free Quote
            </button>
          </form>
        </FadeUp>
      </div>
    </div>
  </section>
);

const WardrobePage = () => {
  useEffect(() => {
    document.title = "Custom Wardrobes Delhi NCR | Waterproof, Termite-Proof | LSO";
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Premium custom wardrobes in Delhi NCR. Waterproof & termite-proof materials. PG laminates, Hettich hardware, 10-year warranty. Free quote in 48 hours.');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', '/wardrobe');

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <WardrobeHero />
      <WardrobeSection isCompact={false} showCtaButton={false} />
      <WardrobeProcess />
      <FAQ />
      <WardrobeContact />
    </main>
  );
};

export default WardrobePage;
