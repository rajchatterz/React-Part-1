import { useState } from 'react'
import { Core_concept } from './data'
import './App.css'
import Header from './component/Header'
import CoreConpect from './component/CoreConcept'
import TabButton from './component/TabButton'
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
        <section id="example">
          <h2>Example</h2>
          <menu>
            <TabButton>Component</TabButton>
            <TabButton>State</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>JSX</TabButton>
          </menu>
        </section>
      </main>
    </>
  )
}

export default App
