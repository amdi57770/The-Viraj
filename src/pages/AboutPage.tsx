import React from 'react';
import { motion } from 'motion/react';

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

const AboutPage = () => {
  return (
    <main className="bg-white pt-[100px]">
      {/* SECTION 1 — Hero Statement */}
      <section className="bg-alabaster pt-[160px] pb-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <FadeUp>
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-8 block font-sans">
              The Studio
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.2] tracking-tight text-charcoal max-w-5xl mx-auto">
              Born from a belief that<br />
              interiors should feel inevitable.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2 — Studio Story (Asymmetric 2-col) */}
      <section className="bg-white py-[160px] px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="w-full aspect-[3/4] bg-gray-200">
                <img 
                  src="https://picsum.photos/seed/studio-story/800/1000" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 relative">
            <FadeUp>
              <div className="absolute -top-32 -left-16 text-[12rem] font-serif text-gray-50 leading-none -z-10 select-none hidden lg:block">
                2012
              </div>
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-8 block font-sans">
                Our Beginning
              </span>
              <div className="space-y-6 text-gray-500 text-base leading-relaxed font-sans">
                <p>
                  Founded in 2012, Viraj Interiors emerged from a desire to strip away the superfluous and focus on the essential. We started as a small atelier dedicated to bespoke furniture, slowly evolving into a full-service interior architecture practice.
                </p>
                <p>
                  Our early days were defined by an obsessive study of materials—how wood ages, how stone absorbs light, how metal patinas over time. This tactile foundation continues to inform every space we design today.
                </p>
                <p>
                  Over the past decade, we have remained intentionally small, choosing to take on a limited number of projects each year to ensure our uncompromising standards of craftsmanship and personal attention are never diluted.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Values (3-column grid) */}
      <section className="bg-alabaster py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <FadeUp delay={0.1}>
              <div className="border-t border-gray-300 pt-8">
                <h3 className="font-serif text-3xl text-charcoal mb-4">Restraint</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  Knowing what to leave out is as important as what we put in. We design with a quiet confidence that allows the architecture and materials to speak for themselves.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="border-t border-gray-300 pt-8">
                <h3 className="font-serif text-3xl text-charcoal mb-4">Intention</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  Every line, texture, and shadow serves a purpose. We reject arbitrary design choices in favor of deeply considered solutions tailored to the inhabitants.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="border-t border-gray-300 pt-8">
                <h3 className="font-serif text-3xl text-charcoal mb-4">Craft</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  We honor the hand of the maker. By collaborating with master artisans, we ensure that every detail is executed with an uncompromising level of quality and care.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Team Grid */}
      <section className="bg-white py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Viraj Sharma', role: 'Principal Designer', seed: 'viraj' },
              { name: 'Aanya Mehta', role: 'Lead Architect', seed: 'aanya' },
              { name: 'Rohan Das', role: 'Materials Expert', seed: 'rohan' },
              { name: 'Priya Nair', role: 'Project Director', seed: 'priya' }
            ].map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="w-full aspect-square bg-gray-200 mb-6 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${member.seed}/600/600`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">{member.name}</h3>
                <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400 font-sans">
                  {member.role}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Recognition / Press Bar */}
      <section className="bg-charcoal py-24 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <FadeUp>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500 mb-12 block text-center font-sans">
              As Featured In
            </span>
          </FadeUp>
          <FadeUp delay={0.2} className="w-full">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-gray-400 text-sm tracking-widest uppercase font-sans">
              <span>ELLE DECOR</span>
              <span>AD INDIA</span>
              <span>VOGUE LIVING</span>
              <span>THE HINDU</span>
              <span>FORBES INDIA</span>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
