import React from 'react';

export default function Footer() {
  return (
    <section className="section is-medium" id="projects">
      <div className="container has-text-centered">
        <h1 className="headers"><strong>PROJECTS</strong></h1>
        <br />
        <br />

        <div className="columns is-centered projects">
          <div className="column">
            <h1><strong>Hide &amp; Seek</strong></h1>
            <br />
            <a href="https://carolmwang.github.io/unit01Project/">
              <img src="https://i.imgur.com/AQl9Szbm.png" alt="" />
            </a>
          </div>

          <div className="column">
            <h1><strong>Park Advisor</strong></h1>
            <br />
            <a href="https://hidden-bastion-17613.herokuapp.com/auth/login">
              <img src="https://i.imgur.com/1ct59bKm.png" alt="" />
            </a>
            <p>username: cwang</p>
            <p>password: pass</p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h1><strong>Fetch</strong></h1>
            <br />
            <a href="http://shy-loss.surge.sh">
              <img src="https://i.imgur.com/wRY4lkkm.png" alt="" />
            </a>
          </div>

          <div className="column">
            <h1><strong>Points of Interest</strong></h1>
            <br />
            <a href="http://substantial-hen.surge.sh/">
              <img src="https://i.imgur.com/JUeVFlqm.png" alt="" />
            </a>
          </div>
        </div>

      </div>
    </section >
  )
}