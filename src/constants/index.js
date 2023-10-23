import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  next,
  nest, 
  mui,
  meta,
  starbucks,
  upwork,
  tesla,
  shopify,
  abyss,
  abysssolutions,
  apple,
  architect,
  cars,
  foods,
  tours,
  airbnb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Web Developer",
    subtitle: 'MERN Stack',
    icon: web,
  },
  {
    title: "React Developer",
    subtitle: 'NextJs',
    icon: mobile,
  },
  {
    title: "Backend Developer",
    subtitle: 'NestJs, Express.js',
    icon: backend,
  },
  {
    title: "Database Design",
    subtitle: 'MongoDB, MySQL',
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: 'NestJs',
    icon: nest,
  },
  {
    name: 'NextJs',
    icon: next,
  },{
    name: 'MUI',
    icon: mui,
  },
];

const experiences = [
  {
    title: "FullStack Web Developer",
    company_name: "Abyss Solutions Pty. Ltd.",
    icon: abyss,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Developing and maintaining the company's flagship product Abyss Fabric using Next.js, Nest.js and other related technologies.",
      "Proficiently working in development, adept at sprint planning and Program Increments (PIs) with a strong track record of delivering high-quality software on schedule.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining various clients' web applications and websites using MERN stack and other related technologies.",
      "Collaborating with clients to understand their requirements and provided technical guidance and solutions to address their business needs.",
      "Collaborating with clients' representatives including designers, product managers, and other developers to deliver high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
  name: 'Abyss Fabric',
  description: "Web-based platform that allows client to do asset integrity management and fabric maintenance of offshore oil platforms, marine terminal, hydropower dams and various other applications.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "nestjs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "mui",
      color: "blue-text-gradient",
    },
  ],
  image: abysssolutions,
  url: "https://abysssolutions.co/",
  },
  {
    name: "Apple Website",
    description: "This apple website clone showcases various aspects of the web development techniques including complex css animations and event listeners",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    url: "https://compassionate-dubinsky-8eb37e.netlify.app/",
  },
  {
    name: "Airbnb Clone",
    description: 'This airbnb clone project was an attempt to replicate the functionality of the famous booking website of the same name. It uses TailwindCSS and the modern React framework, NestJs.',
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    url: "https://fly-by-home.vercel.app/",
  },
  {
    name: "Around the World",
    description: 'This example project has complex css animations and a responsive design to work with every screen size.',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tours,
    url: "https://tender-carson-271288.netlify.app/",
  },
  {
    name: "Architecture",
    description: 'This example project has complex css animations and a responsive design to work with every screen size.',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: architect,
    url: "https://naughty-feynman-e90337.netlify.app/",
  },
  {
    name: "Classic Cars",
    description: 'This example project has complex css animations and a responsive design to work with every screen size.',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cars,
    url: "https://cocky-morse-62b487.netlify.app/",
  },
  {
    name: "Variety of Foods",
    description: 'This example project has complex css animations and a responsive design to work with every screen size.',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: foods,
    url: "https://determined-leakey-dbbfff.netlify.app/",
  },
];

export const PINK = '#f72585'
export const BLUE = '#170664'

export { services, technologies, experiences, testimonials, projects };
