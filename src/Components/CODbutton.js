import React from 'react'
import btnMiniBg from './Images/btnminibg.png'

export default function CODbutton() {
  return (
    <button
      className="p-3 font-extralight  border"
      style={{
        borderColor: '#597985',
        boxShadow: 'inset 0px 0px 5px #597985',
        letterSpacing: '5px',
        color: '#94bbc2',
        backgroundImage: `url(${btnMiniBg})`
      }}
    >
      JAEGER
    </button>
  )
}
