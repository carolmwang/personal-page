import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <section className="section is-large is-centered">
      <div className="container">
        <img src="https://i.imgur.com/PDrVKwsm.png?1" alt=""/>
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} /> I am a web developer, continuously looking for a challenge. My background in Digital Media Analytics has created a foundation for my detail oriented, problem solving skills, and above all, a passion for working with data. Through years of experience in Excel, I am able to tell a story through data that helps higher management make actionable decisions when problems are presented. This skill has lead me to web development, where data manipulation is crucial to application performance. I pride myself on my thirst for continuous learning as well as my perseverance in overcoming obstacles. <FontAwesomeIcon icon={faQuoteRight} />
        </p>
      </div>
    </section>

  )
}