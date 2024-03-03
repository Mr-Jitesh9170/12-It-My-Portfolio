// -------------------------------------------- About Data Importing ------------>
import Linkding from "../Assets/linkedin.svg"
import Github from "../Assets/github.svg"
import Instagram from "../Assets/insta.svg"


// -------------------------------------------- Skills Data Importing ------------>
import "../portfolio.scss";
// frontend icons  ===>
import HTML from "../Assets/html.svg"
import CSS from "../Assets/css.svg"
import JS from "../Assets/js.svg"
import SCSS from "../Assets/scss.svg"
import BOOTstrap from "../Assets/bootstrap.svg"
import Tailwind from "../Assets/tailwind.svg"
import Reactjs from "../Assets/reactjs.svg"
import Redux from "../Assets/redux.svg"

// backened icons  ===>
import NODEJS from "../Assets/nodejs.svg"
import Expressjs from "../Assets/express.svg"
import MONGODB from "../Assets/MongoDB.svg"

// languages icons =====>
import JAVA from "../Assets/java.svg"
import C from "../Assets/c.svg"

// Others icons ======>
import VScode from "../Assets/vsCode.svg"
import Postman from "../Assets/postman.svg"
import GIT from "../Assets/git.svg"
import Thunder from "../Assets/thunder.svg"
import BITbucket from "../Assets/bitBucket.svg"

// -------------------------------------------- Project Data Importing ------------>
import ProjectImage from "../Assets/ProjectImages/projectimage.jpg"
import wheatherAPP from "../Assets/ProjectImages/wheatherapp.jpg"
import TodoAPP from "../Assets/ProjectImages/todo.jpg"
import calculatorAPP from "../Assets/ProjectImages/calculator.jpg"
import Portfolio from "../Assets/ProjectImages/portfolioAPP.jpg"
// -------------------------------------------- ContactMe Data Importing ------------>
import EmailBtn from "../Assets/emailbtn.svg"
import CallBtn from "../Assets/callbtn.svg"

// =============================================================================>
//======================================= HOME RELATED DATA ========================>
// =================================================================================================>
export const NavBar = [
  {
    ID: "#home",
    Name: "Home."
  },
  {
    ID: "#aboutme",
    Name: "About Me."
  },
  {
    ID: "#educations",
    Name: "Educations."
  },
  {
    ID: "#skills",
    Name: "Skills."
  },
  {
    ID: "#project",
    Name: "Prozects."
  },
  {
    ID: "#experience",
    Name: "Experiences."
  },
  {
    ID: "#contactme",
    Name: "Contact Me."
  }
]

// =============================================================================>
//======================================= ABOUT RELATED DATA ========================>
// =================================================================================================>

export const SocialMediaButton = [
  {
    img: Github,
    Url: "https://www.github.com"
  },
  {
    img: Linkding,
    Url: "https://www.linkedin.com"
  },
  {
    img: Instagram,
    Url: "https://www.instagram.com"
  }
]

export const AboutPara = [
  "My Name is Jitesh Pandey.",
  "I have completed B.tech from Dr. APJ Abdul Kalam Technical University, Lucknow.",
  "I Achieved distinction degree in B.tech (computer Science & Engineering) with 7.7 CGPA",
  "My strength are I am curious to learn new technology in the area of web development , i like to solve DSA problems using Java.",
  "I am good in soft skills like I am a Good communicator",
  "My hobbies are Webdevelopment , DSA Problems solving and Listening songs."
]


// =============================================================================>
//======================================= EDUCATION RELATED DATA ========================>
// =================================================================================================>

export const EducationalData = [
  {
    SchoolName: "Dr. APJ ABDUL KALAM TECHNICAL UNIVERCITY , LUCKNOW",
    Course: "B.tech",
    Branch: "Computer Science & Engineering"
  },
  {
    SchoolName: "Pandeet Deen Dayal S.k. Inter College Kopaganj-Mau Uttar-Pradesh",
    Course: "12th",
    Branch: "Physics , Chemistry , Mathematics"
  },
  {
    SchoolName: "Bapu Inter College Kopaganj-mau Uttar-Pradesh",
    Course: "10th",
    Branch: "Physics , Chemistry , Mathematics"
  },
]


// =============================================================================>
//======================================= SKILLS RELATED DATA ========================>
// =================================================================================================>
//total  skills  
export const technologies = ["Frontend", "Backend", "Languages", "Others"]

// frotend skills
export const frontendSkills = [
  {
    id: 0,
    img: HTML,
    language: "html"
  },
  {
    id: 1,
    img: CSS,
    language: "CSS"
  },
  {
    id: 2,
    img: JS,
    language: "Javascript"
  }, {
    id: 3,
    img: SCSS,
    language: "SCSS"
  },
  {
    id: 4,
    img: Tailwind,
    language: "Tailwind css"
  },
  {
    id: 5,
    img: BOOTstrap,
    language: "Bootstrap"
  },
  {
    id: 6,
    img: Tailwind,
    language: "Material UI"
  },
  {
    id: 7,
    img: Reactjs,
    language: "Reactjs"
  },
  {
    id: 8,
    img: Redux,
    language: "Redux"
  },
  {
    id: 9,
    img: Redux,
    language: "APIs"
  },
  {
    id: 9,
    img: Redux,
    language: "Media Quries"
  }
]

export const backendSkills = [
  {
    id: 0,
    img: NODEJS,
    language: "Nodejs"
  },
  {
    id: 1,
    img: Expressjs,
    language: "Expressjs"
  },
  {
    id: 2,
    img: MONGODB,
    language: "MongoDB"
  }
]

export const ProgrammingLangauges = [
  {
    id: 0,
    img: JAVA,
    language: "Core Java"
  },
  {
    id: 1,
    img: JS,
    language: "Javascripts"
  },
  {
    id: 2,
    img: C,
    language: "C-Language"
  }
]

export const Tools = [
  {
    id: 0,
    img: VScode,
    language: "VS Code"
  },
  {
    id: 1,
    img: Postman,
    language: "PostMan"
  },
  {
    id: 2,
    img: Thunder,
    language: "Thunder Client"
  },
  {
    id: 3,
    img: GIT,
    language: "Git & Github"
  },
  {
    id: 4,
    img: BITbucket,
    language: "Bit Bucket"
  }
]

// =============================================================================>
//======================================= PROJECTS RELATED DATA ========================>
// =================================================================================================>

// fontend Projects Data ----------------------=>


const FrontendApp = [
  {
    ProjectName: "Dynamically Portfolio.",
    ProjectTechno: ["html", "SCSS", "ReactJS"],
    ProjectImage: "https://i.postimg.cc/76ZLpFtt/portfolio-APP.jpg",
    ProjectLink: "https://jitesh-pandey-portfolio.netlify.app/",
    ProjectWork: "I've meticulously developed my portfolio using React, SCSS, and React Router, blending the power of component-driven development with seamless navigation. The integration of SCSS not only ensures a visually stunning layout but also guarantees a responsive design. Through this project, I showcase not just technical skills but a commitment to delivering an immersive user experience, employing the strengths of React and thoughtful design elements."
  },
  {
    ProjectName: "Wheather APP.",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: "https://i.postimg.cc/FKfs9yVN/wheatherapp.jpg",
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "Calculator APP.",
    ProjectTechno: ["html", "SCSS", "ReactJS"],
    ProjectImage: "https://i.postimg.cc/pdq87bJy/calculator.jpg",
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "Todo APP.",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: "https://i.postimg.cc/QMXY1DMM/todo.jpg",
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "Password Generator.",
    ProjectTechno: ["html", "CSS", "Javascript"],
    ProjectImage: "https://drive.google.com/file/d/1CK4PP6BYxCTZOlNSMaKe_I2Gl5-XRE32/view",
    ProjectLink: "https://passwordgeneratorjitesh.netlify.app/",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  }
]

// full Stack Projects Data ----------------------=>

const FullStackApp = [
  {
    ProjectName: "Youtube Clone",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: ProjectImage,
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "ShareChat Clone",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: ProjectImage,
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "Whatsapp Clone",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: ProjectImage,
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
  {
    ProjectName: "Instagram Clone",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: ProjectImage,
    ProjectLink: "#YouWillHaveToPutLinkHere",
    ProjectWork: "Made a Wheather app which will give the accurate temprature of any country of city in the world. to make this wheather app i used of some skill which is mentioned above. to get the temprature of any city i used of API to get the accurate temprature."
  },
]

// ----------------- In this data all the frontend and backend data would be stored --------------------------------->

export const TechStack = [{ name: "FrontendApp", data: FrontendApp }, { name: " FullStackApp", data: FullStackApp }]


// =============================================================================>
//======================================= EXPIRIENCE RELATED DATA ========================>
// =================================================================================================>
export const ExperienceCompanies = [
  {
    CompanyName: "Harshly Educations and skills PVT. LTD. sector-62",
    Duration: "(June-Present)",
    RoleAs: "Software Engineer Development.",
    WorkingOn: "Working on frontend of the web Application using ReactJS and Redux.",
    SkillsUsed: ["HTML ,", "CSS ,", "Javascripts ,", "ReactJS ,", "Redux ,", "SCSS ,", "Bootstraps ,", "Tailwind CSS ,", "Material UI"],
    LiveProzects: "http://www.easyhaionline.com"
  }
]


// =============================================================================>
//======================================= ContactMe RELATED DATA ========================>
// =================================================================================================>

// Input Field Data ----------->
export const Input = [
  {
    type: "text",
    placeholder: "Your name"
  },
  {
    type: "email",
    placeholder: "Your email"
  },
  {
    type: "number",
    placeholder: "Your number"
  },
  {
    type: "submit",
  }
]
// Contact buttons ----------->
export const Contact = [
  {
    href: "tel:9170006101",
    img: CallBtn
  },
  {
    href: "mailto:mr.jiteshpandey917000@gmail.com",
    img: EmailBtn
  }
]

// ========= REUSED COMPONENTS ARE HERE ==========>

// ------------button-------------->
export const Button = ({ button }) => {
  return <button className="btn-grad">{button}</button>
}
// ------------heading-------------->
export const Headings = ({ heading, paragraphs }) => {
  return (
    <div className="All-Heading">
      <div className="heading1">
        <h1>{heading}</h1>
        <div className="underline"></div>
      </div>
      <p>{paragraphs}</p>
    </div>
  )
}