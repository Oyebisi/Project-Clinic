'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import NavBar from './NavBar';

const heroStats = [
  { label: 'Expert Guidance', description: 'Structured support for every research stage.' },
  { label: 'On-time Delivery', description: 'Fast turnaround with consistent progress updates.' }
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8F9FA] pb-24 pt-28 md:pb-32 lg:pt-32">
      <NavBar />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="mb-5 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary ring-1 ring-secondary/15">
            Trusted Academic Support
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Professional Academic Research Support
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Project Clinic provides professional support with research projects, proposals, seminar papers, editing, formatting, plagiarism checking, data analysis, and presentation preparation. We help students prepare high-quality academic work while encouraging originality and compliance with their institution's academic standards.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-yellow-400">
              Get Started <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a href="https://wa.link/akv6mj" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              <MessageCircle className="mr-3 h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[42px] bg-white p-6 shadow-soft sm:p-10">
          <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-secondary via-[#ffc35f] to-secondary/80" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 py-10">
            <div className="flex h-72 w-full items-center justify-center rounded-[32px] bg-gradient-to-br from-[#eff6ff] via-[#f8fafc] to-[#ffffff] p-6 shadow-inner">
              <div className="flex h-full w-full items-center justify-center rounded-[24px] bg-primary/5">
                <div className="grid h-full w-full place-items-center text-center text-slate-500">
                  <p className="text-4xl font-bold text-primary/90">Project Clinic</p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    Academic support for research, university work, and polished presentations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
