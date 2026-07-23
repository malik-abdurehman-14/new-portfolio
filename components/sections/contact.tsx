'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { contactInfo, budgetOptions, timelineOptions } from '@/lib/data/contact';
import { SectionHeader } from '@/components/shared/section-header';
import { Magnetic } from '@/components/shared/magnetic';

const contactCards = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: MapPin, label: 'Location', value: contactInfo.location, href: '#' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: contactInfo.linkedin },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
    budget: '',
    timeline: '',
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const phoneNumber = '923244748625';

  const message = `
Hello Abdurehman,

I would like to discuss a project with you.

Name: ${form.name}
Email: ${form.email}
Company: ${form.company || 'Not provided'}
Budget: ${form.budget || 'Not selected'}
Timeline: ${form.timeline || 'Not selected'}

Project Details:
${form.details}
  `.trim();

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      company: '',
      details: '',
      budget: '',
      timeline: '',
    });
  }, 4000);
};

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated glowing background */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-electric/10 blur-[120px] animate-blob" />
      <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-purple/10 blur-[120px] animate-blob" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s build your next{' '} <span className="text-gradient-blue">digital product</span>
            </>
          }
          description="Share your project requirements, goals, and timeline. I’ll review the details and respond as soon as possible."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-purple/20 border border-white/10">
                  <card.icon className="h-5 w-5 text-electric" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{card.label}</div>
                  <div className="text-sm font-medium text-white">{card.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="mt-2 rounded-2xl border border-white/10 bg-gradient-to-br from-electric/5 to-purple/5 p-5 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-sm font-semibold text-white">{contactInfo.availability}</span>
              </div>
              <p className="mt-2 text-xs text-white/50">
                 Available for selected website, web application, SaaS, and mobile app projects.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur sm:p-8 lg:col-span-3"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-[#0a0a0a]/95 backdrop-blur"
              >
                <CheckCircle2 className="h-16 w-16 text-green-400" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">Message sent!</h3>
                <p className="mt-1 text-sm text-white/50">I'll get back to you within 24 hours.</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="input-field"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="input-field"
                />
              </Field>
              <Field label="Company">
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Inc."
                  className="input-field"
                />
              </Field>
              <Field label="Budget">
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="input-field"
                >
                  <option value="">Select budget</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Timeline">
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="input-field"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project Details" required>
                <textarea
                  required
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Tell me about your project, goals, and what you'd like to build..."
                  rows={5}
                  className="input-field resize-none"
                />
              </Field>
            </div>

            <Magnetic className="mt-6 w-full">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-6 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </Magnetic>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
        {label} {required && <span className="text-electric">*</span>}
      </span>
      {children}
    </label>
  );
}
