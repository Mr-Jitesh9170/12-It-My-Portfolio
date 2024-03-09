import React, { useState } from "react";
import { NavBar } from "../Data/data"
import ThreeDash from "../Assets/threeDash.svg"
import "../portfolio.scss"
import "../ScssFiles/home.scss"
export const Home = () => {
  const [show, setShow] = useState(false);
  const onButtonClick = () => {
    // using Java Script method to get PDF file 
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file 
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values 
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    })
  }


  const handleClick = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className="home-container" id="home">

      {/* --------------header for the Computer --------------- */}

      <header className="header">
        <h2 className="header-left">&lt; Jitesh /&gt;</h2>
        <nav className="navbar">
          {NavBar.map((_) => {
            return <a href={_.ID}>{_.Name}</a>
          })}
        </nav>
      </header>

      {/* --------------header for the phone--------------- */}

      <header className="header1">
        <div className="header-left-1">&lt; Jitesh /&gt;</div>
        <div className="header-right-1">
          <img src={ThreeDash} alt="" onClick={handleClick} />
        </div>
      </header>
      
      {show && (<nav className={`navbar-1 ${show ? "transi" : null}`}>
        {NavBar.map((_) => {
          return <a href={_.ID} onClick={handleClick}>{_.Name}</a>
        })}
      </nav>)}

      {/* ==================================== */}

      <div className="home-data">
        <div className="home-left">
          <h3>Hello 👋 <br />
            I am Jitesh Pandey</h3>
          <p>I am a <strong>Full Stack Developer</strong></p>
          <p>
            I am a motivated and versatile
            <br />individual,
            always eager to take on new <br />
            challenges. With a passion for learning I<br />
            am dedicated to delivering high-quality <br />result.
            With a positive attitude and a<br /> growth mindset,
            I am ready to make a<br /> meaningful contribution and
            achieve <br />great things.
          </p>
          <button className="btn-grad" onClick={onButtonClick}>Check RESUME</button>
        </div>
        <div className="home-right">
          <img src='https://i.postimg.cc/R0SpPLXG/1699335737213-1.jpg' />
        </div>
      </div>
    </div >
  )
}