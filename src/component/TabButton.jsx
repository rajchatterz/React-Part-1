import React from 'react'
import './TabButton.css'
const TabButton = ({children,onSelect}) => {
  return (
    <div>
          <li><button onClick={onSelect}>{children }</button></li>
    </div>
  )
}

export default TabButton
