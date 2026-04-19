"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";

const serviceLinks = [
  { href: "/services/termite-control", label: "Termite Control" },
  { href: "/services/bed-bugs", label: "Bed Bug Treatment" },
  { href: "/services/general-pest", label: "General Pest Control" },
  { href: "/services", label: "Warehouse Fumigation" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PHONE = "0312 229 5531";
const PHONE_HREF = "tel:+923122295531";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container className="py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-2.5 text-xl font-bold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-sm font-black text-white shadow-lg shadow-green-500/20 transition-all group-hover:bg-green-600">
                I
              </span>
              Insecto
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Pakistan's leading certified fumigation and pest control experts. We deliver inspection-led solutions for residential and industrial clients nationwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Our Services</h3>
            <ul className="mt-8 space-y-4">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-green-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Quick Navigation</h3>
            <ul className="mt-8 space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label + l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-green-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Get In Touch</h3>
            <ul className="mt-8 space-y-5">
              <li>
                <a href={PHONE_HREF} className="group flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">Call Support</span>
                  <span className="mt-1 text-base font-bold text-white transition-colors group-hover:text-green-500">
                    {PHONE}
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@insecto.pk" className="group flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">Email Us</span>
                  <span className="mt-1 text-sm font-medium transition-colors group-hover:text-white">
                    info@insecto.pk
                  </span>
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500">Location</span>
                <span className="mt-1 text-sm leading-relaxed">
                  Karachi Headquarters & Nationwide Service
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-xs font-medium text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Insecto Fumigation. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}