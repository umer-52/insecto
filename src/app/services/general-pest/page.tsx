import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicesContent } from "@/content/services";

export const metadata: Metadata = {
  title: "General Pest Control Services Pakistan | Insecto Fumigation",
  description:
    "Comprehensive pest management for cockroaches, ants, rodents, and more. Certified technicians providing safe and odorless pest control for homes and businesses.",
};

export default function GeneralPestPage() {
  return <ServicePageTemplate service={servicesContent["general-pest"]} />;
}
