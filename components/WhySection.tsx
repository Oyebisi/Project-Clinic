'use client';

import { motion } from 'framer-motion';
import { Briefcase, Shield, Clock3, DollarSign } from 'lucide-react';

const advantages = [
  { icon: Briefcase, title: 'Professional Support', description: 'Experienced consultants deliver polished, scholarly work.' },
  { icon: Shield, title: 'Confidential Service', description: 'Secure communication and discreet handling of every request.' },
  { icon: Clock3, title: 'Timely Delivery', description: 'Reliable deadlines and efficient project coordination.' },
  { icon: DollarSign, title: 'Affordable Pricing', description: 'Flexible support packages designed for student budgets.' }
];

export default function WhySection() {
  return (
    <section id="why" className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Why Choose Us</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Trusted, confidential, and affordable academic support</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                <item.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
