import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const techStack = [
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#000",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#3C873A",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
  },

  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "#336791",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    name: "Firebase",
    icon: RiFirebaseFill,
    color: "#FFCA28",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    name: "Redis",
    icon: DiRedis,
    color: "#DC382D",
  },
  {
    name: "Supabase",
    icon: RiSupabaseFill,
    color: "#3ECF8E",
  },
  {
    name: "Socket.io",
    icon: TbBrandSocketIo,
    color: "#010101",
  },
];

export const workExperience = [
  {
    company: "Lamarr",
    position: "Frontend Intern",
    startDate: "Feb 2025",
    endDate: "March 2025",
    description:
      "Developed and enhanced UI, improving user experience and efficiency in managing recruitment workflows. Optimized the shortlisting process and automating scheduling to improve hiring efficiency.",
  },
  {
    company: "Women in Tech Dreamin'",
    position: "Full Stack Developer",
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    description:
      "Worked on the event platform for Women in Tech Dreamin' Kolkata 2024 enabling attendees to sign in, access event info and engage with interactive mini games, creating a gamified experience to earn virtual coins which they can redeem at the integrated marketplace to earn exclusive WIT Dreamin' swags.",
  },
];

export const projects = [
  {
    title: "Shorty",
    description: "the no-nonsense URL shortener.",
    liveLink: "https://app.shorty.subhammani.xyz",
    githubLink: "https://github.com/iSubhamMani/shorty",
    techUsed: [
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS API Gateway",
      "Serverless",
      "Next.js",
    ],
  },
  {
    title: "Vibe Check",
    description:
      "tired of arguing which song to play next? Vibe Check is here to help you decide! Create a room, invite your friends, vote and let the vibes flow",
    liveLink: "https://vibe-check-ruddy.vercel.app",
    githubLink: "https://github.com/iSubhamMani/vibe-check",
    techUsed: [
      "Next.js",
      "NextAuth.js",
      "Postgres",
      "Prisma",
      "Pusher",
      "Tanstack Query",
      "AceternityUI",
    ],
  },
  {
    title: "LearnIt",
    description:
      "level up your learning. LearnIt delivers instant note summaries, powerful quizzes, and engaging discussions",
    liveLink: "https://learnit-tawny.vercel.app/",
    githubLink: "https://github.com/iSubhamMani/learnit",
    techUsed: [
      "Next.js",
      "NextAuth.js",
      "Gemini",
      "MongoDB",
      "Tanstack Query",
      "DaisyUI",
    ],
  },
  {
    title: "Note Keeper",
    description: "not your traditional note-taking app.",
    liveLink: "https://notekeeper-psi-two.vercel.app",
    githubLink: "https://github.com/iSubhamMani/note-keeper",
    techUsed: ["Next.js", "Supabase", "Pinecone", "Gemini"],
  },
  {
    title: "Med-o-AI",
    description:
      "decode prescriptions and get personalized health recommendations with Med-o-AI",
    liveLink: "https://med-o-ai.vercel.app",
    githubLink: "https://github.com/iSubhamMani/Med-o-ai",
    techUsed: ["Next.js", "NextAuth", "MongoDB", "Gemini", "AceternityUI"],
  },
  {
    title: "GameSpace",
    description:
      "a platform to view the latest and popular games. Search, view details and add them to your bag!",
    liveLink: "https://gamespace-63869.web.app",
    githubLink: "https://github.com/iSubhamMani/gameSpace",
    techUsed: ["React", "Firebase", "Redux", "Tailwind CSS"],
  },
];
