import React from "react";
import "./portfolio.scss"
import { Home } from "./Components/home";
import { AboutMe } from "./Components/about";
import { Educations } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/projects";
import { Experience } from "./Components/experience";
import { ContactMe } from "./Components/contactme";

let Compositions = [< Home />, < AboutMe />, <Educations />, <Skills />, <Projects />, <Experience />, <ContactMe />]

export const Portfolio = () => {
  return (
    <div className="Portfolio-container">
      {
        Compositions.map((_) => {
          return _;
        })
      }
    </div >
  )
}
