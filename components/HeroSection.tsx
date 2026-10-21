'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import bookImage from '../public/assets/images/Book-for-website.jpg';
import NavBar from './NavBar';

// Each deliverable has a word for the headline and a short status line for the image card.
const deliverables = [
  { word: 'research projects', status: 'Chapter 3 methodology reviewed', progress: 62 },
  { word: 'proposals', status: 'Problem statement refined', progress: 28 },
  { word: 'seminar papers', status: 'References formatted to style guide', progress: 81 },
  { word: 'data analysis', status: 'Regression output interpreted', progress: 54 },
  { word: 'presentations', status: 'Defense slides rehearsed', progress: 96 }
];

const assurances = [
  'Structured support for every research stage',
  'Fast turnaround with steady progress updates'
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % deliverables.length), 2600);
    return () => clearTimeout(id);
  }, [index, reduceMotion]);

  const current = deliverables[index];

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F0] pb-24 pt-28 md:pb-32 lg:pt-32">
      <NavBar />

      {/* Faint ruled-paper lines: a nod to the notebook, kept very quiet */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 39px, rgba(148,163,184,0.18) 40px)'
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary ring-1 ring-secondary/15">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Trusted Academic Support
          </span>

          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Professional support for your
            {/* Words share one grid cell so the container is as wide as the longest word: no layout shift */}
            <span className="relative mt-1 grid overflow-hidden pb-2" aria-live="polite">
              {deliverables.map((d, i) => (
                <motion.span
                  key={d.word}
                  aria-hidden={i !== index}
                  className="col-start-1 row-start-1 text-secondary"
                  initial={false}
                  animate={
                    i === index
                      ? { y: '0%', opacity: 1 }
                      : { y: i < index ? '-110%' : '110%', opacity: 0 }
                  }
                  transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 60, damping: 14 }}
                >
                  {d.word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Project Clinic provides professional support with research projects, proposals, seminar papers, editing,
            formatting, plagiarism checking, data analysis, and presentation preparation. We help students prepare
            high-quality academic work while encouraging originality and compliance with their institution&apos;s
            academic standards.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Started
              <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </a>
            <a
              href="https://wa.link/akv6mj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <MessageCircle className="mr-3 h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Quieter than two bordered cards: just the two promises */}
          <ul className="mt-12 space-y-3 border-l-2 border-secondary/60 pl-5">
            {assurances.map((text) => (
              <li key={text} className="flex items-center gap-3 text-sm text-slate-700 sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md pb-10 pr-5 lg:max-w-lg sm:pr-7"
        >

          {/* Arch-shaped, full-bleed photo: no frame, no padding */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[32px] bg-primary shadow-soft">
            <Image
              src={bookImage}
              alt="Student working on academic research with books and a laptop"
              fill
              sizes="(min-width: 1024px) 512px, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>

          {/* Live status card: changes with the headline word, so the page feels like work in progress */}
          <div className="absolute bottom-0 left-4 right-9 rounded-2xl bg-primary p-4 text-white shadow-soft ring-1 ring-white/10 sm:-left-8 sm:right-auto sm:w-72">
            <p className="text-xs text-white/60">Now on the desk</p>
            <div className="relative mt-1 h-6 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current.status}
                  initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { y: -16, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 truncate text-sm font-semibold"
                >
                  {current.status}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full rounded-full bg-secondary"
                initial={false}
                animate={{ width: `${current.progress}%` }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}