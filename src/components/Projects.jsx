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
          <div className="column block">
          <br/>
            <h1 className="project-title"><strong>Hide &amp; Seek</strong></h1>
            <br />
            <p>This is a game where users have 30 guesses to find the 5 hidden images on the gameboard</p>
            <br/>
            <p><em>JavaScript</em></p>
            <br />
            <a href="https://carolmwang.github.io/unit01Project/"><button>Give it a try</button></a>
          </div>
          <div className="column block">
            <img src="https://i.imgur.com/RTcOgvH.png" alt="" />
          </div>
        </div>

        <div className="container columns project">
          <div className="column block">
            <img src="https://i.imgur.com/aaUCeZa.png" alt="" />
          </div>
          <div className="column block">
          <br/>
            <h1 className="project-title"><strong>Park Advisor</strong></h1>
            <br />
            <p>This app allows users to share their experiences at any National Park in the US. Once logged in, a user can select a state,
                choose the National Park they wish to see, and share their experience/read other experiences.</p>
                <br/>
                <p><em>EJS, Express.js, Passport-local, Express-sessions</em></p>

            <br />
            <p><em></em></p>
            <a href="https://hidden-bastion-17613.herokuapp.com/parks"><button>Log In &amp; Share</button></a>
          </div>
        </div>

        <div className="container columns project yellow">
          <div className="column block">
          <br/>
            <h1 className="project-title"><strong>Fetch</strong></h1>
            <br />
            <p>A web app for dog trainers to keep track of the progress of their "students".
              Users are able to view progress reports of all dogs in a class, 
              add dogs to their class, and edit the status of each dog.</p>
              <br/>
              <p><em>React, Express.js</em></p>

            <br />
            <a href="http://light-animal.surge.sh/"><button>Check it out</button></a>
          </div>
          <div className="column block">
            <img src="https://i.imgur.com/Au3Uf39.png" alt="" />
          </div>
        </div>

        <div className="container columns project">
          <div className="column block">
            <img src="https://i.imgur.com/7nsXSiD.png" alt="" />
          </div>
          <div className="column block">
          <br/>
            <h1 className="project-title"><strong>Points of Interest</strong></h1>
            <br />

                <p>This app is to help travelers find cities to visit across the United States.
                They have the option to either have a city randomly selected for them, or choose a city on their own.
                Also, users can create a login to add, edit, and delete comments to specific cities. If a user chooses not to create a username, they can only read comments by other users.
                The app is pulling from an API that will grab the details for each of the specific locations by category.</p>
                <br/>
                <p><em>React, Ruby on Rails, Bcrypt</em></p>

            <br />
            <a href="http://substantial-hen.surge.sh/"><button>Check it out</button></a>
          </div>
        </div>

      </div>
    </section >
  )
}