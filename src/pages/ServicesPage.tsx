import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const FadeUp: React.FC<{ children?: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ServicesPage = () => {
  return (
    <main className="bg-white pt-[100px]">
      {/* SECTION 1 — Page Hero */}
      <section className="bg-charcoal text-white py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <FadeUp>
            <span className="text-xs tracking-widest uppercase font-semibold text-neutral-400 mb-8 block">
              Our Disciplines
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
              We Design Spaces That Remember You
            </h1>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-sans">
              A holistic approach to interior architecture, blending raw materiality with refined elegance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2 — Services Grid (Bento style) */}
      <section className="bg-alabaster py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
            {/* Card 1: Large */}
            <FadeUp delay={0.1} className="md:col-span-4 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-3xl text-charcoal mb-4">Residential Design</h3>
              <p className="text-neutral-500 text-sm font-sans max-w-md">
                Crafting deeply personal sanctuaries tailored to the rhythms of your daily life.
              </p>
            </FadeUp>
            
            {/* Card 2: Small */}
            <FadeUp delay={0.2} className="md:col-span-2 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Commercial Interiors</h3>
              <p className="text-neutral-500 text-sm font-sans">
                Elevating brand identity through immersive and functional spatial experiences.
              </p>
            </FadeUp>

            {/* Card 3: Small */}
            <FadeUp delay={0.3} className="md:col-span-2 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Space Planning</h3>
              <p className="text-neutral-500 text-sm font-sans">
                Optimizing flow and proportion to maximize the potential of every square foot.
              </p>
            </FadeUp>

            {/* Card 4: Large */}
            <FadeUp delay={0.4} className="md:col-span-4 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-3xl text-charcoal mb-4">Material Curation</h3>
              <p className="text-neutral-500 text-sm font-sans max-w-md">
                Sourcing rare, sustainable, and tactile materials that define the soul of a room.
              </p>
            </FadeUp>

            {/* Card 5: Medium-Small */}
            <FadeUp delay={0.5} className="md:col-span-3 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Lighting Design</h3>
              <p className="text-neutral-500 text-sm font-sans">
                Sculpting atmosphere and mood through architectural and decorative illumination.
              </p>
            </FadeUp>

            {/* Card 6: Medium-Small */}
            <FadeUp delay={0.6} className="md:col-span-3 bg-white p-10 flex flex-col justify-end border border-neutral-100 hover:bg-neutral-50 transition-colors duration-500">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Turnkey Projects</h3>
              <p className="text-neutral-500 text-sm font-sans">
                Seamless execution from initial concept to the final curated styling details.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Our Approach (Zig-zag layout) */}
      <section className="py-[160px] px-8 lg:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-[120px]">
          <FadeUp className="text-center mb-24">
            <span className="text-xs tracking-widest uppercase font-semibold text-neutral-400 block mb-6 font-sans">
              Process
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">Our Approach</h2>
          </FadeUp>

          {/* Row 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 lg:col-start-2">
              <FadeUp>
                <h3 className="font-serif text-4xl text-charcoal mb-6">01 Listen</h3>
                <p className="text-neutral-500 text-base leading-relaxed font-sans">
                  Every project begins with a conversation. We immerse ourselves in your vision, understanding the nuances of your lifestyle and the architectural context of the space.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.2}>
                <img 
                  src="https://picsum.photos/seed/listen/800/600" 
                  alt="Listen" 
                  className="w-full aspect-[4/3] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </FadeUp>
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1">
              <FadeUp delay={0.2}>
                <img 
                  src="https://picsum.photos/seed/conceive/800/600" 
                  alt="Conceive" 
                  className="w-full aspect-[4/3] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </FadeUp>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeUp>
                <h3 className="font-serif text-4xl text-charcoal mb-6">02 Conceive</h3>
                <p className="text-neutral-500 text-base leading-relaxed font-sans">
                  We translate insights into tangible concepts. Through sketches, material boards, and spatial planning, the narrative of your interior begins to take shape.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 lg:col-start-2">
              <FadeUp>
                <h3 className="font-serif text-4xl text-charcoal mb-6">03 Craft</h3>
                <p className="text-neutral-500 text-base leading-relaxed font-sans">
                  The execution phase is where precision meets artistry. We collaborate with master artisans and builders to bring the design to life with uncompromising quality.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.2}>
                <img 
                  src="https://picsum.photos/seed/craft/800/600" 
                  alt="Craft" 
                  className="w-full aspect-[4/3] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA Strip */}
      <section className="bg-charcoal text-white py-[120px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif italic text-4xl lg:text-5xl mb-12">
              "Every room has a story. Let us write yours."
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium border border-white px-8 py-4 hover:bg-white hover:text-charcoal transition-colors duration-300 font-sans"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
