import { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About Insecto Fumigation | Leading Pest Control Company in Pakistan",
  description:
    "Learn about Insecto Fumigation, Pakistan's trusted pest control experts. We use certified products and professional techniques to keep your property safe and pest-free.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A premium, safety-first pest control team"
        description="We deliver inspection-led fumigation and pest control services with certified products, trained technicians, and clear follow-up support."
      />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
