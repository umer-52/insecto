import { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Pest Control Services in Pakistan | Termite, Bed Bugs & Fumigation",
  description:
    "Explore our comprehensive pest control services in Pakistan. From residential fumigation to commercial pest management, we offer certified treatments for termites, bed bugs, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Professional pest control services"
        description="Explore our most requested treatments for homes, offices, and industrial sites—each backed by inspection and follow-up support."
      />
      <Services />
      <Testimonials />
      <CTASection />
    </>
  );
}
