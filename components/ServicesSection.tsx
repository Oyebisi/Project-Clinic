'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, Presentation, Building2, PencilRuler, Book, BarChart3, Edit3, FileSpreadsheet } from 'lucide-react';

const services = [
  { icon: BookOpen, title: 'Research Project Support', description: 'Structured guidance through project planning, documentation, and submission.' },
  { icon: FileText, title: 'Research Proposal Assistance', description: 'Create compelling proposals that reflect academic rigor and clarity.' },
  { icon: Presentation, title: 'Seminar Papers', description: 'High-quality writing and structure for seminar presentations and reports.' },
  { icon: Building2, title: 'SIWES Report Support', description: 'Complete SIWES documentation, analysis, and review guidance.' },
  { icon: PencilRuler, title: 'Assignment Guidance', description: 'Clear structure, research advice and formatting support for assignments.' },
  { icon: Book, title: 'Literature Review Assistance', description: 'Find and organize relevant sources with academic review techniques.' },
  { icon: BarChart3, title: 'Data Analysis', description: 'SPSS, Excel, and Python analysis to interpret findings with confidence.' },
  { icon: Edit3, title: 'Editing & Proofreading', description: 'Polish your language, structure, and citations for academic excellence.' },
  { icon: FileSpreadsheet, title: 'Presentation Preparation', description: 'Design and refine slides for clear, confident academic presentations.' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Services</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Empowering your research with expert services</h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">From research planning to final presentation, Project Clinic offers the tools and expertise you need.</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-secondary/20">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary/10 text-secondary transition duration-300 group-hover:bg-secondary/20">
                <service.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
