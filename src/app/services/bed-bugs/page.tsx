import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicesContent } from "@/content/services";

export const metadata: Metadata = {
  title: "Bed Bug Treatment & Eradication Pakistan | Insecto Fumigation",
  description:
    "Eliminate bed bugs with our structured treatment cycle. Safe, effective, and thorough bed bug eradication services for homes and hotels across Pakistan.",
};

export default function BedBugsPage() {
  return <ServicePageTemplate service={servicesContent["bed-bugs"]} />;
}
