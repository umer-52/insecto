import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicesContent } from "@/content/services";

export const metadata: Metadata = {
  title: "Termite Control & Proofing Services Karachi | Insecto Fumigation",
  description:
    "Professional termite control and proofing in Karachi and across Pakistan. Protect your property foundations with our certified chemical barrier treatments and expert inspections.",
};

export default function TermiteControlPage() {
  return <ServicePageTemplate service={servicesContent["termite-control"]} />;
}
