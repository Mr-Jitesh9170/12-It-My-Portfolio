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
import MaterialUi from "../Assets/materialUI.svg"
import mediaQuery from "../Assets/media.png"


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
import Karkiosk from "../Assets/ProjectImages/karkiosk.png"
import Knobee from "../Assets/ProjectImages/knobee.png"
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
    img: MaterialUi,
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
    img: mediaQuery,
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
  },
  {
    id: 5,
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
    language: "Jira"
  }
]

// =============================================================================>
//======================================= PROJECTS RELATED DATA ========================>
// =================================================================================================>

// fontend Projects Data ----------------------=>


const FrontendApp = [
  {
    ProjectName: "Easyhai Online",
    ProjectTechno: ["ReactJS", "SASS", "Axios", "Bootstrap", "Tailwind CSS"],
    ProjectImage: "https://i.postimg.cc/yx6LjvmK/Screenshot-2024-03-09-220528.jpg",
    ProjectLink: "https://www.easyhaionline.com/",
  },
  {
    ProjectName: "karkiosk",
    ProjectTechno: ["html", "SCSS", "Javascript", "ReactJS", "Fetch API", "PHP", "Laravel"],
    ProjectImage: Karkiosk,
    ProjectLink: "https://karkiosk.com/",
  },
  {
    ProjectName: "Knobee Social India Pvt Ltd",
    ProjectTechno: ["html", "SCSS", "Javascript", "ReactJS", "Axios"],
    ProjectImage: Knobee,
    ProjectLink: "#YouWillHaveToPutLinkHere",
  },
  {
    ProjectName: "Dynamically Portfolio.",
    ProjectTechno: ["html", "SCSS", "Javascript", "ReactJS"],
    ProjectImage: "https://i.postimg.cc/76ZLpFtt/portfolio-APP.jpg",
    ProjectLink: "https://jitesh-pandey-portfolio.netlify.app/",
  },
  {
    ProjectName: "Todo APP.",
    ProjectTechno: ["html", "SCSS", "ReactJS", "Fetch API"],
    ProjectImage: "https://i.postimg.cc/QMXY1DMM/todo.jpg",
    ProjectLink: "#YouWillHaveToPutLinkHere",
  },

]

// full Stack Projects Data ----------------------=>

const FullStackApp = [
  {
    ProjectName: "EasyhaiOnline-Learning",
    ProjectTechno: ["ReactJS", "SASS", "Axios", "Bootstrap", "Tailwind CSS", "Nodejs", "Expressjs", "Mongodb", "Mongoose"],
    ProjectImage: "https://i.postimg.cc/yx6LjvmK/Screenshot-2024-03-09-220528.jpg",
    ProjectLink: "https://www.easyhaionline.com/",
  },
  {
    ProjectName: "Knobee-Social-Family-App",
    ProjectTechno: ["Nodejs", "Expressjs", "Mongodb", "Mongoose"],
    ProjectImage: ProjectImage,
    ProjectLink: "https://play.google.com/store/apps/details?id=com.knoBee",
  },
  {
    ProjectName: "Notes-App",
    ProjectTechno: ["Ejs", "CSS", "Nodejs", "Expressjs", "Mongodb", "Mongoose"],
    ProjectImage: ProjectImage,
    ProjectLink: "https://github.com/Mr-Jitesh9170/24-Notes-APP",
  },
  {
    ProjectName: "Chat-App",
    ProjectTechno: ["Reactjs", "SASS", "Axios", "Nodejs", "Socket.io", "Expressjs", "Mongodb", "Mongoose"],
    ProjectImage: ProjectImage,
    ProjectLink: " https://chit-chat-app-1.netlify.app",
  },
  {
    ProjectName: "Podcast-Website",
    ProjectTechno: ["Reactjs", "SASS", "Axios", "Nodejs", "Multer", "Expressjs", "Mongodb", "Mongoose"],
    ProjectImage: ProjectImage,
    ProjectLink: "https://github.com/Mr-Jitesh9170/17-Podcast-website-",
  },
]

// ----------------- In this data all the frontend and backend data would be stored --------------------------------->

export const TechStack = [{ name: "FrontendApp", data: FrontendApp }, { name: " FullStackApp", data: FullStackApp }]


// =============================================================================>
//======================================= EXPIRIENCE RELATED DATA ========================>
// =================================================================================================>

export const ExperienceCompanies = [
  {
    CompanyName: "Harshly Educations and skills PVT. LTD. Sector-62 Noida",
    Duration: "(Jan-2023 - Jan-2024)",
    RoleAs: "Mern Stack Developer",
    WorkingOn: "Worked on Frontend & Backend of EASYHAI-ONLINE web application.",
    SkillsUsed: ["HTML ,", "CSS ,", "Javascripts ,", "ReactJS ,", "Redux ,", "SCSS ,", "Bootstraps ,", "Tailwind CSS ,", "Material UI ,", "NodeJS ,", "ExpressJS ,", "Mongodb ,", "Mongoose ,", "EJS"],
    LiveProzects: "http://www.easyhaionline.com"
  },
  {
    CompanyName: "KnoBee Social Pvt. Ltd. Sector-63 , Noida",
    Duration: "(Feb-2024 - Present)",
    RoleAs: "Mern Stack Developer/Full Stack Engineer",
    WorkingOn: "Currently working on Backend of KNOBEE-SOCIAL MEDIA APP",
    SkillsUsed: ["HTML ,", "CSS ,", "Javascripts ,", "ReactJS ,", "Redux ,", "SASS ,", "Bootstraps ,", "Tailwind CSS ,", "NodeJS ,", "ExpressJS ,", "Mongodb ,", "Mongoose ,", "EJS"],
    LiveProzects: "https://play.google.com/store/apps/details?id=com.knoBee"
  }
]


// =============================================================================>
//======================================= ContactMe RELATED DATA ========================>
// =================================================================================================>

// Input Field Data ----------->
export const Input = [
  {
    type: "text",
    placeholder: "Name...."
  },
  {
    type: "email",
    placeholder: "Email...."
  },
  {
    type: "number",
    placeholder: "Number...."
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
        <h2>{heading}</h2>
        <div className="underline"></div>
      </div>
      <p>{paragraphs}</p>
    </div>
  )
}