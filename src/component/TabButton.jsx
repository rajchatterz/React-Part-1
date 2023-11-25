import React from 'react'
import './TabButton.css'
const TabButton = (props) => {
  return (
    <div>
          <li><button>{props.children }</button></li>
    </div>
  )
}

export default TabButton
