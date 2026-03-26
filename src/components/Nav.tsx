import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navItems = [
    { name: 'Work', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Studio', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' }
  ];
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-charcoal">V</Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setActive(item.name)}
              className="relative flex flex-col items-center gap-1 text-sm tracking-widest uppercase text-gray-400 hover:text-charcoal transition-colors group"
            >
              <span>{item.name}</span>
              <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${active === item.name ? 'bg-charcoal opacity-100 scale-100' : 'bg-charcoal opacity-0 scale-0 group-hover:opacity-30 group-hover:scale-100'}`}></span>
            </Link>
          ))}
        </div>
        <button className="md:hidden text-charcoal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
