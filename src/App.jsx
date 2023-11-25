import { useState } from 'react'
import f1 from './assets/f1.png'
import { Core_concept } from './data'
import './App.css'

function Header() {
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
function CoreConpect(props) {
  return (
    <li id='list'>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <section id="core-concept">
          {/* <h2>Core concept</h2> */}
          <CoreConpect {...Core_concept[0]}/>
          <CoreConpect {...Core_concept[1]}/>
          <CoreConpect {...Core_concept[2]}/>
          <CoreConpect {...Core_concept[3]} />
          
        </section>
      </main>
    </>
  )
}

export default App
