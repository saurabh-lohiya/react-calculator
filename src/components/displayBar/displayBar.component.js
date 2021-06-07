import React from 'react'
import './style.main.css'
const DisplayBar = (props) => {
  return (

    <div id='displayBarBg'>

      <div id='expression'>{props.expression}</div>
      <div id='log'>{props.log}</div>
    </div>
  )
}

export default DisplayBar
