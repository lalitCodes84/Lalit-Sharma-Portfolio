/////////////////////////////////////////////////////////////////////////////////

// Here is the Navigation Bar data
export const navMenus = [
  {
    id: "home",
    menu: "Home",
  },
  {
    id: "about-me",
    menu: "About Me",
  },
  {
    id: "skills",
    menu: "Skills",
  },
  {
    id: "projects",
    menu: "Projects",
  },
  {
    id: "contact-me",
    menu: "Contact Me",
  },
];

/////////////////////////////////////////////////////////////////////////////////
// Here is the Herosection Menu data
export const heroSectionData = [
  {
    key: "name",
    value: "Lalit Sharma",
  },
  {
    key: "title",
    value: "Full-Stack Web Developer | MERN Stack Enthusiast",
  },
  {
    key: "shortIntro",
    value: "Building seamless, scalable, and user-friendly web applications.",
  },
  {
    key: "ctaButtons",
    value: [
      { label: "Hire Me", link: "contact-me" },
      { label: "View My Work", link: "projects" },
      {
        label: "Download Resume",
        link: "https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67a08bf5f97830ef5e92d7bc",
      },
    ],
  },
  {
    key: "photo",
    value: "/assets/Lalit_Official_Image.jpg",
  },
  {
    key: "background",
    value: "src/assets/background_img_2.PNG",
  },
  {
    key: "expertise",
    value: [
      "Web Development",
      "Responsive Design",
      "API Integration",
      "React & Redux Expertise",
    ],
  },
  {
    key: "socialLinks",
    value: [
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/lalit-sharma-813b4a257/",
        icon: "FaLinkedin", // JSX used correctly with React context
      },
      {
        platform: "GitHub",
        link: "https://github.com/lalitCodes84",
        icon: "FaGithubSquare", // JSX used correctly with React context
      },
    ],
  },
];

/////////////////////////////////////////////////////////////////////////////////
// Here is the About Me data
export const aboutMeData = [
  {
    title: "Men with PC",
    image: "src/assets/men with pc.svg",
  },
  {
    title: "Description",
    details: [
      "I am Lalit Sharma, a passionate individual with expertise in web development and a flair for creativity and innovation. I aim to create impactful solutions, whether through crafting web applications, content creation, or entrepreneurial ventures.",
    ],
  },
  {
    title: "Personal Information",
    details: [
      { label: "Location", value: "Kanpur, India" },
      { label: "Languages Known", value: "Hindi, English, Tamil" },
    ],
  },
  {
    title: "Education",
    details: [
      { label: "Highest Qualification", value: "ITI - JK ITC" },
      { label: "Completed Schooling", value: "12th Grade" },
    ],
  },
  {
    title: "Work Experience",
    details: [
      { company: "Maruti Suzuki Haryana Manesar", role: "Worker" },
      { company: "Lohia Group", role: "Assembler" },
      { company: "Instakart Service Pvt Ltd", role: "Sorter" },
      { company: "Excitel", role: "Technician" },
    ],
  },
];

/////////////////////////////////////////////////////////////////////////////////
// Here is the Skills Icons data
export const skillsIcons = [
  {
    name: "Html",
    icon: "FaHtml5",
  },
  {
    name: "Css",
    icon: "FaCss3Alt",
  },
  {
    name: "Javascript",
    icon: "FaJsSquare",
  },
  {
    name: "NodeJs",
    icon: "FaNodeJs",
  },
  {
    name: "React",
    icon: "FaReact",
  },
  {
    name: "Github",
    icon: "FaGithubSquare",
  },
  {
    name: "MongoDB",
    icon: "FaMdb",
  },
];

/////////////////////////////////////////////////////////////////////////////////
// Here is the Projects section data
export const projects = [
  {
    name: "kfc clone",
    githubRepoLink: "https://github.com/lalitCodes84/kfc-clone-react",
    liveLink: "https://kfcdotcomclone.netlify.app/",
    image: "../assets/Kfc clone react.png",
  },
  {
    name: "Asos clone",
    githubRepoLink: "https://github.com/lalitCodes84/Asos.comClone",
    liveLink: "https://lalitcodes84.github.io/Asos.comClone/",
    image: "src/assets/asos clone first project.png",
  },
  {
    name: "Bluefly clone",
    githubRepoLink: "https://github.com/lalitCodes84/Blue-Fly-Clone-",
    liveLink: "https://sensational-bombolone-51292b.netlify.app/",
    image: "src/assets/bluefly clone.png",
  },
  {
    name: "G-Gemini",
    githubRepoLink: "https://github.com/lalitCodes84/my-gemini",
    liveLink: "https://my-gemini-brown.vercel.app/",
    image: "src/assets/mygemini.png",
  },
];
