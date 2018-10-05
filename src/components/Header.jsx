import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <section className="hero is-large has-bg-img">
    <img is-bg-img src="" alt=""/>
    </section>
        <nav className="navbar is-fixed-top">
          <div className="container nav">
            <div className="navbar-brand">
              <a className="navbar-item header-name" href='#about'><strong>Carol Wang</strong></a>
            </div>

            <div className="navbar-menu is-active">
              <div className="navbar-end">
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

  )
}
<section class="hero is-large has-bg-img">
    <img is-bg-img> ... </img>
</section>