import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import WardrobeSection from './components/WardrobeSection';

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

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const initialImages = [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop"
    ];

    const shuffled = [...initialImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setImages(shuffled.slice(0, 5));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, currentImage]);

  if (images.length === 0) return <div className="h-screen w-full bg-charcoal" />;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {images.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 ${currentImage === index ? 'z-0' : '-z-10'}`}
          aria-hidden={currentImage !== index}
        >
          <img
            src={img}
            alt={`Interior ${index + 1}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            {...(index === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col justify-end z-10 text-white">
        <FadeUp>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/70 mb-4 block">
            The Viraj Interiors
          </span>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="font-serif text-5xl lg:text-[6rem] leading-[0.9] tracking-tight mb-6">
            Designing<br />
            <span className="italic text-white/80">the</span> Unseen.
          </h1>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="text-lg font-sans text-white/80 max-w-xl mb-10">
            Curating the soul of the space through texture, light, and proportion.
          </p>
        </FadeUp>
        <FadeUp delay={0.6}>
          <Link to="/portfolio" className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors w-fit">
            Explore Portfolio <ArrowRight size={16} />
          </Link>
        </FadeUp>

        <FadeUp delay={0.8} className="w-full mt-16 pt-8 border-t border-white/20 relative">
          <div className="text-center mb-8">
            <span className="font-serif italic text-white/60 text-sm">
              Crafting environments that breathe.
            </span>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, i) => {
              const isActive = currentImage === i;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

const BrandIntro = () => (
  <section id="studio" className="bg-alabaster py-[160px] px-8 lg:px-16">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 flex flex-col justify-between">
        <FadeUp>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400">The Ethos</span>
        </FadeUp>
        <FadeUp delay={0.2} className="hidden lg:block h-32 w-[1px] bg-gray-300 mt-8"></FadeUp>
      </div>
      <div className="lg:col-span-8">
        <FadeUp delay={0.2}>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.1] tracking-tight text-charcoal">
            We believe that space is the ultimate luxury. Our approach is rooted in the subtle balance between raw materiality and refined elegance, creating environments that breathe.
          </h2>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto">
    <FadeUp>
      <h2 className="font-serif text-4xl mb-16">Our Disciplines</h2>
    </FadeUp>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[300px]">
      <FadeUp delay={0.1} className="lg:col-span-8 relative group overflow-hidden">
        <img src="https://picsum.photos/seed/architecture/1000/600" alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <h3 className="text-white font-serif text-3xl mb-2">Architecture</h3>
          <p className="text-gray-200 text-sm max-w-md">Structural integrity meets poetic form. We design from the ground up.</p>
        </div>
      </FadeUp>
      <FadeUp delay={0.2} className="lg:col-span-4 bg-charcoal text-alabaster p-8 flex flex-col justify-between">
        <span className="text-xs tracking-widest uppercase opacity-50">02</span>
        <div>
          <h3 className="font-serif text-3xl mb-4">Interior<br/>Design</h3>
          <p className="text-sm opacity-70">Curating the soul of the space through texture, light, and proportion.</p>
        </div>
      </FadeUp>
      <FadeUp delay={0.3} className="lg:col-span-6 relative group overflow-hidden">
        <img src="https://picsum.photos/seed/furniture/800/600" alt="Custom Furniture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <h3 className="text-white font-serif text-3xl mb-2">Custom Furniture</h3>
          <p className="text-gray-200 text-sm max-w-md">Bespoke pieces tailored to the exact dimensions of your life.</p>
        </div>
      </FadeUp>
      <FadeUp delay={0.4} className="lg:col-span-6 relative group overflow-hidden">
        <img src="https://picsum.photos/seed/styling/800/600" alt="Styling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <h3 className="text-white font-serif text-3xl mb-2">Art & Styling</h3>
          <p className="text-gray-200 text-sm max-w-md">The final layer of narrative, sourced from global galleries and artisans.</p>
        </div>
      </FadeUp>
    </div>
  </section>
);

const FeaturedProject = () => (
  <section id="portfolio" className="py-[160px] px-8 lg:px-16 max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-8">
        <FadeUp>
          <img src="https://picsum.photos/seed/featured-project/1200/800" alt="The Glass Pavilion" className="w-full aspect-[3/2] object-cover" referrerPolicy="no-referrer" />
        </FadeUp>
      </div>
      <div className="lg:col-span-4 relative">
        <FadeUp delay={0.2}>
          <div className="absolute -top-32 -left-16 text-[12rem] font-serif text-gray-50 leading-none -z-10 select-none hidden lg:block">01</div>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-6 block">Featured Project</span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">The Glass<br/>Pavilion</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Set against the rugged coastline, this residence blurs the boundary between shelter and nature. A study in transparency and restraint.
          </p>
          <a href="#" className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium border-b border-charcoal pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
            View Project <ArrowRight size={16} />
          </a>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    { seed: 'proj1', aspect: 'aspect-[3/4]', title: 'Aura Residence', span: 'col-span-1' },
    { seed: 'proj2', aspect: 'aspect-square', title: 'The Minimalist', span: 'col-span-1' },
    { seed: 'proj3', aspect: 'aspect-[4/5]', title: 'Urban Loft', span: 'col-span-1' },
    { seed: 'proj4', aspect: 'aspect-[3/2]', title: 'Coastal Retreat', span: 'col-span-1' },
    { seed: 'proj5', aspect: 'aspect-[3/4]', title: 'Heritage Estate', span: 'col-span-1' },
  ];

  return (
    <section className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto">
      <FadeUp className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Selected Works</span>
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Spaces We Have Had the Privilege to Shape</h2>
      </FadeUp>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((p, i) => (
          <FadeUp key={i} delay={i * 0.1} className="break-inside-avoid relative group cursor-pointer">
            <div className="overflow-hidden">
              <img src={`https://picsum.photos/seed/${p.seed}/800/1000`} alt={p.title} className={`w-full ${p.aspect} object-cover transition-transform duration-700 group-hover:scale-105`} referrerPolicy="no-referrer" />
            </div>
            <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white text-charcoal px-6 py-3 text-sm tracking-widest uppercase font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View</span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl">{p.title}</h3>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto relative">
    <FadeUp className="text-center mb-20">
      <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">How We Work</span>
      <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">A Process as Considered as the Result</h2>
    </FadeUp>
    <div className="absolute left-1/2 top-[200px] bottom-0 w-[1px] bg-gray-100 hidden lg:block -translate-x-1/2"></div>
    
    <div className="space-y-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 text-left lg:text-right lg:pr-16">
          <FadeUp>
            <span className="font-serif text-6xl text-gray-200 block mb-4">01</span>
            <h3 className="font-serif text-3xl mb-4">Discovery</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We begin by listening. Understanding your rituals, your aspirations, and the unique context of the site.</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-2 hidden lg:flex justify-center relative">
          <div className="w-3 h-3 rounded-full bg-charcoal z-10"></div>
        </div>
        <div className="lg:col-span-5">
          <FadeUp delay={0.2}>
            <img src="https://picsum.photos/seed/process1/600/400" alt="Discovery" className="w-full aspect-[3/2] object-cover" referrerPolicy="no-referrer" />
          </FadeUp>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 order-3 lg:order-1">
          <FadeUp delay={0.2}>
            <img src="https://picsum.photos/seed/process2/600/400" alt="Concept" className="w-full aspect-[3/2] object-cover" referrerPolicy="no-referrer" />
          </FadeUp>
        </div>
        <div className="lg:col-span-2 hidden lg:flex justify-center relative order-2">
          <div className="w-3 h-3 rounded-full bg-charcoal z-10"></div>
        </div>
        <div className="lg:col-span-5 lg:pl-16 order-1 lg:order-3">
          <FadeUp>
            <span className="font-serif text-6xl text-gray-200 block mb-4">02</span>
            <h3 className="font-serif text-3xl mb-4">Concept</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Translating insights into spatial narratives. We explore materiality, light, and volume through sketches and models.</p>
          </FadeUp>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 text-left lg:text-right lg:pr-16">
          <FadeUp>
            <span className="font-serif text-6xl text-gray-200 block mb-4">03</span>
            <h3 className="font-serif text-3xl mb-4">Craft</h3>
            <p className="text-gray-500 text-sm leading-relaxed">The execution phase is where precision meets artistry. We collaborate with master artisans and builders to bring the design to life with uncompromising quality.</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-2 hidden lg:flex justify-center relative">
          <div className="w-3 h-3 rounded-full bg-charcoal z-10"></div>
        </div>
        <div className="lg:col-span-5">
          <FadeUp delay={0.2}>
            <img src="https://picsum.photos/seed/process3/600/400" alt="Craft" className="w-full aspect-[3/2] object-cover" referrerPolicy="no-referrer" />
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

const Materials = () => (
  <section className="bg-alabaster py-[120px] px-8 lg:px-16 overflow-hidden">
    <div className="max-w-[1440px] mx-auto">
      <FadeUp className="text-center mb-16">
        <h2 className="font-serif text-4xl lg:text-5xl">Raw Elegance</h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">A tactile exploration of the elements that form our foundation.</p>
      </FadeUp>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <FadeUp delay={0.1} className="lg:col-span-3">
          <img src="https://picsum.photos/seed/marble/400/600" alt="Marble Texture" className="w-full aspect-[2/3] object-cover" referrerPolicy="no-referrer" />
        </FadeUp>
        <FadeUp delay={0.2} className="lg:col-span-6 z-10 lg:-mx-8">
          <img src="https://picsum.photos/seed/wood/800/800" alt="Wood Texture" className="w-full aspect-square object-cover shadow-2xl" referrerPolicy="no-referrer" />
        </FadeUp>
        <FadeUp delay={0.3} className="lg:col-span-3">
          <img src="https://picsum.photos/seed/fabric/400/600" alt="Fabric Texture" className="w-full aspect-[2/3] object-cover" referrerPolicy="no-referrer" />
        </FadeUp>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto">
    <FadeUp className="mb-16">
      <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Client Voices</span>
      <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">What Our Clients Say</h2>
    </FadeUp>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-5">
        <FadeUp>
          <p className="font-serif text-3xl lg:text-4xl leading-snug italic text-charcoal relative">
            <span className="absolute -top-8 -left-6 text-6xl text-gray-200 font-sans">"</span>
            Viraj Interiors didn't just design our home; they uncovered its soul. The attention to detail is nothing short of obsessive.
          </p>
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-widest">Elena & Marcus</p>
            <p className="text-xs text-gray-400 mt-1">The Glass Pavilion</p>
          </div>
        </FadeUp>
      </div>
      <div className="lg:col-span-7">
        <FadeUp delay={0.2}>
          <img src="https://picsum.photos/seed/testimonial-interior/1000/700" alt="Interior View" className="w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
        </FadeUp>
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section id="journal" className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto">
    <FadeUp className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
      <h2 className="font-serif text-4xl">Journal</h2>
      <div className="flex gap-6 mt-6 md:mt-0">
        {['All', 'Design', 'Architecture', 'Lifestyle'].map((filter, i) => (
          <button key={filter} className={`text-sm tracking-widest uppercase ${i === 0 ? 'text-charcoal font-medium' : 'text-gray-400 hover:text-charcoal'} transition-colors`}>
            {filter}
          </button>
        ))}
      </div>
    </FadeUp>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-[80px]">
      <FadeUp delay={0.1} className="lg:col-span-6 group cursor-pointer">
        <div className="overflow-hidden mb-6">
          <img src="https://picsum.photos/seed/journal-main/800/500" alt="Journal Featured" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        </div>
        <span className="text-xs tracking-widest uppercase text-gray-400 mb-3 block">Design • Oct 12</span>
        <h3 className="font-serif text-3xl mb-4 group-hover:text-gray-600 transition-colors">The Psychology of Light in Minimalist Spaces</h3>
        <p className="text-gray-500 text-sm">Exploring how natural illumination shapes our emotional response to architecture.</p>
      </FadeUp>
      
      <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((item, i) => (
          <FadeUp key={item} delay={0.2 + (i * 0.1)} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img src={`https://picsum.photos/seed/journal-${item}/400/300`} alt="Journal Post" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs tracking-widest uppercase text-gray-400 mb-2 block">Architecture • Sep 28</span>
            <h3 className="font-serif text-xl group-hover:text-gray-600 transition-colors">Sourcing Sustainable Materials</h3>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-alabaster py-[160px] px-8 lg:px-16">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3"></div>
      <div className="lg:col-span-9">
        <FadeUp>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-6 block">Let's Begin</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal mb-12">
            Ready to Transform<br />Your Space?
          </h2>
          <a href="#contact" className="inline-flex items-center gap-4 text-lg tracking-widest uppercase font-medium border-b-2 border-charcoal pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors">
            Inquire Now <ArrowRight size={20} />
          </a>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4 flex flex-col justify-between">
        <FadeUp>
          <h2 className="font-serif text-4xl mb-12">Get in Touch</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-2">Studio</h4>
              <p className="text-sm leading-relaxed">124 Design District<br/>Copenhagen, Denmark 1050</p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-2">Inquiries</h4>
              <p className="text-sm">hello@virajinteriors.com<br/>+45 33 12 34 56</p>
            </div>
          </div>
        </FadeUp>
      </div>
      <div className="lg:col-span-2 hidden lg:block"></div>
      <div className="lg:col-span-6">
        <FadeUp delay={0.2}>
          <form className="space-y-12">
            <div className="relative">
              <input type="text" id="name" className="w-full bg-transparent border-b border-gray-300 py-4 text-sm focus:outline-none focus:border-charcoal transition-colors peer" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm">Your Name</label>
            </div>
            <div className="relative">
              <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-4 text-sm focus:outline-none focus:border-charcoal transition-colors peer" placeholder=" " />
              <label htmlFor="email" className="absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm">Email Address</label>
            </div>
            <div className="relative">
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 py-4 text-sm focus:outline-none focus:border-charcoal transition-colors peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-sm text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm">Project Details</label>
            </div>
            <button type="button" className="text-sm tracking-widest uppercase font-medium border-b border-charcoal pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
              Submit Inquiry
            </button>
          </form>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-charcoal text-alabaster pt-[80px] pb-[40px] px-8 lg:px-16 overflow-hidden relative">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 relative z-10">
      <div className="lg:col-span-3">
        <span className="font-serif text-4xl font-bold">V</span>
      </div>
      <div className="lg:col-span-3 flex flex-col gap-4">
        <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Navigation</h4>
        {['Home', 'Studio', 'Portfolio', 'Journal', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm hover:text-gray-400 transition-colors">{link}</a>
        ))}
      </div>
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Social</h4>
        <a href="#" className="text-sm flex items-center gap-2 hover:text-gray-400 transition-colors"><Instagram size={16}/> Instagram</a>
        <a href="#" className="text-sm flex items-center gap-2 hover:text-gray-400 transition-colors"><Twitter size={16}/> Twitter</a>
        <a href="#" className="text-sm flex items-center gap-2 hover:text-gray-400 transition-colors"><Linkedin size={16}/> LinkedIn</a>
      </div>
      <div className="lg:col-span-4">
        <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-6">Newsletter</h4>
        <div className="flex border-b border-gray-700 pb-2">
          <input type="email" placeholder="Email Address" className="bg-transparent w-full text-sm focus:outline-none text-alabaster placeholder-gray-600" />
          <button className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors">Subscribe</button>
        </div>
      </div>
    </div>
    
    <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-gray-800 pt-8">
      <p>&copy; {new Date().getFullYear()} Viraj Interiors. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
      </div>
    </div>

    <div className="absolute bottom-[-10%] left-0 w-full text-center pointer-events-none select-none overflow-hidden leading-none">
      <span className="font-serif text-[20vw] font-bold text-white/[0.03] tracking-tighter">VIRAJ</span>
    </div>
  </footer>
);

const HomePage = () => (
  <main>
    <Hero />
    <BrandIntro />
    <Services />
    <WardrobeSection />
    <FeaturedProject />
    <Projects />
    <Process />
    <Materials />
    <Testimonials />
    <Blog />
    <CTA />
    <Contact />
  </main>
);

// Placeholder imports for new pages (we will create them next)
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';

// const ServicesPage = () => <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto"><h1 className="font-serif text-4xl">Services</h1></main>;
// const PortfolioPage = () => <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto"><h1 className="font-serif text-4xl">Portfolio</h1></main>;
// const AboutPage = () => <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto"><h1 className="font-serif text-4xl">About</h1></main>;
// const JournalPage = () => <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto"><h1 className="font-serif text-4xl">Journal</h1></main>;
// const ContactPage = () => <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto"><h1 className="font-serif text-4xl">Contact</h1></main>;

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-white min-h-screen font-sans text-charcoal selection:bg-charcoal selection:text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
