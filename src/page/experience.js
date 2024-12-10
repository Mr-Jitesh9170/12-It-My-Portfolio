import React from "react";
import "../portfolio.scss"
import "../styles/experience.scss"
import { Headings, ExperienceCompanies } from "../Data/data";
import CompanyData from "../component/experience/experience";

export const Experience = () => {
  return (
    <div className="Experience-container" id="experience">
      <Headings heading="Experiece" paragraphs="My work experience as a software engineer and working on different companies and prozjects." />
      {
        ExperienceCompanies.map((_, i) => {
          return (
            <div className="experience-data" key={i}>
              <h1 className="experience-data-1">{i + 1}</h1>
              <div className="experience-data-2">
                <div className="verticle-box">
                  <div className="circle"></div>
                  <div className="verticale-bars"></div>
                  <div className="circle"></div>
                </div>
                <CompanyData Data={_} />
              </div >
            </div >
          )
        })
      }
    </div >
  )
}
