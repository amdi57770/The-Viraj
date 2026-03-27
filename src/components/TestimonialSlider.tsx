import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Viraj Interiors didn't just design our home; they uncovered its soul. The attention to detail is nothing short of obsessive.",
    name: "Elena & Marcus",
    location: "The Glass Pavilion",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
    portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "A masterclass in restraint and elegance. They transformed our urban loft into a serene sanctuary that feels both expansive and intimate.",
    name: "Julian Vance",
    location: "Urban Loft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Their understanding of light and materiality is unparalleled. Every morning, the space reveals a new layer of beauty.",
    name: "Sarah Chen",
    location: "Coastal Retreat",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "From the bespoke joinery to the curated art pieces, the entire process was seamless and deeply collaborative.",
    name: "David & Emma",
    location: "Heritage Estate",
    image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1000&auto=format&fit=crop",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

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

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section 
      className="w-full bg-[#FEFAF5] py-24 lg:py-[120px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <FadeUp className="mb-16">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-3 block">Client Voices</span>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
          <div className="lg:col-span-5 relative z-10">
            <div className="relative min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="font-serif text-3xl lg:text-4xl leading-snug italic text-[#1A1A1A] relative">
                    <span className="absolute -top-8 -left-6 text-6xl text-gray-200 font-sans">"</span>
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="mt-12 flex items-center gap-6">
                    <img 
                      src={testimonials[currentIndex].portrait} 
                      alt={testimonials[currentIndex].name} 
                      className="w-[60px] h-[60px] rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-[#1A1A1A]">{testimonials[currentIndex].name}</p>
                      <p className="text-xs text-gray-400 mt-1">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <FadeUp delay={0.2} className="mt-12 flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={testimonials[currentIndex].image} 
                  alt="Interior View" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
