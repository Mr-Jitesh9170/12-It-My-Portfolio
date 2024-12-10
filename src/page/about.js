import React from "react";
import "../portfolio.scss"
import "../styles/about.scss"
import { Headings, Button, SocialMediaButton, AboutPara } from "../Data/data"

export const AboutMe = () => {
  return (
    <div className="aboutMe-content" id="aboutme">
      <Headings heading={"About Me"} paragraphs={"It is the Brief Introduction About Myself."} />
      <div className="aboutme-data">
        {
          AboutPara.map((_, i) => {
            return <p key={i} className="about-me-para">{_}</p>
          })
        }
        <Button button={"Connect with me"} />
        <div className="buttons">
          {
            SocialMediaButton.map((_, i) => {
              return <a key={i} href={_.Url}><img src={_.img} width={30} alt="loading" /></a>
            })
          }
        </div>
      </div>
    </div>
  )
} 