import React, { useState } from "react";
import { technologies, frontendSkills, backendSkills, Tools, ProgrammingLangauges, Headings } from "../Data/data";
import "../portfolio.scss"
import "../styles/skills.scss"
import AllSkills from "../component/skills/skills";


let Sty = {
  0: {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  3: {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  }
}

export const Skills = () => {
  const [show, setShow] = useState({ name: "Frontend", value: false })
  const allData = [frontendSkills, backendSkills, ProgrammingLangauges, Tools];
  return (
    <div className="skills" id="skills">
      <Headings heading="Skills" paragraphs="Here are some of my skills on which I have been working on for the past 6 months." />
      <div className="skills-data">
        {
          technologies.map((element, i) => {
            return (i === 0 || i === 3) ? <div key={i} className="skills-btn" onClick={(event) => {
              setShow({
                name: event.target.innerHTML,
                value: true
              })
            }} style={Sty[i]}>{element}</div> : <div key={i} className="skills-btn" onClick={(event) => {
              setShow({
                name: event.target.innerHTML,
                value: true
              })
            }}  >{element}</div>
          })
        }
      </div>
      {
        technologies.map((element, i) => {
          return (show.name === element) && < AllSkills key={i} MernStack={allData[i]} Value={show.value} technoName={element} />
        })
      }
    </div >
  )
} 