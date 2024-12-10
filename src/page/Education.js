import React from "react"
import { EducationalData, Headings } from "../Data/data"
import "../styles/education.scss"
import "../portfolio.scss";
import Acedmics from "../component/education/acedmics";

export const Educations = () => {
  return (
    <div className="education-container" id="educations">
      <Headings heading="Education" paragraphs="My education has been a journey of self-discovery and growth. My educational details are as follows." />
      <div className="education-content">
        {
          EducationalData.map((_, i) => {
            return <Acedmics key={i} schoolName={_.SchoolName} course={_.Course} branch={_.Branch} />
          })
        }
      </div>
    </div >
  )
}
 