export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  slug: string;
  summary: string;
};

export type Drawing = {
  title: string;
  image: string;
  alt: string;
};

export type Service = {
  title: string;
  description: string;
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    title: "Pool House Retreat",
    category: "Residential",
    location: "Private Estate",
    year: "2025",
    image: "/images/projects/Pool house 2.JPG",
    alt: "Elegant exterior view of a pool house and terrace",
    slug: "pool-house-retreat",
    summary:
      "A calm outdoor extension designed to feel integrated with the larger home and landscape.",
  },
  {
    title: "Luminous Kitchen",
    category: "Residential",
    location: "Custom Home",
    year: "2025",
    image: "/images/projects/Kitchen 9.JPG",
    alt: "High-end kitchen interior with refined material palette",
    slug: "luminous-kitchen",
    summary:
      "A light-filled kitchen shaped around proportion, circulation, and warm material contrast.",
  },
  {
    title: "Lounge & Billiards Room",
    category: "Residential",
    location: "Private Residence",
    year: "2024",
    image: "/images/projects/Bar 1.JPG",
    alt: "Lounge and billiards room with integrated bar and warm material palette",
    slug: "lounge-billiards-room",
    summary:
      "A residential lounge organized around a billiards table and integrated bar, with an emphasis on flow, proportion, and a restrained material palette.",
  },
  {
    title: "Sunroom",
    category: "Residential",
    location: "Private Residence",
    year: "2024",
    image: "/images/projects/Sunroom 1.png",
    alt: "Sunroom interior with generous daylight and quiet architectural detailing",
    slug: "sunroom",
    summary:
      "A bright residential room composed to feel open, balanced, and naturally connected to light.",
  },
  {
    title: "Commercial Workplace",
    category: "Commercial",
    location: "Workplace Interior",
    year: "2024",
    image: "/images/projects/Commercial 3.JPG",
    alt: "Commercial interior designed with clean geometry",
    slug: "commercial-workplace",
    summary:
      "A disciplined workplace interior designed for function, order, and a polished everyday experience.",
  },
  {
    title: "Refined Bathroom Suite",
    category: "Renovation",
    location: "Private Home",
    year: "2023",
    image: "/images/projects/Bathroom 3.JPG",
    alt: "Minimal bathroom suite with stone surfaces and refined detailing",
    slug: "refined-bathroom-suite",
    summary:
      "A bathroom renovation centered on durable materials, quiet luxury, and clean visual rhythm.",
  },
  {
    title: "Entry Sequence Study",
    category: "Residential",
    location: "Ground-Up Home",
    year: "2023",
    image: "/images/projects/Entry 1.PNG",
    alt: "Architectural entry composition with balanced proportions",
    slug: "entry-sequence-study",
    summary:
      "A carefully framed arrival sequence that sets the tone for the home through scale and restraint.",
  },
  {
    title: "Patio Gathering Space",
    category: "Residential",
    location: "Outdoor Living",
    year: "2023",
    image: "/images/projects/Patio 1.JPG",
    alt: "Patio and outdoor living area with elegant architecture",
    slug: "patio-gathering-space",
    summary:
      "An outdoor room designed to support conversation, shade, and a seamless indoor-outdoor relationship.",
  },
  {
    title: "Private Theater Room",
    category: "Residential",
    location: "Custom Interior",
    year: "2022",
    image: "/images/projects/Movie Theater.JPG",
    alt: "Dedicated private theater room with custom detailing",
    slug: "private-theater-room",
    summary:
      "A dedicated media space balancing comfort, acoustics, and architectural mood.",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const drawings: Drawing[] = [
  {
    title: "Early Concept Development",
    image: "/images/drawings/Drawing 4.JPG",
    alt: "Architectural concept drawing pinned to a work surface",
  },
  {
    title: "Showroom Kitchen Model",
    image: "/images/drawings/Drawing 5.JPG",
    alt: "Kitchen model developed for a showroom presentation",
  },
  {
    title: "Drawing Package Refinement",
    image: "/images/drawings/Drawing 6.jpeg",
    alt: "Architectural working drawings arranged on a table",
  },
];

export const services: Service[] = [
  {
    title: "Architectural Design",
    description:
      "Architectural design shaped through careful study, clear direction, and close attention to the decisions that define the finished work.",
  },
  {
    title: "Residential Design",
    description:
      "Custom homes and living spaces designed around light, proportion, and the rhythms of daily life.",
  },
  {
    title: "Commercial Design",
    description:
      "Commercial environments planned with clarity, calm proportions, and a lasting sense of character.",
  },
  {
    title: "Renovation / Remodeling",
    description:
      "Renovations that improve flow, utility, and atmosphere while respecting what is already worth preserving.",
  },
  {
    title: "Concept Development",
    description:
      "Early studies, sketches, and design direction that bring clarity before larger commitments are made.",
  },
  {
    title: "Planning and Drawing Packages",
    description:
      "Measured drawing packages prepared to support approvals, pricing, and construction with clarity.",
  },
];

export const contactDetails = {
  email: "hello@palomboarchitecturaldesign.com",
  phone: "(555) 214-3021",
  office: "By appointment",
};
