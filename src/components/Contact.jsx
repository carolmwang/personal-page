import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
 return (
  <section className="section" id="contact">
   <div className="container has-text-centered">
   <h1 className="headers"><strong>CONTACT ME</strong></h1>
   <br />
   <br />
     <p><FontAwesomeIcon icon={ faEnvelope } /> carolmwang@gmail.com</p>
   </div>
   </section>
 ) 
}