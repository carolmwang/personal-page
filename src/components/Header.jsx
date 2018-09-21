import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <section className="hero is-large">
      <div className="hero-head">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-menu is-active">
              <div className="navbar-end">
                <a href="#about" className="navbar-item">ABOUT</a>
                <a href="#projects" className="navbar-item">PROJECTS</a>
                <a href="#contact" className="navbar-item">CONTACT</a>
                <a href="https://github.com/carolmwang" className="navbar-item">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/carol-m-wang/" className="navbar-item">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Carol Wang</h1>
          <h2 className="subtitle">Web Developer</h2>
        </div>
      </div>
    </section>
  )
}
