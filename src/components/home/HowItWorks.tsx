"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";

const steps = [
  {
    n: "01",
    title: "Detailed Inspection",
    body: "We assess entry points, infestation severity, and risk areas before recommending a tailored plan.",
  },
  {
    n: "02",
    title: "Certified Treatment",
    body: "Targeted application with certified products—timed to minimize disruption to your routine.",       
  },
  {
    n: "03",
    title: "Follow-up Support",
    body: "Clear guidance, optional revisit windows, and support if activity returns for complete peace of mind.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Our process
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A simple, transparent three-step process designed for clarity and consistent results.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-10 pt-16 shadow-sm transition-all hover:border-green-500/20 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 select-none text-[8rem] font-black leading-none text-slate-100/80 transition-colors group-hover:text-green-50/50"
                aria-hidden
              >
                {step.n}
              </span>
              <h3 className="relative z-10 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="relative z-10 mt-5 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}