import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return(
    <div>
      <p><FontAwesomeIcon icon={ faCopyright } /> 2018 Carol Wang</p>
    </div>
  )
}