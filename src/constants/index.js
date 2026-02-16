import {
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  aptean,
  fortinent,
  pba,
  polkadot,
  lightspeed,
  polkadot_dev_cli,
  kudos,
  skcet,
  nitte,
  Step,
  chef,
  online,
  ai,
  AWS_foundation,
  Fortinent_Fundamentals,
  Fortinent_asso,
  nitte_hack,
  Step_certificate,
  AWS,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiCss3,
  SiPytorch,
  SiTensorflow,
  SiSpringboot,
  SiVuedotjs,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiGeminiFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";


export const resumeLink =
  "https://drive.google.com/file/d/1UMnrv1gOkLe_TyyR5e1LsxS8qsGBBixC/view?usp=sharing";
export const repoLink = "https://github.com/Savitha-Kandasamy";

export const callToAction = "https://www.linkedin.com/in/savitha-kandasamy-246925248/";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
   {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: skcet,
    title: "Sri Krishna College of Engineering and Technology, Coimbatore",
    degree: "Bachelor of Engineering and Technology",
    duration: "December 2021 - May 2025",
    content1: "Computer Science and Engineering",
  }
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: nitte,
    event: "QUANT-A-MAZE | India's First QUantum Bits Hackathon",
    position: "Runner Up",
    content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
    certificate: nitte_hack,

  },
  {
    id: "a-2",
    icon: fortinent,
    event: "Fortinent Associate Certification",
    position: "Certified Cybersecurity",
    content1: "Completed Certified Cybersecurity Fundamentals and Associate by Fortinent",
    certificate : Fortinent_asso,
  },
  {
    id: "a-3",
    icon: fortinent,
    event: "Fortinent Fundamentals Certification",
    position: "Certified Cybersecurity",
    content1: "Completed Certified Cybersecurity Fundamentals and Associate by Fortinent",
    certificate : Fortinent_Fundamentals,
  },
  {
  id: "a-4",
  icon: AWS,
  event: "AWS Foundation",
  position: "Certified AWS Cloud Practitioner (Foundation)",
  content1: "Successfully completed the AWS Foundation Certification, gaining a strong understanding of core AWS services, cloud computing concepts, security best practices, pricing models, and basic architectural principles for building scalable and reliable cloud solutions.",
  certificate: AWS_foundation,
  },
  {
    id: "a-5",
    icon: Step,
    event: "Road To REACT",
    position: "WorkShop Conducted by CDW",
    content1: "In developing my skills in REACT I attended the ROAD TO REACT workshop conducted by CDW.",
    certificate : Step_certificate,
  },

];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-5",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-6",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-7",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-8",
        icon: SiSolidity,
        name: "Solidity",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-4",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "f-5",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-6",
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: VscAzure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-7",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-8",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-9",
        icon: SiDocker,
        name: "Docker",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Aptean, India",
    logo: aptean,
    link: "https://www.aptean.com/en-US",
    positions: [
      {
        title: "Intern Software Engineer",
        duration: "Sep 2024 - Mar 2025",
        content: [
          {
            text: "As an Associate Intern at Aptean, I honed my skills in SQL, Lambda functions, and database optimization while tackling complex problems. Working closely with cross-functional teams, I contributed to system enhancements and gained valuable experience in scalable software development.",
            link: "",
          },
        ],
        techStack: [
          {
            id: "intern-tech-1",
            icon: SiMysql,
            name: "SQL",
          },
          {
            id: "intern-tech-2",
            icon: SiDotnet,
            name: ".NET",
          },
          {
            id: "intern-tech-3",
            icon: VscAzure,
            name: "Azure",
          },
          {
            id: "intern-tech-4",
            icon: SiPostman,
            name: "Postman",
          },
        ],
      },
      {
        title: "Associate Software Engineer",
        duration: "Apr 2025 - Present",
        content: [
          {
            text: "Full-Stack Developer at Aptean specializing in .NET,Vue.js and SQL. Focused on building high-performance applications and solving complex technical challenges. Experienced in creating Lambda functions, troubleshooting real-time issues, and optimizing system architecture. Constantly learning and adapting to new technologies to drive innovation.",
            link: "",
          }
        ],
        techStack: [
          {
            id: "assoc-tech-1",
            icon: SiDotnet,
            name: ".NET",
          },
          {
            id: "assoc-tech-2",
            icon: SiVuedotjs,
            name: "Vue.js",
          },
          {
            id: "assoc-tech-3",
            icon: SiMysql,
            name: "SQL",
          },
          {
            id: "assoc-tech-4",
            icon: SiJavascript,
            name: "JavaScript",
          },
          {
            id: "assoc-tech-5",
            icon: VscAzure,
            name: "Azure",
          },
          {
            id: "assoc-tech-6",
            icon: SiDocker,
            name: "Docker",
          },
        ],
      }
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Chef Finder Application",
    image: chef,
    content:
    "I led the creation of a Chef Finder application, delivering an intuitive and visually engaging user experience supported by efficient data handling and seamless functionality. The application was designed to simplify chef discovery, improve user interaction, and ensure a smooth end-to-end experience through well-structured workflows and thoughtful design.",
    stack: [
      {
        id: "proj1-icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "proj1-icon-4",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "proj1-icon-5",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "proj1-icon-6",
        icon: SiPostman,
        name: "Postman",
      },
       {
        id: "proj1-icon-6",
        icon: TbApi,
        name: "REST API",
      },
    ],
  },
  {
    id: "project-2",
    title: "Online College Admission Portal",
    image: online,
    content:
    "I developed an innovative Online College Admission Portal, delivering a seamless and user-friendly experience with efficient backend integration. The platform supports end-to-end admission processes, reducing manual effort and improving accuracy across multiple stages.",
    stack: [
       {
        id: "proj1-icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "proj1-icon-4",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "proj1-icon-5",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "proj1-icon-6",
        icon: SiPostman,
        name: "Postman",
      },
       {
        id: "proj1-icon-6",
        icon: TbApi,
        name: "REST API",
      },
    ],
  },
  {
    id: "project-3",
    title: "AI-DRIVEN MULTIMODAL SENTIMENT AND EMOTION RECOGNITION FOR SOCIAL MEDIA THREAT SURVEILLANCE",
    image: ai,
    content:
      "Developed a multimodal system integrating text (RoBERTa, XLM-R, GPT), image (VGG16), audio (LSTM), and video analysis for sentiment/emotion recognition, coupled with machine learning and deep learning models for cyber threat detection across platforms like Twitter and YouTube.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj3-icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "proj3-icon-3",
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "proj3-icon-4",
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        id: "proj3-icon-5",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
    ],
  }
];


// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/savitha-kandasamy-246925248/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Savitha-Kandasamy",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:savitha161703@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/savi_kandasamy/",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Savitha Kandasamy",
  githubUsername: "Savitha-Kandasamy",
  // tagLine:
  //   "MTS @ Oracle | 12x Hackathon Winner 🏆 | ETHIndia'22,24 Winner | NITK'24 | PBA-5",
  intro:
  "“Transforming ideas into software through thoughtful design and precise execution.”"
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
