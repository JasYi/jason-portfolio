import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jason Yi",
  initials: "JY",
  url: "https://jason-yi.vercel.app/",
  location: "Washington, DC",
  locationLink: "https://www.google.com/maps/place/Washington,+DC",
  description:
    "Socially minded engineer looking to use tech to solve social problems.",
  summary:
    "I have worked in the intersection of technology and government which has taught me to put users first. As a software engineer intern and first employee at Aidy (YC W24) I learned to listen to users and iterate quickly based on their feedback. I also previously worked as a researcher at the Massive Data Institute where I tested the fesability of operating a data collection protocol in the real world. Finally, when working at the Beeck Center for Social Impact and Innovation I gained insight into how technology can often be used in much different ways than what was initially tested and how to design for diverse groups of people.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "SQL",
    "React",
    "Next.js",
    "Vue",
    "Node.js",
    "Django",
    "Flask",
    "MongoDB",
    "Firebase",
    "Supabase",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jsy37@georgetown.edu",
    tel: "+17039696962",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JasYi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jason-yi1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "jsy37@georgetown.edu",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Georgetown University",
      badges: [],
      href: "https://techandsociety.georgetown.edu/projects/fritz-family-fellows-program/",
      location: "Washington, DC",
      title: "Research Assistant",
      logoUrl: "/georgetown.png",
      start: "September 2024",
      end: "January 2025",
      description:
        "Conducted risk assesment into the ability to generate identifiable imagery using generative image AI. Generated prompts for Celeb-A dataset identites that were used to generate digital replicas of celebreties and analyzed their similarity using cosine similarity and GhostFace metrics.",
    },
    {
      company: "Aidy (YC W24)",
      href: "https://www.ycombinator.com/companies/aidy",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "/aidy.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "Worked as the first employee at Aidy. Created 6+ data pipelines to update/create 100,000+ data points. Shipped automated newsletter generation feature using retrieval augmented generation (RAG), Vue, and Django.",
    },
    {
      company: "Hoyalytics",
      href: "https://www.hoyalytics.com/",
      badges: [],
      location: "Washington, DC",
      title: "Chief Training Officer",
      logoUrl: "/hoyalytics.png",
      start: "September 2022",
      end: "January 2025",
      description:
        "Managed 300+ students across data science and data analytics training programs. Produced an original 6-week intensive course on Machine Learning, covering Neural Networks, Trees, DBSCAN, Ridge Regression, Support Vector Machines and more. Created an weighted matching algorithm to pair 60+ members with graph theory concepts and the networkX package.",
    },
    {
      company: "Massive Data Institute at Georgetown University",
      href: "https://mdi.georgetown.edu/",
      badges: [],
      location: "Washington, DC",
      title: "Research Assistant",
      logoUrl: "/georgetown.png",
      start: "August 2023",
      end: "May 2024",
      description:
        "Co-authored and submitted paper to IEEE Security and Privacy 2025. Developed Python script to easily configure scalable network simulations to test novel privacy collection protocols. Integrated custom golang code simulating differentially private data collection protocol.",
    },
    {
      company: "Hoya Developers",
      href: "https://www.hoyadevelopers.com/",
      badges: [],
      location: "Washington, DC",
      title: "Technical Project Manager",
      logoUrl: "/hoyadevs.png",
      start: "July 2023",
      end: "January 2024",
      description:
        "Integrated new platform within existing codebase for city governments to create and share town hall meeting information with Angular, Ionic, Capacitor, and Firebase for a government tech. startup. Managed team by leading weekly meetings, coordinating 1:1 meetings, and setting team goals with agile philosophies.",
    },
    {
      company: "Beeck Center for Social Impact + Innovation",
      href: "http://beeckcenter.georgetown.edu/",
      badges: [],
      location: "Washington, DC",
      title: "Analyst",
      logoUrl: "/beeckcenter.jpg",
      start: "January 2023",
      end: "August 2023",
      description:
        "Published paper on standardizing code formats for U.S. government and presented at BenCon, a conference with 500+ participants. Analyzed open source code from public and private organizations to translate SNAP (formerly known as food stamps program) eligibility rules into 2 code formats: Catala and Blawx using WSL (Windows Subsystem for Linux), Docker, and Java. Documented discussions on AI and automation in joint meeting on emerging topics in benefits delivery and AI with cross-sector leaders from the White House Office of Management and Budget and the Aspen Institute.",
    },
    {
      company: "Ethics Lab at Georgetown University",
      href: "https://ethicslab.georgetown.edu/",
      badges: [],
      location: "Washington, DC",
      title: "Research Fellow",
      logoUrl: "/ethicslab.png",
      start: "January 2023",
      end: "May 2023",
      description:
        "Conducted independent ethical research into the water usage of data centers. Created a leave behind pamphlet that presents the technical aspects and ethical challenges of data center water.",
    },
  ],
  education: [
    {
      school: "Georgetown University",
      href: "https://www.georgetown.edu/",
      degree: "Bachelor's of Science in Computer Science",
      logoUrl: "/georgetown.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Thomas Jefferson High School for Science and Technology",
      href: "https://tjhsst.fcps.edu/thomas-jefferson-high-school-science-and-technology-fairfax-county-public-schools",
      degree: "High School Diploma",
      logoUrl: "/tj.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "PorePal",
      href: "https://github.com/JasYi/PorePal",
      dates: "",
      active: true,
      description:
        "Identify skin conditions using computer vision then make reccomendations on specific skincare products to use.",
      technologies: ["FastAPI", "OpenAI", "Vercel"],
      links: [
        {
          type: "Github",
          href: "https://github.com/JasYi/PorePal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github.svg",
      video: "",
    },
    {
      title: "TinyGen",
      href: "https://github.com/JasYi/jason-yi-tinygen",
      dates: "",
      active: false,
      description:
        "Given a Github repo link and a prompt, created an API that would generate a diff that accomplishes the given prompt for the Github repo.",
      technologies: ["FastAPI", "OpenAI", "Vercel"],
      links: [
        {
          type: "Github",
          href: "https://github.com/JasYi/jason-yi-tinygen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github.svg",
      video: "",
    },
    {
      title: "Splitify",
      href: "https://splitify-jasyi.vercel.app/",
      dates: "",
      active: true,
      description:
        "Splitting your large Spotify playlists into subplaylists by vibes.",
      technologies: ["React", "Flask", "OAuth2.0", "Spotify API"],
      links: [
        {
          type: "Website",
          href: "https://splitify-jasyi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "github",
          href: "https://splitify-jasyi.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/splitify.png",
      video: "",
    },
    {
      title: "Dynamic-Dialo",
      href: "https://github.com/JasYi/dynamic-dialo",
      dates: "",
      active: true,
      description:
        "Dynamically tracking the dialogue state of a conversation. Tracks all necessary information from a conversation and then asks the user the correct question to get the right piece of information based on the context.",
      technologies: ["OpenAI", "Dialogue State Tracking"],
      links: [
        {
          type: "Github",
          href: "https://github.com/JasYi/dynamic-dialo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github.svg",
      video: "",
    },
    {
      title: "Infrared Image Translation",
      href: "https://github.com/JasYi/CycleGAN-llvip",
      dates: "",
      active: false,
      description:
        "Translating visible light images to infrared images using CycleGAN to detect pedestrians.",
      technologies: ["GANs", "PyTorch"],
      links: [
        {
          type: "Github",
          href: "https://github.com/JasYi/CycleGAN-llvip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/llvip.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PennApps '24",
      dates: "September 20th - 22nd, 2024",
      location: "Philedalphia, PA",
      description:
        "Swipe to declutter your databases and reduce your environmental impact by reducing databse usage!",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/000/041/datas/full_width.png",
      links: [
        {
          title: "Devpost",
          href: "https://devpost.com/software/tinderdb",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/JasYi/TinderDB",
        },
      ],
      skills: ["MongoDB", "NextJS", "Flask", "Groq"],
    },
    {
      title: "Hack The North '24",
      dates: "September 13th - 15th, 2024",
      location: "Waterloo, Ontario",
      description:
        "Instantly turn images of forms into live webforms ready to be sent out.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/008/880/datas/medium.png",
      links: [
        {
          title: "Devpost",
          href: "https://devpost.com/software/formulate-ncmu28",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Website",
          href: "https://www.formulate.live/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/JasYi/Formulate",
        },
      ],
    },
    {
      title: "Healthcare Hackathon with AI (H2AI)",
      dates: "March 23rd - 24th, 2018",
      location: "Washington, DC",
      win: "2nd Place and People's Choice",
      description:
        "Filling out medical forms based on electronic health records using computer vision and LLMs.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpdFGQiPxUexXD2OCVjQtwi4awkHPmFh0uw&s",
      links: [
        {
          title: "H2AI Website",
          href: "https://www.georgetown-h2ai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/reeduhlik/filed-ai",
        },
      ],
    },
    {
      title: "TreeHacks '24",
      dates: "February 16th - 18th, 2024",
      location: "Stanford University, CA",
      description:
        "Creating a better developer experience for hardware engineers working with FPGAs by offloading compute to the cloud.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/747/405/datas/medium.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/xlr8",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/JasYi/cloud-fpga-frontend",
        },
      ],
    },
    {
      title: "HoyaHacks '24",
      dates: "January 20th - 21st, 2018",
      location: "Washington DC",
      description:
        "Connecting small businesses to investors by matching them based on their financials and goals.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/507/923/datas/medium.png",
      win: "Best DEI Hack",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/freddiebriden/oyster-63",
        },
      ],
    },
  ],
} as const;
