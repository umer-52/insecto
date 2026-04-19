import { CTASection } from "./CTASection";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { ServiceAreas } from "./ServiceAreas";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { TrustBar } from "./TrustBar";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomeSections() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
