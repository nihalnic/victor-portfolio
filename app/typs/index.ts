interface Header {
  title: string;
  description: string;
}

interface Experience {
  yearsExperience: number;
  completedProjects: number;
  satisfiedCustomers: number;
}

interface SocialLink {
  platform: string;
  URL: string;
  icon: string;
}

interface portfolioWorks {
  title: string;
  img: string;
  link: string;
  description?: string;
}

interface Skill {
  img: string;
  alt: string;
}

interface contactInfo {
  img: string;
  alt: string;
  text: string | number;
}

export type {
  contactInfo,
  Skill,
  portfolioWorks,
  SocialLink,
  Experience,
  Header,
};
