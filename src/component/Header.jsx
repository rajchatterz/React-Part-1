import React from 'react'
import f1 from '../assets/f1.png'
const Header = () => {
    const description = ['core', 'fundamental', 'Very important']
    function getRandomChoice(max) {
      return Math.floor(Math.random()*(max+1))
    }
    return (
      <header>
        <img src={f1}  alt="img" />
        <h1>React Essentials</h1>
        <p>
          {description[getRandomChoice(2)]} React concepts you will need for almost any app you are 
          going to build
        </p>
      </header>
    )
}

export default Header
