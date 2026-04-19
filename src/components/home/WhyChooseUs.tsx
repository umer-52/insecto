"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuBadgeCheck, LuFlaskConical, LuHeadset, LuTruck } from "react-icons/lu";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const bullets = [
  {
    title: "Certified Chemicals",
    desc: "Safe, govt-approved formulations applied with professional care.",
    icon: LuFlaskConical,
  },
  {
    title: "Expert Technicians",
    desc: "Rigorous training and clear protocols for all property types.",
    icon: LuBadgeCheck,
  },
  {
    title: "Same Day Service",
    desc: "Rapid scheduling for urgent pest issues when availability allows.",
    icon: LuTruck,
  },
  {
    title: "Satisfaction Guarantee",
    desc: "We stand behind our work with clear follow-up and accountability.",
    icon: LuHeadset,
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-24 bg-gray-50/50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern family home protected by professional pest control"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl font-bold text-white drop-shadow-md">  
                  Premium protection for your home.
                </p>
                <p className="mt-2 text-sm text-slate-100/90">
                  Certified technicians you can trust.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                The Insecto Difference
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We combine rigorous inspection, clear treatment plans, and accountable follow-up—so
                you always know what happened and what comes next.
              </p>
            </FadeIn>

            <ul className="mt-14 space-y-8">
              {bullets.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.li
                    key={b.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex gap-6"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-green-600 shadow-md shadow-slate-200/50 ring-1 ring-slate-200/60 transition-colors group-hover:bg-green-500 group-hover:text-white group-hover:shadow-green-500/20">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}