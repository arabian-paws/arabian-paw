export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  image: string;
  dot: string;
  body: BlogBlock[];
};

export const BLOGS: BlogPost[] = [
  {
    slug: "uae-pet-relocation-guide",
    title: "UAE Pet Relocation Guide",
    description:
      "Relocating to or from the UAE with your pet — permits, microchips, rabies titers, fit-to-fly certificates and crate preparation.",
    tag: "Travel",
    date: "May 7, 2024",
    image: "/images/blog-relocation.webp",
    dot: "bg-[#97d4ff]",
    body: [
      {
        type: "p",
        text: "Relocating to or from the UAE with your furry family members is a major milestone, but navigating international pet travel regulations can feel overwhelming. Between government permits, microchip verification, and strict health clearances, proper planning is essential. Starting your preparation 3 to 6 months in advance ensures a smooth, stress-free journey for both you and your pet.",
      },
      { type: "h2", text: "1. Essential Entry and Exit Requirements" },
      {
        type: "p",
        text: "Before booking airline tickets or purchasing travel crates, you must meet the core biosecurity requirements set by the UAE Ministry of Climate Change and Environment (MOCCAE) as well as your destination country's agricultural authorities:",
      },
      {
        type: "ul",
        items: [
          "ISO-Compliant Microchip: Your pet must be fitted with a 15-digit ISO 11784/11785 microchip. Crucially, the microchip must be implanted prior to or on the same day as their rabies vaccination.",
          "Rabies Vaccination: Pets must have an up-to-date rabies vaccine administered at least 21 days before travel. For animals entering the UAE for the first time, vaccinations must fit specific age windows.",
          "Rabies Neutralizing Antibody Titer (RNAT) Test: If you are traveling to rabies-free or strict-entry regions (such as the UK, European Union, Australia, or Japan), your pet must undergo an RNAT blood test. The sample must be processed by a MOCCAE-approved laboratory, and depending on the destination, a 3-month waiting period post-blood draw may apply before entry is granted.",
        ],
      },
      { type: "h2", text: "2. Permits, Documentation, and Fit-to-Fly Certification" },
      {
        type: "p",
        text: "Documentation mistakes are the leading cause of pet travel delays at customs. Ensure you have the following secured:",
      },
      {
        type: "ul",
        items: [
          "Import/Export Permits: Every animal leaving or entering Dubai requires an official MOCCAE permit. These permits carry strict validity windows (typically 30 days), so timing your application is critical.",
          "Fit-to-Fly Health Certificates: Within 24 to 48 hours prior to departure, an accredited veterinarian must conduct a comprehensive physical exam. The vet confirms your pet is free from infectious diseases, fit to withstand air travel, and treated for internal and external parasites (tapeworm and tick treatments).",
        ],
      },
      { type: "h2", text: "3. Crate Training and Flight Preparation" },
      {
        type: "p",
        text: "Air travel introduces unfamiliar sights, sounds, and pressure changes. Preparing your pet physically and mentally is vital:",
      },
      {
        type: "ul",
        items: [
          "IATA-Approved Crates: Secure an airline-compliant container that allows your pet to stand, turn around naturally, and lie down comfortably without their head touching the top.",
          "Early Acclimation: Place the crate in your living room weeks before the flight with familiar bedding and treats inside. Encourage your pet to sleep inside so it becomes a safe space rather than a source of stress.",
          "Feeding Guidelines: Avoid feeding heavy meals 4 to 6 hours before departure to prevent motion sickness, but ensure they have access to water attachments inside the crate.",
        ],
      },
      {
        type: "cta",
        text: "Plan Your Move with Confidence: Navigating pet export and import rules doesn't have to be stressful. The veterinary team at Arabian Paws manages complete travel health clearances, titer testing, and documentation. Contact our Majan clinic today to start your pet's relocation plan.",
      },
    ],
  },
  {
    slug: "pet-heatstroke-safety",
    title: "Pet Heatstroke Safety",
    description:
      "How to recognise heatstroke signs, give safe first aid, and protect pets during Dubai's extreme summer heat.",
    tag: "Tips",
    date: "May 7, 2024",
    image: "/images/svc/vip-comfort.jpg",
    dot: "bg-[#ff9797]",
    body: [
      {
        type: "p",
        text: "Living in Dubai means enjoying beautiful winter sunshine, but it also means facing blistering summer temperatures that frequently exceed 40°C (104°F) with high humidity. For pets, this extreme climate poses a severe threat. Dogs and cats do not sweat through their skin like humans; they rely primarily on panting and minimal heat exchange through their paw pads to regulate body temperature. When ambient heat rises quickly, hyperthermia and heatstroke can set in within minutes.",
      },
      { type: "h2", text: "1. Recognizing Early and Advanced Heatstroke Symptoms" },
      {
        type: "p",
        text: "Heatstroke is a life-threatening medical emergency. Recognizing the signs early can mean the difference between rapid recovery and permanent organ damage:",
      },
      {
        type: "ul",
        items: [
          "Early Signs: Excessive, frantic panting; heavy drooling with thick, sticky saliva; bright red or inflamed gums; restlessness; and warm ears and paws.",
          "Advanced/Critical Signs: Extreme lethargy or confusion; unsteadiness while standing; vomiting or diarrhea (sometimes containing blood); dark purple or pale gums; muscle tremors; seizures; and sudden collapse.",
        ],
      },
      {
        type: "h2",
        text: "2. Immediate First-Aid Protocol (What to Do and What to Avoid)",
      },
      {
        type: "p",
        text: "If you suspect your pet is suffering from heat stress, take immediate action while arranging urgent transport to a veterinary emergency facility:",
      },
      {
        type: "ul",
        items: [
          "Move to AC Immediately: Get your pet indoors into an air-conditioned room or vehicle.",
          "Cool with Room-Temperature Water: Apply cool (not cold) water over their body, focusing on the neck, armpits, groin, and paw pads. You can use a fan to blow air over their damp coat.",
          "NEVER Use Ice Water: Rapidly cooling a pet with ice water causes surface blood vessels to constrict (vasoconstriction). This traps heat deep inside the core body organs and can trigger shivering, which actually raises internal body temperature further.",
          "Offer Water Slowly: Provide fresh, cool water, but never force a lethargic or unconscious animal to drink.",
        ],
      },
      { type: "h2", text: "3. Dubai Summer Prevention Rules" },
      {
        type: "p",
        text: "Preventing heat exposure is always easier than treating heatstroke:",
      },
      {
        type: "ul",
        items: [
          "The 7-Second Asphalt Rule: Asphalt absorbs solar heat and can reach over 60°C in summer. Place the back of your bare hand on the pavement for 7 seconds. If it feels uncomfortably hot for you, it will burn your dog's paw pads.",
          "Strict Walk Schedules: Limit outdoor walks to early mornings (before 7:00 AM) and late evenings. Keep summer daytime outings strictly for brief bathroom breaks.",
          "Hydration on the Go: Always carry portable water containers, even on short trips. Never leave a pet unattended inside a parked car, even with the AC running or windows cracked.",
        ],
      },
      {
        type: "cta",
        text: "24/7 Emergency Care in Majan: Heatstroke requires professional IV fluids and intensive care monitoring. Arabian Paws operates a fully equipped 24/7 Emergency & ICU facility in Majan, Dubai. If your pet shows signs of heat distress, call our emergency line immediately at +971 56 511 0765.",
      },
    ],
  },
  {
    slug: "pet-dental-care-guide",
    title: "Pet Dental Care Guide",
    description:
      "Why bad breath matters, how gum disease affects overall health, and what professional dental care involves.",
    tag: "Dental",
    date: "May 7, 2024",
    image: "/images/blog-dental.webp",
    dot: "bg-[#ffa0ea]",
    body: [
      {
        type: "p",
        text: 'It is a common myth among pet owners that "bad breath" is just a normal part of having a dog or cat. In reality, persistent oral odor (halitosis) is usually the first noticeable warning sign of periodontal disease. By age three, over 80% of dogs and 70% of cats exhibit some degree of dental disease. Left untreated, poor oral hygiene causes chronic pain, tooth loss, and severe systemic health problems.',
      },
      { type: "h2", text: "1. The Hidden Systemic Risks of Gum Disease" },
      {
        type: "p",
        text: "Dental hygiene isn't just about maintaining a bright smile—it's vital for your pet's long-term health. The process begins when soft bacterial plaque coats the teeth. Within 48 hours, plaque combines with minerals in saliva to harden into dark tartar (calculus).",
      },
      {
        type: "p",
        text: "As tartar builds up along and beneath the gumline, it triggers severe inflammation (gingivitis) and erodes the supporting bone structures. Bacteria from infected gums frequently enter the bloodstream, traveling directly to major organs:",
      },
      {
        type: "ul",
        items: [
          "Heart: Increases the risk of endocarditis and valve damage.",
          "Kidneys & Liver: Causes chronic inflammation as these organs continuously filter circulating oral bacteria.",
          "Jaw Health: Severe bone loss leads to painful root abscesses, nasal fistulas, and potential jaw fractures.",
        ],
      },
      { type: "h2", text: "2. Warning Signs Your Pet Needs a Dental Checkup" },
      {
        type: "p",
        text: "Pets are masters at hiding pain and often continue eating even with severe dental damage. Look closely for subtle signs of discomfort:",
      },
      {
        type: "ul",
        items: [
          "Yellow, brown, or black tartar accumulation",
          "Red, swollen, or easily bleeding gums",
          "Excessive drooling or dropping kibble while eating",
          "Pawing at the face or chewing exclusively on one side of the mouth",
          "Reduced appetite, sudden irritability, or reluctance to touch hard toys",
        ],
      },
      { type: "h2", text: "3. Professional Dental Cleaning vs. Home Maintenance" },
      {
        type: "p",
        text: "A complete dental health routine combines professional veterinary care with daily home upkeep:",
      },
      {
        type: "ul",
        items: [
          "In-Clinic Professional Dental Procedures: Under safe, monitored anesthesia, veterinarians perform deep ultrasonic scaling to remove tartar above and below the gumline. Digital oral X-rays are used to evaluate hidden root structures, followed by polishing to smooth the enamel and slow future plaque accumulation.",
          "At-Home Care: Daily brushing using pet-safe enzymatic toothpaste (never human toothpaste, which contains toxic ingredients like xylitol or high fluoride) is the gold standard. Veterinary-approved dental chews, dental diets, and water additives can supplement your daily routine.",
        ],
      },
      {
        type: "cta",
        text: "Protect Your Pet's Smile: Dental health directly impacts your pet's quality of life. Schedule a professional oral checkup and dental cleaning with the specialized dentistry team at Arabian Paws Clinic in Majan today.",
      },
    ],
  },
  {
    slug: "uae-pet-vaccination-guide",
    title: "UAE Pet Vaccination Guide",
    description:
      "Core and non-core vaccines, booster schedules, and UAE legal requirements for pet registration and travel.",
    tag: "Wellness",
    date: "May 7, 2024",
    image: "/images/blog-vaccination.webp",
    dot: "bg-[#c6cf9f]",
    body: [
      {
        type: "p",
        text: "Vaccinating your pet is one of the most effective ways to protect them from dangerous, preventable infectious diseases. In the UAE, maintaining up-to-date vaccinations is not only vital for your animal's immune system, but it is also a strict legal requirement enforced by local municipal authorities for pet registration, microchipping, and housing approvals.",
      },
      { type: "h2", text: "1. Core vs. Non-Core Vaccines Explained" },
      {
        type: "p",
        text: "Vaccines are classified into two categories: core vaccines, which are essential for all pets regardless of lifestyle, and non-core vaccines, which are recommended based on specific exposure risks.",
      },
      {
        type: "p",
        text: "Core Vaccines for Dogs:",
      },
      {
        type: "ul",
        items: [
          "Rabies: Mandatory by UAE law. Protects against a fatal viral disease that affects the central nervous system and can transmit to humans.",
          "DHPPi Combo: Protects against Canine Distemper, Infectious Canine Hepatitis, Parvovirus (a severe, often fatal gastrointestinal virus), and Parainfluenza.",
        ],
      },
      {
        type: "p",
        text: "Core Vaccines for Cats:",
      },
      {
        type: "ul",
        items: [
          "Rabies: Mandatory by UAE law for all domestic cats.",
          "FVRCP Combo: Protects against Feline Viral Rhinotracheitis (herpesvirus), Calicivirus (respiratory infection and mouth ulcers), and Panleukopenia (feline distemper).",
        ],
      },
      {
        type: "p",
        text: "Recommended Non-Core Vaccines:",
      },
      {
        type: "ul",
        items: [
          "Kennel Cough (Bordetella): Essential for dogs that visit grooming salons, boarding facilities, or dog parks in Dubai.",
          "Feline Leukemia Virus (FeLV): Recommended for outdoor cats or multi-cat households.",
        ],
      },
      { type: "h2", text: "2. Lifelong Vaccination and Booster Schedule" },
      {
        type: "p",
        text: "Vaccines are not a one-time event; immunity wanes over time and requires structured boosters throughout your pet's life:",
      },
      {
        type: "ul",
        items: [
          "8–10 Weeks: First core combination shot (DHPPi / FVRCP) — initial maternal antibody transition.",
          "12–14 Weeks: Second combination booster + Rabies vaccination — building active immunity.",
          "16+ Weeks: Final puppy/kitten booster + Microchip verification — completing primary series.",
          "Adult (Annual): Annual physical checkup + Rabies & core boosters — maintaining legal compliance & immunity.",
        ],
      },
      { type: "h2", text: "3. UAE Legal Compliance and Registration" },
      {
        type: "p",
        text: "In Dubai, rabies vaccination is tied directly to legal pet ownership. To register your pet with local authorities, obtain an official municipality tag, or arrange international travel certificates, your pet must hold an up-to-date vaccination record signed by a licensed UAE veterinarian.",
      },
      {
        type: "cta",
        text: "Keep Your Pet Compliant and Protected: Is your pet due for their annual booster or rabies update? Book a comprehensive wellness and vaccination checkup at Arabian Paws Clinic in Majan.",
      },
    ],
  },
];

export function getBlog(slug: string) {
  return BLOGS.find((post) => post.slug === slug);
}
