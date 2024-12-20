import React from "react";
import "../portfolio.scss"
import "../styles/contactMe.scss"
import { Input, Contact, Headings } from "../Data/data";
export const ContactMe = () => {
  return (
    <div className="contactMe-container" id="contactme">
      <Headings heading="Contact Me" paragraphs="Feel free to reach out to me for any questions or opportunities!" />
      <div className="contact-box">
        <div className="contactme-box1">
          <h3>Email Me</h3>
          {
            Input.map((_, i) => {
              return (_.type === "submit") ? <input key={i} type={_.type} placeholder={_.placeholder} className="btn-grad" /> : <input key={i} type={_.type} placeholder={_.placeholder} />
            })
          }
        </div>
        <div className="contactme-box2">
          {
            Contact.map((_, i) => {
              return (
                <a href={_.href} key={i}>
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