export type BusinessUnit = {
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  description: string;
  paragraphs: string[];
  brands?: string[];
  services?: string[];
  leadership?: { name: string; title: string };
  locations: { label: string; address: string; phone?: string; email?: string }[];
  website?: string;
};

export const businessUnits: BusinessUnit[] = [
  {
    slug: "farmec",
    name: "Farmec",
    tagline: "Mechanising Zimbabwean agriculture since 1949",
    sector: "Agriculture & Implements",
    description:
      "One of the longest established tractor and farm machinery distributors in Zimbabwe, holding the Massey Ferguson franchise since inception.",
    paragraphs: [
      "Farmec is the flagship mechanised agriculture equipment division of Zimplow Holdings Limited, operating as a comprehensive supplier for the agricultural sector across Zimbabwe. The company was established in 1949 and has always represented the Massey Ferguson brand.",
      "The division holds franchise agreements for Massey Ferguson and Valtra tractors, as well as combine harvesters, alongside distribution rights for Monosem, Vicon, and Falcon implement ranges.",
      "Farmec functions as a one-stop provider, supplying agricultural implements, tractors, and related spare parts, with an emphasis on after-sales support through branches in key farming regions nationwide.",
    ],
    brands: ["Massey Ferguson", "Valtra", "Monosem", "Vicon", "Falcon"],
    services: ["Tractors & combine harvesters", "Implements & attachments", "Genuine spare parts", "After-sales & workshop support"],
    leadership: { name: "Eddington Buranga", title: "General Manager" },
    locations: [
      { label: "Harare", address: "36 Birmingham Road, Southerton", phone: "+263 024 2754612/9", email: "farmec@farmec.co.zw" },
      { label: "Chiredzi", address: "54 Chironga Road", phone: "+263 772 720 759", email: "dulanip@farmec.co.zw" },
      { label: "Mutare", address: "12 Aerodrome Road", phone: "+263 712 978 789", email: "horsefieldm@farmec.co.zw" },
      { label: "Bulawayo", address: "Corner Falcon & Wanderer Street", phone: "+263 772 720 759", email: "dulanip@farmec.co.zw" },
      { label: "Marondera", address: "19 Smithfield Way", phone: "+263 772 609 357", email: "mutambue@farmec.co.zw" },
    ],
    website: "farmec.co.zw",
  },
  {
    slug: "mealie-brand",
    name: "Mealie Brand",
    tagline: "From generation to generation",
    sector: "Agriculture & Implements",
    description:
      "A fully-owned division manufacturing animal-drawn ploughs, harrows, rippers and planters for smallholder farmers across Sub-Saharan Africa.",
    paragraphs: [
      "Mealie Brand operates as a fully-owned division of Zimplow Holdings Limited, specialising in agricultural equipment manufacturing and distribution across Sub-Saharan Africa.",
      "The division manufactures and distributes animal-drawn ploughs, harrows, rippers and planters in Zimbabwe, focusing on land preparation, cultivation and planting implements. Products are marketed under the motto “From Generation to Generation” and are recognised for durability in small-scale agricultural equipment.",
      "Mealie Brand maintains ISO 9001:2015 Quality Management System certification, ensuring products meet rigorous export standards, and prioritises empowering smallholder farmers through partnerships with conservation and extension departments throughout the region.",
    ],
    brands: ["Mealie Brand"],
    services: ["Ploughs", "Harrows", "Rippers", "Planters"],
    locations: [
      { label: "Harare", address: "36 Birmingham Road" },
      { label: "Bulawayo", address: "39 Steel Works Rd" },
      { label: "Mutare", address: "12 Aerodrome Road" },
      { label: "Chiredzi", address: "56 Chilonga Drive" },
    ],
    website: "mealiebrand.co.zw",
  },
  {
    slug: "powermec",
    name: "Powermec",
    tagline: "Power, wherever you need it",
    sector: "Power Solutions",
    description:
      "The authorised supplier of Perkins engines, spare parts and related services in Zimbabwe, alongside solar and alternative energy solutions.",
    paragraphs: [
      "Powermec operates as a fully owned division of Zimplow Holdings Limited, functioning as the authorised supplier of Perkins engines, spare parts, and related services in Zimbabwe.",
      "The division provides Perkins engines and Perkins-powered generators, genuine aftermarket spare parts, and sustainable energy solutions spanning domestic to industrial applications, including solar panel installations, inverters and battery systems.",
    ],
    brands: ["Perkins", "Agromaster", "Canadian Solar", "Kayhan", "Longi", "Pylontech", "Sunsynk", "Solis", "Victron Energy"],
    services: ["Perkins engines & generators", "Genuine spare parts", "Solar installations", "Inverters & battery systems"],
    leadership: { name: "Vincent Chidindi", title: "Business Unit Head" },
    locations: [
      { label: "Harare (Head Office)", address: "36 Birmingham Road, Southerton", phone: "+263 024 2754612/9, 08677 007184", email: "powermec@powermec.co.zw" },
      { label: "Chiredzi", address: "56 Chilonga Drive" },
      { label: "Bulawayo", address: "Falcon/Wanderer Street" },
    ],
    website: "powermec.co.zw",
  },
  {
    slug: "ct-bolts",
    name: "CT Bolts",
    tagline: "Zimbabwe's largest supplier of quality fasteners",
    sector: "Infrastructure",
    description:
      "A premier fastener supplier distributing mild steel and high tensile bolts, nuts, nails and threaded rods across mining, construction and agriculture.",
    paragraphs: [
      "CT Bolts operates as a 100% owned division of Zimplow Holdings Limited and functions as a premier fastener supplier in Zimbabwe.",
      "The division specialises in distributing mild steel and high tensile bolts, nuts, nails, threaded rods and wire nails for the mining, construction, agriculture and infrastructure sectors, with a strategy focused on operational agility and consistent product availability.",
    ],
    services: ["Bolts & nuts", "Threaded rods", "Nails & fasteners", "Bulk supply for mining & construction"],
    leadership: { name: "Brian Munodawafa", title: "General Manager" },
    locations: [
      { label: "Harare", address: "36 Birmingham Road, Southerton / 10 Harrow Road", phone: "+263 024 2754612-9, 08677 007184", email: "sales@ctbolts.co.zw" },
      { label: "Bulawayo", address: "Corner Falcon Street & Wanderer Avenue, Belmont", phone: "+263 9 471 591-4, +263 242 467 746, 08677 007184", email: "sales@ctbolts.co.zw" },
    ],
    website: "ctbolts.co.zw",
  },
  {
    slug: "scanlink",
    name: "Scanlink",
    tagline: "The sole distributor of Scania products in Zimbabwe",
    sector: "Automotive & Logistics",
    description:
      "A fully-owned subsidiary providing Scania vehicle sales, generators from 250kVA to 1.6MVA, and comprehensive after-sales support.",
    paragraphs: [
      "Scanlink (Pvt.) Ltd operates as a fully-owned subsidiary of Zimplow Holdings Limited, functioning as the sole distributor of Scania products in Zimbabwe, providing vehicle sales and comprehensive after-sales support services.",
      "Beyond trucks and buses, Scanlink supplies generators ranging from 250kVA to 1.6MVA capacity, backed by maintenance, genuine parts and technical expertise, taking a total-solutions approach that prioritises uptime for Scania owners.",
    ],
    brands: ["Scania"],
    services: ["Trucks & buses", "Generators 250kVA–1.6MVA", "Maintenance & genuine parts", "Technical support"],
    leadership: { name: "Hatson Chimutsasha", title: "General Manager" },
    locations: [
      { label: "Harare", address: "3001 Dagenham Road, Willowvale", email: "info@scanlink.co.zw" },
      { label: "Chiredzi", address: "56 Chilonga Drive" },
      { label: "Bulawayo", address: "15 Plumtree Road, Belmont", phone: "+263 766 655656 / +263 767 676956", email: "info@scanlink.co.zw" },
    ],
    website: "scanlink.co.zw",
  },
  {
    slug: "trentyre",
    name: "TrenTyre",
    tagline: "Zimbabwe's authorised Goodyear distributor",
    sector: "Automotive & Logistics",
    description:
      "Operating as Tredcor Zimbabwe, TrenTyre distributes Goodyear tyres and offers retreading, fleet management and fitting services.",
    paragraphs: [
      "TrenTyre is a fully-owned subsidiary of Zimplow Holdings Limited, operating as Tredcor Zimbabwe (Private) Limited, and serves as the authorised distributor for Goodyear brand tyres in Zimbabwe.",
      "The company originated from a partnership between Goodyear's multinational tyre operations and the local firm Clan Services (Private) Limited, and today offers new vehicle tyres, re-treading solutions, fleet tyre management, and tyre accessories and fitting services, making it a key player in the country's tyre industry.",
    ],
    brands: ["Goodyear"],
    services: ["New tyres", "Retreading", "Fleet tyre management", "Fitting services"],
    locations: [
      { label: "Harare", address: "36 Birmingham Road" },
      { label: "Chiredzi", address: "56 Chilonga Drive" },
      { label: "Bulawayo", address: "Falcon/Wanderer Street" },
    ],
    website: "trentyre.co.zw",
  },
  {
    slug: "jcb-link",
    name: "JCB Link",
    tagline: "The direct connection to JCB's global engineering",
    sector: "Mining & Construction",
    description:
      "Supplies equipment and power generation solutions to the mining, construction, quarry, building, government and plant hire industries.",
    paragraphs: [
      "JCB Link is a business unit of Zimplow Holdings that supplies equipment and power generation solutions to the mining, construction, quarry, building, central government and plant hire industries.",
      "Its product range includes heavy machinery such as backhoe loaders and excavators, alongside power generation equipment engineered for Zimbabwean industrial conditions, positioning JCB Link as the direct connection between local industry and JCB's global engineering capabilities.",
    ],
    brands: ["JCB"],
    services: ["Backhoe loaders", "Excavators", "Power generation equipment", "Plant hire support"],
    leadership: { name: "Preece Dekune", title: "Business Unit Lead" },
    locations: [
      { label: "Harare (National Office)", address: "10 Harrow Road, Msasa" },
      { label: "Bulawayo", address: "Service outlet" },
    ],
  },
];

export type BoardMember = {
  name: string;
  title: string;
  bio: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Benjamin N. Kumalo",
    title: "Non-Executive Board Chairman",
    bio: "Appointed to the Board of Zimplow as a Non-Executive Director effective 26 November 2020, Mr Kumalo serves as General Manager and Executive Director of the Industrial Development Corporation of Zimbabwe Limited and chairs multiple organisations including Chemplex Corporation Limited and ZimRe Holdings Limited. He holds a Bachelor of Accountancy (Hons) degree and is a Chartered Accountant with extensive manufacturing, tourism and automotive industry experience.",
  },
  {
    name: "Hamish Rudland",
    title: "Non-Executive Director",
    bio: "Mr Rudland holds a Bachelor of Business Studies (Information Systems, Management and Tourism) from Massey University, New Zealand. With over 25 years of business experience across transport, logistics, agriculture, agro-processing, distribution and property sectors, he founded Pioneer Corporation Africa, now Unifreight Africa Limited on the Zimbabwe Stock Exchange, and serves on the boards of multiple listed and private companies.",
  },
  {
    name: "Lance Kennedy",
    title: "Non-Executive Director",
    bio: "Mr Kennedy holds a Master of Science degree in Business Management in the Agriculture and Food Industries from the Royal Agricultural College in Cirencester, United Kingdom. His career spans over a decade in agriculture and farming, including operational management experience in Australia.",
  },
  {
    name: "Angeline Vere",
    title: "Non-Executive Director",
    bio: "A registered legal practitioner with a wealth of experience in corporate governance, compliance, legal risk management and business management, Ms Vere has served as CEO of Telecel Zimbabwe since 2015. She holds an LLM in Corporate Law and an LLB (Honours) from the University of Zimbabwe, plus finance and business administration credentials.",
  },
  {
    name: "Dr. Kalpesh Patel",
    title: "Non-Executive Director",
    bio: "Dr Patel is a seasoned executive in the steel industry and is currently Chief Executive Officer of Steelmakers Ltd, overseeing Sub-Saharan operations. He holds a BSc in Economics, a BA in Political Science, and an MSc in Economics from the London School of Economics.",
  },
  {
    name: "Benjamin Burr",
    title: "Non-Executive Director",
    bio: "A property professional with more than fourteen years of experience in the property sector locally and within the region, Mr Burr previously served as Managing Director of CBRE Excellerate Zimbabwe for five years. He holds a Bachelor of Commerce degree from Rhodes University and sits on the boards of Unifreight Limited and Umfurudzi Park.",
  },
];

export type ExecutiveMember = {
  name: string;
  title: string;
  bio: string;
};

export const executiveTeam: ExecutiveMember[] = [
  {
    name: "Willem Swan",
    title: "Group Chief Executive Officer",
    bio: "Mr Swan joined the Group as General Manager, CT Bolts, on 1 August 2020, bringing steel industry expertise and mining engineering credentials.",
  },
  {
    name: "Charles Chaibva",
    title: "Group Chief Finance Officer",
    bio: "A chartered accountant trained by Ernst & Young, holding a Post Graduate Honours in Accounting Science with UNISA and over nine years of financial management experience.",
  },
  {
    name: "Gladys Machawira",
    title: "Group Risk, Audit and Compliance Executive",
    bio: "Joined in 2011 with over fifteen years as an audit professional across multiple industries and an Ernst & Young training background.",
  },
  {
    name: "Sharon Manangazira",
    title: "Group Corporate Services Executive",
    bio: "A registered legal practitioner with sixteen years of corporate governance and legal compliance experience, holding a Masters in Corporate Law from UNISA.",
  },
];

export const generalManagers = [
  { name: "Eddington Buranga", unit: "Farmec" },
  { name: "Vincent Chidindi", unit: "Powermec" },
  { name: "Hatson Chimutsasha", unit: "Scanlink" },
  { name: "Preece Dekune", unit: "JCB Link" },
  { name: "Brian Munodawafa", unit: "CT Bolts" },
];

export type PressRelease = {
  title: string;
  date: string;
  summary: string;
};

export const pressReleases: PressRelease[] = [
  {
    title: "Notice of an Annual General Meeting (AGM)",
    date: "2026-06-03",
    summary:
      "The Seventy Sixth Annual General Meeting of Shareholders is scheduled to be held at Zimplow. Details about the meeting location and agenda are available on request.",
  },
  {
    title: "Notice of Changes to the Executive Management of Zimplow Holdings Limited",
    date: "2026-05-07",
    summary:
      "The Board of Directors of Zimplow Holdings Limited hereby announces changes to the Group's Executive Management team.",
  },
  {
    title: "Notice of Executive Board Appointment",
    date: "2025-10-01",
    summary:
      "The Zimplow Holdings Limited Board of Directors is pleased to announce the appointment of Mr Willem Swan as an Executive board member, effective from this announcement date.",
  },
];

export const financialDocuments = [
  { year: "2026", items: ["Q1 trading update"] },
  { year: "2025", items: ["Q1 trading update"] },
  { year: "2024", items: ["Half-year statement", "Board change notice", "Annual report (coming soon)"] },
  { year: "2023", items: ["Annual report"] },
  { year: "2022", items: ["Audited financials", "Year-end results"] },
  { year: "2021", items: ["Mid-year statement", "AGM results", "Year-end results"] },
  { year: "2020", items: ["Year-end statement", "AGM meeting documentation"] },
];

export const coreValues = [
  { name: "Integrity", description: "Acting honestly and ethically in every interaction." },
  { name: "Respect", description: "Valuing people for their individuality." },
  { name: "Team Work", description: "Trusting, supporting and motivating colleagues." },
  { name: "Excellence", description: "Delivering quality service with quick, positive stakeholder interactions." },
];

export const stats = [
  { value: "1949", label: "Founded through Farmec" },
  { value: "7", label: "Business units" },
  { value: "400+", label: "Staff members" },
  { value: "100+", label: "OEM-trained specialists" },
  { value: "10+", label: "Nationwide workshops" },
  { value: "60+", label: "Vehicle fleet" },
];

export const heroSlides = [
  {
    tag: "Agriculture",
    title: "Engineering Zimbabwe's Future.",
    copy: "For more than 75 years, Zimplow has powered agriculture, mining, infrastructure and industry through world-class engineering, equipment and aftermarket support.",
    image: "/images/hero/hero-messy-ferguson.webp",
  },
  {
    tag: "Mining & Construction",
    title: "Built for Africa's toughest jobs.",
    copy: "From backhoe loaders to excavators, JCB Link keeps mining, construction and government projects moving with genuine equipment and parts.",
    image: "/images/hero/hero-jcb.webp",
  },
  {
    tag: "Automotive & Logistics",
    title: "Keeping industry moving.",
    copy: "Scanlink and TrenTyre back Zimbabwe's transport and logistics sector with Scania vehicles, Goodyear tyres and nationwide fleet support.",
    image: "/images/hero/hero-scania.jpeg",
  },
  {
    tag: "Power Solutions",
    title: "Powering possibility.",
    copy: "Powermec delivers Perkins engines, generators and solar solutions — reliable power for homes, farms and industry across Zimbabwe.",
    image: "/images/5008-HD-SPIN-SET_04.png",
  },
];

export const businessCategories = [
  { name: "Agriculture", href: "/business-units/farmec" },
  { name: "Mining", href: "/business-units/jcb-link" },
  { name: "Infrastructure", href: "/business-units/ct-bolts" },
  { name: "Engineering", href: "/business-units/powermec" },
  { name: "Aftermarket & Services", href: "/business-units" },
];

export const equipmentShowcase = [
  {
    name: "Massey Ferguson 8S.265",
    specs: "242 kW (325 HP) · Row Crop Tractor",
    image: "/images/farmec-tractor.png",
    href: "/business-units/farmec",
  },
  {
    name: "JCB 3CX",
    specs: "Backhoe Loader",
    image: "/images/3cxhero.png",
    href: "/business-units/jcb-link",
  },
  {
    name: "Scania S 560",
    specs: "Tractor Unit",
    image: "/images/scania.png",
    href: "/business-units/scanlink",
  },
  {
    name: "Perkins 5008 Series",
    specs: "Generator Engine",
    image: "/images/5008-HD-SPIN-SET_04.png",
    href: "/business-units/powermec",
  },
];

export const brandShowcase = [
  { name: "Massey Ferguson", image: "/images/farmec-tractor.png", href: "/business-units/farmec" },
  { name: "JCB", image: "/images/3cxhero.png", href: "/business-units/jcb-link" },
  { name: "Scania", image: "/images/scania.png", href: "/business-units/scanlink" },
  { name: "Perkins", image: "/images/5008-HD-SPIN-SET_04.png", href: "/business-units/powermec" },
  { name: "Goodyear", image: "/images/tyres.png", href: "/business-units/trentyre" },
  { name: "Mealie Brand", image: "/images/mealie-brand.png", href: "/business-units/mealie-brand" },
];

export const industriesServed = [
  { name: "Agriculture", image: "/images/farmec-tractor.png" },
  { name: "Mining & Construction", image: "/images/3cxhero.png" },
  { name: "Logistics", image: "/images/scania.png" },
  { name: "Power & Energy", image: "/images/5008-HD-SPIN-SET_04.png" },
  { name: "Infrastructure", image: "/images/bolt.png" },
  { name: "Automotive", image: "/images/tyres.png" },
];

export const innovations = [
  { name: "Precision Agriculture", description: "Maximise yields with data-driven insights." },
  { name: "Telematics & Fleet Management", description: "Monitor, optimise, perform." },
  { name: "Remote Diagnostics", description: "Minimise downtime with real-time alerts." },
  { name: "Smart Equipment", description: "Connected machines for a smarter future." },
  { name: "Parts & Service Digital Platform", description: "Right part. Right time. Every time." },
];

export const companyInfo = {
  name: "Zimplow Holdings Limited",
  address: "10 Harrow Road, Msasa, Harare, Zimbabwe",
  phone: "+263 (024) 2 754623/4",
  email: "info@zimplow.co.zw",
  stockLink: "https://africanfinancials.com/company/vx-zimw/",
};
