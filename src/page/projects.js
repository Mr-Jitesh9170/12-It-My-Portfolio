import React, { useState } from "react";
import { TechStack, Headings } from "../Data/data";
import "../portfolio.scss"
import "../styles/project.scss"
import ProjectsWork from "../component/project/projectWork";

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
            return (i === 0 || i === 1) ?
              (
                <a href="#nothing" onClick={(event) => {
                  event.preventDefault()
                  setShow(event.target.innerHTML)
                }} style={Sty[i]} >{_.name}</a>
              )
              :
              (
                <a href="#nothing" onClick={(event) => {
                  event.preventDefault()
                  setShow(event.target.innerHTML)
                }}>{_.name}</a>
              )
          })
        }
      </div>
      <div className="project-rendered">
        {TechStack.map((_) => {
          return (
            <>
              {(show === _.name) && (_.data.map((element) => {
                return <ProjectsWork projectImage={element.ProjectImage} proTechno={element.ProjectTechno} projectName={element.ProjectName} projectLink={element.ProjectLink} projectDetails={element.ProjectWork} />
              }))}
            </>
          )
        })}
      </div>
    </div>
  )
} 