"use client";

import { motion } from "framer-motion";
import { LuQuote } from "react-icons/lu";
import { Container } from "./Container";
import { staggerContainer, staggerItem } from "./motion-variants";

const testimonials = [
  {
    content:
      "Insecto did an amazing job with our termite issue. They were professional, punctual, and gave us a clear plan for follow-up.",
    author: "Zeeshan Ahmed",
    role: "Homeowner in Karachi",
  },
  {
    content:
      "Highly recommend their bed bug treatment. We tried other services but only Insecto managed to clear it completely.",
    author: "Mariam Khan",
    role: "Property Manager",
  },
  {
    content:
      "Great experience with their general pest control. The technicians were knowledgeable and very careful with safety protocols.",
    author: "Faisal Siddiqui",
    role: "Business Owner",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50/50 py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Success stories
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.li key={t.author} variants={staggerItem} className="flex">
              <motion.article
                whileHover={{ y: -6 }}
                className="relative flex flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-10 shadow-sm transition-all hover:border-green-500/20 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute -top-5 right-10 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/20">
                  <LuQuote className="h-5 w-5" aria-hidden />
                </div>
                <p className="flex-1 text-base leading-relaxed text-slate-600 italic">
                  "{t.content}"
                </p>
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                    {t.role}
                  </p>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}