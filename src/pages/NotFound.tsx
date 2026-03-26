import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="min-h-screen pt-[120px] px-8 lg:px-16 max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center">
    <h1 className="font-serif text-6xl text-charcoal mb-4">404</h1>
    <p className="text-lg font-sans text-gray-500 mb-8">The page you are looking for does not exist.</p>
    <Link to="/" className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-medium border-b border-charcoal pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
      Return Home
    </Link>
  </main>
);

export default NotFound;
