"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

const PHONE = "tel:+923122295531";
const PHONE_DISPLAY = "0312 229 5531";

const serviceChildren = [
  { href: "/services/termite-control", label: "Termite Control" },
  { href: "/services/bed-bugs", label: "Bed Bugs" },
  { href: "/services/general-pest", label: "General Pest" },
];

function navItemClass(active: boolean) {
  return [
    "rounded-full px-5 py-2 text-sm font-bold transition-all duration-300",
    active
      ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
  ].join(" ");
}

function subLinkClass(active: boolean) {
  return [
    "block rounded-xl px-4 py-3 text-sm font-semibold transition-all",
    active ? "bg-green-50 text-green-800" : "text-slate-700 hover:bg-gray-50 hover:text-slate-900",
  ].join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesActive =
    pathname === "/services" ||
    serviceChildren.some((s) => pathname === s.href || pathname.startsWith(`${s.href}/`));

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-sm font-black text-white shadow-lg shadow-green-500/20 transition-all group-hover:bg-green-600 group-hover:shadow-green-500/30">
            I
          </span>
          <span className="hidden sm:inline">
            Insecto<span className="text-green-600">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-2 md:flex">
          <li>
            <Link href="/" className={navItemClass(pathname === "/")} aria-current={pathname === "/" ? "page" : undefined}>  
              Home
            </Link>
          </li>

          <li className="group relative">
            <Link
              href="/services"
              className={`${navItemClass(servicesActive)} inline-flex items-center gap-1.5`}
              aria-current={servicesActive ? "page" : undefined}
              aria-haspopup="menu"
            >
              Services
              <LuChevronDown className="h-4 w-4 opacity-80 transition-transform group-hover:rotate-180" aria-hidden />
            </Link>
            <div className="absolute left-0 top-full z-50 hidden min-w-[15rem] pt-3 group-hover:block">
              <ul
                className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-2 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-sm"
                role="menu"
                aria-label="Services"
              >
                {serviceChildren.map((item) => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={subLinkClass(pathname === item.href)}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li role="none" className="mt-1 border-t border-slate-100 pt-1">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="block px-4 py-3 text-sm font-bold text-green-600 hover:text-green-700"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              href="/about"
              className={navItemClass(pathname === "/about")}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={navItemClass(pathname === "/contact")}
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <motion.a
            href={PHONE}
            aria-label={`Call now at ${PHONE_DISPLAY}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 sm:inline-flex"
          >
            Call Now
          </motion.a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2.5 text-slate-800 transition-all hover:bg-slate-50 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <LuX className="h-5 w-5" aria-hidden /> : <LuMenu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-6">
              <Link
                href="/"
                className={[
                  "rounded-2xl px-5 py-4 text-base font-bold transition-all",
                  pathname === "/" ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "text-slate-800 hover:bg-slate-50",
                ].join(" ")}
                onClick={closeMobile}
              >
                Home
              </Link>

              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-bold text-slate-800"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span className={servicesActive ? "text-green-700" : ""}>Services</span>
                  <LuChevronDown
                    className={[
                      "h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300",
                      mobileServicesOpen ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-slate-100 bg-white/50"
                    >
                      <Link
                        href="/services"
                        className="block px-6 py-3 text-sm font-bold text-green-600 hover:bg-white"
                        onClick={closeMobile}
                      >
                        All services →
                      </Link>
                      {serviceChildren.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={[
                            "block px-6 py-3.5 text-sm font-semibold",
                            pathname === item.href
                              ? "bg-green-50 text-green-800"
                              : "text-slate-600 hover:bg-white",
                          ].join(" ")}
                          onClick={closeMobile}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={[
                  "rounded-2xl px-5 py-4 text-base font-bold transition-all",
                  pathname === "/about" ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "text-slate-800 hover:bg-slate-50",
                ].join(" ")}
                onClick={closeMobile}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={[
                  "rounded-2xl px-5 py-4 text-base font-bold transition-all",
                  pathname === "/contact" ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "text-slate-800 hover:bg-slate-50",
                ].join(" ")}
                onClick={closeMobile}
              >
                Contact
              </Link>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href={PHONE}
                className="mt-4 inline-flex items-center justify-center rounded-[1.25rem] bg-slate-900 px-5 py-4 text-center text-base font-bold text-white shadow-xl shadow-slate-900/10"
                onClick={closeMobile}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}