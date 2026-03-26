import React, { useState } from 'react';
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    vision: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic form handling logic (no backend required for this session)
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will get back to you shortly.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: '',
      location: '',
      vision: ''
    });
  };

  return (
    <main className="bg-white pt-[100px] min-h-screen">
      {/* SECTION 1 — Page Hero */}
      <section className="bg-alabaster pt-[160px] pb-[120px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <FadeUp>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-8 block font-sans">
              Get In Touch
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal mb-6">
              Let's Make Something Remarkable
            </h1>
            <p className="text-gray-500 text-lg font-sans max-w-2xl mx-auto">
              We take on a limited number of projects each year. Tell us about yours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2 — Two-Column Layout */}
      <section className="bg-white py-[160px] px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN — Studio Details */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <FadeUp delay={0.1}>
              <div className="mb-10">
                <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-4 font-sans">
                  Studio
                </h4>
                <p className="text-charcoal text-base leading-relaxed font-sans">
                  14 Napean Sea Road,<br />
                  Mumbai 400036
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-4 font-sans">
                  Enquiries
                </h4>
                <p className="text-charcoal text-base leading-relaxed font-sans">
                  studio@virajinteriors.com<br />
                  +91 98200 XXXXX
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-4 font-sans">
                  Hours
                </h4>
                <p className="text-charcoal text-base leading-relaxed font-sans">
                  Mon–Fri, 10am–6pm IST
                </p>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-4 font-sans">
                  Follow
                </h4>
                <div className="flex gap-4 text-charcoal text-base font-sans">
                  <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="hover:text-gray-500 transition-colors">Pinterest</a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN — Inquiry Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-12">
                
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Phone (Optional)
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="projectType" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Project Type
                  </label>
                  <select 
                    id="projectType" 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans appearance-none rounded-none"
                  >
                    <option value="" disabled>Select a project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="location" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Project Location
                  </label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans" 
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="vision" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 font-sans">
                    Tell us about your vision
                  </label>
                  <textarea 
                    id="vision" 
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors font-sans resize-none" 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-charcoal text-white py-5 text-sm tracking-widest uppercase font-medium hover:bg-gray-800 transition-colors font-sans mt-8"
                >
                  Send Enquiry
                </button>

              </form>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* SECTION 3 — Closing Line */}
      <section className="bg-white py-[120px] px-8 lg:px-16 text-center">
        <div className="max-w-[1440px] mx-auto">
          <FadeUp>
            <h2 className="font-serif italic text-3xl lg:text-4xl text-charcoal">
              "Good design begins with a conversation."
            </h2>
          </FadeUp>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
