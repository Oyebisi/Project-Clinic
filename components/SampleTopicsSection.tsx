'use client';

import { motion } from 'framer-motion';

const topicGroups = [
  { category: 'Computer Science', topics: ['Online Examination System', 'Student Result Management System', 'Library Management System', 'Hospital Management System'] },
  { category: 'Business Administration', topics: ['Employee Motivation and Productivity', 'Social Media Marketing'] },
  { category: 'Accounting', topics: ['Internal Control Systems', 'Fraud Detection'] }
];

export default function SampleTopicsSection() {
  return (
    <section id="topics" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Sample Topics</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Inspiring research ideas for your next project</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {topicGroups.map((group, index) => (
            <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="inline-flex rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">{group.category}</p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {group.topics.map((topic) => (
                  <li key={topic} className="pl-5 text-sm leading-7 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-secondary relative">
                    {topic}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-yellow-400">
                Request Similar Assistance
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
