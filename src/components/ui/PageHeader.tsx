"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/home/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-24 sm:py-32">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" aria-hidden />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"> 
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          ) : null}
        </motion.div>
      </Container>
    </header>
  );
}