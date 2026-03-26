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

const filters = ['ALL', 'DESIGN THEORY', 'MATERIALS', 'PROJECTS', 'PROCESS', 'LIVING'];

const articlesData = [
  {
    id: 1,
    title: 'The Art of Doing Less',
    date: 'Oct 12, 2023',
    category: 'DESIGN THEORY',
    excerpt: 'Why restraint is often the most difficult, yet rewarding, design principle to master.',
    seed: 'art-of-less'
  },
  {
    id: 2,
    title: 'Why Marble Never Gets Old',
    date: 'Sep 28, 2023',
    category: 'MATERIALS',
    excerpt: 'Tracing the history and enduring appeal of natural stone in modern interiors.',
    seed: 'marble-history'
  },
  {
    id: 3,
    title: 'Designing for Silence',
    date: 'Sep 15, 2023',
    category: 'LIVING',
    excerpt: 'Acoustic considerations and spatial planning for a quieter, calmer home.',
    seed: 'silence-design'
  },
  {
    id: 4,
    title: 'Light as Material',
    date: 'Aug 30, 2023',
    category: 'PROCESS',
    excerpt: 'How we use natural and artificial illumination to sculpt volume and texture.',
    seed: 'light-material'
  },
  {
    id: 5,
    title: 'What Japanese Interiors Taught Us',
    date: 'Aug 14, 2023',
    category: 'DESIGN THEORY',
    excerpt: 'Lessons in wabi-sabi, impermanence, and the beauty of the imperfect.',
    seed: 'japanese-interiors'
  },
  {
    id: 6,
    title: 'The Return of Warm Neutrals',
    date: 'Jul 22, 2023',
    category: 'MATERIALS',
    excerpt: 'Moving away from stark whites towards earthy, grounding color palettes.',
    seed: 'warm-neutrals'
  }
];

const JournalPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredArticles = activeFilter === 'ALL' 
    ? articlesData 
    : articlesData.filter(a => a.category === activeFilter);

  return (
    <main className="bg-white pt-[160px] min-h-screen">
      {/* SECTION 1 — Page Header */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-16">
        <FadeUp>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block font-sans">
            The Journal
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal mb-6">
            Ideas, Observations & Craft
          </h1>
          <p className="text-gray-500 text-lg font-sans max-w-2xl">
            Thoughts from the studio on design, material, and space.
          </p>
        </FadeUp>
      </section>

      {/* SECTION 2 — Filter Tags */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-24">
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

      {/* SECTION 3 — Featured Article (Large) */}
      <section className="px-8 lg:px-16 max-w-[1440px] mx-auto mb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="w-full aspect-[16/9] bg-gray-200 overflow-hidden group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/featured-journal/1200/800" 
                  alt="Featured Article" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-charcoal mb-6 block font-sans">
                Featured • Oct 24, 2023
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
                The Architecture of<br />Quiet Moments
              </h2>
              <p className="text-gray-500 text-base leading-relaxed font-sans mb-8">
                An exploration into how spatial proportions, natural light, and tactile materials can cultivate a sense of profound stillness in our increasingly chaotic lives.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium border-b border-charcoal pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors font-sans"
              >
                Read Article <ArrowRight size={16} />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Article Grid */}
      <section className="bg-alabaster py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {filteredArticles.map((article, index) => (
              <FadeUp key={article.id} delay={index * 0.1} className="group cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-[4/3] bg-gray-200 mb-6 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${article.seed}/800/600`} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans mt-1">
                    {article.date}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal border border-gray-200 px-3 py-1 rounded-full font-sans">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans line-clamp-1 mt-auto">
                  {article.excerpt}
                </p>
              </FadeUp>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-sans">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 — Newsletter Strip */}
      <section className="bg-charcoal text-white py-[120px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif italic text-4xl lg:text-5xl mb-12">
              "Design thinking, delivered monthly."
            </h2>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 border-b border-white/30 pb-2 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full text-sm focus:outline-none text-white placeholder-gray-400 font-sans py-2" 
              />
              <button 
                type="button" 
                className="text-sm uppercase tracking-widest font-medium hover:text-gray-300 transition-colors font-sans whitespace-nowrap py-2"
              >
                Subscribe
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </main>
  );
};

export default JournalPage;
