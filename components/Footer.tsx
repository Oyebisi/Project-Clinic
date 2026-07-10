'use client';

import { ArrowRight, Facebook, Linkedin, Twitter, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.2fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary text-primary">PC</div>
              <div>
                <p className="text-lg font-semibold">Project Clinic</p>
                <p className="text-sm text-slate-200">Your trusted academic research support partner.</p>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-300">Project Clinic provides reliable academic research support for students, including guidance, editing, formatting, data analysis, and presentation preparation.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="#home" className="transition hover:text-secondary">Home</a></li>
              <li><a href="#about" className="transition hover:text-secondary">About</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Services</a></li>
              <li><a href="#contact" className="transition hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Services</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="#services" className="transition hover:text-secondary">Research Support</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Editing & Proofreading</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Data Analysis</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Presentations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h4>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3"><Phone size={16} /> +234 911 303 5363</p>
              <p className="flex items-center gap-3"><Mail size={16} /> projectclinic01@gamil.com</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-700 text-slate-100 transition hover:bg-secondary hover:text-primary"><Facebook size={16} /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-700 text-slate-100 transition hover:bg-secondary hover:text-primary"><Twitter size={16} /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-700 text-slate-100 transition hover:bg-secondary hover:text-primary"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-600 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Project Clinic. All rights reserved.</p>
          <p className="inline-flex items-center gap-2 text-slate-400">Built for modern academic consulting <ArrowRight size={16} /></p>
        </div>
      </div>
    </footer>
  );
}
