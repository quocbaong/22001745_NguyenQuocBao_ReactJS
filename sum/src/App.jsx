import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)

  function handleSetA(e) {
    setA(e.target.value);
  }

  function handleSetB(e) {
    setB(e.target.value);
  }

  function handlesClick(e) {
    let c = parseInt(a) + parseInt(b);
    setSum(c);
  }

  
  return (
    <>
      <input placeholder = 'input a' onChange ={handleSetA} type="text" /> <br />
      <input placeholder = 'input b' onChange ={handleSetB} type="text" /> <br />
      <button onClick={handlesClick}>Calculation</button>
      <br />
      <span>Result: {sum}</span>

    </>
  )
}

export default App
