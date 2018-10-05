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
          <a href="https://carolmwang.github.io/unit01Project/" style={{ color: 'black' }}>
            <div className="column project">
              <h1 className="project-title"><strong>Hide &amp; Seek</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/AQl9Szbm.png" alt="" />
              <br/>
              <br/>
              <p className="description">This is a game where users have 30 guesses to find the 5 hidden images on the gameboard</p>
            </div>
          </a>

          <a href="https://hidden-bastion-17613.herokuapp.com/parks" style={{ color: 'black' }}>
            <div className="column project">
              <h1 className="project-title"><strong>Park Advisor</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/1ct59bKm.png" alt="" />
              <br />
              <br/>
              <p className="description">This app is for travelers to view all the points of interest for a specific city within the US.
                They have the option to either have a city randomly selected for them, or choose a city on their own.
                Also, users can create a login to add, edit, and delete comments to specific cities. If a user chooses not to create a username, they can only read comments by other users.
                The app is pulling from an API that will grab the details for each of the specific locations by category. </p>
            </div>
          </a>
        </div>
        <br />
        <div className="columns is-centered">
          <a href="http://light-animal.surge.sh/" style={{ color: 'black' }}>
            <div className="column project">
              <h1 className="project-title"><strong>Fetch</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/wRY4lkkm.png" alt="" />
              <br />
              <br/>
              <p className="description">A web app for dog trainers to keep track of the progress of their "students".
                Users are able to view progress reports of all dogs in a class, add dogs to their class, and edit the status of each dog. </p>
            </div>
          </a>

          <a href="http://substantial-hen.surge.sh/" style={{ color: 'black' }}>
            <div className="column project">
              <h1 className="project-title"><strong>Points of Interest</strong></h1>
              <br />
              <br />
              <img src="https://i.imgur.com/JUeVFlqm.png" alt="" />
              <br />
              <br/>
              <p className="description">This app allows users to share their experiences at any National Park in the US. Once logged in, a user can select a state,
                choose the National Park they wish to see, and share their experience/read other experiences.</p>
            </div>
          </a>
        </div>

      </div>
    </section >
  )
}