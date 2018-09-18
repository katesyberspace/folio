import React from 'react'
import './Contact.css'

export default function Contact (){

  return (
    <div className="contact-wrapper">
      <div className="info">
        <img src="https://i.imgur.com/dp3up0t.jpg" alt=""/>
        <h2>Kate Sy</h2>
        <h3>Full-Stack Web Developer</h3>
      </div>
      <div className="contact-links">
        <p><i className="fab fa-github"></i> <a target="_blank" href="https://github.com/katesyberspace">katesyberspace</a></p>
        <p><i className="fab fa-linkedin"></i> <a target="_blank" href="https://www.linkedin.com/in/katesy/">Kate Sy</a></p>
        <p><i className="fas fa-envelope"></i> <a target="_blank" href="mailto:ms.katesy@gmail.com">ms.katesy@gmail.com</a></p>
        <p><i className="fab fa-instagram"></i> <a target="_blank" href="https://www.instagram.com/katesyberspace">katesyberspace</a></p>

      </div>
    </div>
  )
}