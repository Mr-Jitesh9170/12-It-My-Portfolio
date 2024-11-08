import React from "react";
import "../portfolio.scss"
import "../ScssFiles/experience.scss"
import { Headings, ExperienceCompanies } from "../Data/data"

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

// Reused Components ---->
const CompanyData = ({ Data }) => {
  return (
    <div className="company-names">
      <div className="company-heading">
        <strong>Company Name - </strong>
        {Data.CompanyName}
      </div>
      <div className="company-heading">
        <strong>Duration - </strong>
        {Data.Duration}
      </div>
      <div className="company-heading">
        <strong>Role As - </strong>
        {Data.RoleAs}
      </div>
      <div className="company-heading">
        <strong>Working On - </strong>
        {Data.WorkingOn}
      </div>
      <div className="company-heading">
        <strong>Skills - </strong>
        {Data.SkillsUsed.map(($) => {
          return $
        })}
      </div>
      <div className="company-heading">
        <strong>Live Project - </strong>
        <a href={Data.LiveProzects}>Live</a>
      </div>
    </div>
  )
}

