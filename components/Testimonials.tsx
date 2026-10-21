'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// PLACEHOLDER COPY: replace with real feedback (with permission) before launch.
const featured: Testimonial = {
  quote:
    'I had my questionnaire data in SPSS but couldn’t make sense of the output. Project Clinic explained each table, what the chi-square result meant, how to write it up in Chapter Four, until I could explain it myself. When my panel asked about my findings at defense, I didn’t freeze.',
  name: 'Chidinma O.',
  detail: 'Final-year project · Economics, University of Lagos'
};

const others: Testimonial[] = [
  {
    quote:
      'My supervisor rejected my first two topics for being too broad. They helped me narrow it down and tighten my objectives, and my proposal was approved on the next submission.',
    name: 'Babatunde A.',
    detail: 'Research proposal · Business Administration, Obafemi Awolowo University'
  },
  {
    quote:
      'My references were a mix of three different styles. They fixed the formatting and showed me how APA actually works, so my next paper was consistent from the start.',
    name: 'Aisha M.',
    detail: 'Seminar paper · Accounting, Ahmadu Bello University'
  }
];

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" aria-hidden />
      ))}
    </div>
  );
}

function Avatar({ name, dark }: { name: string; dark?: boolean }) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const avatarUrl = `https://tapback.co/api/avatar/${encodeURIComponent(name)}.webp`;

  const containerClasses = `relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-semibold select-none ${
    dark ? 'bg-secondary text-primary' : 'bg-primary text-white'
  }`;

  return (
    <span aria-hidden className={containerClasses}>
      {!hasError ? (
        <img
          src={avatarUrl}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : (
        initials
      )}
    </span>
  );
}

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12"
    >
      <div className="mb-8 max-w-xl">
        <h3 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">What our students say</h3>
        <p className="mt-3 text-slate-600">Real feedback from students we have supported through their research.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* Featured: the one strong block, in brand navy */}
        <figure className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-primary p-8 text-white shadow-soft sm:p-10 lg:col-span-3">
          <Quote aria-hidden className="absolute -right-4 -top-4 h-36 w-36 text-white/5" />
          <div className="relative">
            <Stars />
            <blockquote className="mt-6 text-xl font-medium leading-9 sm:text-2xl sm:leading-10">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
          </div>
          <figcaption className="relative mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
            <Avatar name={featured.name} dark />
            <div>
              <p className="font-semibold">{featured.name}</p>
              <p className="text-sm text-white/60">{featured.detail}</p>
            </div>
          </figcaption>
        </figure>

        {/* Supporting quotes: lighter, so the featured one leads */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          {others.map((t, i) => (
            <figure key={i} className="flex flex-1 flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-6 sm:p-7">
              <div>
                <Stars />
                <blockquote className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.div>
  );
}