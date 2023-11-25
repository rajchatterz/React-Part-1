import { useState } from 'react'
import { Core_concept } from './data'
import { Example } from './data.js'
import './App.css'
import Header from './component/Header'
import CoreConpect from './component/CoreConcept'
import TabButton from './component/TabButton'
function App() {
  const [showData, setShowData] = useState('')
  function handleSelect(selectedButton) {
    setShowData(selectedButton)
  }
  console.log(Example.component.title1)
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
            <TabButton onSelect={()=>handleSelect('component')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          </menu>
            {!showData?<p>Please Select a topic</p>:<div id="tab-content">

            <h3>{Example[showData].title1}</h3>
            <p>{Example[showData].description}</p>
            <pre>
              <code>{Example[showData].code }</code>
            </pre>
</div>}
            
          
        </section>
      </main>
    </>
  )
}

export default App
