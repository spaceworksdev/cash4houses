'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How It Works', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-premium border-b border-slate-100/50'
        : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <a href="#" className="group">
            <img className='h-8' src="./cash4houses.png" alt="" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative text-slate-600 hover:text-slate-900 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA & Phone */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center gap-5"
        >
          <a
            href="tel:+13055550123"
            className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 font-semibold transition-colors text-sm"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <span>(305) 555-0123</span>
          </a>
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.97]">
            Get Offer
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2.5 hover:bg-slate-50 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-slate-900" />
          ) : (
            <Menu className="w-5 h-5 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-4 rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+13055550123"
                  className="flex items-center gap-3 text-slate-900 font-semibold py-3 px-4"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span>(305) 555-0123</span>
                </a>
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all w-full text-base">
                  Get Offer
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
