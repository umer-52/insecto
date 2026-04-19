"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";

const cities = ["Karachi", "Lahore", "Islamabad", "Hyderabad"];

export function ServiceAreas() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-green-600">Availability</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Serving Across Pakistan
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Certified technicians available in major metros and surrounding areas—get in touch to confirm coverage in your city.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {cities.map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-2xl border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-green-500/30 hover:shadow-md hover:shadow-slate-900/5"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}