import React from 'react';

export default function Footer() {
  return (
    <section className="section is-medium projects" id="projects">
      <div className="container has-text-centered">
        <h1 className="headers"><strong>PROJECTS</strong></h1>
        <br />
        <br />
        <br />

        <div className="container columns project yellow">
          <div className="column">
            <h1 className="project-title"><strong>Hide &amp; Seek</strong></h1>
            <br />
            <p>Find the hidden images.</p>
            <br />
            <a href="https://carolmwang.github.io/unit01Project/"><button>Give it a try</button></a>
          </div>
          <div className="column">
            <img src="https://i.imgur.com/RTcOgvH.png" alt="" />
          </div>
        </div>

        <div className="container columns project">
          <div className="column">
            <img src="https://i.imgur.com/aaUCeZa.png" alt="" />
          </div>
          <div className="column">
            <h1 className="project-title"><strong>Park Advisor</strong></h1>
            <br />
            <p>Share your National Park experiences!</p>
            <br />
            <a href="https://hidden-bastion-17613.herokuapp.com/parks"><button>Log In &amp; Share</button></a>
          </div>
        </div>

        <div className="container columns project yellow">
          <div className="column">
            <h1 className="project-title"><strong>Fetch</strong></h1>
            <br />
            <p>Helps dog trainers keep track of their "students"</p>
            <br />
            <a href="http://light-animal.surge.sh/"><button>Check it out</button></a>
          </div>
          <div className="column">
            <img src="https://i.imgur.com/Au3Uf39.png" alt="" />
          </div>
        </div>

        <div className="container columns project">
          <div className="column">
            <img src="https://i.imgur.com/7nsXSiD.png" alt="" />
          </div>
          <div className="column">
            <h1 className="project-title"><strong>Points of Interest</strong></h1>
            <br />
            <p>Helps travelers find places to visit across the United States.</p>
            <br />
            <a href="http://substantial-hen.surge.sh/"><button>Check it out</button></a>
          </div>
        </div>

      </div>
    </section >
  )
}