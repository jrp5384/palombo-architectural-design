export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  slug: string;
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
  },
  {
    title: "Luminous Kitchen",
    category: "Residential",
    location: "Custom Home",
    year: "2025",
    image: "/images/projects/Kitchen 9.JPG",
    alt: "High-end kitchen interior with refined material palette",
    slug: "luminous-kitchen",
  },
  {
    title: "Hospitality Bar Interior",
    category: "Commercial",
    location: "Hospitality Space",
    year: "2024",
    image: "/images/projects/Bar 1.JPG",
    alt: "Architectural bar interior with warm finishes",
    slug: "hospitality-bar-interior",
  },
  {
    title: "Light Room Residence",
    category: "Residential",
    location: "Private Residence",
    year: "2024",
    image: "/images/projects/Light room 1.png",
    alt: "Bright residential interior with clean architectural lines",
    slug: "light-room-residence",
  },
  {
    title: "Commercial Workplace",
    category: "Commercial",
    location: "Workplace Interior",
    year: "2024",
    image: "/images/projects/Commercial 4.JPG",
    alt: "Commercial interior designed with clean geometry",
    slug: "commercial-workplace",
  },
  {
    title: "Refined Bathroom Suite",
    category: "Renovation",
    location: "Private Home",
    year: "2023",
    image: "/images/projects/Bathroom 1.JPG",
    alt: "Minimal bathroom suite with premium detailing",
    slug: "refined-bathroom-suite",
  },
  {
    title: "Entry Sequence Study",
    category: "Residential",
    location: "Ground-Up Home",
    year: "2023",
    image: "/images/projects/Entry 1.PNG",
    alt: "Architectural entry composition with balanced proportions",
    slug: "entry-sequence-study",
  },
  {
    title: "Patio Gathering Space",
    category: "Residential",
    location: "Outdoor Living",
    year: "2023",
    image: "/images/projects/Patio 1.JPG",
    alt: "Patio and outdoor living area with elegant architecture",
    slug: "patio-gathering-space",
  },
  {
    title: "Private Theater Room",
    category: "Residential",
    location: "Custom Interior",
    year: "2022",
    image: "/images/projects/Movie Theater.JPG",
    alt: "Dedicated private theater room with custom detailing",
    slug: "private-theater-room",
  },
];

export const featuredProjects = projects.slice(0, 4);

export const drawings: Drawing[] = [
  {
    title: "Early Concept Development",
    image: "/images/drawings/Drawing 4.JPG",
    alt: "Architectural concept drawing pinned to a work surface",
  },
  {
    title: "Measured Detail Study",
    image: "/images/drawings/Drawing 5.JPG",
    alt: "Detailed architectural sketch showing proportion and assembly",
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
      "Full-scope architectural design shaped by context, proportion, and a disciplined material palette.",
  },
  {
    title: "Residential Design",
    description:
      "Custom homes and tailored living environments designed for beauty, comfort, and long-term livability.",
  },
  {
    title: "Commercial Design",
    description:
      "Thoughtful commercial environments that support experience, function, and brand presence without excess.",
  },
  {
    title: "Renovation / Remodeling",
    description:
      "Measured interventions that elevate existing spaces while respecting the character of the original structure.",
  },
  {
    title: "Concept Development",
    description:
      "Early-stage visioning, planning studies, and design direction to establish clarity before documentation begins.",
  },
  {
    title: "Planning and Drawing Packages",
    description:
      "Clear, coordinated drawing sets prepared to support approvals, bidding, and construction execution.",
  },
];

export const contactDetails = {
  email: "studio@palomboarchitecturaldesign.com",
  phone: "(555) 214-3021",
  office: "By appointment",
};
