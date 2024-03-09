import React from "react";
import "../portfolio.scss"
import "../ScssFiles/about.scss"
import { Headings, Button, SocialMediaButton, AboutPara } from "../Data/data"

export const AboutMe = () => {
  return (
    <div className="aboutMe-content" id="aboutme">
      <Headings heading={"About Me"} paragraphs={"It is the Brief Introduction About Myself."} />
      <div className="aboutme-data">
        {
          AboutPara.map((_) => {
            return <p className="about-me-para">{_}</p>
          })
        } 
        <Button button={"Connect with me"} />
        <div className="buttons">
          {
            SocialMediaButton.map((_) => {
              return <a href={_.Url}><img src={_.img} width={30} /></a>
            })
          }
        </div>
      </div>
    </div>
  )
} 