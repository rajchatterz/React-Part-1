import React from 'react'

const CoreConcept = (props) => {
    return (
        <li id='list'>
          <img src={props.image} alt="" />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </li>
      )
}

export default CoreConcept
