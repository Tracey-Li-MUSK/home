// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tracey",
  middleName: "",
  lastName: "Li",
  c_message: " 旷世经纬  胸怀天下 ",
  message: " The people who are crazy enough to think they can change the world are the ones who do. ",
  icons: [],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tracey.png"),
  imageSize: 375,
  message:
    "Hello! This is Tracey Li, a medical student specializing in neurology. I graduated from Zhejiang University in 2022 and continued to be a resident doctor in The Second Affiliated Hospital of Zhejiang University School of Medicine. Being an Idealist, I am always wondering about three questions: What is the nature of the universe? &What's the meaning of life? &What is my mission for my existence. If you are also engaged by these questions, contact me anytime. To find out the answer, I become a BME student in Carnegie Mellon University and I am looking for opportunities to start my entrepreneurial journey!",
  resume: "https://www.dropbox.com/scl/fi/enwq80dz7c68amr61ranz/Tracey-s-CV.pdf?rlkey=o8miwyg4996if3apjtfd65geu&st=4ndgzmc7&dl=0",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/pic1.png"), 
      label: "", 
      paragraph: "My friends and I from Dr.Chen's team. I still reminiscenced about the extremely harmonious atmosphere of cooperation.",
      width:"615",
      height:"350"
    },
    { 
      img: require("../editable-stuff/pic2.png"), 
      label: "", 
      paragraph: "Sanger sequencing confirmed the point mutation of the HTRA1 gene in the patient.",
      width:"615",
      height:"150"
    },
  ],
  imageSize: {
    width:"615",
    height:"350"
  }
};

const workingExperience = {
  show: true,
  heading: "Working Experience"
}

const researchProjects = {
  show: true,
  heading: "Research Projects",
}

const meInRealLife = {
  show: true,
  heading: "Me In Real Life",
  imageLink: require("../editable-stuff/yixin.jpg"),
  imageSize: 275,
  message1: "After taking off the medical gown or lab coat, here comes the other side of me: a person who frequently critiques numerous phenomena in the real society. Although baring the same attitude towards the world as my idol Elon Musk does—\"I'd rather be optimistic and wrong than pessimistic and right\"—I have reservations about some national policies and common values of the people, especially in the fields of healthcare and education that I am familiar with. That's also the reason for my desire to go to the United States.",
  message2: "Besides, my family and my hobbies are also important parts of my life. I was once crazy about rubic's cube and gambling games which involves strategic thinking and decision-making . In the university life, I devoted more time into table-tennis, photography and stock market. All in all, these give me ways to learn more about how the world is working and help me with answering three questions above.",
  message3: "Let me introduce another important part of my life—my fiance: Yixin Ou. First impressed by his radiant, stout and sinewy figure, I didn't expect such an intelligent, empathy, humorous and refined boy who possesses a remarkably tender-hearted nature. He is both my mentor and my best friend. It is him who learns computer science kindles my enthusiasm about coding, which is definitely a lever and “bicycle of thoughts” in modern society. As a young AI researcher specialized in Large Language Models, Yixin is also a talented frisbee player. If you want to know more about him, check his ",
  site: "https://scholar.google.com/citations?user=QVTr5dQAAAAJ"
}

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Protein sample extraction and preparation", description: "every time before a series of WB" },
    { name: "Cell culture", description: "293T, hela cells and fibroblast from human skin specimen" },
    { name: "Gene cloing", description: "site-directed mutagenesis and homologous recombination, liposome transfection" },
    { name: "DNA extraction and identification", description: "Extract DNA from patients' peripheral blood cells" },
    { name: "Immunohistochemistry", description: "for muscle tissue" },
    { name: "Special stains for tissue section", description: "relatively easy" },
    { name: "RNA extraction and detection", description: "Extract RNA using a reagent kit, RT-PCR" },
    { name: "Animal experiment", description: "Dissect and extract liver and bone marrow from mice, behavioral experiments and so on" },
  ],
  softSkills: [
    { name: "Innovation", value: 96 },
    { name: "Problem Solving", value: 92 },
    { name: "Communication", value: 88 },
    { name: "Teamwork", value: 80 },
    { name: "Time Management", value: 75 },
    { name: "Learning Ability", value: 95 },
    { name: "Adaptablitity", value: 84 },
    { name: "Professional Ethics&Integrity", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "traceyli@zju.edu.cn",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, meInRealLife, workingExperience, researchProjects };
