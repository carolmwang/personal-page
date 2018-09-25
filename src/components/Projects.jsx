import React from 'react';

export default function Footer() {
  return (
    <section className="section is-medium projects" id="projects">
      <div className="container has-text-centered">
        <h1 className="headers"><strong>PROJECTS</strong></h1>
        <br />
        <br />
        <br />

        <div className="columns is-centered">
          <a href="https://carolmwang.github.io/unit01Project/" style={{color: 'black'}}>
            <div className="column project">
              <h1 className="project-title"><strong>Hide &amp; Seek</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/AQl9Szbm.png" alt="" />
            </div>
          </a>

          <a href="https://hidden-bastion-17613.herokuapp.com/parks" style={{color: 'black'}}>
            <div className="column project">
              <h1 className="project-title"><strong>Park Advisor</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/1ct59bKm.png" alt="" />
              <br />
            </div>
          </a>
        </div>
        <br />
        <div className="columns is-centered">
          <a href="http://unequaled-profit.surge.sh/" style={{color: 'black'}}>
            <div className="column project">
              <h1 className="project-title"><strong>Fetch</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/wRY4lkkm.png" alt="" />
            </div>
          </a>

          <a href="http://substantial-hen.surge.sh/" style={{color: 'black'}}>
            <div className="column project">
              <h1 className="project-title"><strong>Points of Interest</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/JUeVFlqm.png" alt="" />
              <br />
            </div>
          </a>
        </div>

      </div>
    </section >
  )
}