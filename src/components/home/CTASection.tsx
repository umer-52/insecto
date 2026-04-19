"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";

const PHONE = "tel:+923122295531";

export function CTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-20 text-center shadow-2xl shadow-slate-900/20 sm:px-16 sm:py-24"
        >
          {/* Subtle Background Elements */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" aria-hidden />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to secure your property?
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
              Get a free inspection and a clear, no-obligation quote from our certified
              technicians today. We're ready to help you across Pakistan.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-10 py-4 text-center text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-green-600 hover:shadow-green-500/30 sm:w-auto"
                >
                  Book Free Inspection
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <a
                  href={PHONE}
                  className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/5 px-10 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
            
            <p className="mt-8 text-sm font-medium text-slate-400">
              Same-day slots available in major cities.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}