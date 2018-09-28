import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <section className="section is-medium" id="about">
      <div className="container has-text-centered">
        <h1 className="headers"><strong>ABOUT ME</strong></h1>
        <br />
        <br />
        <div>
          <img src="https://i.imgur.com/PDrVKwsm.png?1" alt="" className="carol"/>
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} /> I am a driven web developer with front-end and back-end experience, continuously looking for a challenge. 
            I have found that nothing satisfies me more than debugging code. 
            My background in analytics has created a foundation for my detail oriented, problem solving skills, and above all, a passion for working with data. 
            I pride myself on my thirst for continuous learning as well as my perseverance in overcoming obstacles.  <FontAwesomeIcon icon={faQuoteRight} />
          </p>
        </div>
      </div>
    </section>

  )
}