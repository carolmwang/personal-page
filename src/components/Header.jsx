import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="hero">

      <nav className="navbar is-fixed-top">
        <div className="container nav">
          <div className="navbar-brand">
            <p className="navbar-item header-name"><strong>Carol Wang</strong></p>
          </div>

          <div className="navbar-menu is-active">
            <div className="navbar-end">
              <a href="#about" className="navbar-item">ABOUT</a>
              <a href="#projects" className="navbar-item">PROJECTS</a>
              {/* <a href="#contact" className="navbar-item">CONTACT</a> */}
              <a href="https://github.com/carolmwang" className="navbar-item">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/carol-m-wang/" className="navbar-item">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:carolmwang@email.com" className="navbar-item contact">Contact Me</a>
            </div>
          </div>
        </div>

      </nav>
      <img src="https://i.imgur.com/wgOakET.jpg" className="hero-body" />
    </div>
  )
}
