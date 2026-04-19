"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/home/Container";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const PHONE_DISPLAY = "+92 312 229 5531";
const PHONE_HREF = "tel:+923122295531";
const EMAIL = "info@fumigationservices.pk";

export function ContactDetails() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200/90 bg-gray-50 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Contact information
            </h2>
            <p className="mt-3 text-slate-600">
              Reach out for a free inspection request, pricing, or urgent support.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-green-500 text-white shadow-md shadow-green-500/25">
                  <LuPhone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a className="text-green-700 hover:text-green-800" href={PHONE_HREF}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-green-500 text-white shadow-md shadow-green-500/25">
                  <LuMail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a className="text-green-700 hover:text-green-800" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-green-500 text-white shadow-md shadow-green-500/25">
                  <LuMapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Service coverage</p>
                  <p className="text-slate-600">
                    Karachi and major cities across Pakistan (Lahore, Islamabad, Hyderabad).
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Request a free inspection
            </h2>
            <p className="mt-3 text-slate-600">
              Share your details and we’ll respond with availability and next steps.
            </p>

            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">Name</span>
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-gray-50 px-4 text-slate-900 shadow-sm outline-none transition focus:border-green-500/40 focus:bg-white"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">Phone</span>
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-gray-50 px-4 text-slate-900 shadow-sm outline-none transition focus:border-green-500/40 focus:bg-white"
                  placeholder="03xx xxx xxxx"
                  autoComplete="tel"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">Service needed</span>
                <select className="h-12 rounded-2xl border border-slate-200 bg-gray-50 px-4 text-slate-900 shadow-sm outline-none transition focus:border-green-500/40 focus:bg-white">
                  <option>Termite Control</option>
                  <option>Bed Bug Treatment</option>
                  <option>General Pest Control</option>
                  <option>Warehouse Fumigation</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">Message</span>
                <textarea
                  className="min-h-28 rounded-2xl border border-slate-200 bg-gray-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-green-500/40 focus:bg-white"
                  placeholder="Tell us what you’re seeing and your location."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600"
            >
              Submit (demo)
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This is UI-only. Hook it to your backend or form provider when ready.
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

