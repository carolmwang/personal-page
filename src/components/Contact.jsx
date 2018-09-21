import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
 return (
   <div>
     <p><FontAwesomeIcon icon={ faEnvelope } /> carolmwang@gmail.com | <FontAwesomeIcon icon={ faPhone } /> (732)429-3728</p>
   </div>
 ) 
}