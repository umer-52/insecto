"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const PHONE = "tel:+923122295531";

const trustPoints = [
  "500+ Homes Treated",
  "Same Day Service",
  "Govt Approved Chemicals",
];

export function Hero() {
  return (
    <header className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <Container className="grid min-h-[85vh] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-0">      
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600"
          >
            Pakistan-wide service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]"
          >
            Safe &amp; Certified Fumigation Services in Pakistan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Protect your family and property with inspection-led treatments, certified
            products, and technicians trained for residential and commercial sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-green-500/35 sm:w-auto"
              >
                Get Free Inspection
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={PHONE}
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-center text-base font-semibold text-slate-900 shadow-sm transition-all hover:border-green-500/30 hover:bg-slate-50 sm:w-auto"
              >
                Call Now
              </a>
            </motion.div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8"
            aria-label="Trust highlights"
          >
            {trustPoints.map((text, i) => (
              <li key={text} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[10px] font-black text-white shadow-sm"
                  aria-hidden
                >
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/5] rounded-3xl bg-slate-200 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80"
              alt="Certified technician performing professional pest control at a home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md ring-1 ring-slate-200/80">
              <p className="text-sm font-bold text-slate-900">Licensed &amp; Insured</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Structured protocols for homes, offices, and industrial warehouses nationwide.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}