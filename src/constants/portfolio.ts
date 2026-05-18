import { GithubIcon } from "@/Components/ui/github";
import { LinkedinIcon } from "@/Components/ui/linkedin";
import { SendIcon } from "@/Components/ui/send";
import { TwitterIcon } from "@/Components/ui/twitter";
import { Mail } from "lucide-react";


export type Contribution = {
  prUrl: string;
  private?: boolean;
  title?: string;
  url?: string; // a.k.a redirectUrl
  status?: 'open' | 'closed' | 'merged';
};

export interface Personal {
  name: string;
  surname: string;
  roles?: string[];
  location: string;
  timezone: string;
  bio: string;
  email: string;
  availability: string;
  avatar: string;
}

export interface Social {
  icon: any ;
  href: string;
  label: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  startDate: string;
  description: string;
  points?: string[];
  linkedin: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
  className: string;
  collaborative?: boolean;
  featured?: boolean;
}


export interface SkillCategory {
  label: string;
  skills: string[];
}


export const PORTFOLIO_CONTENT: {
  personal: Personal;
  socials: Social[];
  // skills: string[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  contributions: Contribution[];
  mediumUrl: string;
} = {
  personal: {
    name: "Hi, I'm Rahul —",
    surname: "AI Engineer.",
    roles: ["AI Engineer.", "Backend Developer.", "Software Engineer."],
    location: "India",
    timezone: "Asia/Kolkata",
    bio: 'AI Engineer building end-to-end intelligent applications — RAG pipelines, LLM-powered backends with Python & FastAPI, and React UIs that bring it all together.',
    email: "rahulchoudhary5266@gmail.com",
    availability: "Available for opportunities",
    avatar: "/profile.png",
  },
  socials: [
    {
      icon: GithubIcon,
      href: "https://github.com/26rahulchoudhary/",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/rahulchoudhary2610/",
      label: "LinkedIn",
    },
    { icon: SendIcon, href: "mailto:rahulchoudhary5266@gmail.com", label: "Email" },
  ],
  skillCategories: [
    {
      label: "Languages",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      label: "Frameworks / Libraries",
      skills: ["FastAPI", "LangChain", "React", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      label: "AI",
      skills: ["RAG", "LLM Integration", "Prompt Engineering", "AI Agents", "NLP", "Embeddings", "Vector Databases", "Semantic Search", "Reranking", "Chunking Strategies"],
    },
    {
      label: "Databases",
      skills: ["PostgreSQL", "pgvector"],
    },
//     {
//       label: "Evaluation & Optimization",
//       skills: ["RAGAS", "LLM Evaluation", "Conversation Memory", "Metadata Filtering"],
//     },
    {
      label: "Tools & Platforms",
      skills: ["Docker", "Git", "GitHub", "Selenium", "Playwright"],
    },
  ],
  experience: [
    {
      company: "RedSeal",
      companyUrl: "https://redseal.com",
      role: "Software Engineer Intern",
      period: "Sept 2025 - Mar 2026",
      startDate: "2025-09-01",
      description: "Leveraged AI prompting techniques and LLM-assisted workflows to accelerate debugging and improve testing infrastructure.",
      points: [
        "Leveraged AI prompting techniques and LLM-assisted workflows to accelerate debugging, reducing investigation time by 30%.",
        "Engineered automated browser test suites using Playwright and Selenium, improving test coverage and reducing manual effort by 40%.",
        "Implemented Behavior-Driven Development (BDD) for structured, maintainable test cases across the application.",
        "Managed version control and collaborative development using Git and GitHub in a distributed team.",
        "Operated in Linux environments for debugging, process execution, and system-level operations."
      ],
      linkedin: "https://www.linkedin.com/company/redseal",
    },
    {
      company: "Oasis Infobyte",
      companyUrl: "https://oasisinfobyte.com",
      role: "Machine Learning Intern",
      period: "Jul 2024 - Aug 2024",
      startDate: "2024-07-01",
      description: "Built and deployed end-to-end machine learning pipelines with data preprocessing, model training, and optimization.",
      points: [
        "Built and trained machine learning models using Scikit-learn on 100K+ data points, improving prediction accuracy by 15%.",
        "Processed and transformed structured datasets using Pandas and NumPy for feature engineering and model input.",
        "Optimized model performance through hyperparameter tuning, increasing inference efficiency by 25%.",
        "Deployed 3 end-to-end ML pipelines covering data ingestion, preprocessing, training, and evaluation."
      ],
      linkedin: "https://www.linkedin.com/company/oasis-infobyte",
    },
  ],
  projects: [
    {
      title: "Berkshire Hathaway Intelligence – RAG Agent",
      desc: "Production-ready RAG-based AI agent answering queries from 100+ shareholder letters using LangChain, FastAPI, and GPT-4o with sub-second latency and 35% improved multi-turn response relevance.",
      tags: ["LangChain", "FastAPI", "pgvector", "GPT-4o", "TypeScript", "Node.js"],
      href: "#",
      github: "https://github.com/26rahulchoudhary/Pazago",
      className: "md:col-span-1",
    },
    {
      title: "AI Financial Document Management System",
      desc: "Full-stack RAG platform for semantic analysis of 50K+ financial documents with embedding-based search, RBAC, PDF parsing, and React frontend for interactive document management.",
      tags: ["FastAPI", "PostgreSQL", "pgvector", "React", "RAG", "Semantic Search"],
      href: "#",
      github: "https://github.com/26rahulchoudhary/Nimap_task",
      className: "md:col-span-1",
    },
  ],
  contributions: [
      {
      prUrl:"https://github.com/microsoft/playwright-python/pull/3078",
      status:"merged"
    },
    ],
};
