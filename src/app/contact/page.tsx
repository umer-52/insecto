import { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ContactDetails } from "@/components/page/ContactDetails";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us for Free Pest Inspection in Pakistan | Insecto",
  description:
    "Get in touch with Insecto Fumigation for a free pest inspection. We offer nationwide services across Pakistan, including Karachi, Lahore, and Islamabad.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free inspection & fast support"
        description="Tell us what you’re dealing with and where you are. We’ll respond with availability and recommended next steps."
      />
      <ContactDetails />
      <CTASection />
    </>
  );
}
