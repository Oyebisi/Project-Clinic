'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sample Topics', href: '#topics' },
  { label: 'Contact', href: '#contact' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isSticky ? 'backdrop-blur-xl bg-white/90 shadow-soft' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary text-primary shadow-soft">PC</div>
          <div>
            <p className="text-base font-bold">Project Clinic</p>
            <p className="text-xs text-slate-500">Academic Research Support</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-primary" onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-yellow-400 md:inline-flex">
            Get Started
          </a>

          <button type="button" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 md:hidden" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="border-t border-slate-200 bg-white/95 shadow-soft md:hidden">
          <div className="space-y-2 px-6 pb-4 pt-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100" onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block rounded-3xl bg-secondary px-4 py-3 text-center text-sm font-semibold text-primary transition hover:bg-yellow-400">
              Get Started
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
