import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Computer Engineer. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs. Committed to utilizing my skills to further the mission of a company.`;

export const ABOUT_TEXT = `Motivated Full Stack Developer proficient in Python, Django, React, and SQL. Passionate about building scalable web applications, optimizing performance, and enhancing user experiences. Skilled in backend development, RESTful APIs, database management, and front-end frameworks. Strong problem-solving abilities with experience in e-commerce platforms, authentication systems, and payment integrations. Eager to apply technical expertise and continuously learn in a dynamic development environment.`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    role: " Full Stack Python Developer",
    company: " ITVedant",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa ratione dolor tempora perspiciatis vero iure, at consequuntur laudantium quam autem dolorum necessitatibus! Totam veritatis eos veniam deserunt quae quasi?`,
    technologies: ["Javascript", "React.js", "Python", "DJango"],
  },
  {
    year: "2018 - 2022",
    role: " B.tech in computer Engg.",
    company: " Mumbai University",
    description: `I Completed my graduation in compputer Engineering in Jawahar Education Societys AC Patil college of Engineering navi mumbai.`,
    technologies: ["JAVA", "MySQL", "GIT"],
  },
  {
    year: "2016 - 2018",
    role: " Dimploma in Computer Technology",
    company: " MSBTE",
    description: `I Completed my diploma in Bharti Vidyapith Institute of Technology kharghar navi mumbai`,
    technologies: ["HTML", "CSS", "Android Studio", "XML"],
  },
  /*{
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },*/
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Developed a fully functional e-commerce platform using Django, Python, MySQL, and Razorpay for payment integration.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Pyhton",
      "DJango",
      "MySQL",
      "Razorpay",
    ],
    link: "https://github.com/Sushant98K/awesome-django-ecommerce-website",
  },
  {
    title: "Library Management system SQL",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["SQL", "MySQL", "CLI"],
    link: "https://github.com/Sushant98K/Library_Management_system_SQL",
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer-motion"],
    link: "https://github.com/Sushant98K/Personal-Portfolio",
  },
  {
    title: "Design Agency Website",
    image: project4,
    description:
      "Designed and developed a sleek, modern design agency website using HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/Sushant98K/Creative-Design-Agency-Website",
  },
];

export const CONTACT = {
  address: "New Panvel, Mumbai (410206)",
  phoneNo: "+91 97683 68524 ",
  email: "sushant98k@gmail.com",
};
