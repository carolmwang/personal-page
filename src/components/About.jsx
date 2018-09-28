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
            <FontAwesomeIcon icon={faQuoteLeft} /> I am a driven web developer continuously looking for a challenge. Nothing satisfies me more than identifying and debugging code, 
            let’s leave the bugs for the entomologists. My background in analytics has created a foundation for my meticulous, problem solving skills, and above all, a passion for structuring data. 
            I have experience with both front and back-end techniques and enjoy the challenges presented by either side. 
            Web development has taught me perseverance through understanding that failure is the first stop on the road to success.   <FontAwesomeIcon icon={faQuoteRight} />
          </p>
        </div>
      </div>
    </section>

  )
}