import React, { useState } from "react";
import { technologies, frontendSkills, backendSkills, Tools, ProgrammingLangauges, Headings } from "../Data/data";
import "../portfolio.scss"
import "../ScssFiles/skills.scss"

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
            return (i == 0 || i == 3) ? <div className="skills-btn" onClick={(event) => {
              setShow({
                name: event.target.innerHTML,
                value: true
              })
            }} style={Sty[i]}>{element}</div> : <div className="skills-btn" onClick={(event) => {
              setShow({
                name: event.target.innerHTML,
                value: true
              })
            }}  >{element}</div>
          })
        }
      </div>
      <div>
        {
          technologies.map((element, i) => {
            return (show.name == element) && < AllSkills MernStack={allData[i]} Value={show.value} technoName={element} />
          })
        }
      </div>
    </div >
  )
}


// -------------------- to reuse this componets ------------------>

const AllSkills = ({ MernStack, Value, technoName }) => {
  return (
    < div className="frontend-skills">
      <h3 className="skills-box-1">{technoName}</h3>
      <div className="skills-box-2">
        {MernStack.map((element, i) => {
          return (
            <>
              <div className={`skills-name-img ${Value ? "yes" : null}`}>
                <li className="img-skills">
                  <img src={element.img} alt="" />
                </li>
                <li>{element.language}</li>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}


