'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Timer, Users } from 'lucide-react';

const features = [
  { icon: CheckCircle2, title: 'Professional Quality', description: 'Academic-standard work reviewed by experienced consultants.' },
  { icon: ShieldCheck, title: 'Confidentiality', description: 'Your privacy is respected through every stage of support.' },
  { icon: Timer, title: 'Timely Delivery', description: 'Reliable timelines and fast responses for urgent tasks.' },
  { icon: Users, title: 'Friendly Support', description: 'Clear communication and guidance from start to finish.' }
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">About Project Clinic</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Academic research support designed for students</h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">We assist learners with every step of research preparation while emphasizing professionalism, discretion, and academic integrity.</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-soft">
            <h3 className="text-2xl font-semibold text-primary">How we help you succeed</h3>
            <ul className="mt-8 space-y-5 text-slate-600">
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <CheckCircle2 size={20} />
                </span>
                Research guidance and topic refinement
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <CheckCircle2 size={20} />
                </span>
                Editing, proofreading, and formatting
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <CheckCircle2 size={20} />
                </span>
                Data analysis with SPSS, Excel, and Python
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <CheckCircle2 size={20} />
                </span>
                Presentation preparation and seminar support
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <feature.icon size={22} />
                </div>
                <h4 className="mt-6 text-lg font-semibold text-primary">{feature.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
