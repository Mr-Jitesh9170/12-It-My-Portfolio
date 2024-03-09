import React from "react";
import "../portfolio.scss"
import "../ScssFiles/contactMe.scss"
import { Input, Contact, Headings } from "../Data/data";
export const ContactMe = () => {
  return (
    <div className="contactMe-container" id="contactme">
      <Headings heading="Contact Me" paragraphs="Feel free to reach out to me for any questions or opportunities!" />
      <div className="contact-box">
        <div className="contactme-box1">
          <h3>Email Me</h3>
          {
            Input.map((_) => {
              return (_.type === "submit") ? <input type={_.type} placeholder={_.placeholder} className="btn-grad" /> : <input type={_.type} placeholder={_.placeholder} />
            })
          }
        </div>
        <div className="contactme-box2">
          {
            Contact.map((_) => {
              return (
                <a href={_.href}>
                  <img src={_.img} width={30} alt="" />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}