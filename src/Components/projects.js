import React, { useState } from "react";
import { TechStack, Headings } from "../Data/data";
import "../portfolio.scss"
import "../ScssFiles/project.scss"

let Sty = {
  0: {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  1: {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  }
}
export const Projects = () => {
  const [show, setShow] = useState("FrontendApp");
  return (
    <div className="Project-container" id="project">
      <Headings heading="Projects" paragraphs="Whatever Skills I have learnt yet , By using all of them I have been made some projects." />
      <div className="ALllinks">
        {
          TechStack.map((_, i) => {
            return (i == 0 || i == 1) ? <a href="" onClick={(event) => {
              event.preventDefault()
              setShow(event.target.innerHTML)
            }} style={Sty[i]} >{_.name}</a> : <a href="" onClick={(event) => {
              event.preventDefault()
              setShow(event.target.innerHTML)
            }}>{_.name}</a>
          })
        }
      </div>
      <div className="project-rendered">
        {TechStack.map((_) => {
          return (
            <>
              {(show == _.name) && (_.data.map((element) => {
                return <ProjectsWork projectImage={element.ProjectImage} proTechno={element.ProjectTechno} projectName={element.ProjectName} projectLink={element.ProjectLink} projectDetails={element.ProjectWork} />
              }))}
            </>
          )
        })}
      </div>
    </div>
  )
}


// -------------------------- to resuse  this  components -------------- >
const ProjectsWork = ({ projectImage, proTechno, projectName, projectLink, projectDetails }) => {
  return (
    <>
      < div className="project-work-container" >
        <div className="project-image">
          <img src={projectImage} alt="" />
        </div>
        <div className="project-name">
          <strong>{projectName}</strong>
          <a href={projectLink}>Live</a>
        </div>
        <div className="project-techno">
          {proTechno.map((skill) => {
            return <li>{skill}</li>
          })}
        </div>
        <div className="project-details">{projectDetails}</div>
      </div >

    </>
  )
}