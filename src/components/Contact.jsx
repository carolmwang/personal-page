import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
 return (
  <section className="section is-medium" id="contact">
   <div className="container has-text-centered">
   <h1 className="headers"><strong>CONTACT ME</strong></h1>
   <br />
   <br />
     <p><FontAwesomeIcon icon={ faEnvelope } /> carolmwang@gmail.com | <FontAwesomeIcon icon={ faPhone } /> (732)429-3728</p>
   </div>
   </section>
 ) 
}