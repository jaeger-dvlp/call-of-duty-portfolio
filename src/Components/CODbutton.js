import React from 'react'
import btnMiniBg from '../Images/btnminibg.png'
import { Link } from 'react-router-dom'

export default function CODbutton({
  buttonText,
  link
}) {
  return (
    <Link
      to={link}
      className="p-3 text-center cod-button text-sm font-medium font-pop border relative"
      style={{
        borderColor: '#597985',
        boxShadow: 'inset 0px 0px 5px #597985',
        letterSpacing: '5px',
        color: '#94bbc2',
        backgroundImage: `url(${btnMiniBg})`
      }}
    >
      {buttonText}
    </Link>
  )
}
