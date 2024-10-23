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
    "Hello! This is Tracey Li, a medical student specializing in neurology. I graduated from Zhejiang University in 2022 and continued to be a resident doctor in the hospital. Being both an Idealist, I am always wondering about three questions: What is the nature of the universe? &What's the meaning of life? &What is my mission for my existence. If you are also engaged by these questions, contact me anytime. To find out the answer, I am currently actively seeking position for diving into the research of Brain Computer Interface(BCI) or related research. If you have any opportunity, don't hesitate to discuss with me!",
  resume: "https://docs.google.com/document/d/1vRD3T_G47xF_XjrrLYSIYME44AbauRAH0duasscnh1s/edit?usp=sharing",
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
  heading: "Working Experience",
  message1: "I have been a resident doctor in The Second Affiliated Hospital of Zhejiang University School of Medicine. Rotating in the following departments has shaped who I am today.",
  image1: {
    src: require("../editable-stuff/pic1.png"),
    description: "A sculpture of a doctor and a kid patient bowing and paying tribute to each other at the entrance of the Second Hospital of Zhejiang University."
  },
  image2: {
    src: require("../editable-stuff/pic2.png"),
    description: "My friends and I from Dr.Chen's team. I still reminiscenced about the extremely harmonious atmosphere of cooperation."
  },
  image3: {
    src: require("../editable-stuff/pic3.png"),
    description: "Sanger sequencing confirmed the point mutation of the HTRA1 gene in the patient."
  },
  image4: {
    src: require("../editable-stuff/pic4.png"),
    description: "Being an assistant to Director Ling's transnasal endoscopic pituitary tumor resection surgery, Dr. Gao provided guidance beside me."
  },
  image5: {
    src: require("../editable-stuff/pic5.png"),
    description: "My friends (the resident doctors) and I in the group celebrated Dr. Yu's birthday."
  },
  message2: "There is a saying that \"neurology is the king of internal medicine\" in China. YEP! As a big fan of neurology,  I have witnessed its charm here.",
  message3: "\"A young man with dance-like movements of the left limb\"-Cerebral infarction involving the right caudate nucleus. “Sudden tinnitus on the right side, with the sound disappearing when pressing on the right side of the neck\"-right intracranial venous sinus stenosis. \"A patient with cerebellar infarction complain of headache and vomitting?”-edema in the infarction of cerebellum compresses the fourth ventricle, leading to intracranial hypertension. These are all the cases I have handled in this department. With the direction of Dr.Zhang, Dr.Chen and Dr.Ouyang, some mysterious puzzles on patients have been solved.",
  message4: "My life in neurology involves managing patients undergoing cerebrovascular intervention surgeries, taking care of stroke patients, and handling patients with Parkinson's syndrome and other neurology-related disorders. In this department, one of my major highlight moments was when I independently figured out the cause for a patent who was griping about dizziness and memory decline. His suspected positive family history and white matter lesions shown on MRI grabbed my attention. We did genetic testing on him and found a mutation in the HTRA1 gene(as shown in the picture). He was finally diagnosed as CADASIL(Cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy)and received the antiplatelet therapy.",
  message5: "Neurosurgery is definitely the most wonderful department for me cuz I am super curious about craniotomy. Fortunately, I have had the privilege of being the first surgical assistant multiple times, participating in acoustic neuroma resection, glioma resection, V-P shunt surgery, and transnasal endoscopic pituitary tumor resection. I am grateful to Dr.Gao and Dr.Dong for their caring in my daily work. I also wanna express my gratitude for Dr.Yan and Dr.Ling for what they have taught me in the surgery room.",
  message6: "In the ward, I have taken over several cases of idiopathic normal intracranial pressure hydrocephalus(iNPH), which is an essential differential diagnosis of Parkinson’s syndrome. Connecting cases from neurology and neurosurgery allows me to apprehend the enchantment of medicine.",
  message7: "When I came here—— the first rare disease ward in China, I clearly remember various varieties of disease types listed on the computer. Wilson’s disease, Huntington’s disease, Spinal Muscular Atrophy, SpinocerebellarAataxia, Amyotrophic lateral sclerosis...I didn’t even knew some of the names, but when I finished my rotation here, I could make preliminary diagnoses for the vast majority of diseases.",
  message8: "Sure, it’s all credit to my superior doctors, director Wu, attending doctors (Dr. Liu&Dr.Ni&Dr.Dong) and fellow doctors(Dr.Yu), who have helped me and taught me soooo much in my daily work! Thanks to Dr.Liu and Dr.Yang, I Learned to perform various special staining and observation on muscle specimens(which were extracted from patients’ biceps brachii), as well as extract and cultivate fibroblasts from human skin specimens.",
  message9: "As one of the most busy places in the hospital, it’s also a locale that can immensely temper the clinical skills of young physicians. Within 2 months, I have learned the initial diagnosis and treatment of a lot diseases such as STEMI, Paroxysmal supraventricular tachycardia, Hypokalemic periodic paralysis and so on. With the great honor to serve as a temporary guidance resident physician for international students, I am passionate about chatting with medicine students from German, Sri Lanka and India. Meanwhile, I also gained some soft skills such as communication, scheduling and teamwork, which laid a solid foundation for my working in other departments."
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
    "I'm currently looking for 2025 Fall PhD or research assistant opportunities in Biomedical Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "317010429@zju.edu.cn",
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
