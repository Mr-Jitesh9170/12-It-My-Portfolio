import React from "react";
import "./portfolio.scss"
import { Home } from "./page/home";
import { AboutMe } from "./page/about";
import { Educations } from "./page/Education";
import { Skills } from "./page/Skills";
import { Projects } from "./page/projects";
import { Experience } from "./page/experience";
import { ContactMe } from "./page/contactme";


let Compositions = [< Home />, < AboutMe />, <Educations />, <Skills />, <Projects />, <Experience />, <ContactMe />]

export const Portfolio = () => {
  return (
    <>
      <div className="Portfolio-container">
        {
          Compositions.map((_) => {
            return _;
          })
        }
      </div >
    </>
  ) 
}
