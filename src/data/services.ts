export type ServiceStat = {
  icon: string;
  iconClass: string;
  title: string;
  subtitle: string;
};

export type ServiceBlock = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export type ServicePageData = {
  slug: string;
  catalogTitle: string;
  eyebrow: string;
  headline: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroWrapClass?: string;
  heroImageClass?: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  stats: ServiceStat[];
  blocks: ServiceBlock[];
  reasonsTitle: string;
  reasonsIntro: string;
  reasons: string[];
};

const teamStat = {
  icon: "team",
  iconClass: "h-[38px] w-[37px]",
  title: "Expert Team",
  subtitle: "Experienced Vets",
} as const;

export const SERVICES: ServicePageData[] = [
  {
    slug: "emergency",
    catalogTitle: "Emergency & ICU",
    eyebrow: "Emergency & ICU",
    headline: "When every minute matters",
    intro:
      "Round-the-clock emergency and critical care for pets requiring immediate attention in Majan.",
    heroImage: "/images/inner-hero-cat.png",
    heroAlt: "Ginger and white kitten",
    badge: "Dubai Trusted Emergency Veterinary Hospital",
    metaTitle: "24/7 Emergency & Critical Care | Arabian Paws",
    metaDescription:
      "24/7 emergency veterinary care in Majan. Triage, ICU, trauma and poisoning management, emergency surgery, and continuous monitoring at Arabian Paws.",
    stats: [
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "24/7 Emergency",
        subtitle: "Always Open",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Advance ICU",
        subtitle: "Critical Care",
      },
      teamStat,
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Modern Facility",
        subtitle: "Latest Equipment",
      },
    ],
    blocks: [
      {
        title: "Emergency Triage & Stabilisation",
        body: "Rapid assessment and immediate support for pets requiring urgent attention.",
        image: "/images/inner-triage.png",
        alt: "Veterinarian examining a puppy during emergency triage",
      },
      {
        title: "Intensive Care",
        body: "Dedicated ICU support for patients who require close observation and ongoing treatment.",
        image: "/images/inner-icu.png",
        alt: "Dog receiving intensive care monitoring",
      },
      {
        title: "Trauma & Poisoning Management",
        body: "Prompt assessment and treatment for serious injuries, suspected poisoning and other urgent conditions.",
        image: "/images/inner-trauma.png",
        alt: "Veterinarian examining a cat after trauma",
      },
      {
        title: "Emergency Surgery",
        body: "Surgical intervention when an emergency requires immediate treatment.",
        image: "/images/inner-surgery.png",
        alt: "Veterinary team performing emergency surgery",
      },
    ],
    reasonsTitle: "Key Reasons Why Your Pet Needs Emergency Care",
    reasonsIntro:
      "Do not wait if your pet is showing signs of a serious medical problem. Contact Arabian Paws for immediate veterinary assistance.",
    reasons: [
      "Immediate Treatment For Life-Threatening Injuries Or Illnesses",
      "Safe Blood Transfusions For Anaemia & Blood Loss",
      "24/7 Access To Skilled Veterinarians, Even On Weekends & Holidays",
      "Oxygen & IV Fluid Therapy For Pets In Respiratory Distress",
      "Rapid Diagnosis With On-Site X-Ray, Ultrasound & Lab Testing",
      "Support From Specialists In Cardiology, Neurology & Surgery",
      "Continuous Monitoring & Intensive Care For Critical Patients",
      "Compassionate Care To Keep Pets Calm & Comfortable",
      "Expert Pain Relief & Stabilization For Trauma Or Shock",
      "Prevention Tips To Help Reduce Future Emergencies",
      "Emergency Surgery Available For Severe Wounds & Internal Bleeding",
      "24/7 Emergency Hotline & Veterinary Support At Arabian Paws",
    ],
  },
  {
    slug: "diagnostics",
    catalogTitle: "Diagnostics & Lab",
    eyebrow: "Diagnostics & Labs",
    headline: "Advanced Diagnostics & In-House Laboratory",
    intro:
      "Accurate diagnosis starts with the right information. Our advanced diagnostic services combine high-resolution imaging, in-house laboratory testing and specialised referrals to help our veterinary team assess your pet with greater precision and make informed treatment decisions.",
    heroImage: "/images/basenji.png",
    heroAlt: "Basenji dog",
    heroWrapClass: "right-8 top-10 h-[500px] w-[540px]",
    heroImageClass: "size-full object-contain object-center",
    badge: "In-House Imaging & Laboratory",
    metaTitle: "Diagnostics & In-House Lab | Arabian Paws",
    metaDescription:
      "Digital X-ray, ultrasound, in-house blood and pathology testing, CT and MRI referrals, and allergy testing at Arabian Paws in Majan, Dubai.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Digital X-Ray",
        subtitle: "High Resolution",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Ultrasound",
        subtitle: "Internal Imaging",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Same-Day Labs",
        subtitle: "In-House Results",
      },
    ],
    blocks: [
      {
        title: "Digital X-Ray & Ultrasonography",
        body: "High-resolution digital imaging helps our veterinary team examine internal structures and identify concerns affecting the abdomen, heart and musculoskeletal system with greater clarity.",
        image: "/images/inner-icu.png",
        alt: "Dog on a diagnostic table with imaging and monitoring equipment",
      },
      {
        title: "In-House Blood & Pathology Lab",
        body: "Our in-house laboratory allows for efficient testing and same-day results across CBC, chemistry panels, hormonal testing and electrolyte analysis, helping the team move from diagnosis to treatment without unnecessary delays.",
        image: "/images/svc/injection.jpg",
        alt: "Veterinary team collecting a blood sample from a dog",
      },
      {
        title: "Advanced Imaging | CT & MRI Referrals",
        body: "For neurological conditions and complex soft tissue concerns, advanced imaging may be required. We facilitate CT and MRI referrals when a more detailed view is needed for accurate diagnosis and treatment planning.",
        image: "/images/svc/diagnostics-tool.jpg",
        alt: "Veterinarian using a handheld diagnostic scanner on a dog",
      },
      {
        title: "Microbiology & Allergy Testing",
        body: "When infections or allergies are suspected, targeted testing can help identify the underlying cause. Our diagnostic services support the rapid identification of skin, ear and systemic infections and allergies.",
        image: "/images/svc/cat-eye.jpg",
        alt: "Veterinarian examining a cat’s eye during allergy diagnostics",
      },
    ],
    reasonsTitle: "When Your Pet May Need Diagnostic Testing",
    reasonsIntro:
      "Changes in your pet's health are not always easy to understand from symptoms alone. Diagnostic testing gives our veterinary team a clearer picture of what is happening and helps guide the next step in care.",
    reasons: [
      "Unexplained Symptoms",
      "Changes in Appetite or Energy",
      "Digestive Concerns",
      "Skin & Ear Problems",
      "Suspected Infections",
      "Hormonal Imbalances",
      "Neurological Symptoms",
      "Complex or Ongoing Conditions",
    ],
  },
  {
    slug: "surgery",
    catalogTitle: "Surgery",
    eyebrow: "Surgery",
    headline: "Advanced Surgical Care, Delivered With Precision",
    intro:
      "From routine procedures to complex surgical intervention, Arabian Paws provides a considered approach to veterinary surgery. Our surgical services cover soft tissue, orthopaedic and minimally invasive procedures, with careful monitoring and treatment tailored to each patient.",
    heroImage: "/images/hero-cat.png",
    heroAlt: "Grey cat",
    badge: "Precision Surgical Care",
    metaTitle: "Veterinary Surgery | Arabian Paws",
    metaDescription:
      "Soft tissue, orthopaedic, minimally invasive endoscopy, spay and neuter, and exotic animal surgery at Arabian Paws Veterinary Clinic in Majan.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Soft Tissue",
        subtitle: "Surgical Care",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Orthopaedic",
        subtitle: "Bones & Joints",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Monitored",
        subtitle: "Anaesthesia",
      },
    ],
    blocks: [
      {
        title: "Soft Tissue Surgery",
        body: "Our soft tissue surgical services cover a range of procedures, including tumour removals, gastrointestinal surgery, wound repair and abdominal procedures, with each case assessed according to the individual needs of the patient.",
        image: "/images/inner-surgery.png",
        alt: "Veterinary team performing surgery on a cat",
      },
      {
        title: "Advanced Orthopaedic Surgery",
        body: "For injuries and conditions affecting bones, joints and ligaments, our orthopaedic procedures include joint repairs, fracture fixation and ACL/CCL surgeries to support mobility and recovery.",
        image: "/images/svc/bandage.jpg",
        alt: "Veterinarian bandaging a cat’s leg after orthopaedic care",
      },
      {
        title: "Minimally Invasive Endoscopy",
        body: "Laparoscopic procedures allow certain surgeries to be performed through smaller incisions, helping reduce tissue disruption, minimise scarring and support a smoother recovery.",
        image: "/images/svc/surgery-prep.jpg",
        alt: "Veterinary team preparing a dog for a minimally invasive procedure",
      },
      {
        title: "Routine Spay & Neuter",
        body: "Spay and neuter procedures are performed with careful surgical planning and advanced anaesthesia monitoring to keep your pet safely monitored throughout the procedure.",
        image: "/images/svc/vaccine-cat.jpg",
        alt: "Cat in a recovery suit during spay and neuter care",
      },
      {
        title: "Exotic Animal Surgery",
        body: "Surgical care is not one-size-fits-all. We provide specialised surgical support for birds, reptiles, rabbits and small mammals, with treatment adapted to the specific needs of each species.",
        image: "/images/rabbit.png",
        alt: "Rabbit representing exotic animal surgical care",
      },
    ],
    reasonsTitle: "When Your Pet May Need Surgery",
    reasonsIntro:
      "Surgery can be recommended for a range of conditions, from planned procedures to injuries and illnesses requiring immediate intervention. Our veterinary team assesses each case carefully to determine the most appropriate treatment.",
    reasons: [
      "Tumours & Abnormal Growths",
      "Bone & Joint Injuries",
      "Ligament Damage",
      "Gastrointestinal Conditions",
      "Serious Wounds",
      "Abdominal Conditions",
      "Routine Spay & Neuter",
      "Conditions Requiring Minimally Invasive Surgery",
    ],
  },
  {
    slug: "dentistry",
    catalogTitle: "Dentistry",
    eyebrow: "Dentistry",
    headline: "Advanced Veterinary Dentistry & Oral Surgery",
    intro:
      "Your pet’s oral health deserves more than routine cleaning. Arabian Paws provides specialised dental and oral surgical care, from professional scaling and digital dental imaging to complex extractions and oral surgery, with each procedure carefully planned around the patient.",
    heroImage: "/images/rabbit.png",
    heroAlt: "Rabbit",
    badge: "Specialised Dental Care",
    metaTitle: "Veterinary Dentistry & Oral Surgery | Arabian Paws",
    metaDescription:
      "Ultrasonic scaling, dental X-rays, extractions, endodontics and oral tumour and jaw surgery at Arabian Paws in Majan, Dubai.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Ultrasonic Scaling",
        subtitle: "Professional Clean",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Dental X-Rays",
        subtitle: "Below the Gumline",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Oral Surgery",
        subtitle: "Planned Care",
      },
    ],
    blocks: [
      {
        title: "Ultrasonic Scaling & Polishing",
        body: "Professional ultrasonic scaling removes plaque and tartar that routine brushing cannot reach. The procedure is performed under safe anaesthesia, allowing thorough cleaning and polishing while keeping your pet comfortable.",
        image: "/images/svc/dental-exam.jpg",
        alt: "Veterinarian examining a dachshund’s teeth during dental scaling",
      },
      {
        title: "Dental Digital X-Rays",
        body: "Dental problems can often extend below the gumline. Digital dental X-rays allow our veterinary team to assess tooth roots and identify sub-gingival disease that may not be visible during an external examination.",
        image: "/images/svc/diagnostics-tool.jpg",
        alt: "Veterinarian using a diagnostic imaging device on a dog",
      },
      {
        title: "Tooth Extractions & Endodontics",
        body: "Fractured, infected or severely decayed teeth may require more advanced treatment. Our dental services include tooth extractions and endodontic procedures to address affected teeth while supporting your pet’s oral health.",
        image: "/images/inner-trauma.png",
        alt: "Veterinarian treating a cat during an oral procedure",
      },
      {
        title: "Oral Tumour & Jaw Surgery",
        body: "Some oral conditions require surgical intervention beyond routine dental care. We provide specialised oral and jaw procedures, including reconstructive and oncological surgery, based on the individual condition and treatment requirements.",
        image: "/images/inner-surgery.png",
        alt: "Veterinary surgical team operating on a cat",
      },
    ],
    reasonsTitle: "When Your Pet May Need Dental Care",
    reasonsIntro:
      "Dental problems can develop quietly, and pets may continue eating even when they are experiencing discomfort. Professional dental assessment can help identify problems early and determine the appropriate course of treatment.",
    reasons: [
      "Plaque & Tartar Build-Up",
      "Bad Breath",
      "Fractured Teeth",
      "Infected or Decayed Teeth",
      "Difficulty Eating",
      "Gum & Oral Concerns",
      "Suspected Oral Tumours",
      "Jaw & Oral Conditions",
    ],
  },
  {
    slug: "vip-home-care",
    catalogTitle: "VIP Home Care",
    eyebrow: "VIP Home Care",
    headline: "Exceptional Veterinary Care In the Comfort of Home",
    intro:
      "For pets who are more comfortable in familiar surroundings, Arabian Paws brings veterinary care directly to your doorstep. From routine visits and diagnostics to private end-of-life care and dedicated pet transport, our VIP services are designed around convenience, comfort and individual attention.",
    heroImage: "/images/vip-home-care.png",
    heroAlt: "Woman holding a white puppy",
    heroWrapClass: "right-6 top-8 h-[520px] w-[600px]",
    heroImageClass: "size-full object-contain object-center",
    badge: "Care That Comes To You",
    metaTitle: "VIP Home Veterinary Care | Arabian Paws",
    metaDescription:
      "House-call vet visits, in-home blood collection, pet taxi, and compassionate in-home euthanasia from Arabian Paws in Dubai.",
    stats: [
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Vet Visits",
        subtitle: "At Your Home",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Diagnostics",
        subtitle: "In-Home Sampling",
      },
      teamStat,
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Pet Taxi",
        subtitle: "Pick-Up & Drop-Off",
      },
    ],
    blocks: [
      {
        title: "VIP House Call Vet Visits",
        body: "Skip the journey to the clinic when care can come to you. Our veterinary team provides at-home wellness examinations, consultations, vaccinations and microchipping in the comfort of your home.",
        image: "/images/hero-vet.png",
        alt: "Veterinarian holding a cat during a house-call visit",
      },
      {
        title: "In-Home Blood Collection & Diagnostics",
        body: "Some pets find clinic visits stressful. Our in-home blood collection service allows samples to be collected from the comfort of your villa, helping make the process calmer and more convenient for both pets and their owners.",
        image: "/images/svc/injection.jpg",
        alt: "Veterinary team drawing a blood sample from a dog",
      },
      {
        title: "Pet Taxi | Pick-Up & Drop-Off",
        body: "Getting your pet to and from the clinic should be effortless. Our luxury, climate-controlled pet taxi provides comfortable transportation for hospital procedures, veterinary visits and grooming appointments.",
        image: "/images/svc/cat-carrier.jpg",
        alt: "Cat sitting in a travel basket ready for pet taxi",
      },
      {
        title: "Compassionate In-Home Euthanasia",
        body: "When the time comes to say goodbye, familiar surroundings can offer comfort and privacy. Our in-home euthanasia service provides peaceful, compassionate end-of-life care in the comfort of your pet’s home, allowing families to have a quiet and private farewell.",
        image: "/images/svc/cat-stethoscope.jpg",
        alt: "Veterinarian gently examining a white cat",
      },
    ],
    reasonsTitle: "When VIP Home Care Makes Sense",
    reasonsIntro:
      "Home-based veterinary services can make routine care easier, reduce travel-related stress and provide a more private experience when your pet needs support.",
    reasons: [
      "Routine Wellness Visits",
      "Vaccinations & Microchipping",
      "Pets Who Find Clinic Visits Stressful",
      "In-Home Blood Collection",
      "Comfortable Pet Transportation",
      "Hospital & Grooming Transfers",
      "Senior or Mobility-Limited Pets",
      "Private End-of-Life Care",
    ],
  },
  {
    slug: "wellness",
    catalogTitle: "Wellness & Vaccines",
    eyebrow: "Wellness & Vaccines",
    headline: "Preventive Care for a Healthier & Longer Life",
    intro:
      "Proactive wellness care designed to support your pet at every stage of life, from puppy and kittenhood through their senior years, with comprehensive health exams, tailored vaccinations, nutrition guidance and preventive care.",
    heroImage: "/images/cockatoo.png",
    heroAlt: "Cockatoo",
    badge: "Preventive Care For Every Stage",
    metaTitle: "Wellness Exams & Vaccines | Arabian Paws",
    metaDescription:
      "Wellness exams, AAHA and WSAVA vaccination plans, UAE microchipping, and pediatric and senior pet care at Arabian Paws.",
    stats: [
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Wellness Exams",
        subtitle: "Nose to Tail",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Vaccinations",
        subtitle: "Tailored Plans",
      },
      teamStat,
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Microchipping",
        subtitle: "UAE Registration",
      },
    ],
    blocks: [
      {
        title: "Comprehensive Health & Longevity Exams",
        body: "Our nose-to-tail wellness examinations assess your pet’s overall health and help identify potential concerns early, allowing us to create a proactive care plan tailored to their individual needs.",
        image: "/images/svc/exam-yorkie.jpg",
        alt: "Veterinarian examining a Yorkshire Terrier with a stethoscope",
      },
      {
        title: "Customized Vaccination Protocols",
        body: "Vaccinations are tailored to your pet’s age, lifestyle and individual needs, following internationally recognised AAHA and WSAVA guidelines to provide appropriate protection against preventable diseases.",
        image: "/images/svc/vaccine-cat.jpg",
        alt: "Veterinary team preparing a vaccination for a cat",
      },
      {
        title: "Microchipping & Pet Registration",
        body: "Keep your pet safely identified with microchipping, along with official UAE municipal registration and pet passport issuance to support responsible pet ownership and easier identification.",
        image: "/images/svc/diagnostics-tool.jpg",
        alt: "Veterinarian scanning a dog with a microchip reader",
      },
      {
        title: "Pediatric & Senior Pet Care",
        body: "From growing puppies and kittens to ageing companions, we provide age-specific wellness plans designed around their changing needs, including developmental care, senior health monitoring and joint health support.",
        image: "/images/svc/exam-senior.jpg",
        alt: "Veterinarian examining a senior German Shepherd",
      },
    ],
    reasonsTitle: "Key Areas of Our Wellness & Preventive Care",
    reasonsIntro:
      "Regular preventive care helps you stay ahead of potential health concerns and gives your pet the best chance at a healthier, happier life.",
    reasons: [
      "Routine Health Examinations",
      "Core & Lifestyle Vaccinations",
      "Microchipping & UAE Registration",
      "Puppy & Kitten Wellness",
      "Senior Pet Care",
      "Joint Health Support",
      "Nutrition & Weight Management",
      "Prescription Diet Planning",
    ],
  },
  {
    slug: "grooming",
    catalogTitle: "Grooming & Spa",
    eyebrow: "Grooming & Spa",
    headline: "Professional Grooming, Comfort & Care",
    intro:
      "Complete grooming and spa services designed to keep your pet clean, comfortable and looking their best, with breed-specific styling, skin-friendly treatments and essential hygiene care.",
    heroImage: "/images/brown-dog.png",
    heroAlt: "Brown dog",
    badge: "Breed-Specific Grooming",
    metaTitle: "Pet Grooming & Spa | Arabian Paws",
    metaDescription:
      "Breed-specific styling, medicated baths, de-shedding treatments and hygiene care at Arabian Paws in Majan, Dubai.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Breed Styling",
        subtitle: "Tailored Cuts",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Medicated Baths",
        subtitle: "Sensitive Skin",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Hygiene Care",
        subtitle: "Nails, Ears, Paws",
      },
    ],
    blocks: [
      {
        title: "Full Breed-Specific Styling & Haircuts",
        body: "From breed-standard cuts to styles based on your preference, our professional groomers tailor every grooming session to your pet’s coat type, breed and individual needs.",
        image: "/images/svc/groom-table.jpg",
        alt: "Groomer styling a cat on a professional grooming table",
      },
      {
        title: "Medicated & Hypoallergenic Baths",
        body: "Gentle, specialised bathing for pets with sensitive skin or dermatological concerns. Our medicated and hypoallergenic treatments help soothe the skin while keeping the coat clean and healthy.",
        image: "/images/svc/bath-dog.jpg",
        alt: "Golden Retriever being bathed in a tub",
      },
      {
        title: "De-Shedding & Undercoat Treatments",
        body: "Designed to remove loose fur and excess undercoat, our de-shedding treatments help reduce seasonal shedding and keep your pet’s coat healthier and more manageable.",
        image: "/images/svc/groom-brush.jpg",
        alt: "White cat being brushed during a de-shedding treatment",
      },
      {
        title: "Spa Add-Ons & Hygiene Care",
        body: "Complete your pet’s grooming session with essential hygiene and comfort treatments, including nail trimming and grinding, ear cleaning, anal gland expression and paw pad treatments.",
        image: "/images/svc/groom-towel.jpg",
        alt: "Groomer towel-drying a Yorkshire Terrier after a spa bath",
      },
    ],
    reasonsTitle: "Key Benefits of Professional Grooming",
    reasonsIntro:
      "Regular grooming supports your pet’s hygiene, comfort and overall coat and skin health while helping them look and feel their best.",
    reasons: [
      "Breed-Specific Grooming",
      "Healthy Skin & Coat",
      "Reduced Shedding",
      "Sensitive Skin Care",
      "Nail & Paw Care",
      "Ear Hygiene",
      "Anal Gland Care",
      "Fresh & Comfortable Pets",
    ],
  },
  {
    slug: "travel",
    catalogTitle: "Travel & Relocation",
    eyebrow: "Travel & Relocation",
    headline: "Stress Free Pet Travel & Relocation",
    intro:
      "From health checks to export paperwork, we help make travelling with your pet simpler and more organised, with professional support for UAE travel requirements and insurance claims.",
    heroImage: "/images/husky.png",
    heroAlt: "Husky",
    badge: "UAE Travel Documentation",
    metaTitle: "Pet Travel & Relocation | Arabian Paws",
    metaDescription:
      "Fit-to-fly certificates, export documentation, rabies titers and insurance claim support for pet travel from Arabian Paws in Dubai.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Export Papers",
        subtitle: "Certification",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Fit-to-Fly",
        subtitle: "Health Checks",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Rabies Titers",
        subtitle: "RNATT Support",
      },
    ],
    blocks: [
      {
        title: "Pet Travel & Export Certification",
        body: "Planning an international move with your pet? We provide the required veterinary documentation and certification to help prepare your pet for travel and meet destination requirements.",
        image: "/images/svc/clinic-team.jpg",
        alt: "Veterinary team examining a dog for travel certification",
      },
      {
        title: "Fit-to-Fly Health Certificates",
        body: "Our veterinary team conducts the necessary health assessments and provides UAE fit-to-fly health certificates to help ensure your pet is medically cleared for travel.",
        image: "/images/svc/exam-shepherd.jpg",
        alt: "Veterinarian examining a German Shepherd for a fit-to-fly check",
      },
      {
        title: "Rabies Titers (RNATT)",
        body: "For destinations requiring rabies antibody testing, we assist with Rabies Neutralising Antibody Titration Test (RNATT) requirements as part of your pet’s travel preparation.",
        image: "/images/svc/injection.jpg",
        alt: "Veterinary team drawing a blood sample for rabies titer testing",
      },
      {
        title: "Export Documentation",
        body: "From veterinary certificates to supporting export documents, we help you navigate the paperwork required for international pet relocation, making the process more straightforward from start to finish.",
        image: "/images/svc/cat-carrier.jpg",
        alt: "Cat in a travel basket prepared for export travel",
      },
      {
        title: "Insurance Claim Processing",
        body: "We provide direct assistance with insurance claim processing and documentation, helping make the reimbursement process easier for eligible veterinary treatments with major UAE pet insurance providers.",
        image: "/images/svc/vet-records.jpg",
        alt: "Veterinarian with a dog beside clinic records for an insurance claim",
      },
    ],
    reasonsTitle: "Key Reasons Why Your Pet May Need Travel & Relocation Support",
    reasonsIntro:
      "International pet travel involves strict health, vaccination and documentation requirements. Our team helps you prepare your pet and paperwork correctly, reducing delays and making the relocation process easier.",
    reasons: [
      "International Relocation",
      "Air Travel With Your Pet",
      "Fit-to-Fly Requirements",
      "Destination Health Requirements",
      "Rabies Titer Requirements",
      "Export Documentation",
      "Pet Insurance Claims",
    ],
  },
  {
    slug: "boutique",
    catalogTitle: "Boutique & Accessories",
    eyebrow: "Boutique & Accessories",
    headline: "Premium Comfort & Everyday Essentials",
    intro:
      "Thoughtfully selected accessories and lifestyle products designed to give your pet the comfort, safety and enrichment they deserve, without compromising on style.",
    heroImage: "/images/red-cat.png",
    heroAlt: "Red cat",
    badge: "Comfort, Style & Safety",
    metaTitle: "Pet Boutique & Accessories | Arabian Paws",
    metaDescription:
      "VIP travel crates, orthopedic beds, smart toys and GPS trackers at the Arabian Paws pet boutique in Majan.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Travel Crates",
        subtitle: "Airline Ready",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Ortho Beds",
        subtitle: "Joint Support",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "GPS Trackers",
        subtitle: "Peace of Mind",
      },
    ],
    blocks: [
      {
        title: "VIP Travel Crates & Carriers",
        body: "Travel with confidence using premium, airline-ready crates and carriers, including IATA-approved options designed for safe and comfortable pet transportation.",
        image: "/images/svc/cat-carrier.jpg",
        alt: "Cat sitting in a wicker travel carrier",
      },
      {
        title: "Orthopedic Beds & Designer Furniture",
        body: "Give your pet a space that looks as good as it feels, with supportive orthopedic beds and designer furniture available in elegant velvet and minimalist modern styles.",
        image: "/images/svc/ortho-bed.jpg",
        alt: "Dog resting on an orthopedic pet bed",
      },
      {
        title: "Interactive Smart Toys",
        body: "Keep your pet engaged and mentally stimulated with interactive toys designed to encourage play, activity and enrichment at home.",
        image: "/images/svc/playful-cat.jpg",
        alt: "Playful cat during interactive enrichment",
      },
      {
        title: "GPS Trackers",
        body: "Add an extra layer of peace of mind with smart GPS tracking devices that help you keep tabs on your pet’s location, whether they’re exploring outdoors or travelling with you.",
        image: "/images/svc/cat-collar.jpg",
        alt: "Tabby cat wearing a collar with a tracker bell",
      },
    ],
    reasonsTitle: "Key Reasons Why Your Pet May Need Premium Accessories",
    reasonsIntro:
      "The right accessories can make everyday life more comfortable, enriching and secure for your pet while fitting seamlessly into your lifestyle.",
    reasons: [
      "Safe & Comfortable Travel",
      "Better Joint Support",
      "Stylish Pet Spaces",
      "Mental Stimulation",
      "Active Play & Enrichment",
      "Pet Safety & Tracking",
      "Everyday Comfort",
    ],
  },
  {
    slug: "nutrition",
    catalogTitle: "Pet Food & Nutrition",
    eyebrow: "Pet Food & Nutrition",
    headline: "Better Nutrition for a Healthier Pet",
    intro:
      "Nutrition plays a major role in your pet’s overall health, energy and longevity. We offer carefully selected food and treats, including prescription diets and organic options, based on your pet’s individual nutritional needs.",
    heroImage: "/images/hero-cat.png",
    heroAlt: "Grey cat",
    badge: "Nutrition Tailored To Your Pet",
    metaTitle: "Pet Food & Nutrition | Arabian Paws",
    metaDescription:
      "Gourmet food, organic treats, prescription diets and personalised nutrition advice at Arabian Paws Veterinary Clinic.",
    stats: [
      {
        icon: "/icons/inner-facility.svg",
        iconClass: "h-[38px] w-9",
        title: "Pet Food",
        subtitle: "Premium Options",
      },
      {
        icon: "/icons/inner-icu.svg",
        iconClass: "size-11",
        title: "Prescription",
        subtitle: "Diet Plans",
      },
      teamStat,
      {
        icon: "/icons/inner-clock.svg",
        iconClass: "size-[43px]",
        title: "Organic",
        subtitle: "Treats & Raw",
      },
    ],
    blocks: [
      {
        title: "Gourmet Food & Organic Treats",
        body: "Explore premium food and treat options selected with your pet’s taste, lifestyle and nutritional needs in mind, including gourmet choices and organic treats.",
        image: "/images/svc/nutrition-gourmet.jpg",
        alt: "Dog waiting at a bowl of gourmet kibble",
      },
      {
        title: "Prescription Diets",
        body: "For pets with specific health or dietary requirements, we can provide prescription diet options recommended as part of their veterinary care plan.",
        image: "/images/svc/exam-yorkie.jpg",
        alt: "Veterinarian examining a dog as part of a prescription diet plan",
      },
      {
        title: "Organic Raw Options",
        body: "For owners choosing a raw-feeding approach, we offer selected organic raw food options to support a balanced and quality-focused diet.",
        image: "/images/svc/cat-stethoscope.jpg",
        alt: "Veterinarian assessing a cat’s health for a specialised diet",
      },
      {
        title: "Personalized Food Selection",
        body: "Every pet has different nutritional needs. Our team can help identify suitable food options based on your pet’s age, breed, lifestyle and dietary requirements.",
        image: "/images/svc/exam-senior.jpg",
        alt: "Veterinarian with a senior dog during a nutrition consultation",
      },
    ],
    reasonsTitle: "Key Reasons Why Your Pet May Need Specialized Nutrition",
    reasonsIntro:
      "The right diet can play an important role in maintaining your pet’s health, managing specific dietary needs and supporting their quality of life.",
    reasons: [
      "Specific Dietary Requirements",
      "Prescription Nutrition",
      "Weight Management",
      "Food Sensitivities",
      "Healthy Growth & Development",
      "Senior Pet Nutrition",
      "Overall Health & Wellbeing",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServiceHref(catalogTitle: string) {
  const match = SERVICES.find((service) => service.catalogTitle === catalogTitle);
  return match ? `/services/${match.slug}` : "/services";
}
