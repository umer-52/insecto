import { Metadata } from "next";
import { HomeSections } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Professional Fumigation & Pest Control Services in Pakistan | Insecto",
  description:
    "Expert fumigation services in Pakistan. We provide certified termite control, bed bug treatment, and general pest management for homes and businesses. Get a free inspection today.",
};

export default function Home() {
  return <HomeSections />;
}
