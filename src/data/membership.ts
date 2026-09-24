const WHATSAPP_BASE = "https://wa.me/971565110765";

function whatsappWithText(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export type PetType = "cat" | "dog";

export type CarePackage = {
  id: string;
  pet: PetType;
  title: string;
  price: string;
  priceLabel: string;
  summary: string;
  includes: string[];
  freeWith: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type MembershipPlan = {
  id: string;
  title: string;
  price: string;
  priceLabel: string;
  popular?: boolean;
  includes: string[];
  tone: "cream" | "sage" | "gold";
};

export type CompareValue = string | boolean;

export const CARE_INTRO =
  "We've bundled the care pets need most often into straightforward packages, so routine procedures, preventive treatments and ongoing wellness are easier to plan for and priced clearly upfront. Each package includes the consultations, monitoring, and aftercare that come with it, plus a few extras at no cost.";

export const MEMBERSHIP_INTRO =
  "Our three annual memberships bundle grooming, vaccinations, parasite prevention and vet consultations into one plan, with priority booking and a standing discount on clinical procedures.";

export const CARE_PACKAGES: CarePackage[] = [
  {
    id: "cat-spay",
    pet: "cat",
    title: "Cat Spaying Package",
    price: "1,000",
    priceLabel: "AED 1,000 + VAT",
    summary: "A complete spay procedure for female cats, from pre-surgical consultation through recovery.",
    includes: [
      "Pre-Surgical Veterinary Consultation",
      "Comprehensive Physical Examination",
      "Pre-Operative Blood Testing",
      "Spay Surgery",
      "IV Fluid Support During Procedure",
      "Pain Management",
      "Post-Operative Medications",
      "Recovery Monitoring",
      "Complimentary Follow-Up Examination",
    ],
    freeWith: "Surgical Recovery Vest, Nail Trimming, Priority Appointment Access",
    cta: "Book Cat Spaying",
    image: "/images/svc/surgery-spay.jpg",
    imageAlt: "Veterinary surgical care for cats",
  },
  {
    id: "cat-castration",
    pet: "cat",
    title: "Cat Castration Package",
    price: "700",
    priceLabel: "AED 700 + VAT",
    summary: "A complete castration procedure for male cats, with full pre- and post-operative care included.",
    includes: [
      "Pre-Operative Blood Test",
      "Pre-Operative Veterinary Examination",
      "Cat Castration Surgery",
      "General Anaesthesia & Monitoring",
      "Post-Operative Medication (as prescribed)",
      "Recovery Monitoring",
      "Post-Operative Follow-Up",
      "Post-Surgery Care Instructions",
    ],
    freeWith: "Surgical Recovery Vest, Nail Trimming, Priority Appointment Access",
    cta: "Book Cat Castration",
    image: "/images/svc/cat-stethoscope.jpg",
    imageAlt: "Cat receiving a veterinary examination",
  },
  {
    id: "cat-dental",
    pet: "cat",
    title: "Small Breed Dental Care Package (1–10 kg)",
    price: "1,000",
    priceLabel: "AED 1,000 + VAT",
    summary: "Suitable for cats and small dog breeds — a full dental procedure with assessment, cleaning and aftercare.",
    includes: [
      "Pre-Operative Blood Testing",
      "Pre-Anaesthetic Veterinary Examination",
      "Dental Scaling & Polishing",
      "Dental Procedure Under General Anaesthesia",
      "Full Monitoring During Procedure",
      "Dental & Oral Health Assessment",
      "Nail Trimming (free)",
      "Post-Procedure Check-Up (free)",
      "Home Dental Care Instructions (free)",
      "Priority Appointment Access",
    ],
    freeWith: "Free Post Procedure Check-Up, Nail Trimming, Priority Appointment Access",
    cta: "Book Dental Care",
    image: "/images/svc/dentistry-scaling.jpg",
    imageAlt: "Veterinary dental scaling and polishing",
  },
  {
    id: "dog-dental-small",
    pet: "dog",
    title: "Small Breed Dental Care Package (1–10 kg)",
    price: "1,000",
    priceLabel: "AED 1,000 + VAT",
    summary: "A full dental procedure for smaller pets, combining assessment, cleaning and aftercare.",
    includes: [
      "Pre-Operative Blood Testing",
      "Pre-Anaesthetic Veterinary Examination",
      "Dental Scaling & Polishing",
      "Dental Procedure Under General Anaesthesia",
      "Full Monitoring During Procedure",
      "Dental & Oral Health Assessment",
      "Nail Trimming (free)",
      "Post-Procedure Check-Up (free)",
      "Home Dental Care Instructions (free)",
      "Priority Appointment Access",
    ],
    freeWith: "Free Post Procedure Check-Up, Nail Trimming, Priority Appointment Access",
    cta: "Book Dental Care",
    image: "/images/svc/dental-exam.jpg",
    imageAlt: "Small breed dog dental examination",
  },
  {
    id: "dog-dental-medium",
    pet: "dog",
    title: "Medium Breed Dental Care Package (10–20 kg)",
    price: "1,250",
    priceLabel: "AED 1,250 + VAT",
    summary: "The same complete dental care, sized for medium-breed dogs (10–20 kg).",
    includes: [
      "Pre-Operative Blood Testing",
      "Pre-Anaesthetic Veterinary Examination",
      "Dental Scaling & Polishing",
      "Dental Procedure Under General Anaesthesia",
      "Full Monitoring During Procedure",
      "Dental & Oral Health Assessment",
      "Nail Trimming (free)",
      "Post-Procedure Check-Up (free)",
      "Home Dental Care Instructions (free)",
      "Priority Appointment Access",
    ],
    freeWith: "Free Post Procedure Check-Up, Nail Trimming, Priority Appointment Access",
    cta: "Book Dental Care",
    image: "/images/svc/dentistry-hero.jpg",
    imageAlt: "Medium breed dog dental care",
  },
  {
    id: "dog-dental-large",
    pet: "dog",
    title: "Large Breed Dental Care Package (20–30 kg)",
    price: "1,500",
    priceLabel: "AED 1,500 + VAT",
    summary: "The same complete dental care, sized for large-breed dogs (20–30 kg).",
    includes: [
      "Pre-Operative Blood Testing",
      "Pre-Anaesthetic Veterinary Examination",
      "Dental Scaling & Polishing",
      "Dental Procedure Under General Anaesthesia",
      "Full Monitoring During Procedure",
      "Dental & Oral Health Assessment",
      "Nail Trimming (free)",
      "Post-Procedure Check-Up (free)",
      "Home Dental Care Instructions (free)",
      "Priority Appointment Access",
    ],
    freeWith: "Free Post Procedure Check-Up, Nail Trimming, Priority Appointment Access",
    cta: "Book Dental Care",
    image: "/images/svc/dental.jpg",
    imageAlt: "Large breed dog dental procedure",
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "signature-paw",
    title: "Signature Paw",
    price: "2,500",
    priceLabel: "AED 2,500 + VAT",
    tone: "cream",
    includes: [
      "12 Basic Grooming Sessions",
      "1 Annual Vaccination",
      "4 Deworming Treatments",
      "3 External Parasite Treatments (1 month validity each)",
      "1 CBC (Complete Blood Count)",
      "2 Veterinary Consultations",
      "Dubai Municipality Tag",
      "Priority Appointment Access",
      "5% Discount on All Clinical Procedures",
    ],
  },
  {
    id: "prestige-paw",
    title: "Prestige Paw",
    price: "4,250",
    priceLabel: "AED 4,250 + VAT",
    tone: "sage",
    includes: [
      "6 Basic Grooming Sessions",
      "6 Full Grooming Sessions",
      "1 Annual Vaccination",
      "4 Deworming Treatments",
      "6 External Parasite Treatments (1 month validity each)",
      "1 CBC Chem 10",
      "4 Veterinary Consultations",
      "4 Skin Checkups",
      "Free Boarding for 5 Days",
      "1 Dubai Municipality Tag",
      "Priority Appointment Access",
      "10% Discount on All Clinical Procedures",
    ],
  },
  {
    id: "platinum-paw",
    title: "Platinum Paw",
    price: "5,500",
    priceLabel: "AED 5,500 + VAT",
    popular: true,
    tone: "gold",
    includes: [
      "12 Stylish Groomings",
      "1 Annual Vaccination",
      "4 Branded Deworming Treatments",
      "4 Branded External Parasite Treatments (3 month validity each)",
      "1 CBC Chem 17",
      "6 Veterinary Consultations",
      "Free Boarding for 10 Days",
      "1 Dubai Municipality Tag",
      "Priority Appointment Access",
      "15% Discount on All Clinical Procedures",
    ],
  },
];

export const MEMBERSHIP_COMPARE_ROWS: {
  label: string;
  values: [CompareValue, CompareValue, CompareValue];
}[] = [
  { label: "Basic Grooming Sessions", values: ["12", "6", "—"] },
  { label: "Full Grooming Sessions", values: ["—", "6", "—"] },
  { label: "Stylish Groomings", values: ["—", "—", "12"] },
  { label: "Annual Vaccination", values: ["1", "1", "1"] },
  { label: "Deworming Treatments", values: ["4", "4", "4 Branded"] },
  {
    label: "External Parasite Treatments",
    values: ["3 × 1 month", "6 × 1 month", "4 Branded × 3 months"],
  },
  { label: "Blood Work", values: ["CBC", "CBC Chem 10", "CBC Chem 17"] },
  { label: "Veterinary Consultations", values: ["2", "4", "6"] },
  { label: "Skin Checkups", values: ["—", "4", "—"] },
  { label: "Free Boarding", values: ["—", "5 days", "10 days"] },
  { label: "Dubai Municipality Tag", values: [true, true, true] },
  { label: "Priority Appointment Access", values: [true, true, true] },
  { label: "Discount on Clinical Procedures", values: ["5%", "10%", "15%"] },
];

export const MEMBERSHIP_FAQS = [
  {
    question: "What's included in each membership?",
    answer:
      "Each annual plan bundles grooming, vaccinations, parasite prevention, blood work and veterinary consultations, plus a Dubai Municipality tag, priority booking and a standing discount on clinical procedures. Signature, Prestige and Platinum differ by how much care is included.",
  },
  {
    question: "Why choose a membership over paying per visit?",
    answer:
      "Memberships combine the care pets need most often into one clear annual price, with extras such as priority appointments and procedure discounts. That makes routine care easier to plan and usually more cost-effective than booking each service separately.",
  },
  {
    question: "Are healthcare packages and memberships for both cats and dogs?",
    answer:
      "Yes. Annual memberships are for cats and dogs. Healthcare packages are grouped by pet: cat spay and castration packages, plus dental packages sized by weight for cats and dogs.",
  },
  {
    question: "How do I join a membership or book a package?",
    answer:
      "Use Join a Membership on the plan you want, or Book on a healthcare package. WhatsApp opens with that plan's details so our team can confirm availability and Grand Opening pricing.",
  },
  {
    question: "What is Grand Opening pricing?",
    answer:
      "Packages are currently launching at Grand Opening pricing. All listed prices are exclusive of VAT. Our team will confirm the final amount when you get in touch.",
  },
];

function formatList(items: string[]) {
  return items.map((item) => `• ${item}`).join("\n");
}

export function carePackageWhatsappUrl(pkg: CarePackage) {
  return whatsappWithText(
    [
      `Hi Arabian Paws, I would like to book the ${pkg.title} (${pkg.priceLabel}).`,
      "",
      "Includes:",
      formatList(pkg.includes),
      "",
      `Free with this package: ${pkg.freeWith}`,
    ].join("\n"),
  );
}

export function membershipWhatsappUrl(plan: MembershipPlan) {
  return whatsappWithText(
    [
      `Hi Arabian Paws, I would like to join the ${plan.title} membership (${plan.priceLabel}).`,
      "",
      "Includes:",
      formatList(plan.includes),
    ].join("\n"),
  );
}
