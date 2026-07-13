"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [hasError, setHasError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ fullName?: string; email?: string; phone?: string; message?: string }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage('');
    setHasError(false);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const website = formData.get('website')?.toString().trim();

    const errors: { fullName?: string; email?: string; phone?: string; message?: string } = {};
    if (!fullName) errors.fullName = 'Please enter your full name.';
    if (!email) errors.email = 'Please enter your email address.';
    if (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address.';
    }
    if (!phone) errors.phone = 'Please enter your phone number.';
    if (!message) errors.message = 'Please enter your message.';

    if (website) {
      return setStatusMessage('Spam detected.');
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setHasError(true);
      setStatusMessage('Please fix the highlighted fields before sending.');
      return;
    }

    setIsSending(true);

    try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          setHasError(true);
          setStatusMessage(
            'Email service is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local.'
          );
          setIsSending(false);
          return;
        }

        const templateParams = {
          fullName,
          email,
          phone,
          message,
        };

        // Initialize EmailJS with the public key (safe to expose client-side)
        try {
          // some versions of emailjs require init; calling init is idempotent
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (emailjs.init) emailjs.init(publicKey);
        } catch (e) {
          // ignore init errors and fallback to passing publicKey to send()
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setHasError(false);
        setFieldErrors({});
        setStatusMessage('Thank you! Your message has been sent successfully.');
        formRef.current?.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : 'There was a problem sending your message. Please try again later.';
      setHasError(true);
      setStatusMessage(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[32px] border border-slate-200 bg-[#F8F9FA] p-10 shadow-soft">
            <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Contact</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Get in touch with Project Clinic</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">Send your inquiry or request a consultation to begin your academic support journey.</p>

            <div className="mt-10 space-y-5 text-slate-700">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-sm text-slate-600">+234 911 303 5363</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm text-slate-600">+234 911 303 5363</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-slate-600">projectclinic01@gamil.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 text-slate-500">
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white shadow-sm transition hover:bg-secondary/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white shadow-sm transition hover:bg-secondary/10">
                <Twitter size={18} />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white shadow-sm transition hover:bg-secondary/10">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
            <form ref={formRef} className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
              </div>

              <div>
                <label htmlFor="fullName" className="mb-3 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  aria-invalid={!!fieldErrors.fullName}
                  className={`w-full rounded-3xl border px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${fieldErrors.fullName ? 'border-rose-500' : 'border-slate-200 bg-slate-50'}`}
                />
                {fieldErrors.fullName ? <p className="mt-2 text-sm text-rose-600">{fieldErrors.fullName}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-3 block text-sm font-semibold text-slate-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!fieldErrors.email}
                  className={`w-full rounded-3xl border px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${fieldErrors.email ? 'border-rose-500' : 'border-slate-200 bg-slate-50'}`}
                />
                {fieldErrors.email ? <p className="mt-2 text-sm text-rose-600">{fieldErrors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="mb-3 block text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  aria-invalid={!!fieldErrors.phone}
                  className={`w-full rounded-3xl border px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${fieldErrors.phone ? 'border-rose-500' : 'border-slate-200 bg-slate-50'}`}
                />
                {fieldErrors.phone ? <p className="mt-2 text-sm text-rose-600">{fieldErrors.phone}</p> : null}
              </div>
              <div>
                <label htmlFor="message" className="mb-3 block text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your academic need"
                  aria-invalid={!!fieldErrors.message}
                  className={`w-full rounded-3xl border px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${fieldErrors.message ? 'border-rose-500' : 'border-slate-200 bg-slate-50'}`}
                />
                {fieldErrors.message ? <p className="mt-2 text-sm text-rose-600">{fieldErrors.message}</p> : null}
              </div>
              <button disabled={isSending} type="submit" className={`inline-flex items-center justify-center rounded-full bg-secondary px-6 py-4 text-sm font-semibold text-primary transition ${isSending ? 'cursor-not-allowed opacity-70' : 'hover:bg-yellow-400'}`}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage ? (
                <p className={`text-sm ${hasError ? 'text-rose-600' : 'text-slate-700'}`}>{statusMessage}</p>
              ) : null}
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-[#F8F9FA] p-16 text-center shadow-soft">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <MapPin size={20} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Google Maps Placeholder</p>
            <p className="max-w-xl text-sm leading-7 text-slate-600">A modern contact experience ready for map integration when the website is deployed.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
