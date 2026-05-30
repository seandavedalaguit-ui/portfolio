export const site = {
  name: "SEAN DAVE P DALAGUIT",
  location: "Butuan City, Philippines",
  tagline: "Software Engineer | Web Developer | UX/UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/images/avatar.jpg" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "seandave@email.com",
  calendlyUrl: "https://calendly.com/app/scheduling/meeting_types/user/me",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/seandavedalaguit-ui/portfolio",
  instagram: "https://www.instagram.com/diebl_hor17/",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I'm Sean Dave Dalaguit, an Information Systems graduate with a strong foundation in databases, system analysis, web development, and business technology. I thrive at the intersection of technology and business — translating complex requirements into solutions that actually work.

My analytical mindset drives me to understand problems deeply before writing a single line of code. Whether it's architecting a database schema, designing a seamless UI, or managing a project from concept to deployment, I approach every task with intention and precision.

Outside the office, you'll find me deep in an RPG, building personal web projects, or experimenting with new technologies — because the best developers never stop learning.`; 

export const experience = [
  { role: "Junior Programmer", company: "ISySS-CDM CSU", year: "2025" },
  { role: "Freelance Web Developer", company: "Self-Employed", year: "2025" },
  { role: "Student IT Assistant",company: "University IT Department",year: "2022",},
  { role: "Junior Developer", company: "MARVELTechnologies", year: "2024" },
  { role: "Hello World", company: "Started my coding journey", year: "2021" },
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
  ],
};

export const projects = [
  { name: "Campus Information Portal", description: "A full-stack web portal for university students to access schedules, announcements, and academic resources. Features role-based access control, real-time notifications, and an admin dashboard.", url: "", domain: "MyPortal.web.app" },
  { name: "Inventory Management System", description: "A desktop-grade web application for small businesses to track inventory, manage suppliers, generate reports, and handle purchase orders with a clean, data-driven UI.", url: "", domain: "IMS.web.app" },
  { name: "RPG Lore Wiki — FanSite", description: "A gaming fan site and wiki dedicated to a beloved RPG universe. Features lore articles, character databases, interactive maps, and a community-driven content system.", url: "", domain: "RPG.web.app" },
  { name: "Personal Finance Tracker", description: "A sleek personal finance web app with expense categorization, budget goals, visual charts, and monthly summaries. Built mobile-first with offline support.", url: "", domain: "PFT.web.app" },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    href: "#",
  },
  {
    name: "Coursera UX/UI Certification",
    issuer: "Google",
    href: "#",
  },
  {
    name: "Project Management",
    issuer: "University of the Philippines",
    href: "#",
  },
];

export const recommendations = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Cris Lawrence Adrian Militante", title: "ICT Director at GCM" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Ken Gorro", title: "Senior Developer at Fullscale" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Patrick Vince Velasco", title: "Software Engineer, YNS" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "John Edmerson Pizarra", title: "Jr. Full-stack Developer, PocketDevs" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Glenn Pepito", title: "Professor at University of San Carlos" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Van Honoridez", title: "Application Development Analyst at Accenture" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Zinia Ma. Consuelo R. Trinidad", title: "Web Developer, Quickway Holdings Inc." },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", author: "Jomar Neri", title: "Full-stack Developer, Freelance" },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators – Caraga Chapter",
    href: "https://psite.org/",
  },
];
