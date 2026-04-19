export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceContent = {
  slug: "termite-control" | "bed-bugs" | "general-pest";
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  process: { title: string; body: string }[];
  faqs?: ServiceFaq[];
  image: {
    src: string;
    alt: string;
  };
};

export const servicesContent: Record<ServiceContent["slug"], ServiceContent> = {
  "termite-control": {
    slug: "termite-control",
    title: "Termite Control",
    headline: "Protect Your Property Foundation with Professional Termite Control",
    description:
      "Termites can silently destroy your property's wooden structures, flooring, and foundations. Our specialized termite control services in Karachi and across Pakistan use advanced barrier treatments and soil injections to eliminate existing colonies and prevent future infestations, safeguarding your long-term property value.",
    benefits: [
      "Comprehensive pre-construction and post-construction termite proofing",
      "Advanced chemical barrier technology for long-lasting protection",
      "Certified, eco-friendly products safe for residential environments",
      "Expert inspection of woodwork, foundations, and high-risk entry points",
      "Industry-leading warranty and follow-up support",
    ],
    process: [
      {
        title: "Detailed Inspection",
        body: "Our experts perform a thorough sweep of your property to identify termite activity, entry points, and moisture-prone risk zones.",
      },
      {
        title: "Targeted Treatment",
        body: "We apply specialized termiticides via drilling and injection to create an impenetrable barrier around your property's foundation.",
      },
      {
        title: "Woodwork Protection",
        body: "Direct treatment of wooden fixtures, door frames, and flooring to eliminate localized activity and prevent structural damage.",
      },
      {
        title: "Continuous Monitoring",
        body: "We provide scheduled follow-ups and maintenance advice to ensure your property remains termite-free for years to come.",
      },
    ],
    faqs: [
      { q: "How do I know if I have termites?", a: "Common signs include mud tubes on walls, hollow-sounding wood, discarded wings near windows, and bubbling paint." },
      { q: "Is termite treatment safe for my family?", a: "Yes, we use govt-approved, low-toxicity chemicals and follow strict safety protocols to ensure your family and pets remain safe." },
      { q: "Do you offer a warranty on termite control?", a: "Yes, we provide a multi-year warranty for our termite proofing services, backed by regular inspections." },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional termite control treatment protecting a home's wooden structure",
    },
  },
  "bed-bugs": {
    slug: "bed-bugs",
    title: "Bed Bug Treatment",
    headline: "Safe and Effective Bed Bug Eradication for a Better Night's Sleep",
    description:
      "Bed bug infestations can be stressful and difficult to manage. Our multi-stage treatment cycle targets bed bugs at every stage of their lifecycle—from eggs to adults. We focus on seams, furniture joints, and hidden crevices, using safe and effective methods to restore hygiene and comfort to your home.",
    benefits: [
      "Targeted eradication of bed bugs in mattresses, furniture, and skirting boards",
      "Lifecycle-focused approach to prevent re-infestation from hatching eggs",
      "Detailed preparation guidance to ensure maximum treatment effectiveness",
      "Discreet and professional service for residential and hospitality clients",
      "Follow-up inspections to guarantee a pest-free environment",
    ],
    process: [
      {
        title: "Infestation Assessment",
        body: "We identify all affected areas, including mattresses, upholstery, and cracks where bed bugs hide during the day.",
      },
      {
        title: "Focused Treatment",
        body: "Application of specialized, non-staining sprays and heat-based guidance to eliminate active infestations and eggs.",
      },
      {
        title: "Secondary Application",
        body: "A follow-up treatment is often scheduled to catch any newly hatched nymphs, breaking the breeding cycle completely.",
      },
      {
        title: "Prevention Education",
        body: "We provide tips on laundering, sealing, and travel habits to reduce the risk of bringing bed bugs back into your home.",
      },
    ],
    faqs: [
      { q: "Do we need to vacate during treatment?", a: "Typically, we recommend leaving the treated rooms for 4-6 hours. Our technicians will provide specific instructions based on your situation." },
      { q: "Should I throw away my mattress?", a: "Usually, no. Our treatments are designed to save your furniture. We also recommend using bed bug-proof encasements." },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1621976360623-004223a72767?auto=format&fit=crop&w=1200&q=80",
      alt: "Safe bed bug treatment being applied to a bedroom furniture set",
    },
  },
  "general-pest": {
    slug: "general-pest",
    title: "General Pest Control",
    headline: "Comprehensive Pest Management for a Healthier Living Environment",
    description:
      "Don't let cockroaches, ants, spiders, or rodents compromise your home's hygiene. Our general pest control service provides a broad-spectrum solution for common household pests. We build a custom treatment plan based on your property type and the specific pests you're seeing, ensuring a clean and pest-free space.",
    benefits: [
      "Effective control of cockroaches, ants, spiders, and silverfish",
      "Rodent control and exclusion services to seal entry points",
      "Safe and odorless treatments suitable for kitchens and living areas",
      "Regular maintenance plans for year-round pest protection",
      "Certified technicians trained in Integrated Pest Management (IPM)",
    ],
    process: [
      {
        title: "Property Audit",
        body: "We identify the pest species, nesting sites, and potential entry points around your home or office.",
      },
      {
        title: "Integrated Treatment",
        body: "Using a combination of gels, baits, and sprays, we target pests where they live and breed while minimizing chemical use.",
      },
      {
        title: "Exclusion & Sealing",
        body: "We recommend and help with sealing cracks and crevices that pests use to enter your property.",
      },
      {
        title: "Monitoring & Reporting",
        body: "Detailed report of the service provided along with recommendations for maintaining a pest-free environment.",
      },
    ],
    faqs: [
      { q: "How often should I get pest control?", a: "For most homes, a quarterly service is ideal to prevent seasonal pest surges and maintain a protective barrier." },
      { q: "Are the chemicals odorless?", a: "Yes, many of our modern treatments are virtually odorless and do not require heavy cleanup afterward." },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80",
      alt: "General pest control service targeting cockroaches and ants in a kitchen area",
    },
  },
};
