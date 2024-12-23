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

export const CONTENT: {
  Headers: Header;
  Experience: Experience;
} = {
  Headers: {
    title: "Victor Alvarado",
    description: "Digital Artist",
  },
  Experience: {
    yearsExperience: 5,
    completedProjects: 38,
    satisfiedCustomers: 35,
  },
};

export const SOCIAL_URL: SocialLink[] = [
  {
    platform: "Dribbble",
    URL: "https://dribbble.com/VictorAlvarado",
    icon: "/icons/dribbble.svg",
  },
  {
    platform: "Instagram",
    URL: "https://instagram.com/VictorAlvarado",
    icon: "/icons/insta.svg",
  },
  {
    platform: "Linkedin",
    URL: "https://linkedin.com/VictorAlvarado",
    icon: "/icons/linkedin.svg",
  },
  {
    platform: "YouTube",
    URL: "https://youtube.com/VictorAlvarado",
    icon: "/icons/youtube.svg",
  },
  {
    platform: "Clubhouse",
    URL: "https://clubhouse.com/VictorAlvarado",
    icon: "/icons/clubhouse.svg",
  },
];

export const SKILL: Skill[] = [
  {
    img: "/images/skill-1.png",
    alt: "Skill 1",
  },
  {
    img: "/images/skill-2.png",
    alt: "Skill 2",
  },
  {
    img: "/images/skill-3.png",
    alt: "Skill 3",
  },
  {
    img: "/images/skill-4.png",
    alt: "Skill 4",
  },
  {
    img: "/images/skill-5.png",
    alt: "Skill 5",
  },
  {
    img: "/images/skill-6.png",
    alt: "Skill 5",
  },
];

export const CONTACT_INFO: contactInfo[] = [
  {
    img: "/icons/mail.svg",
    alt: "mail to info@victoralvarado.com",
    text: "info@victoralvarado.com",
  },
  {
    img: "/icons/phone.svg",
    alt: "call to victor-alvarado",
    text: "+44 01797 649276",
  },
  {
    img: "/icons/company.svg",
    alt: "victor-alvarado-company",
    text: "Victor Digital",
  },
];

export const PORTFOLIO_WORKS: portfolioWorks[] = [
  {
    title: "Work- One",
    img: "/images/work-1.png",
    link: "/work/1",
    description: "This is a brief description of work- One.",
  },
  {
    title: "Work- Two",
    img: "/images/work-2.png",
    link: "/work/2",
    description: "This is a brief description of work- Two.",
  },
  {
    title: "Work- Three",
    img: "/images/work-3.png",
    link: "/work/3",
    description: "This is a brief description of work- Three.",
  },
  {
    title: "Work- Four",
    img: "/images/work-4.png",
    link: "/work/4",
    description: "This is a brief description of work- Four.",
  },
  {
    title: "Work- Five",
    img: "/images/work-5.png",
    link: "/work/5",
    description: "This is a brief description of work- Five.",
  },
  {
    title: "Work- Six",
    img: "/images/work-6.png",
    link: "/work/6",
    description: "This is a brief description of work- Six.",
  },
];
