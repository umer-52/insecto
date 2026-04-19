"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuBug, LuBuilding2, LuHouse, LuShieldCheck } from "react-icons/lu";
import { Container } from "./Container";
import { staggerContainer, staggerItem } from "./motion-variants";

const services = [
  {
    title: "Termite Control",
    description:
      "Advanced barrier treatments and soil injections to protect your property's foundation and woodwork.",
    icon: LuHouse,
    href: "/services/termite-control",
  },
  {
    title: "Bed Bug Treatment",
    description:
      "Multi-stage treatment cycles for furniture and mattresses to ensure complete eradication.",
    icon: LuBug,
    href: "/services/bed-bugs",
  },
  {
    title: "General Pest Control",
    description:
      "Effective solutions for cockroaches, ants, and rodents tailored for homes and businesses.",
    icon: LuShieldCheck,
    href: "/services/general-pest",
  },
  {
    title: "Warehouse Fumigation",
    description:
      "Large-scale commercial fumigation services with scheduling that fits your logistics and operations.",
    icon: LuBuilding2,
    href: "/services",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Pest Control Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Comprehensive, inspection-led solutions backed by certified products and expert technicians.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li key={item.title} variants={staggerItem} className="flex">
                <Link href={item.href} className="flex w-full">
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex w-full flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:border-green-500/30 hover:shadow-xl hover:shadow-slate-900/5"   
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/20 transition-all group-hover:bg-green-600 group-hover:shadow-green-500/30">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <div
                      className="mt-8 inline-flex items-center text-sm font-bold text-green-600 transition-colors group-hover:text-green-700"
                    >
                      Learn more
                      <span className="ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}