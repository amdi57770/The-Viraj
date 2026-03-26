import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

const projectsData = [
  {
    id: 1,
    title: 'The Glass Pavilion',
    category: 'Residential',
    location: 'Copenhagen, DK',
    aspect: 'aspect-[3/4]',
    seed: 'glass-pavilion'
  },
  {
    id: 2,
    title: 'Ember Studio',
    category: 'Commercial',
    location: 'Stockholm, SE',
    aspect: 'aspect-[4/3]',
    seed: 'ember-studio'
  },
  {
    id: 3,
    title: 'The Loft Collective',
    category: 'Residential',
    location: 'Berlin, DE',
    aspect: 'aspect-[3/4]',
    seed: 'loft-collective'
  },
  {
    id: 4,
    title: 'Saffron Retreat',
    category: 'Hospitality',
    location: 'Mallorca, ES',
    aspect: 'aspect-square',
    seed: 'saffron-retreat'
  },
  {
    id: 5,
    title: 'Casa Verde',
    category: 'Residential',
    location: 'Milan, IT',
    aspect: 'aspect-[4/5]',
    seed: 'casa-verde'
  },
  {
    id: 6,
    title: 'The White Room',
    category: 'Concept',
    location: 'Paris, FR',
    aspect: 'aspect-[3/2]',
    seed: 'white-room'
  }
];

const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY', 'CONCEPT'];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <main className="bg-white pt-[160px] pb-[120px] min-h-screen">
      {/* SECTION 1 — Page Header */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-16">
        <FadeUp>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block font-sans">
            Selected Works
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal mb-6">
            The Portfolio
          </h1>
          <p className="text-gray-500 text-lg font-sans max-w-2xl">
            A curated collection of spaces designed with intention.
          </p>
        </FadeUp>
      </section>

      {/* SECTION 2 — Filter Bar */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-16">
        <FadeUp delay={0.1} className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 font-sans ${
                activeFilter === filter
                  ? 'bg-charcoal text-white border border-charcoal'
                  : 'bg-transparent text-charcoal border border-gray-200 hover:border-gray-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </FadeUp>
      </section>

      {/* SECTION 3 — Project Masonry Grid */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-[120px]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.1} className="break-inside-avoid relative group cursor-pointer">
              <div className="overflow-hidden bg-gray-100">
                <img 
                  src={`https://picsum.photos/seed/${project.seed}/800/1000`} 
                  alt={project.title} 
                  className={`w-full ${project.aspect} object-cover transition-transform duration-700 group-hover:scale-105`} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="mt-6 relative h-[60px] overflow-hidden">
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:-translate-y-full">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400 mb-2 block font-sans">
                    {project.location} • {project.category}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal">{project.title}</h3>
                </div>
                <div className="absolute inset-0 top-full transform transition-transform duration-500 group-hover:-translate-y-full flex items-center">
                  <span className="text-sm tracking-widest uppercase font-medium text-charcoal flex items-center gap-3 font-sans">
                    View Project <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-sans">
            No projects found in this category.
          </div>
        )}
      </section>

      {/* SECTION 4 — Load More / Studio Note */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto text-center">
        <FadeUp>
          <p className="text-sm text-gray-400 font-sans mb-8">
            Showing {filteredProjects.length} of 14 projects
          </p>
          <h2 className="font-serif italic text-3xl lg:text-4xl text-charcoal mb-12">
            "We build slowly, deliberately."
          </h2>
          <a 
            href="#" 
            className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium text-charcoal border-b border-charcoal pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors font-sans"
          >
            View All Archives <ArrowRight size={16} />
          </a>
        </FadeUp>
      </section>
    </main>
  );
};

export default PortfolioPage;
