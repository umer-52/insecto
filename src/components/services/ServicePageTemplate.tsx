"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck, LuChevronDown, LuShieldCheck } from "react-icons/lu";
import { Container } from "@/components/home/Container";
import { CTASection } from "@/components/home/CTASection";
import type { ServiceContent } from "@/content/services";

const PHONE = "tel:+923122295531";

function Faq({ faqs }: { faqs: NonNullable<ServiceContent["faqs"]> }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = useMemo(() => faqs, [faqs]);

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Quick answers to common questions about our services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div 
                key={item.q}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen ? "border-green-500/30 bg-green-50/20 shadow-lg shadow-green-500/5" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen((v) => (v === idx ? null : idx))}
                  className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
                >
                  <span className={`text-base font-bold transition-colors ${isOpen ? "text-green-900" : "text-slate-900"}`}>
                    {item.q}
                  </span>
                  <LuChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-green-600" : "text-slate-400"
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-sm leading-7 text-slate-600">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ServicePageTemplate({ service }: { service: ServiceContent }) {
  return (
    <article>
      <header className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-20 sm:py-32">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" aria-hidden />
        
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 ring-1 ring-inset ring-green-600/20">
                <LuShieldCheck className="h-3.5 w-3.5" />
                Certified Service
              </div>
              <h1 className="mt-8 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {service.headline}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-10 py-4 text-center text-base font-bold text-white shadow-xl shadow-green-500/20 transition-all hover:bg-green-600 hover:shadow-green-500/30 sm:w-auto"
                  >
                    Get Free Inspection
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={PHONE}
                    className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-center text-base font-bold text-slate-900 shadow-sm transition-all hover:border-green-500/30 hover:bg-slate-50 sm:w-auto"
                  >
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-200 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </Container>
      </header>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-wider text-green-600">Advantages</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Key Benefits
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Premium care for your property using the industry’s most advanced protocols.
              </p>
              <ul className="mt-10 space-y-6">
                {service.benefits.map((b, i) => (
                  <motion.li 
                    key={b} 
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/20">
                      <LuCheck className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="pt-1 font-medium">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] border border-slate-200/60 bg-slate-50/50 p-10 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">What’s Included</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our structured process ensures thorough results with minimal disruption to your daily routine.     
              </p>
              <div className="mt-10 grid gap-5">
                {service.process.map((s, i) => (
                  <div
                    key={s.title}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-green-500/20 hover:shadow-md hover:shadow-slate-900/5"
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600/80">
                      Step {i + 1}
                    </p>
                    <p className="mt-2 font-bold text-slate-900">{s.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50/50 py-24 sm:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-green-600">Workflow</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our Proofing Process
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A consistent, results-oriented methodology for every client.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-12">
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-10 pt-16 shadow-sm transition-all hover:border-green-500/20 hover:shadow-2xl hover:shadow-slate-900/5"
              >
                <span
                  className="pointer-events-none absolute left-0 top-0 select-none text-[9rem] font-black leading-none text-slate-100 transition-colors group-hover:text-green-50/50"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
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

      {service.faqs?.length ? <Faq faqs={service.faqs} /> : null}
      <CTASection />
    </article>
  );
}