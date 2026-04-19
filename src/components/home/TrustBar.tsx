"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { staggerContainer, staggerItem } from "./motion-variants";

const stats = [
  { label: "500+", sub: "Clients" },
  { label: "5★", sub: "Rating" },
  { label: "Certified", sub: "Experts" },
  { label: "24/7", sub: "Support" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200/80 bg-gray-100/80 py-10">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label + s.sub}
              variants={staggerItem}
              className="text-center"
            >
              <p className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                {s.label}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
