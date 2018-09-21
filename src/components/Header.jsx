import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  return (
    <section className="hero is-large">
      <div className="hero-head">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-menu is-active">
              <div className="navbar-end">
                <a href="/"className="navbar-item">HOME</a>
                <a href="/About" className="navbar-item">ABOUT</a>
                <a href="/Projects" className="navbar-item">PROJECTS</a>
                <a href="/Contact" className="navbar-item">CONTACT</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Carol Wang</h1>
          <h2 className="subtitle">Web Developer</h2>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </section>
  )
}
