import React from "react"
import { EducationalData, Headings } from "../Data/data"
import "../ScssFiles/education.scss"
import "../portfolio.scss"
export const Educations = () => {
  return (
    <div className="education-container" id="educations">
      <Headings heading="Education" paragraphs="My education has been a journey of self-discovery and growth. My educational details are as follows." />
      <div className="education-content">
        {
          EducationalData.map((_,i) => {
            return <Acedmics key={i} schoolName={_.SchoolName} course={_.Course} branch={_.Branch} />
          })
        }
      </div> 
    </div >  
  ) 
} 

// ------------ to reuse this content -------------------------->
const Acedmics = ({ schoolName, course, branch }) => {
  return (
    <div className="Acedmics-details">
      <div className="verticle-bars">
        <div className="circle"></div>
        <div className="bars"></div>
        <div className="circle"></div>
      </div>
      <div className="educational-data">
        <h4>{schoolName}</h4>
        <p><strong>Course:- </strong>{course}</p>
        <p><strong>Branch:- </strong>{branch}</p>
      </div>
    </div>
  )
}